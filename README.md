# FakeStore Project - README

## Features

* **User Authentication**: Login functionality. You can use any one username and password from the following users: https://fakestoreapi.com/users
* **Product Management**: Display, add, edit, and delete products. To edit product click on edit button for a product then navigate on the bottom of the page and update the product. Similarly goes for add, you need to navigate at the bottom of page to add a new product

## Project Structure

```
/FakeStore
  ├── index.html           # Main page for product management
  ├── login.html           # User login page
  ├── script.js            # JavaScript for API requests and auth
  ├── style.css            # Custom styling
  ├── README.md            # This README file
```

## Design Choices

* **HTML**: Simple forms for login and CRUD functionality.
* **JavaScript**: Handles API communication and dynamic DOM updates.

## Assumptions & Simplifications

* Basic authentication using **FakeStoreAPI** credentials.
* No backend; product data is fetched from **FakeStoreAPI**

## Third-Party Libraries

* **Bootstrap**: For responsive design and styling.

  * CDN: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css`
* **Google Fonts (Figtree)**: Modern font for UI.

  * CDN: `https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap`

## How to Run Locally

1. **Clone the Repository**:

   ```bash
   git clone <your-repository-url>
   ```
2. **Navigate to the Folder**:

   ```bash
   cd product-crud
   ```
3. **Open in a Browser**:
   Open `login.html` in any modern browser. Running locally is pretty simple, either you can double click on the **login.html** file on the folder or install a live server extension by Ritwick Dey and then on the bottom right of the VS code, you will get "Go Live" button. Click that while you are on login.html file. It will open locally. 
4. **Login and Use**:
   Use the following credentials to test login:

   * **Username**: `mor_2314`
   * **Password**: `83r5^_`
  
   Or from any of the following username and password: https://fakestoreapi.com/users

---

Let me know if you need further clarifications!


