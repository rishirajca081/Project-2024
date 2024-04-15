import React from 'react';
import Logo from '../Images/Logo.jpg';
import loginimg from '../Images/loginimg.jpg';
import codeimg from '../Images/codeimg.jpg'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const Otppg = () => {

    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any necessary validation here
        
        // Redirect to the verify OTP page
        history.push('/VerifyOtp');
    };
    

  
  return (
    <div className='w-full h-full'>
      <section className='flex flex-col md:flex-row overflow-hidden  '>
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="flex flex-col  md:gap-12 mt-6 ml-6">
            <img src={Logo} alt="Logo" className="h-16 w-16" />
            <h1 className='text-4xl font-bold mt-4 md:drop-shadow-lg text-black ml-6'>We sent you a code</h1>
          </div>
          <p className='ml-8 md:ml-14 mt-6'>Please,enter it below to verify your code
          </p>
          <form className="md:ml-6">
    <div className="grid grid-cols-6 gap-6 mt-9 md:ml-8">
        {[...Array(6)].map((_, index) => (
            <input
                key={index}
                type="text"
                name={`otp-${index}`}
                id={`otp-${index}`}
                autoComplete="off"
                maxLength={1}
                placeholder={``}
                // value={otp[index]} // You can use state to manage the OTP values
                // onChange={(e) => handleOTPChange(index, e.target.value)}
                required
                className="text-black border rounded-xl border-b border-gray-500 shadow-md outline-none focus:outline-none items-center justify-center w-full h-14 placeholder-black text-black font-bold pl-4"
            />
        ))}
    </div>



    <div className="SignIn-link pt-4 ml-[12.5rem] md:ml-6 mt-6 flex gap-2 ">
    <p className="text-[#000] className=signUpBtn-link text-[#4b4242] font-semibold ml-2">
        Didn't receive code yet?
    </p>
    <NavLink to='' style={{ color: 'blue' }}>Send again</NavLink>
</div>


            {/* Submit Button */}
            <div className="ml-10 ml-[5rem] md:ml-24 mt-20">
    Already registered? <NavLink to="/Login" className="text-black text-[16px] hover:underline">Login</NavLink>
</div>


          </form>
        </div>
        <img src={codeimg} alt="Logo" className="w-full md:w-[50%] h-full" />
      </section>
    </div>
  );
};

export default Otppg;
