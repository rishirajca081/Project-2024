import React from 'react';
import { FaUser, FaEnvelope, FaIdCard, FaBuilding, FaCalendarAlt, FaPhone, FaVenusMars,FaArrowLeft } from 'react-icons/fa';
import UserProfileLogo from '../Images/UserProfileLogo.png';
import Logo from '../Images/Logo.jpg'
import { useLocation, useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from "axios"

const UserDetails = () => {
  // Static user data
  const {state}=useLocation();
  const [userData,setUserData]= useState([]);
  const {userid} = useParams();

  useEffect(()=>{
    axios.get(`https://connect-hub-r42b.onrender.com/api/v1//user/${userid}`).then((res)=>{
        console.log(res.data) ;
        setUserData(res.data);
    }).catch((err)=>{
      console.log("error in dahboard",err.message);
    })
  },[])
  console.log(userid);

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gradient-to-r from-gray-300 to-gray-200">
        <header className="bg-white shadow-lg py-4 px-6 flex justify-between items-center w-screen">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 mr-2" />
          <span className="text-xl font-bold text-indigo-500"></span>
        </div>
        <a href="/clientHomepage" className="flex items-center text-indigo-500 hover:text-indigo-700 transition-colors">
    <FaArrowLeft className="mr-2" />
    Go Back 
</a>

      </header>
      <div className="flex flex-row gap-4 items-center justify-center flex-grow ">
      <div className="bg-white rounded-lg shadow-lg w-[300px] p-8 border border-black shadow-lg h-[420px] flex flex-col items-center justify-center">
        <img
          src={UserProfileLogo}
          alt="user"
          className="rounded-full w-48 h-48 mb-4 border-4 border-indigo-500"
        />
        <h2 className="text-2xl font-bold text-indigo-500">
          {userData.FirstName} {userData.LastName}
        </h2>
      </div>
      <div className="bg-white border border-black rounded-lg shadow-lg w-[800px] p-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-indigo-500">User Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center">
            <FaEnvelope className="text-indigo-500 mr-2" />
            <div>
              <p className="text-gray-500 mb-1">Email</p>
              <p className="text-lg font-semibold">{userData.email}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaIdCard className="text-indigo-500 mr-2" />
            <div>
              <p className="text-gray-500 mb-1">Reg No.</p>
              <p className="text-lg font-semibold">{userData.collegeRegno}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaBuilding className="text-indigo-500 mr-2" />
            <div>
              <p className="text-gray-500 mb-1">Current Company</p>
              <p className="text-lg font-semibold">{userData.company
}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="text-indigo-500 mr-2" />
            <div>
              <p className="text-gray-500 mb-1">Batch Year</p>
              <p className="text-lg font-semibold">{userData.batchYear}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-indigo-500 mr-2" />
            <div>
              <p className="text-gray-500 mb-1">Phone No.</p>
              <p className="text-lg font-semibold">{userData.phoneNumber}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaVenusMars className="text-indigo-500 mr-2" />
            <div>
              <p className="text-gray-500 mb-1">Gender</p>
              <p className="text-lg font-semibold">{userData.gender}</p>
            </div>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="text-indigo-500 mr-2" />
            <div>
              <p className="text-gray-500 mb-1">Date of Birth</p>
              <p className="text-lg font-semibold">{userData.dob}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserDetails;