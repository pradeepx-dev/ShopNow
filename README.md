# 🛍️ ShopNow — Modern Full-Stack E-Commerce Platform

<p align="center">
  <img src="https://img.shields.io/badge/Stack-MERN-green?style=for-the-badge" alt="MERN Stack" />
  <img src="https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/Node.js-Express-lightgrey?style=for-the-badge&logo=node.js&logoColor=green" alt="Node Express" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas%20Search-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Atlas Search" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4.3.3-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/Redux%20Toolkit-2.12.0-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/Razorpay-Payment-blue?style=for-the-badge&logo=razorpay&logoColor=white" alt="Razorpay" />
  <img src="https://img.shields.io/badge/Cloudinary-Media-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" alt="Cloudinary" />
</p>

---

## 📖 Overview

**ShopNow** is a high-performance, full-stack e-commerce web application engineered with **React 19**, **Vite**, **Tailwind CSS v4**, **Redux Toolkit**, **Node.js / Express**, and **MongoDB with Atlas Search**. 

It provides an end-to-end shopping experience featuring intelligent search powered by **MongoDB Atlas Search** (fuzzy search, autocomplete, faceted filtering), dynamic home discovery feeds, cart and wishlist management, order handling, Razorpay payments, and Cloudinary media storage.

---

## ⚡ Core Technologies & Services

### 🔍 Search & Database
- **[MongoDB Atlas Search](https://www.mongodb.com/products/platform/atlas-search)**: Native full-text search engine built directly into MongoDB.
  - **Fuzzy Matching (`maxEdits: 1`, `prefixLength: 2`)**: Handles typos and misspellings in product queries.
  - **Autocomplete & Score Boosting**: Instant predictive suggestions with prioritized scoring for product names (`boost: 4`) and brands/categories (`boost: 3`).
  - **Compound Filtering**: Real-time filtering by category, brand, gender, size, price ranges, and minimum discount.
  - **Faceted Search & Metadata**: Generates aggregate counts and facet distributions for instant filter sidebar navigation.
  - **Fallback Engine**: Automated fallback to regex-based querying for local MongoDB instances.
- **[Mongoose](https://mongoosejs.com/)**: Schema-based data modeling for users, products, orders, and homepage sections.

### 🎨 Frontend Ecosystem
- **[React 19](https://react.dev/)**: Modern component-based UI architecture.
- **[Vite](https://vitejs.dev/)**: Ultra-fast build tool and local development server with Hot Module Replacement (HMR).
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS framework via `@tailwindcss/vite` for streamlined, modern styling.
- **[Redux Toolkit](https://redux-toolkit.js.org/) & [React-Redux](https://react-redux.js.org/)**: Centralized, predictable state management for shopping cart and wishlist.
- **[React Router DOM v7](https://reactrouter.com/)**: Declarative client-side routing.
- **[Axios](https://axios-http.com/)**: Promise-based HTTP client with request timeouts and resilient static data fallback.

### ⚙️ Backend & Cloud Services
- **[Node.js](https://nodejs.org/) & [Express 5](https://expressjs.com/)**: RESTful API architecture and routing.
- **[JSON Web Tokens (JWT)](https://jwt.io/) & [Bcrypt](https://www.npmjs.com/package/bcrypt)**: Secure user authentication, password hashing, and role-based access control.
- **[Cloudinary](https://cloudinary.com/) & [Multer](https://www.npmjs.com/package/multer)**: Cloud asset storage, responsive image transformation, and multipart form uploads.
- **[Razorpay](https://razorpay.com/)**: Secure checkout payment gateway integration.
- **[Resend](https://resend.com/)**: Transactional email notifications and order receipts.

---

## ✨ Features

### 🌟 Homepage & Discovery
- **Hero Banner Showcase**: Dynamic promotional carousels and highlight banners.
- **Interactive Category Pills**: Quick one-click category filtering and navigation.
- **Curated Sections**: *Hot Categories*, *Trend Picks*, *Festive Specials*, and *Hidden Gems*.
- **In The Spotlight**: Featured brand showcases and top trending items.
- **Shoppable Feed**: Social-style interactive product grid with quick add-to-bag capabilities.

### 🔍 Intelligent Search & Multi-Filtering
- **Atlas Search Box**: Debounced instant query suggestions with typo tolerance and category tags.
- **Faceted Filters**: Dynamic filtering by price range slider, gender, categories, brands, sizes, and discount rates.
- **Sorting Options**: Sort by Popularity, Price (Low to High / High to Low), Customer Rating, and Newest Arrivals.

### 🛒 Shopping Experience & State Management
- **Redux Cart Store**: Add, update quantity, remove items, calculate taxes/discounts, and persist state.
- **Wishlist**: Quick-save favorite items with active heart toggle states across product cards and detail views.
- **Product Detail View**: High-resolution gallery, price breakdown, size/color variant pickers, stock indicators, and related product recommendations.

### 🔐 User Accounts & Checkout
- **Authentication**: User sign up, sign in, password validation, and token-based sessions.
- **User Profile**: Personal details, shipping address management, and order history tracking.
- **Checkout Workflow**: Address confirmation, order summary breakdown, and Razorpay payment processing.

---

## 📁 Project Structure

```text
ShopNow/
├── client/                     # Frontend Application (React 19 + Vite + Tailwind v4)
│   ├── public/                 # Static assets & icons
│   ├── src/
│   │   ├── admin/              # Admin dashboard components & views
│   │   ├── assets/             # Local graphics & media
│   │   ├── components/         # Reusable UI components
│   │   │   ├── home/           # Homepage components (HeroBanner, CategoryPills, ShoppableFeed, etc.)
│   │   │   ├── profile/        # User profile widgets
│   │   │   ├── wishlist/       # Wishlist components
│   │   │   ├── Footer.jsx      # Global footer
│   │   │   ├── Navbar.jsx      # Navigation header with search bar, cart, & account
│   │   │   ├── ProductCard.jsx # Reusable product card with quick-actions
│   │   │   ├── SearchBox.jsx   # Global search input with live autocomplete
│   │   │   └── SearchFilters.jsx # Search filter sidebar
│   │   ├── data/               # Default static datasets & offline fallbacks
│   │   ├── pages/              # Main view routes (Home, ProductDetail, Cart, Checkout, Search, Profile, Wishlist, Auth)
│   │   ├── redux/              # Redux Toolkit store, cartSlice, & wishlistSlice
│   │   ├── services/           # Axios API services (homeService, searchService)
│   │   ├── App.jsx             # Main router & app layout
│   │   ├── index.css           # Global stylesheet & Tailwind CSS import
│   │   └── main.jsx            # React root with Redux Provider
│   ├── package.json
│   └── vite.config.js
│
├── server/                     # Backend Application (Node.js + Express + MongoDB)
│   ├── config/                 # Database connection & Cloudinary setup
│   ├── controllers/            # Route controllers (search, product, user, order, payment, analytics)
│   │   ├── searchController.js # MongoDB Atlas Search aggregation & filtering
│   │   ├── productController.js# Product CRUD & homepage section endpoints
│   │   ├── orderController.js  # Order creation & history
│   │   ├── paymentController.js# Razorpay payment verification
│   │   └── userController.js   # User registration, login, & profile
│   ├── middleware/             # Auth verification & error handling middleware
│   ├── models/                 # Mongoose schemas (Product, User, Order, HomeSection)
│   ├── routes/                 # Express REST API route definitions
│   ├── utils/                  # Search index definitions & helpers
│   ├── seed.js                 # Database seed script for general catalogue
│   ├── seedHomeProducts.js     # Database seed script for homepage feeds & banners
│   ├── index.js                # Server entry point
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.x` or higher (Recommended: `v20+`)
- **npm**, **yarn**, or **pnpm**
- **MongoDB**: Local MongoDB instance or a **MongoDB Atlas cluster** (recommended for Atlas Search)

---

### 📥 1. Clone & Setup Repository

```bash
git clone https://github.com/your-username/ShopNow.git
cd ShopNow
```

---

### ⚙️ 2. Backend Setup (`/server`)

1. **Navigate to the server directory & install dependencies:**
   ```bash
   cd server
   npm install
   ```

2. **Configure Environment Variables:**
   Create a `.env` file in the `server` directory:
   ```env
   PORT=3000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/shopnow?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   RESEND_API_KEY=your_resend_api_key
   ```

3. **(Optional) Seed Initial Database Data:**
   ```bash
   # Seed standard catalogue products
   npm run seed:products

   # Seed homepage banners, curated collections, and shoppable feeds
   npm run seed:home
   ```

4. **Start the Backend Server:**
   ```bash
   node index.js
   ```
   *The server will run on `http://localhost:3000`.*

---

### 💻 3. Frontend Setup (`/client`)

1. **Open a new terminal, navigate to the client directory & install dependencies:**
   ```bash
   cd client
   npm install
   ```

2. **Configure Frontend Environment Variables (Optional):**
   Create a `.env` file in the `client` directory (defaults to `http://localhost:3000` if omitted):
   ```env
   VITE_API_URL=http://localhost:3000
   ```

3. **Start the Vite Dev Server:**
   ```bash
   npm run dev
   ```
   *Open [http://localhost:5173](http://localhost:5173) in your browser.*

---

## 🔍 MongoDB Atlas Search Index Setup

To enable the full search capabilities with typo tolerance and autocomplete:

1. Log into **MongoDB Atlas** and navigate to your cluster.
2. Go to **Database** → **Search** (Atlas Search) → **Create Search Index**.
3. Select **JSON Editor** and choose the `products` collection.
4. Set the Index Name to **`default`** (or your configured `SEARCH_INDEX_NAME`).
5. Use the following index configuration:

```json
{
  "mappings": {
    "dynamic": true,
    "fields": {
      "name": [
        { "type": "string" },
        {
          "type": "autocomplete",
          "tokenization": "edgeGram",
          "minGrams": 2,
          "maxGrams": 15,
          "foldDiacritics": true
        }
      ],
      "brand": { "type": "string" },
      "category": { "type": "string" },
      "description": { "type": "string" },
      "gender": { "type": "string" },
      "sizes": { "type": "string" },
      "price": { "type": "number" },
      "discount": { "type": "number" }
    }
  }
}
```

---

## 📜 Available Scripts

### Client (`/client`)
| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite development server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles optimized production bundle into `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Checks code formatting and syntax using ESLint |

### Server (`/server`)
| Command | Description |
| :--- | :--- |
| `node index.js` | Starts the Express server |
| `npm run seed` | Runs full database seed script |
| `npm run seed:products` | Seeds product catalog |
| `npm run seed:home` | Seeds homepage banners, spotlights, and collections |

---

## 🌐 API Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **GET** | `/api/products/homepage` | Retrieves hero banners, categories, festive collections, and shoppable feed |
| **GET** | `/api/products/search` | Full-text Atlas Search with compound filters (brand, price, rating, category) |
| **GET** | `/api/products/:id` | Single product details and related recommendations |
| **POST** | `/api/users/register` | Register new user account |
| **POST** | `/api/users/login` | Authenticate user & return JWT token |
| **POST** | `/api/orders` | Create customer order |
| **POST** | `/api/payments/verify` | Verify Razorpay payment signature |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m "feat: Add some AmazingFeature"`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
