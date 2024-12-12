import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { productLinks } from "../constants";
import Header from "../components/Header";

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col mx-auto px-4 md:px-6 lg:px-8 container">
      {/* Header Section */}
      <Header />

      {/* Main Content Section */}
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
