// import React from 'react';
// import Logo from '../Images/Logo.jpg';
// import loginimg from '../Images/loginimg.jpg';
// import codeimg from '../Images/codeimg.jpg';
// import { NavLink } from 'react-router-dom';
// import { useState } from 'react';
// import axios from "axios";

// const VerifyOtp = () => {
//   // You can add state to manage OTP inputs here if needed

//   return (
//     <div className='w-full h-full'>
//       <section className='flex flex-col md:flex-row overflow-hidden'>
//         <div className="flex flex-col gap-4 md:w-1/2">
//           <div className="flex flex-col md:gap-12 mt-6 ml-6">
//             <img src={Logo} alt="Logo" className="h-16 w-16" />
//             <h1 className='text-4xl font-bold mt-4 md:drop-shadow-lg text-black ml-6'>Enter a verification code</h1>
//           </div>
//           <p className='ml-8 md:ml-14 mt-6'>Please verify your code</p>
//           <form className="md:ml-6">
//             <div className="grid grid-cols-6 gap-6 mt-9 md:ml-8">
//               {[...Array(6)].map((_, index) => (
//                 <input
//                   key={index}
//                   type="text"
//                   name={`otp-${index}`}
//                   id={`otp-${index}`}
//                   autoComplete="off"
//                   maxLength={1}
//                   placeholder={``}
//                   // value={otp[index]} // You can use state to manage the OTP values
//                   // onChange={(e) => handleOTPChange(index, e.target.value)}
//                   required
//                   className="text-black border rounded-xl border-b border-gray-500 shadow-md outline-none focus:outline-none items-center justify-center w-full h-14 placeholder-black text-black font-bold pl-4"
//                 />
//               ))}
//             </div>

//             <div className="SignIn-link pt-4 ml-[12.5rem] md:ml-6 mt-6 flex gap-2">
//               <p className="text-[#000] className=signUpBtn-link text-[#4b4242] font-semibold ml-2">Didn't receive code yet?</p>
//               <NavLink to='' style={{ color: 'blue' }}>Send again</NavLink>
//             </div>

//             {/* Submit Button */}
//             <div className="ml-10 ml-[5rem] md:ml-24 mt-20">
//               <NavLink to="/Register" className="button-link">
//                 <button className="text-black text-[16px] bg-blue-500 hover:bg-blue-700 py-4 px-8 rounded-xl">
//                   Verify OTP
//                 </button>
//               </NavLink>
//             </div>
//           </form>
//         </div>
//         <img src={codeimg} alt="Logo" className="w-full md:w-[50%]" />
//       </section>
//     </div>
//   );
// };

// export default VerifyOtp;

import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS
import Logo from '../Images/Logo.jpg';
import loginimg from '../Images/loginimg.jpg';
import codeimg from '../Images/codeimg.jpg';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {BASE_URL} from '../../constant'
const VerifyOtp = () => {
  // You can add state to manage OTP inputs here if needed

  // Function to handle OTP send failure
  const handleOtpSendFailure = () => {
    toast.error('Failed to send OTP. Please try again.'); // Show error toast
  };

  return (
    <div className='w-full h-full'>
      <section className='flex flex-col md:flex-row overflow-hidden'>
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="flex flex-col md:gap-12 mt-6 ml-6">
            <img src={Logo} alt="Logo" className="h-16 w-16" />
            <h1 className='text-4xl font-bold mt-4 md:drop-shadow-lg text-black ml-6'>Enter a verification code</h1>
          </div>
          <p className='ml-8 md:ml-14 mt-6'>Please verify your code</p>
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

            <div className="SignIn-link pt-4 ml-[12.5rem] md:ml-6 mt-6 flex gap-2">
              <p className="text-[#000] className=signUpBtn-link text-[#4b4242] font-semibold ml-2">Didn't receive code yet?</p>
              <NavLink to='' style={{ color: 'blue' }}>Send again</NavLink>
            </div>

            {/* Submit Button */}
            <div className="ml-10 ml-[5rem] md:ml-24 mt-20">
              <NavLink to="/Register" className="button-link">
                <button onClick={handleOtpSendFailure} className="text-black text-[16px] bg-blue-500 hover:bg-blue-700 py-4 px-8 rounded-xl">
                  Verify OTP
                </button>
              </NavLink>
            </div>
          </form>
        </div>
        <img src={codeimg} alt="Logo" className="w-full md:w-[50%]" />
      </section>
    </div>
  );
};

export default VerifyOtp;
