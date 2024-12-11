import Header from "@/app/components/Header";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col mx-auto px-4 md:px-6 lg:px-8 container">
      <Header />
      <main className="flex-1 py-6">
        <div className="flex flex-wrap md:flex-nowrap gap-4 relative">
          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center items-start pl-6 space-y-4">
            <div className="mb-20">
              <p className="text-xl mb-4 font-semibold text-gray-600">
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
              src="/assets/images/headphone6.jpg"
              alt="products"
              width={800}
              height={800}
            />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
