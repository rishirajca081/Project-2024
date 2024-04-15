import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo.jpg'; 

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        
        <Link to="/Home" className="flex-shrink-0">
        <div className='flex flex-row gap-6 text-xl text-black w-96'>
  <img src={Logo} alt="Logo" className="h-20 w-16 " />
  <div className="flex flex-col ">
    <p className='ml-6 mt-4'>MNNIT</p>
    <p>Connect Hub</p>
  </div>
</div>


        </Link>
        
        {/* Navigation Links */}
        <ul className="flex space-x-10">
          <li><Link to="/Home" className="text-gray-700 hover:text-gray-900">Home</Link></li>
          <li><Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link></li>
          <li><Link to="/gallery" className="text-gray-700 hover:text-gray-900">Gallery</Link></li>
          <li><Link to="/contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link></li>
        </ul>
        {/* Auth Buttons */}
        <div className="flex space-x-4">
          <Link to="/Otppg" className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800">Login/SignUp</Link>
          {/* <Link to="/Register" className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800">Sign Up</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
