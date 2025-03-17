import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-pink-600">
              Ramdhanu Decoration
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-600 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-pink-600 font-medium">About Us</a>
            <a href="#services" className="text-gray-700 hover:text-pink-600 font-medium">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-pink-600 font-medium">Gallery</a>
            <a href="#catalogue" className="text-gray-700 hover:text-pink-600 font-medium">Catalogue</a>
            <a href="#contactus" className="text-gray-700 hover:text-pink-600 font-medium">Contact</a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-700 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              {isOpen ? (
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-4 pb-4 space-y-2">
            <a href="#home" className="block text-gray-700 hover:text-pink-600 font-medium">Home</a>
            <a href="#about" className="block text-gray-700 hover:text-pink-600 font-medium">About Us</a>
            <a href="#services" className="block text-gray-700 hover:text-pink-600 font-medium">Services</a>
            <a href="#gallery" className="block text-gray-700 hover:text-pink-600 font-medium">Gallery</a>
            <a href="#catalogue" className="block text-gray-700 hover:text-pink-600 font-medium">Catalogue</a>
            <a href="#contactus" className="block text-gray-700 hover:text-pink-600 font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
