import React, { useState } from 'react';
import Logo from '../Images/Logo.jpg';
import codeimg from '../Images/codeimg.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
const Otppg = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validation here
    axios.post("http://localhost:4000/api/v1/signup",{email}).then((res)=>{
      console.log(res);
      if(res.data.message==='User already registered' && res.data.success==false){
          history("/login");
      }
      if(res.data.message==='OTP Sent Successfully' && res.data.success==true){
          history("/VerifyOtp")
      }
    }).catch((err)=>{
      console.log("Error in Otgpg",err.message);
    })
    console.log(email);
    // Redirect to the verify OTP page
    // history.push('/VerifyOtp');
  };

  return (
    <div className='w-full h-full'>
      <section className='flex flex-col md:flex-row overflow-hidden'>
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="flex flex-col gap-12 mt-6 ml-6">
            <img src={Logo} alt="Logo" className="h-16 w-16" />
            <h1 className='text-4xl font-bold mt-4 md:drop-shadow-lg text-black ml-6'>Verify Your Email</h1>
          </div>
          <p className='ml-8 md:ml-14 mt-6'>To start using alumini connection hub, confirm email address</p>
          <form className="md:ml-6" onSubmit={handleSubmit}>
            <div className="mt-9 md:ml-8">
              <label htmlFor="email" className="block font-bold text-black"></label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="border border-gray-500 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            <div className="SignIn-link pt-4 ml-[12.5rem] md:ml-6 mt-6 flex gap-2">
            </div>
            {/* Submit Button */}
            <NavLink  className="button-link">
              <button
                type="submit"
                onClick={handleSubmit}
                className="relative w-[200px] h-[50px] ml-10 bg-blue-500 text-[16px] text-black hover:bg-blue-900 ml-24 text-[#fff] cursor-pointer rounded-3xl mt-20 border border-black"
              >
                Send OTP
              </button>
            </NavLink>
          </form>
        </div>
        <img src={codeimg} alt="Logo" className="w-full md:w-[50%] h-full" />
      </section>
    </div>
  );
};

export default Otppg;
