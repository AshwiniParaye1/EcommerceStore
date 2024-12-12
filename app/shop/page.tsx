"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { productLinks } from "../constants";
import Header from "../../components/Header";
import { CartItem, Product } from "../types";
import { useCart } from "../context/CartContext"; // Make sure the hook is correct
import { useRouter } from "next/navigation";

const Shop = () => {
  const { cart, setCart, total, setTotal } = useCart(); // Now we have setTotal
  const router = useRouter();

  // Function to parse price, removing '$' and converting to number
  const parsePrice = (price: string): number => {
    return parseFloat(price.replace("$", "").trim());
  };

  const addToCart = (product: Product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);

    let updatedCart: CartItem[];
    if (existingProduct) {
      // Update quantity if the product is already in the cart
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // Add new product to the cart
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);

    // Recalculate the total price
    const newTotal = updatedCart.reduce(
      (sum, item) => sum + parsePrice(item.price) * item.quantity,
      0
    );
    setTotal(newTotal); // Update the total state
  };

  const handleBuyNow = (product: Product) => {
    // If the cart is empty, add the item and redirect to the cart
    if (cart.length === 0) {
      addToCart(product); // Add the product to the cart
    }
    router.push("/cart"); // Navigate to the cart page
  };

  return (
    <div className="min-h-screen flex flex-col mx-auto px-4 md:px-6 lg:px-8 container">
      <Header />
      <div className="p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Shop Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productLinks.map((product, index) => {
            const isAddedToCart = cart.some((item) => item.id === index);
            const cartItem = cart.find((item) => item.id === index);
            const quantity = cartItem ? cartItem.quantity : 0;

            return (
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
                    {isAddedToCart && (
                      <p className="text-green-500 mt-2">
                        Added to Cart (x{quantity})
                      </p>
                    )}
                  </div>
                  <div className="flex mt-4 space-x-2">
                    <Button
                      variant="outline"
                      className="w-full py-2 px-4 rounded"
                      onClick={() =>
                        addToCart({
                          id: index,
                          title: product.title,
                          price: product.price
                        })
                      }
                    >
                      {isAddedToCart ? "Increase Quantity" : "Add to Cart"}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full py-2 px-4 rounded"
                      onClick={() =>
                        handleBuyNow({
                          id: index,
                          title: product.title,
                          price: product.price
                        })
                      }
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
