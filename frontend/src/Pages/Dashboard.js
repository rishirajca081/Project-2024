import React from 'react';
import EditProfile from './EditProfile';
import { useState ,useEffect} from 'react';
import User from '../Images/User.png';
import profilebg from '../Images/profilebg.jpg'
import newuser from '../Images/newuser.jpg'
import '../App.css'
import Cookies from 'js-cookie';

import { FaUser, FaEnvelope, FaLock, FaPhone, FaCalendarAlt, FaBuilding, FaIdCard, FaVenusMars } from 'react-icons/fa';
import {useLocation,useParams} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
  // Dummy user data
  //   const location =useLocation();
  // const {state}=location;
  // // console.log('in dash ',state);
  // const userData=state?.val?.profile;


  const {userid} = useParams()
  // const userid = Cookies.get('userid');
  console.log("saurabh",userid);
  const [userData,setUserData]= useState([]);
    const navigate = useNavigate();

  useEffect(()=>{
    if (!userid) {
      navigate('/login');
    }
      axios.get(`https://connect-hub-r42b.onrender.com/api/v1//user/${userid}`).then((res)=>{
          console.log("response ",res.data);
          setUserData(res.data);
      }).catch((err)=>{
        console.log("error in dahboard",err.message);
      })
  },[userid])
  // console.log(userData);
  // const [userData, setUserData] = useState({
  //   name: "John Doe",
  //   email: "john.doe@example.com",
  //   regNo: "123456",
  //   currentCompany: "ABC Corp",
  //   batchYear: "2018",
  //   phoneNo: "1234567890",
  //   gender: "Male",
  //   dob: "1990-01-01",
  //   // Add other fields as needed
  // });

  const handleUpdate = (updatedUserData) => {
    // setUserData(updatedUserData);
  };

  return (
    <div className='flex flex-col gap-4 ml-20 mt-8 md:ml-20 min-h-screen md:flex-col lg:flex-col xl:flex-col'>

      <div className='bg-white rounded-lg w-[800px] h-[200px] relative
      border-2 border-indigo-200 border-r-neutral-400'>
        <div className="w-full h-[50%] bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${profilebg})` }}></div>
        <div className="absolute left-0 right-0 top-[50%] transform -translate-y-1/2">
          <img src={newuser} alt="user" className="h-24 ml-[30px]" />
          
          {/* edit profile button jiska navigate hoga /editprofile */}
        </div>
      </div>



      <div className='flex flex-col bg-white rounded-lg w-[800px] h-[1000px]
      border-2 border-indigo-200 border-r-neutral-400 '>
        <h1 className='font-bold text-2xl md:ml-8 mt-4'>Personal Information</h1>
        <div className='flex flex-row gap-2 mt-9 md:ml-8'>
          <FaUser className='text-xl' />
          <div className='flex flex-col gap-0 w-[100px]'>
            <p className='font-bold '>Name</p>
            <input type="text" name='name' id='name' autoComplete='off' placeholder='Your Name'
              value={`${userData?.FirstName} ${userData?.LastName}`} readOnly
              className='border border-black rounded-md p-2 focus:outline-none 
            focus:border-black-500 w-[400px] h-[40px] mt-2 ' />
          </div>

        </div>

        <div className='flex flex-row gap-2 mt-9 md:ml-8'>
          <FaEnvelope className='text-xl' />
          <div className='flex flex-col gap-0 w-[100px]'>
            <p className='font-bold'>Email</p>
            <input type="email" name='email' id='email' autoComplete='off' placeholder='Your Email'
              value={userData?.email} readOnly
              className='border border-black rounded-md p-2 
            focus:outline-none focus:border-black-500 w-[400px] h-[40px] mt-2' />
          </div>

        </div>

        <div className='flex flex-row gap-2 mt-9  md:ml-8'>
          <FaIdCard className='text-xl' />
          <div className='flex flex-col gap-0 w-[100px]'>
            <p className='font-bold'>Reg no.</p>
            <input type="text" name='regNo' id='regNo' autoComplete='off' placeholder='Registration Number'
              value={userData?.collegeRegno} readOnly
              className='border border-black rounded-md p-2 
            focus:outline-none focus:border-black-500 w-[400px] h-[40px] mt-2' />
          </div>

        </div>

        <div className='flex flex-row gap-2 mt-9 md:ml-8'>
          <FaBuilding className='text-xl' />
          <div className='flex flex-col gap-0 w-[200px]'>
            <p className='font-bold'>Current Company</p>
            <input type="text" name='currentCompany' id='currentCompany' autoComplete='off' placeholder='Current Company'
              value={userData?.company} readOnly
              className='border border-black rounded-md p-2 
            focus:outline-none focus:border-black-500 w-[400px] h-[40px] mt-2' />
          </div>

        </div>

        <div className='flex flex-row gap-2 mt-9 md:ml-8'>
          <FaCalendarAlt className='text-xl' />
          <div className='flex flex-col gap-0 w-[100px]'>
            <p className='font-bold'>Batch Year</p>
            <input type="text" name='batchYear' id='batchYear' autoComplete='off' placeholder='Batch Year'
              value={userData?.batchYear} readOnly
              className='border border-black rounded-md p-2 
            focus:outline-none focus:border-black-500 w-[400px] h-[40px] mt-2' />
          </div>

        </div>

        <div className='flex flex-row gap-2 mt-9 md:ml-8'>
          <FaPhone className='text-xl' />
          <div className='flex flex-col gap-0 w-[100px]'>
            <p className='font-bold'>Phone No.</p>
            <input type="text" name='phoneNo' id='phoneNo' autoComplete='off' placeholder='Phone Number'
              value={userData?.phoneNumber} readOnly
              className='border border-black rounded-md p-2 
            focus:outline-none focus:border-black-500 w-[400px] h-[40px] mt-2' />
          </div>

        </div>

        <div className='flex flex-row gap-2 mt-9 md:ml-8'>
          <FaVenusMars className='text-xl' />
          <div className='flex flex-col gap-0 w-[100px]'>
            <p className='font-bold'>Gender</p>
            <input type="text" name='gender' id='gender' autoComplete='off' placeholder='Gender'
              value={userData?.gender} readOnly
              className='border border-black rounded-md p-2 
            focus:outline-none focus:border-black-500 w-[400px] h-[40px] mt-2' />
          </div>

        </div>

        <div className='flex flex-row gap-2 mt-9 md:ml-8'>
          <FaCalendarAlt className='text-xl' />
          <div className='flex flex-col gap-0 w-[100px]'>
            <p className='font-bold'>DOB</p>
            <input type="text" name='dob' id='dob' autoComplete='off' placeholder='Date of Birth'
              value={userData?.dob} readOnly
              className='border border-black rounded-md p-2 
focus:outline-none focus:border-black-500 w-[400px] h-[40px] mt-2' />
          </div>

        </div>


      </div>

    </div>
  );
}
