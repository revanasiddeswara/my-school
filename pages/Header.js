import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="text-white py-2"
      style={{ backgroundImage: "url('https://uniformapp.in/images/bgnav.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto">
        {/* Top Section - Email and Social Icons */}
        <div className="flex justify-between items-center py-2">
          <div className="text-xs">
            <p>
              <i className="fa fa-envelope"></i>
              <span>
                {" "}
                <a href="mailto:mail@uniformapp.in" className="hover:underline">
                  mail@uniformapp.in
                </a>
              </span>
            </p>
          </div>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-blue-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-300"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-pink-300"><FaInstagram /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube /></a>
          </div>
        </div>

        {/* Bottom Section - Logo and Navigation Links */}
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-3">
            <img src="https://uniformapp.in/images/small_logo.png" alt="Logo" className="h-16" />
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-2xl ml-16">
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
              
            </div>
          </div>
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex md:flex-row md:space-x-6 md:ml-auto text-sm mt-4 md:mt-0">
            <a href="#" className="hover:underline font-bold">Common Admissions</a>
            <a href="#" className="hover:underline font-bold">School Portal</a>
            <a href="#" className="hover:underline font-bold">Find Schools</a>
            <a href="#" className="hover:underline font-bold">Blog</a>
            <a href="#" className="hover:underline font-bold">Log In</a>
            <a href="#" className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 font-bold">Sign Up</a>
          </nav>
        </div>

        {/* Mobile Navigation Links */}
        <nav className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="p-6">
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:underline font-bold text-white">Common Admissions</a>
              <a href="#" className="hover:underline font-bold text-white">School Portal</a>
              <a href="#" className="hover:underline font-bold text-white">Find Schools</a>
              <a href="#" className="hover:underline font-bold text-white">Blog</a>
              <a href="#" className="hover:underline font-bold text-white">Log In</a>
              <a href="#" className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 font-bold text-center">Sign Up</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
