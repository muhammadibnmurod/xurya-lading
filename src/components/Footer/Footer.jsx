import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 ">
        <div className="max-w-7xl flex flex-col md:flex-row gap-8 w-full justify-between">

          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              It's time to support zero pollution, with renewable resources
            </h1>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-300 flex gap-10">
              <li>Experienced for more than 10 years</li>
              <li>Support for the latest technology</li>
            </ul>
          </div>


          <div className="w-full md:w-1/2 flex flex-col ">
            <p className="text-lg text-gray-400 mb-8">
              By increasing the effectiveness and efficiency of electricity use,
              the use of renewable resources is very profitable for all
              industrial services.
            </p>
            <button className="bg-white text-black hover:bg-white  font-semibold py-3 px-6 rounded-2xl transition duration-300 w-max">
              Get in touch
            </button>
          </div>
        </div>
      </div>

      {/* Navigation and social icons section */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">Xurya</div>

            <nav className="flex flex-wrap gap-6 text-gray-300 text-sm">
              <a href="#" className="hover:text-white">
                Home
              </a>
              <a href="#" className="hover:text-white">
                About Us
              </a>
              <a href="#" className="hover:text-white">
                Features
              </a>
              <a href="#" className="hover:text-white">
                Services
              </a>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-6 pt-4 border-t border-gray-700 text-sm text-gray-400">
            <div>© 2024 Xurya Inc. All rights reserved</div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-end text-white text-lg">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
