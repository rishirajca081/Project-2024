import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.jpg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg border-b w-full z-100 border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="flex flex-row gap-2 text-1xl md:text-1xl text-black">
            <img src={Logo} alt="Logo" className="h-14 w-17 " />
            <p className="text-center">
              MNNIT
              <br /> Connect Hub
            </p>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden block border border-gray-200 rounded p-2 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>


        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-0 left-0 h-screen w-3/4 bg-white z-50 transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform ease-in-out duration-300`}
        >
          {/* Close button */}
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 block border border-gray-200 rounded p-2 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="h-full flex flex-col px-6">
              <div className="flex flex-row flex-start pt-3">
                <img src={Logo} alt="Logo" className="h-10 w-10 " />
              </div>
            <ul className="flex flex-col space-y-4 mt-10">
              <li>
                <Link to="/" className="text-gray-700 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-700 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* Auth Buttons */}
            <div className="flex flex-col space-y-4 mt-4">
              <Link
              to="/Otppg"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded "
            >
              Connect Now
            </Link>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:space-x-10 items-center">
          <ul className="flex space-x-10">
            <li>
              <Link to="/" className="text-gray-700 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-gray-700 hover:text-gray-900">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-gray-900">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex space-x-4">
           <Link
              to="/Otppg"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
            >
              Login / Signup
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
