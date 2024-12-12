"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CartItem } from "../types";
import { useCart } from "../context/CartContext";
import { parsePrice } from "@/lib/utils";
import Header from "@/components/Header";
import Image from "next/image";
import { productLinks } from "../constants"; // Import productLinks to access image URLs

const Cart = () => {
  const { cart, setCart, total, setTotal } = useCart();
  const router = useRouter();
  const [orderPlaced, setOrderPlaced] = useState(false); // To handle the order placed popup

  const handleQuantityChange = (id: number, quantity: number) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
  };

  // Calculate total manually to avoid NaN issues
  const calculateTotal = () => {
    return cart.reduce((acc, item) => {
      return acc + parsePrice(item.price) * item.quantity;
    }, 0);
  };

  const handleCheckout = () => {
    setOrderPlaced(true); // Show the order placed success message
    setTimeout(() => {
      setCart([]); // Clear the cart after the success message
      setTotal(0); // Reset the total
    }, 2000); // Wait for 2 seconds before clearing the cart
  };

  // Function to find the image URL for a given product id
  const getProductImage = (productId: number) => {
    const product = productLinks[productId];
    return product ? product.url : ""; // Return image URL from productLinks
  };

  return (
    <div className="min-h-screen flex flex-col mx-auto px-4 md:px-6 lg:px-8 container">
      <Header />
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col sm:flex-row justify-between mb-4 p-4"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={getProductImage(item.id)} // Fetch image URL from productLinks
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p>Price: {item.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <label className="mr-2">Quantity:</label>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.id,
                        parseInt(e.target.value, 10)
                      )
                    }
                    className="w-12 border rounded p-1"
                  />
                </div>

                <p className="font-semibold">
                  Total: ${(parsePrice(item.price) * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-4 flex justify-between items-center">
            <p className="text-xl font-bold">
              Total: ${calculateTotal().toFixed(2)}
            </p>

            <div className="space-x-4">
              {/* Checkout button */}
              <Button
                onClick={handleCheckout}
                className="bg-blue-500 text-white"
              >
                Checkout
              </Button>
            </div>
          </div>

          {orderPlaced && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
              Order placed successfully!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
