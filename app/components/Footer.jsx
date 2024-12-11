import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-white dark:bg-gray-900 mt-auto">
      <div className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        <div className="flex justify-center space-x-4">
          <a href="#" aria-label="Facebook">
            <FaFacebook className="h-5 w-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="h-5 w-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="h-5 w-5 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Car E-commerce. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
