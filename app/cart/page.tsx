"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CartItem } from "../types";
import { useCart } from "../context/CartContext";
import { parsePrice } from "@/lib/utils";

const Cart = () => {
  const { cart, setCart, total } = useCart();
  const router = useRouter();

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

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>Price: {item.price}</p>
              </div>

              <div className="flex items-center">
                <label className="mr-2">Quantity:</label>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                  className="w-12 border rounded p-1"
                />
              </div>

              <p>
                Total: ${(parsePrice(item.price) * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <div className="mt-4 flex justify-between items-center">
            <p className="text-xl font-bold">
              Total: ${calculateTotal().toFixed(2)}
            </p>

            <Button
              onClick={() => router.push("/shop")}
              className="bg-blue-500 text-white"
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
