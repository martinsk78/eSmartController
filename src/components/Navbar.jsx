import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className=" w-full  bg-blue-300 backdrop-blur-md shadow-sm border-b border-gray-200">
      <div className=" mx-auto px-6 py-3 flex gap-5 ">
        <Link
          to="/"
          className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors"
        >
          Whats Up!
        </Link>
        <div className="flex gap-6">
          <Link
            to="/"
            className="text-black text-md self-end hover:text-indigo-600 font-medium transition-colors"
          >
            Inicio
          </Link>

        </div>
      </div>
    </nav>
  );
}
