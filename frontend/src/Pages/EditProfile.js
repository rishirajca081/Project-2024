import React, { useState,useEffect } from 'react';
import User from '../Images/User.png';
import profilebg from '../Images/profilebg.jpg';
import '../App.css'
import { useParams } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaCalendarAlt, FaBuilding, FaIdCard, FaVenusMars } from 'react-icons/fa';
import {useLocation} from 'react-router-dom';
import axios from "axios"
import {BASE_URL} from '../../constant'
export default function EditProfile() {
  const {userid}= useParams()
  
  const [UserData,setUserData]= useState([]);


  useEffect(()=>{
      axios.get(`${BASE_URL}/api/v1//user/${userid}`).then((res)=>{
          setUserData(res.data);
      }).catch((err)=>{
        console.log("error in dahboard",err.message);
      })
  },[userid])

  const handleUpdate = () => {
      axios.put(`${BASE_URL}/api/v1/user/${userid}`, UserData)
      .then((res) => {
        console.log("Update successful");
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        console.error("Update failed", err.message);
      });
  };

  return (
    <div className='flex flex-col gap-4 ml-20 mt-8 md:ml-20 md:flex-col lg:flex-col xl:flex-col'>
      <div className='bg-white rounded-lg md:w-[800px] h-[200px] min-w-[400px] max-w-[800px] relative border-2 border-indigo-200 border-r-neutral-400'>
        <div className="w-full h-[50%] bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${profilebg})` }}></div>
        <div className="absolute left-0 right-0 top-[50%] transform -translate-y-1/2">
          <img src={User} alt="user" className="h-24 ml-[30px]" />
        </div>
      </div>

      <div className='flex flex-col bg-white rounded-lg w-[800px] h-[1000px] border-2 border-indigo-200 border-r-neutral-400 '>
        <h1 className='font-bold text-2xl ml-8 mt-4'>Personal Information</h1>

        <div className='flex flex-row gap-2 mt-9 md:ml-8'>
        <FaUser className='text-xl' />
        <div className='flex flex-col gap-0 w-[100px]'>
          <p className='font-bold '>Name</p>
        <input type="text" name='name' id='name' autoComplete='off' placeholder='Your Name'
            value={UserData.FirstName + " " + UserData.LastName} readOnly disabled
            className='border border-black rounded-md p-2 focus:outline-none 
            focus:border-black-500 w-[400px] h-[40px] mt-2 ' />
        </div>
          
        </div>
        
        <div className='flex flex-row gap-2 mt-9 md:ml-8'>
          <FaEnvelope className='text-xl' />
          <div className='flex flex-col gap-0 w-[100px]'> 
            <p className='font-bold'>Email</p>
                <input 
                  type="email" 
                  name='email' 
                  id='email' 
                  autoComplete='off' 
                  placeholder='Your Email'
                  value={UserData.email} 
                  readOnly disabled
                  className='border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-[400px] h-[40px] mt-2' 
                />
          </div>
        </div>

        <div className='flex flex-row gap-2 mt-9  md:ml-8'>
        <FaIdCard className='text-xl' />
        <div className='flex flex-col gap-0 w-[100px]'>
        <p className='font-bold'>Reg no.</p>
        <input type="text" name='regNo' id='regNo' autoComplete='off' placeholder='Registration Number'
            value={UserData.collegeRegno}
            onChange={(e)=>setUserData({ ...UserData, collegeRegNo: e.target.value })}
            className='border border-black rounded-md p-2 
            focus:outline-none focus:border-black-500 w-[400px] h-[40px] mt-2' />
        </div>
          
        </div>

        <div className='flex flex-row gap-2 mt-9 md:ml-8'>
        <FaCalendarAlt className='text-xl' />
        <div className='flex flex-col gap-0 w-[100px]'>
        <p className='font-bold'>Batch Year</p>
        <input type="text" name='batchYear' id='batchYear' autoComplete='off' placeholder='Batch Year'
            value={UserData.batchYear} readOnly disabled
            className='border border-black rounded-md p-2 
            focus:outline-none focus:border-black-500 w-[400px] h-[40px] mt-2' />
        </div>
          
        </div>


        <div className='flex flex-row gap-2 mt-9 md:ml-8'>
          <FaPhone className='text-xl' /> 
          <div className='flex flex-col gap-0 w-[100px]'>
            <p className='font-bold'>Phone No.</p>
                <input 
                  type="text" 
                  name='phoneNo' 
                  id='phoneNo' 
                  autoComplete='off' 
                  placeholder='Phone Number'
                  value={UserData.phoneNumber}
                  onChange={(e)=>setUserData({ ...UserData, phoneNumber: e.target.value })}
                  className='border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-[400px] h-[40px] mt-2' 
                />
          </div>        
        </div>

        <div className='flex flex-row gap-2 mt-9 md:ml-8'>
          <FaBuilding className='text-xl' /> 
          <div className='flex flex-col gap-0 w-[200px]'>
            <p className='font-bold'>Current Company</p>
                            <input 
                  type="text" 
                  name='currentCompany' 
                  id='currentCompany' 
                  autoComplete='off' 
                  placeholder='Current Company'
                  value={UserData.company} 
                  onChange={(e)=>setUserData({ ...UserData, company: e.target.value })}
                  className='border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-[400px] h-[40px] mt-2' 
                />
          </div>
        </div>

        <div className='flex flex-row gap-2 mt-9 md:ml-8'>
        <FaVenusMars className='text-xl' />    
        <div className='flex flex-col gap-0 w-[100px]'>
        <p className='font-bold'>Gender</p>
        <input type="text" name='gender' id='gender' autoComplete='off' placeholder='Gender'
            value={UserData.gender} readOnly disabled
            className='border border-black rounded-md p-2 
            focus:outline-none focus:border-black-500 w-[400px] h-[40px] mt-2' />
          </div>    
          
        </div>

        <div className='flex flex-row gap-2 mt-9 md:ml-8'>
        <FaCalendarAlt className='text-xl' />
        <div className='flex flex-col gap-0 w-[100px]'>
        <p className='font-bold'>DOB</p>
        <input type="text" name='dob' id='dob' autoComplete='off' placeholder='Date of Birth'
value={UserData.dob} disabled 
className='border border-black rounded-md p-2 
focus:outline-none focus:border-black-500 w-[400px] h-[40px] mt-2' />
        </div>
          
</div>

        <div className="flex justify-center mt-4">
          <button 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-12 mt-6 rounded mr-2" 
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
