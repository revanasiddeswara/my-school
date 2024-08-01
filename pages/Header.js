import React from 'react';
import 'tailwindcss/tailwind.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Header = () => {
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
              <i class="fa fa-envelope"></i>
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
        <div className="flex flex-col md:flex-row justify-between items-center py-2">
          <div className="flex items-center space-x-3">
            <img src="https://uniformapp.in/images/small_logo.png" alt="Logo" className="h-16" />
            {/* <div className="leading-none">
              <h1 className="text-2xl font-bold">UniForm</h1>
              <p className="text-sm font-bold">powered by EdUnify</p>
            </div> */}
          </div>
          <nav className="flex space-x-6 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:underline font-bold">Common Admissions</a>
            <a href="#" className="hover:underline font-bold">School Portal</a>
            <a href="#" className="hover:underline font-bold">Find Schools</a>
            <a href="#" className="hover:underline font-bold">Blog</a>
            <a href="#" className="hover:underline font-bold">Log In</a>
            <a href="#" className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-600 font-bold">Sign Up</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
