"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { productLinks } from "../constants";
import Header from "../../components/Header";

const Shop = () => {
  // State for cart
  const [cart, setCart] = useState<
    { id: number; title: string; price: string; quantity: number }[]
  >([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product: { id: number; title: string; price: string }) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    let updatedCart;
    if (existingProduct) {
      // Update quantity if the product is already in the cart
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // Add new product to the cart
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    // Update the cart and total price
    setCart(updatedCart);

    // Ensure that the price is a valid number and update the total price
    const newTotal = updatedCart.reduce(
      (sum, item) => sum + (parseFloat(item.price) || 0) * item.quantity,
      0
    );
    setTotal(newTotal);
  };

  return (
    <div className="min-h-screen flex flex-col mx-auto px-4 md:px-6 lg:px-8 container">
      <Header />

      {/* Cart Info Section */}
      <div className="p-4 mt-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold">Cart</h3>
        <p>
          Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}
        </p>{" "}
        {/* Display total item count */}
        <p>Total Price: ${total.toFixed(2)}</p>
      </div>

      <div className="p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Shop Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productLinks.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
              style={{ height: "350px", width: "100%" }}
            >
              <Image
                src={product.url}
                alt={product.alt}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 mt-2">{product.price}</p>
                </div>
                <div className="flex mt-4 space-x-2">
                  <Button
                    variant="outline"
                    className="w-full py-2 px-4 rounded "
                    onClick={() =>
                      addToCart({
                        id: index,
                        title: product.title,
                        price: product.price
                      })
                    }
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full py-2 px-4 rounded "
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
