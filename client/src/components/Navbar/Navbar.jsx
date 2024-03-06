import React from "react";
import logo from "../../assets/Gemini_Generated_Image.jpeg"

const Navbar = () => {
  return (
    <nav className="bg-gray-800 flex items-center justify-between p-4">
      <div className="flex justify-between items-center basis-3/12">
        <div className="flex items-center">
          <img
            src={logo}
           
            alt="jobSync"
            className="w-10 h-10 mr-4 rounded-full object-cover"
          />
          <div className="text-xl font-bold text-white">JobSync</div>
        </div>

        <div className="hidden sm:flex space-x-4" style={{"marginLeft":"5%"}}>
          <a href="/" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="/contact-us" className="text-white hover:text-gray-200">
            Contact Us
          </a>
          <a href="/about-us" className="text-white hover:text-gray-200">
            About Us
          </a>
        </div>
      </div>

      <button className="px-4 py-2 bg-green-500 duration-500 hover:bg-green-600 text-white rounded-md">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
