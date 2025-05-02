# 🛍️ E-Commerce Product Showcase

This project is a React + TypeScript front-end application built as part of a Software Development Engineer practical assessment for **Ajmera Infotech**. It simulates an e-commerce interface by showcasing products using the [DummyJSON API](https://dummyjson.com), with features like product browsing, cart management, and simulated authentication.

---

## Watch Demo

watch: [https://www.youtube.com/watch?v=Mn68kGyBDmc](https://www.youtube.com/watch?v=Mn68kGyBDmc)

## 🚀 Features

### ✅ Implemented

- **Product Listing (Home Page)**

  - Fetches products using pagination (`limit` and `skip`).
  - Each product displays name, price, description, image, and an "Add to Cart" button.

- **Navigation Bar**

  - Displays:
    - User login status ("Logged In" / "Logged Out").
    - Logged-in user's name.
    - Total cart value.

- **Shopping Cart**

  - Add items from listing page.
  - Increase/decrease quantity, remove items.
  - Total value updates dynamically.

- **Authentication**

  - Simple login with any non-empty username and password.
  - Stores dummy token in `localStorage`.
  - Updates UI upon login.

- **Product Details Page**

  - Category-based filtering.
  - Sorting based on the price.
  - Seach product based on their name.

- **State Management**
  - Implemented using zustand for global state handling.

---

## 🛠 Tech Stack

- **Frontend**: React (via Vite), TypeScript
- **State Management**: zustand
- **API**: DummyJSON
- **Styling**: Tailwind CSS , Material UI

---

## 📁 Folder Structure

```
harshmaniar1804-e-commerce-product-showcase/
├── public/
├── src/
│   ├── components/           # UI elements like Navbar, ProductCard
│   ├── pages/                # Page views: Login, Cart, ProductList
│   ├── services/             # API interactions
│   ├── store/                # zustand store for global state
│   ├── types/                # Shared TypeScript types
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 📦 Getting Started

1. **Clone the repository**

```bash
git clone git@github.com:HarshManiar1804/E-COMMERCE-PRODUCT-SHOWCASE.git
cd E-COMMERCE-PRODUCT-SHOWCASE
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open in browser**

Visit: [http://localhost:5173](http://localhost:5173)

---

## ✍️ Author

**Harsh Maniar**
