import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="text-white py-2"
      style={{
        backgroundImage: "url('https://uniformapp.in/images/bgnav.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto">
        {/* Top Section - Email and Social Icons */}
        <div className="flex justify-between items-center py-2">
          <div className="text-xs">
            <p>
              <i className="fa fa-envelope"></i>
              <span>
                {" "}
                <Link href="mailto:mail@uniformapp.in" className="hover:underline">
                  mail@uniformapp.in
                </Link>
              </span>
            </p>
          </div>
          <div className="flex space-x-4 text-lg">
            <Link href="#" className="hover:text-blue-300">
              <FaFacebookF />
            </Link>
            <Link href="#" className="hover:text-blue-300">
              <FaLinkedinIn />
            </Link>
            <Link href="#" className="hover:text-pink-300">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-red-500">
              <FaYoutube />
            </Link>
          </div>
        </div>

        {/* Bottom Section - Logo and Navigation Links */}
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center space-x-3">
            <Link href="/">
              {" "}
              <Image
                src="https://uniformapp.in/images/small_logo.png"
                alt="Logo"
                width={100}
                height={50}
                className="h-16"
              />
            </Link>
          </div>
          <div className="md:hidden ml-auto">
            <button onClick={toggleMenu} className="text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex md:flex-row md:space-x-6 md:ml-auto text-sm mt-4 md:mt-0">
            <Link href="/" className="hover:underline font-bold">
              HOME
            </Link>
            <Link href="/showSchools" className="hover:underline font-bold">
              Show School
            </Link>
            <Link href="/addSchool" className="hover:underline font-bold">
              Add Schools
            </Link>
            <Link
              href="#"
              className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 font-bold"
            >
              Sign Up
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation Links */}
        <nav
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="p-6">
            <div className="flex flex-col space-y-4">
            <Link href="/" className="hover:underline font-bold">
              HOME
            </Link>
            <Link href="/showSchools" className="hover:underline font-bold">
              Show School
            </Link>
            <Link href="/addSchool" className="hover:underline font-bold">
              Add Schools
            </Link>
              <Link
                href="#"
                className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 font-bold text-center"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
