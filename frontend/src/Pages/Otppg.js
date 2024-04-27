
import React, { useState } from 'react';
import Logo from '../Images/Logo.jpg';
import codeimg from '../Images/codeimg.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToast, CircularProgress } from '@chakra-ui/react';

const Otppg = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSentStatus, setOtpSentStatus] = useState(false);
  const [loading, setLoading] = useState(false); // State for loading indicator

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting form

    try {
      if (!otpSentStatus) {
        const response = await axios.post(`${BASE_URL}/api/v1/signup`, { email });
        console.log(response.data);
        if (response.status === 200) {
          toast({
            title: "OTP Sent Successfully",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top-left",
          });
          setOtpSentStatus(true);
        } else {
          toast({
            title: "Error",
            status: "error",
            description: "An unexpected error occurred.",
            duration: 5000,
            isClosable: true,
            position: "top-left",
          });
          console.log(response.status);
        }
      } else {
        const response = await axios.post(`${BASE_URL}/api/v1/verify-otp`, { email, otp });
        console.log(response.data);
        if (response.status === 200) {
          navigate('/register', { state: { email } })
        } else {
          if (response.data.error === "OTP_MISMATCH") {
            toast({
              title: "Wrong OTP",
              status: "error",
              duration: 5000,
              isClosable: true,
              position: "top-left",
            });
          } else if (response.data.error === "USER_ALREADY_REGISTERED") {
            toast({
              title: "User Already Registered",
              status: "warning",
              duration: 5000,
              isClosable: true,
              position: "top-left",
            });
          } else {
            toast({
              title: "Error",
              status: "error",
              description: "An unexpected error occurred.",
              duration: 5000,
              isClosable: true,
              position: "top-left",
            });
          }
          console.log(response.status);
        }
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
    } finally {
      setLoading(false); // Set loading to false after request is complete
    }
  };

  return (
    <div className='w-full h-full'>
      <section className='flex flex-col md:flex-row overflow-hidden'>
        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="flex flex-col gap-12 mt-6 ml-6">
            <img src={Logo} alt="Logo" className="h-16 w-16" />
            <h1 className='text-4xl font-bold mt-4 md:drop-shadow-lg text-black ml-6'>
              {otpSentStatus ? 'Enter a verification code' : 'Verify Your Email'}
            </h1>
          </div>
          <p className='ml-8 md:ml-14 mt-6'>
            {otpSentStatus
              ? 'Please verify your code'
              : 'To start using alumini connection hub, confirm email address'}
          </p>
          <form className="md:ml-6" onSubmit={handleSubmit}>
            {otpSentStatus ? (
              <div className="mt-9 md:ml-8">
                <label htmlFor="otp" className="block font-bold text-black"></label>
                <input
                  type="text"
                  name={otp}
                  id={otp}
                  autoComplete="off"
                  placeholder={`Enter OTP`}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="border border-gray-500 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
                />
              </div>
            ) : (
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
            )}
            <div className="SignIn-link pt-4 ml-[12.5rem] md:ml-6 mt-6 flex gap-2">
            </div>
            {/* Submit Button */}
            <NavLink className="button-link">
              <button
                type="submit"
                onClick={handleSubmit}
                className="relative w-[200px] h-[50px] ml-10 bg-blue-500 text-[16px] text-black hover:bg-blue-900 ml-24 text-[#fff] cursor-pointer rounded-3xl mt-20 border border-black"
              >
                {loading ? <CircularProgress isIndeterminate size="10px" color="blue.500" /> : (otpSentStatus ? 'Verify OTP' : 'Send OTP')}
              </button>
            </NavLink>
          </form>
        </div>
        <img src={codeimg} alt="Logo" className="w-full md:w-[50%] h-full" />
      </section>
      {/* Login Link */}
      <p className="mt-4 text-center text-gray-600">
        Already have an account?{' '}
        <NavLink
          to="/login"
          className="text-blue-500 hover:text-blue-700 ml-2 underline"
        >
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default Otppg;
