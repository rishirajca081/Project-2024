import React from 'react';
import { UilSearch } from '@iconscout/react-unicons';
import Logo from '../../Images/Logo.jpg';

const Chat_Navbar = () => {
  return (
    <header className="bg-blue-100 border-b to-purple-500 py-4 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center mb-4 sm:mb-0">
          <img src={Logo} alt="Logo" className="h-10 mr-2" />
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-full sm:w-auto">
          <div className="flex bg-gray-300 w-full sm:w-[400px] rounded-full px-4 py-2 mr-4">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none bg-gray-300 text-black placeholder-gray-700 w-full"
            />
            <button className="flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8 ml-auto">
              <UilSearch />
            </button>
          </div>
        </div>

        {/* Button */}
        {/* <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transition duration-300">Button</button> */}
      </div>
    </header>
  );
};

export default Chat_Navbar;