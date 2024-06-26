import React, { useState, useEffect } from 'react';
import Logo from "../Images/Logo.jpg";
import ChatIcon from "../Images/ChatIcon.jpeg";
import UserProfileLogo from "../Images/UserProfileLogo.png";
import { useNavigate, NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import UserPagination from './UserPagination';
import Cookies from 'js-cookie';



function ClientHomepage() {
  const location = useLocation();
  const { state } = location;
  console.log("abc ", state );
  const storedToken = Cookies.get('user-jwt-token');
  const storedUserId = Cookies.get('userid');
  // const [token, setToken] = useState(storedToken || '');
  // const [userId, setUserId] = useState(storedUserId || '');
  const storedProfile = JSON.parse(localStorage.getItem('profile'));
  const [profile, setProfile] = useState(storedProfile || []);
  const [filteredProfile, setFilteredProfile] = useState(storedProfile || []);
  const [token, setToken_] = useState(localStorage.getItem("user-jwt-token"));
  const [userid, setUserId_] = useState(localStorage.getItem("userid"));

 
  useEffect(() => {
    if (!storedUserId) {
      navigate('/login');
    }
    if (!storedToken || !storedUserId || !storedProfile) {
      fetchData();
    }
  }, [state]);

  const fetchData = async () => {
    await axios.get(`https://connect-hub-r42b.onrender.com/api/v1/users`)
      .then((res) => {
        setProfile(res.data);
        console.log(res.data);
        setFilteredProfile(res.data);
      }).catch((error) => {
        console.log(error);
      });
  }
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  function filterObjects(data, parameter, value) {
    return data.filter(obj => obj[parameter] === value);
}

const clerFilter = () => {
  setFilteredProfile(profile);
}

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
    setSelectedYear(""); // Reset selected year when filter changes
    setSelectedGender(""); // Reset selected gender when filter changes
  };

  // Generate an array of years from 1984 to 2024
  const batchYears = [];
  for (let year = 1984; year <= 2025; year++) {
    batchYears.push(year);
  }

  const handleYearSelect = (year) => {
    setSelectedYear(year);
   const filteredProfile = filterObjects(profile, 'batchYear', year);
   console.log(filteredProfile);
    setFilteredProfile(filteredProfile);
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    const filteredProfile = filterObjects(profile, 'gender', gender.toLowerCase());
   console.log(filteredProfile);
   setFilteredProfile(filteredProfile);
  };

  // const handleProfileLogoClick = () => {
  //   const userId = state?.profile?._id;
  //   console.log("rishiraj.......",state?.profile?._id);
  //   if (userId) {
  //     console.log("jasgfjkhsdghfjghsdhfjsgjfgsdj",userId);
  //     navigate(`/dashboard/${userId}/user/${userId}`);
  //   }
  // };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div>
            <img src={Logo} alt="Logo" className="h-16" />
          </div>
          <div className="flex items-center space-x-4">
            {/* Search Input */}
            <div className="relative flex items-center">
              <input type="text" placeholder="Search..." className="px-4 py-2 w-48 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500" />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 bg-blue-500 text-white rounded-full">Search</button>
            </div>
            <a className="" onClick={() => navigate(`/chat/${storedUserId}`)}>
              <img src={ChatIcon} alt="Chat Icon" className="h-10" />
            </a>
            <a href={`/dashboard/${storedUserId}/user/${storedUserId}`}>
              <img src={UserProfileLogo} alt='logo' className='h-10'/>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto mt-8 px-4 flex flex-row gap-10">
        <div className="flex flex-col sm:flex-row items-center justify-between">
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
        <button className="bg-gray-200 px-3 py-2 rounded-md" onClick={clerFilter}>Clear Filter</button>
      </section>

      {/* User Profile Box */}
      <UserPagination profiles={filteredProfile} />
    </div>
  );
}

export default ClientHomepage;




