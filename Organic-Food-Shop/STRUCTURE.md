# Project Architecture & Folder Structure

This document explains the organization and folder structure of the **Organic Food Shop** project. It is designed to be highly modular and scalable as the project transitions into a fullstack e-commerce application.

---

## Overall Structure

```
Organic-Food-Shop/
├── backend/            # Express.js Server & Database Logic
└── src/                # React.js Frontend (Vite)
```

---

## 1. Backend Structure (`/backend`)

The backend is organized using the **MVC (Model-View-Controller)** pattern. This decouples routing, business logic, and database schemas.

* **`/config`**
  * **Purpose**: Holds configuration files and connections.
  * **Usage**: Setup database connections (e.g., `db.js` to connect Mongoose to MongoDB).
* **`/controllers`**
  * **Purpose**: Contains the business logic of your application.
  * **Usage**: Functions that process HTTP requests, query the database, and return responses (e.g., retrieving products from MongoDB).
* **`/middleware`**
  * **Purpose**: Custom middleware functions that run during request-response cycles.
  * **Usage**: Authentication verification (checking JWTs) and custom error handling blocks.
* **`/models`**
  * **Purpose**: Mongoose schemas defining database tables/collections.
  * **Usage**: Structure definitions for `User.js`, `Product.js`, and `Order.js`.
* **`/routes`**
  * **Purpose**: Directs incoming requests to the correct controller functions.
  * **Usage**: Maps URL endpoints (like `GET /api/products`) to the correct controller handlers.

---

## 2. Frontend Structure (`/src`)

The frontend is built on **React** (using Vite). It follows a feature-grouped, clean architecture:

* **`/assets`**
  * **Purpose**: Visual and media files.
  * **Usage**: Static images (like `hero.jpg`, `quinoa.jpg`), icons, and graphics.
* **`/components`**
  * **Purpose**: Smaller, reusable UI building blocks.
  * **Usage**: Elements like the header (`Navbar.jsx`), hero banners (`Home.jsx`), product catalog lists (`Store.jsx`), and `Footer.jsx`.
* **`/context`**
  * **Purpose**: Global state management providers using React Context API.
  * **Usage**: Tracking application-wide data like the shopping cart state (`CartContext`) or user login session (`AuthContext`).
* **`/hooks`**
  * **Purpose**: Reusable custom React Hooks.
  * **Usage**: Abstracting complex component states (e.g., `useLocalStorage` for storing cart items or `useAuth` for checking permissions).
* **`/pages`**
  * **Purpose**: Layout templates representing individual URL pages.
  * **Usage**: Routing destinations like `HomePage.jsx`, `CartPage.jsx`, `LoginPage.jsx`, and `CheckoutPage.jsx`.
* **`/services`**
  * **Purpose**: Network request wrappers and API services.
  * **Usage**: Houses `api.js` containing fetch/axios calls to request data from the Express backend.
* **`/utils`**
  * **Purpose**: Small helper functions and configuration utilities.
  * **Usage**: Input validation rules, currency formatters (e.g., converting prices to `₹`), and date formatting.
