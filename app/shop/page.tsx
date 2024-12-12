"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import { Product } from "../types";
import Header from "@/components/Header"; // Import the Header component
import { useRouter } from "next/navigation";
import { productLinks } from "../constants";

const ShopPage = () => {
  const { cart, addToCart } = useCart();
  const router = useRouter();

  const products: Product[] = productLinks.map((link, index) => ({
    id: index + 1, // Using index to generate unique IDs for the products
    title: link.title || `Product ${index + 1}`,
    description: "Product description goes here", // Placeholder description
    price: parseFloat(link.price.replace("$", "")), // Parsing price from the link
    imageUrl: link.url
  }));

  const handleAddToCart = async (product: Product) => {
    await addToCart(product);
  };

  const handleBuyNow = () => {
    if (cart.length > 0) {
      router.push("/cart"); // Redirect to the cart page if items exist
    } else {
      alert("Please add items to your cart before proceeding to checkout.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col mx-auto px-4 md:px-6 lg:px-8 container">
      <Header /> {/* Include the Header component */}
      <div className="p-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Shop Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);
            const quantity = cartItem ? cartItem.quantity : 0;

            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
                style={{ height: "350px", width: "100%" }}
              >
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 mt-2">
                      ${product.price.toFixed(2)}
                    </p>
                    {cartItem && (
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
                        handleAddToCart({
                          id: product.id,
                          title: product.title,
                          price: product.price, // Pass price as a string
                          imageUrl: product.imageUrl, // Add imageUrl for full product data
                          description: product.description // Add description
                        })
                      }
                    >
                      {cartItem ? "Increase Quantity" : "Add to Cart"}
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full py-2 px-4 rounded"
                      onClick={() => handleBuyNow()}
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

export default ShopPage;
