"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Sidebar from "../components/Sidebar";
import { homePageProductLinks } from "./constants";

export default function Component() {
  const [activeIndex, setActiveIndex] = useState(0); // Track active image

  return (
    <div className="min-h-screen flex flex-col mx-auto px-4 md:px-6 lg:px-8 container">
      <Header />
      <main className="flex-1 py-6 bg-red-50">
        <div className="flex flex-wrap md:flex-nowrap gap-4 relative">
          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center items-start pl-6 space-y-4">
            <div className="mb-20">
              <p className="text-xl mb-4 font-semibold text-gray-500">
                New Arrivals 2024
              </p>
              <p className="text-6xl font-semibold text-gray-600">
                Smart Gadgets
              </p>
            </div>
            <div className="flex items-center w-full mt-20">
              <div
                className="border-t-2 border-gray-400"
                style={{ width: "20rem" }}
              ></div>
              <p className="text-md font-bold ml-4 text-gray-400">
                Discover now
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex items-start justify-center relative mt-6">
            <Image
              src={homePageProductLinks[activeIndex].url}
              alt={homePageProductLinks[activeIndex].alt}
              width={800}
              height={800}
            />
          </div>
          <Sidebar />

          <div className="absolute bottom-40 left-[45%] flex flex-col items-start space-y-4">
            <ul>
              {homePageProductLinks.map((_, index) => (
                <li
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`text-xl font-semibold pb-1 cursor-pointer ${
                    activeIndex === index
                      ? "text-gray-600 border-red-500"
                      : "text-gray-400 border-gray-200"
                  } `}
                  style={{
                    width: "24px",
                    borderBottomWidth: "2px"
                  }}
                >
                  {index + 1}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <div className="flex flex-col items-center w-full mt-20">
        <p
          className="text-4xl font-semibold mb-12 text-gray-400"
          style={{ letterSpacing: "0.4em" }}
        >
          NEW ARRIVAL
        </p>

        <div
          className="border-b-[20px] mb-12 border-gray-200"
          style={{ width: "26rem" }}
        ></div>
      </div>
    </div>
  );
}
