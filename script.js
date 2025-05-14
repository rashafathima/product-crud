const API_URL = 'https://fakestoreapi.com/products';
const token = localStorage.getItem('token');
const isLoggedIn = !!token;

if (!isLoggedIn) {
  document.getElementById('product-form')?.remove();
}

document.getElementById('logout')?.addEventListener('click', () => {
  localStorage.removeItem('token');
  window.location.href = 'login.html';
});

const productsDiv = document.getElementById('products');
const form = document.getElementById('product-form');

const titleInput = document.getElementById('title');
const priceInput = document.getElementById('price');
const descInput = document.getElementById('description');
const imageInput = document.getElementById('image');
const categoryInput = document.getElementById('category');
const idInput = document.getElementById('product-id');
const formTitle = document.getElementById('form-title');

let products = [];

function fetchProducts() {
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      products = data;
      renderProducts();
    });
}

function renderProducts() {
  productsDiv.innerHTML = '';
  products.forEach(product => {
    const el = document.createElement('div');
    el.className = 'product';
    el.innerHTML = `
      <img src="${product.image}">
      <div>
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p><strong>$${product.price}</strong></p>
        ${isLoggedIn ? `
        <button onclick="editProduct(${product.id})" style="border-radius: 10px; padding: 4px 10px; font-size: 17px; ">Edit</button>
        <button onclick="deleteProduct(${product.id})" style="border-radius: 10px; padding: 4px 10px; font-size: 17px; ">Delete</button>` : ''}
      </div>`;
    productsDiv.appendChild(el);
  });
}

function resetForm() {
  form?.reset();
  idInput.value = '';
  formTitle.textContent = 'Add New Product';
}

form?.addEventListener('submit', function (e) {
  e.preventDefault();
  const product = {
    title: titleInput.value,
    price: parseFloat(priceInput.value),
    description: descInput.value,
    image: imageInput.value,
    category: categoryInput.value
  };

  const id = idInput.value;
  if (id) {
    fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(() => {
        fetchProducts();
        resetForm();
      });
  } else {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(added => {
        products.push(added);
        renderProducts();
        resetForm();
      });
  }
});

window.editProduct = function (id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  titleInput.value = product.title;
  priceInput.value = product.price;
  descInput.value = product.description;
  imageInput.value = product.image;
  categoryInput.value = product.category;
  idInput.value = product.id;
  formTitle.textContent = 'Edit Product';
};

window.deleteProduct = function (id) {
  fetch(`${API_URL}/${id}`, { method: 'DELETE' })
    .then(res => res.json())
    .then(() => {
      products = products.filter(p => p.id !== id);
      renderProducts();
    });
};

fetchProducts();
