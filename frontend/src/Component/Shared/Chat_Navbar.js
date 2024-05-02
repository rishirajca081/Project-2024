import React, { useEffect, useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons';
import Logo from '../../Images/Logo.jpg';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
const Chat_Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedUser, setSearchedUser] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };


  const { userid } = useParams();
  console.log("abcc", userid);

  const handleSearch=async()=>{
    try {
      const response = await axios.get(`http://localhost:4000/Chat/?search=${searchQuery}`);
      console.log(response.data);
      setSearchedUser(response.data);
      console.log("xyzzzz",userid);
      // Handle the response data here as needed0
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  const setPerson=(data)=>{
    window.location.reload()
  }
  
  const handleUserClick = async(user) => {
    try {
      const response = await axios.post('http://localhost:4000/Chat', {
        senderId: userid, // Assuming userid is defined somewhere in your code
        receiverId: user._id
      });
      
      const data1 = await axios.get(`http://localhost:4000/api/v1/user/${user._id}`)

      setPerson(data1.data);
      // Handle the response data here as needed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    console.log("id :", user._id);
  }
  


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
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button
              className="flex items-center justify-center bg-blue-500 text-white rounded-full w-8 h-8 ml-auto"
              onClick={handleSearch}
            >
              <UilSearch />
            </button>
          </div>
        </div>
      </div>
      
      {/* Display Searched Users */}
      {/* {searchedUser && searchedUser.map(user => (
        <div
          key={user.id}
          className="bg-white shadow rounded-md p-4 mt-4 cursor-pointer"
          onClick={() => handleUserClick(user)}
        >
          <p>{user.FirstName}</p>
        </div>
      ))} */}

{searchedUser && Array.isArray(searchedUser) && searchedUser.map(user => (
  <div
    key={user.id}
    className="bg-white shadow rounded-md p-4 mt-4 cursor-pointer"
    onClick={() => handleUserClick(user)}
  >
    <p>{user.FirstName}</p>
  </div>
))}
    </header>
  );
};

export default Chat_Navbar;
