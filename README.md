# E-Store

Welcome to the **E-Commerce Store** project! This web application allows users to browse products, add them to their cart, apply discount codes, and proceed to checkout. It is built using **Next.js** and **TypeScript**, ensuring fast and efficient page loads while providing a seamless user experience.

## Technologies Used

- **Next.js**: A React-based framework for server-side rendering and static site generation.
- **TypeScript**: Adds type safety to the project, helping avoid potential bugs and improving code quality.
- **Tailwind CSS**: A utility-first CSS framework to style the application.
- **React Context**: Used to manage the global state of the cart across the app.
- **Node.js**: Backend technology for handling API requests (via Next.js API routes).

## Features

- **Add to Cart**: Users can add products to their cart from the product listing page.
- **View Cart**: Users can view the items they’ve added to their cart with product details like price, quantity, and total cost.
- **Remove Items from Cart**: Users can remove individual items from their cart.
- **Clear Cart**: Users can empty the entire cart in one click.
- **Coupon Code**: Users can apply discount codes like **SAVE10** for discounts.
- **Checkout**: The app simulates a checkout process where users can review their cart before proceeding.

## Usage

Once the app is running locally, users can access the following features:

1. **Shop Page**: Displays a list of products available for purchase. Users can click "Add to Cart" to add items to their cart.
2. **Cart Page**: Users can view the products added to their cart, change the quantity, remove items, or apply a coupon code for a discount.
3. **Checkout Page**: Displays a review of the cart and a simulated checkout process.

To start using the app:

1. Browse the shop page to add products to the cart.
2. View the cart to see added products, their prices, and quantities.
3. Apply any discount codes, if available.
4. Complete the checkout process by reviewing the cart and simulating a purchase.

## API Endpoints

The app interacts with several API endpoints to manage cart functionality. Below are the available endpoints:

### `/api/cart` (GET)

Fetches the current cart's contents, including product details, quantity, and total amount.

### `/api/cart` (POST)

Adds a product to the cart.

### `/api/cart` (PUT)

Clears all items from the cart.

### `/api/cart` (DELETE)

Removes a specific product from the cart based on its `id`.

## Installation

Follow these steps to set up the project on your local machine:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/e-commerce-store.git
cd e-commerce-store
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

This will start the app locally, and you can access it in your browser at http://localhost:3000.
