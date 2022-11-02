import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';

function Navbar() {
  return (
    <div className="flex justify-between items-center w-full">
      <div>
        <p className="text-xl lg:text-4xl">LOGO</p>
      </div>
      <ul className="hidden sm:bg-blue-500 lg:bg-green-500 md:bg-red-500 items-center space-x-10 md:flex">
        <li className="flex items-center lg:space-x-2">
          <IoCall />
          <span className="md:text-base lg:text-lg">+789 456 1265</span>
        </li>
        <li className="flex items-center lg:space-x-2">
          <IoIosMail className="mt-1" />
          <span className="md:text-base lg:text-lg">service@openauto.ca</span>
        </li>
        <button className="border-2 md:py-2 md:px-4 lg:py-4 lg:px-6 border-primary rounded-full font-semibold">
          Download the mobile app
        </button>
      </ul>
    </div>
  );
}

export default Navbar;
