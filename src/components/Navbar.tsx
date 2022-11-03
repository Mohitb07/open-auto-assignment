import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';

function Navbar() {
  return (
    <div className="min-w-full md:p-5">
      <div className="flex items-center">
        <p className="text-xl lg:text-2xl xl:text-4xl">OPENAUTO</p>
        <ul className="hidden items-center lg:space-x-10 lg:flex lg:ml-auto">
          <li className="flex items-center lg:space-x-2">
            <IoCall />
            <span className="lg:text-base xl:text-lg">+789 456 1265</span>
          </li>
          <li className="flex items-center lg:space-x-2">
            <IoIosMail className="mt-1" />
            <span className="lg:text-base xl:text-lg">service@openauto.ca</span>
          </li>
          <button className="lg:text-base xl:text-lg border-2 md:py-1 md:px-2 lg:py-2 lg:px-4 xl:py-4 xl:px-6 border-primary rounded-full font-semibold">
            Download the mobile app
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
