import React from 'react';
import logo from "../assets/logo-bg-removed.png";

const BottomNavBar = () => {
  return (
    <div className="bottom-0 w-full bg-gray-800 text-white flex justify-between items-center p-4">
      {/* Company Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Company Logo" className="max-w-[3.5em]" />

      </div>

      {/* Navigation Items */}
      <ul className="flex space-x-6">
        <li>
          <a href="/home" className="hover:text-gray-400">Home</a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-400">About</a>
        </li>
        <li>
          <a href="/projects" className="hover:text-gray-400">Projects</a>
        </li>
        <li>
          <a href="/contactus" className="hover:text-gray-400">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavBar;
