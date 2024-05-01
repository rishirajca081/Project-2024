import React from 'react';
import { FaUser, FaBell } from 'react-icons/fa'; // Import FaUser icon
import UserImage from '../../Images/User.png';
import { Link } from 'react-router-dom';

const Header = ({ username }) => {
  return (
    <header className="bg-white py-4 px-8 flex items-center bg-neutral-100 border-2 border-b-neutral-200 justify-between">
      <div className="flex items-center">
        <h1 className='text-2xl font-bold'>User Profile</h1>
        {username && (
          <div className="flex items-center ml-4">
            <img src={UserImage} alt="User" className="w-8 h-8 rounded-full" />
            <h1 className="text-xl font-semibold ml-2">{username}</h1>
          </div>
        )}
      </div>
      <div className="flex items-center">
      <Link to="/clientHomepage" className="text-gray-700 text-2xl mr-4 cursor-pointer">
    <FaUser />
</Link> {/* User profile icon */}
        <FaBell className="text-gray-700 text-2xl mr-4 cursor-pointer" /> {/* Bell icon */}
        {/* Notification icon with onClick event for handling notifications */}
      </div>
    </header>
  );
};

export default Header;
