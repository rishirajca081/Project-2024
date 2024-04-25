import React, { useState,useEffect } from 'react';
import Logo from "../Images/Logo.jpg";
import ChatIcon from "../Images/ChatIcon.jpeg"; 
import UserProfileLogo from "../Images/UserProfileLogo.png";
import { useNavigate, NavLink } from "react-router-dom";
import {useLocation}  from 'react-router-dom'
import axios from 'axios';
const Profile=({FirstName,LastName,batchYear,company,gender})=>(
  <section className="container mx-auto mt-8">
  <div className="bg-white shadow-md rounded-md p-4 flex items-center">
    <img src={UserProfileLogo} alt="User Profile" className="h-16 w-16 rounded-full" />
    <div className="ml-4">
      <h2 className="text-lg font-semibold">{FirstName} {LastName}</h2>
      <p className="text-gray-600">Batch:{batchYear} </p>
      <p className="text-gray-600">Company: {company}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">View Details</button>
    </div>
  </div>
</section>
);

function ClientHomepage() {
    const location =useLocation();
     const {state}=location;
    console.log("abc ",state);
  const [profile,setProfile]=useState([]);
  
  useEffect(()=>{
    fetchData();
 },[]);
  const fetchData=async()=>{
          await axios.get("http://localhost:4000/api/v1/users")
            .then((res)=>{
              setProfile(res.data);
            }).catch((error)=>{
               console.log(error);
            });
            
  }
  const navigate = useNavigate() ;
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    setSelectedYear(""); // Reset selected year when filter changes
    setSelectedGender(""); // Reset selected gender when filter changes
  };

  // Generate an array of years from 1984 to 2024
  const batchYears = [];
  for (let year = 1984; year <= 2024; year++) {
    batchYears.push(year);
  }

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="pl-4">
            <img src={Logo} alt="Logo" className="h-16" />
          </div>
          <div className="flex items-center space-x-4">
            <img src={ChatIcon} alt="Chat Icon" className="h-10" />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full" onClick={()=>navigate(`/chat/${state?.profile?._id}`)}>Chat</button>
            <img src={UserProfileLogo} alt="User Profile Logo" className="h-10" />
            <button className="bg-blue-500 hover:bg-blue-600
             text-white font-semibold py-2 px-4 rounded-full" onClick={()=>navigate(`/dashboard/${state?.profile?._id}`)}>Profile</button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <section className="container mx-auto mt-8 px-4">
        <div className="flex items-center justify-between">
          {/* Search Input */}
          <div className="relative flex items-center">
            <input type="text" placeholder="Search..." className="px-4 py-2 w-80 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500" />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-full">Search</button>
          </div>
          
          {/* Filter Dropdown */}
          <div className="relative">
            <select onChange={handleFilterChange} value={selectedFilter} className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <option value="">Select Filter</option>
              <option value="Batches">{selectedYear ? selectedYear : "Batches"}</option>
              <option value="Gender">{selectedGender ? selectedGender : "Gender"}</option>
              <option value="Company">Company</option>
            </select>
            <div className={`absolute mt-2 w-40 bg-white shadow-md rounded-md overflow-y-auto max-h-40 ${selectedFilter === "Batches" ? 'block' : 'hidden'}`}>
              {batchYears.map((year) => (
                <p key={year} className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleYearSelect(year)}>{year}</p>
              ))}
            </div>
            <div className={`absolute mt-2 w-40 bg-white shadow-md rounded-md overflow-y-auto max-h-40 ${selectedFilter === "Gender" ? 'block' : 'hidden'}`}>
              <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleGenderSelect("Male")}>Male</p>
              <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleGenderSelect("Female")}>Female</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Profile Box */}
      {/* <section className="container mx-auto mt-8">
        <div className="bg-white shadow-md rounded-md p-4 flex items-center">
          <img src={UserProfileLogo} alt="User Profile" className="h-16 w-16 rounded-full" />
          <div className="ml-4">
            <h2 className="text-lg font-semibold">Name</h2>
            <p className="text-gray-600">Batch: {selectedYear}</p>
            <p className="text-gray-600">Company: Example Company</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">View Details</button>
          </div>
        </div>
      </section> */}
    <div className='w-[400px] h-[700px]'>
      {profile.map((item,idx)=>(
           <Profile key={idx} {...item}/>
      ))}
    </div>
    </div>
  );
}

export default ClientHomepage;
