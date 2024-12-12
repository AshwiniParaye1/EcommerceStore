"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import Header from "@/components/Header"; // Import Header

const CartPage = () => {
  const { cart, total, removeFromCart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false); // State to manage order placed success message

  const handleCheckout = () => {
    setOrderPlaced(true); // Display the success message
    setTimeout(() => {
      clearCart(); // Clear the cart after the success message
      setOrderPlaced(false); // Reset the success message after 2 seconds
    }, 2000); // Wait for 2 seconds before clearing the cart
  };

  return (
    <div className="min-h-screen flex flex-col mx-auto px-4 md:px-6 lg:px-8 container">
      {/* Header Component */}
      <Header />

      <h1 className="text-3xl font-bold mb-6 mt-8 text-gray-900 p-8">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-600 pl-8">Your cart is empty.</p>
      ) : (
        <div className="p-8">
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex items-center space-x-6">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="rounded-lg shadow-lg"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg text-gray-800">
                      {item.title}
                    </span>
                    <span className="text-sm text-gray-500">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-medium text-gray-700">
                    {item.quantity} x
                  </span>
                  <span className="text-sm text-gray-700 font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <Button
                    variant="secondary"
                    onClick={() => removeFromCart(item.id)}
                    className="py-2 px-4 rounded font-semibold hover:bg-gray-300 transition duration-300"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-900">
              Total: ${total.toFixed(2)}
            </span>
            <div className="flex space-x-6">
              <Button
                variant="secondary"
                onClick={clearCart}
                className=" text-gray-800 py-2 px-4 rounded font-semibold hover:bg-gray-300 transition duration-300"
              >
                Clear Cart
              </Button>
              <Button
                variant="outline"
                onClick={handleCheckout}
                className="font-semibold text-gray-800 py-2 px-6 "
              >
                Checkout
              </Button>
            </div>
          </div>

          {orderPlaced && (
            <div className="mt-6 p-4 bg-green-100 text-green-800 rounded">
              Order placed successfully!
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CartPage;
