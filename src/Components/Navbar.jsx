import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiSettings } from 'react-icons/fi';
import { GoMail } from "react-icons/go";

import profileImage from '../image/peakpx.jpg'; // Replace with the path to your profile image

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 pr-8 flex justify-between items-center">
      <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 pl-10 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
        </div>
      <div className="flex items-center space-x-4">
      <Link to="/messages" className="text-white   bg-gray-600 rounded-full p-2">
          <GoMail className="text-xl" />
        </Link>
        <Link to="/settings" className="text-white  bg-gray-600 rounded-full p-2">
          <FiSettings className="text-xl" />
        </Link>
        <Link to="/notifications" className="text-white  bg-gray-600 rounded-full p-2">
          <IoNotificationsOutline className="text-xl" />
        </Link>
        
       
        <Link to="/profile">
          <img src={profileImage} alt="Profile" className="w-9 h-9 rounded-full " />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
