import React, { useState } from "react";
import Logo from "../Images/Logo.jpg";
import codeimg from "../Images/codeimg.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast, CircularProgress } from "@chakra-ui/react";

const Otppg = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSentStatus, setOtpSentStatus] = useState(false);
  const [loading, setLoading] = useState(false); // State for loading indicator

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting form

    try {
      if (!otpSentStatus) {
        const response = await axios.post(
          `https://connect-hub-r42b.onrender.com/api/v1/signup`,
          { email }
        );
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
        const response = await axios.post(
          `https://connect-hub-r42b.onrender.com/api/v1/verify-otp`,
          { email, otp }
        );
        console.log(response.data);
        if (response.status === 200) {
          navigate("/register", { state: { email } });
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
    <section className="flex flex-col md:flex-row overflow-hidden p-4 md:items-center md:px-20">
      <div className="flex flex-col gap-8">
        <img src={Logo} alt="Logo" className="h-16 w-16" />
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-5">
            <h1 className="text-4xl font-bold md:drop-shadow-lg text-blackmd:text-left">
              {otpSentStatus
                ? "Enter a verification code"
                : "Verify Your Email"}
            </h1>

            <p className="">
              {otpSentStatus
                ? "Please verify your code"
                : "To start using alumni connection hub, confirm your email address"}
            </p>
            {otpSentStatus ? (
              <div className="">
                <label
                  htmlFor="otp"
                  className="block font-bold text-black"
                ></label>
                <input
                  type="text"
                  name="otp"
                  id="otp"
                  autoComplete="off"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="border border-gray-500 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
                />
              </div>
            ) : (
              <div className="">
                <label
                  htmlFor="email"
                  className="block font-bold text-black"
                ></label>
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

            <div className="flex flex-col gap-2 justify-center items-center md:justify-start md:items-start">
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <NavLink
                to="/login"
                className="text-blue-500 hover:text-blue-700 ml-2 underline"
              >
                Login
              </NavLink>
            </p>
          </div>

            {/* Submit Button */}
            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
              >
                {loading ? (
                  <CircularProgress
                    isIndeterminate
                    size="10px"
                    color="blue.500"
                  />
                ) : otpSentStatus ? (
                  "Verify OTP"
                ) : (
                  "Send OTP"
                )}
              </button>
            </div>
          </div>
          
        </form>
      </div>
      <img src={codeimg} alt="Logo" className="w-full md:w-1/2 h-auto" />
    </section>
  );
};

export default Otppg;
