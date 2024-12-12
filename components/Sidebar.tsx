import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center mt-20 gap-y-20">
      <Link
        href="#"
        aria-label="Facebook"
        className="text-gray-300 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-200 transform -rotate-90"
      >
        <span className="text-xl font-semibold -rotate-180">Facebook</span>
      </Link>
      <Link
        href="#"
        aria-label="Twitter"
        className="text-gray-300 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-200 transform -rotate-90"
      >
        <span className="text-lg font-semibold -rotate-180">Twitter</span>
      </Link>
      <Link
        href="#"
        aria-label="Instagram"
        className="text-gray-300 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-200 transform -rotate-90 "
      >
        <span className="text-lg font-semibold -rotate-180">Instagram</span>
      </Link>
    </div>
  );
};

export default Sidebar;
