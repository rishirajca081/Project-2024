import React from 'react'
import UserProfileLogo from "../Images/UserProfileLogo.png";
import { useNavigate } from 'react-router-dom';
const Details=( profile)=> {
    const navigate=useNavigate();
  return (
    <div className="bg-white shadow-md rounded-md p-4 flex items-center">
    <img src={UserProfileLogo} alt="User Profile" className="h-16 w-16 rounded-full" />
    <div className="ml-4">
      <h2 className="text-lg font-semibold">{profile.FirstName} {profile.LastName}</h2>
      <p className="text-gray-600">Batch: {profile.batchYear}</p>
      <p className="text-gray-600">Company: {profile.company}</p>
      <button
      onClick={()=>{
           navigate('/ViewDetails' ,{state:{profile:profile}})
      }} 
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">View Details</button>
    </div>
  </div>
  )
}

export default Details