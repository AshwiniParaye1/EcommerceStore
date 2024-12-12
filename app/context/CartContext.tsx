"use client";

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect
} from "react";
import { CartItem, Product, CartResponse } from "../types";

interface CartContextType {
  cart: CartItem[];
  total: number;
  addToCart: (product: Product) => Promise<void>;
  removeFromCart: (productId: number) => Promise<void>;
  clearCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  // Fetch cart on initial render
  useEffect(() => {
    fetchCart();
  }, []);

  // Fetch cart from API
  const fetchCart = async () => {
    try {
      const response = await fetch("/api/cart");
      if (!response.ok) {
        throw new Error("Failed to fetch cart");
      }
      const data: CartResponse = await response.json();
      setCart(data.cart);
      setTotal(data.total);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  // Add item to cart
  const addToCart = async (product: Product) => {
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      });

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const data: CartResponse = await response.json();
      setCart(data.cart);
      setTotal(data.total);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // Remove item from cart
  const removeFromCart = async (productId: number) => {
    try {
      const response = await fetch(`/api/cart?id=${productId}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error("Failed to remove item from cart");
      }

      const data: CartResponse = await response.json();
      setCart(data.cart);
      setTotal(data.total);
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  // Clear entire cart
  const clearCart = async () => {
    try {
      const response = await fetch("/api/cart", {
        method: "PUT"
      });

      if (!response.ok) {
        throw new Error("Failed to clear cart");
      }

      const data: CartResponse = await response.json();
      setCart(data.cart);
      setTotal(data.total);
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
