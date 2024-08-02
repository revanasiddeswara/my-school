import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer
      className="text-white py-8"
      style={{ backgroundImage: "url('https://uniformapp.in/images/bgfoot.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div className="md:w-1/3">
            <h2 className="font-bold text-xl">Subscribe to our Newsletter</h2>
            <p className="mt-2">Get updated about admission forms, deadlines and articles to help you through the process.</p>
            <div className="mt-4 flex w-full max-w-sm">
              <input
                type="email"
                placeholder="Enter email here.."
                className="w-full p-2 rounded-l-lg text-black bg-transparent email-field"
              />
              <button className="bg-teal-500 p-2 rounded-r-lg">
                <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </div>
          <div className="md:w-1/3">
            <h2 className="font-bold text-xl">Important Links</h2>
            <ul className="mt-2 space-y-1">
              <li><Link href="#" legacyBehavior><a className="hover:underline">Schools in India</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:underline">Other Schools in India</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:underline">Colleges in India</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:underline">Advertise With Us</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:underline">Common Admissions</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:underline">Edunify India</a></Link></li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h2 className="font-bold text-xl">Support</h2>
            <ul className="mt-2 space-y-1">
              <li><Link href="#" legacyBehavior><a className="hover:underline">Privacy Policy</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:underline">Terms and Conditions</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:underline">Refund Policy</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:underline">Contact Us</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:underline">About Us</a></Link></li>
              <li><Link href="#" legacyBehavior><a className="hover:underline">CGPA Converter</a></Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <Image
            src="https://uniformapp.in/images/small_logo.png"
            alt="UniForm Logo"
            width={100} // Adjust width as needed
            height={50} // Adjust height as needed
            className="mx-auto mb-2 object-contain"
          />
          <p className="text-xs">Copyright : Uniform Ventures Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
