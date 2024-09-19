import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router for navigation
import logo from '../Assets/logo.jpg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-red-600 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="School Logo"
            className="h-12 w-12 object-cover rounded-full"
          />
          <h1 className="ml-3 text-white text-xl md:text-2xl font-bold">
         B.M.D HITKARINI GIRLS HR.SEC SCHOOL DIXITPURA
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center w-full md:w-auto`}
        >
          <ul className="md:flex md:space-x-6">
            <li>
              <Link
                to="/"
                className="text-white hover:text-gray-200 block py-2 md:py-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="text-white hover:text-gray-200 block py-2 md:py-0"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-gray-200 block py-2 md:py-0"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-gray-200 block py-2 md:py-0"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
