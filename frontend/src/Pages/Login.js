import React from 'react';
import Logo from '../Images/Logo.jpg';
import loginimg from '../Images/loginimg.jpg';
import logimg from '../Images/logimg.jpg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

const Login = () => {

  
  return (
    <div>
      <section className='flex flex-col md:flex-row overflow-hidden'>
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="flex flex-row gap-6 md:gap-12 mt-6 ml-6">
            <img src={Logo} alt="Logo" className="h-24" />
            <h1 className='text-4xl font-bold mt-4 md:drop-shadow-lg'>Welcome Back :)</h1>
          </div>
          <p className='ml-6 md:ml-10 mt-6'>To keep connected with us please login with your personal information
            by username and password.
          </p>
          <form className="md:ml-6">
            <div className='flex flex-row gap-6 mt-9 md:ml-10'>
              <label htmlFor='email' className='text-3xl md:text-4xl'><i class="zmdi zmdi-account"></i></label>
              <input type="email" name='email' id='email' autoComplete='off' placeholder='USERNAME'
                // value={email} onChange={(e)=>setEmail(e.target.value)}
                required
                className='text-black border rounded-xl border-b border-gray-500 shadow-md outline-none focus:outline-none items-center
                justify-center w-full md:w-[80%] h-14 placeholder-black text-black font-bold pl-4' />
            </div>

            <div className='flex flex-row gap-6 mt-8 md:ml-10'>
              <label htmlFor='password' className='text-3xl md:text-4xl'><i class="zmdi zmdi-lock"></i></label>
              <input type="password" name='password' id='password' autoComplete='off' placeholder='PASSWORD'
                //  value={password} onChange={(e)=>setPassword(e.target.value)}
                required
                className='text-black border rounded-xl border-b border-gray-500 shadow-md outline-none focus:outline-none items-center
                justify-center w-full md:w-[80%] h-14 placeholder-black text-black font-bold pl-4' />
            </div>

            <div className="SignIn-link items-center justify-center pt-4 ml-[12.5rem] md:ml-0 mt-6">
              <p className="text-[#000]"> <NavLink to='' className="signUpBtn-link text-[#4b4242] 
                    font-semibold hover:underline ml-2 ">Forgot Password?</NavLink>
              </p>
            </div>

            {/* Submit Button */}
            <button type="submit" className="relative w-[200px] h-[50px] ml-10 bg-blue-500 text-[16px] text-black hover:bg-blue-900 ml-[5rem] md:ml-24
                text-[#fff] cursor-pointer rounded-3xl mt-20 border border-black">Login In</button>

          </form>
        </div>
        <img src={logimg} alt="Logo" className="w-full md:w-[50%]" />
      </section>
    </div>
  );
};

export default Login;
