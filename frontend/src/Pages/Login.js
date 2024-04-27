





import React, { useEffect, useState } from "react";
import Logo from "../Images/Logo.jpg";
import logimg from "../Images/logimg.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
// import { toast } from "react-toastify";
import { useToast } from '@chakra-ui/react';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  

  const toast=useToast();

  const navigate = useNavigate(); 

  const [token, setToken_] = useState(localStorage.getItem("user-jwt-token"));
  const [userid, setUserId_] = useState(localStorage.getItem("userid"))

  const setToken = (tkn) => {
    localStorage.setItem("user-jwt-token", tkn);
    setToken_(token);
  }
  const setUserId = (usrid) => {
    localStorage.setItem("userid", usrid);
    setUserId_(usrid);
  }





  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    try {
      const response = await axios.post(`https://connect-hub-r42b.onrender.com/api/v1/login`, userData);
      if (response.data.success) {
        navigate("/ClientHomepage", { state: { profile: response.data.user } });
      }
    } catch (err) {
      if (err.response && err.response.status === 403) {
        //toast.error("Incorrect email or password");
        toast({
          title: "Error",
          description: "Incorrect Password.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-left",
        });
      } else {
        toast({
          title: "Error",
          description: "Incorrect Email.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-left",
        });
      }
    }
  };

  return (
    <div>
      <section className="flex flex-row overflow-hidden">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-12 mt-6 ml-6">
            <img src={Logo} alt="Logo" className="h-24" />
            <h1 className="text-4xl font-bold mt-4 drop-shadow-lg">Welcome Back :)</h1>
          </div>
          <p className="ml-10 mt-6">
            To keep connected with us please login with your personal information by email and password.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row gap-6 mt-9">
              <label htmlFor="email" className="text-4xl">
                <i className="zmdi zmdi-account"></i>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Email"
                required
                className="text-black border rounded-xl border-b border-gray-500 shadow-md outline-none focus:outline-none items-center justify-center w-[80%] h-14 placeholder-black text-black font-bold pl-4 ml-6"
              />
            </div>

            <div className="flex flex-row gap-6 mt-12">
              <label htmlFor="password" className="text-4xl">
                <i className="zmdi zmdi-lock"></i>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Password"
                required
                className="text-black border rounded-xl border-b border-gray-500 shadow-md outline-none focus:outline-none items-center justify-center w-[80%] h-14 placeholder-black text-black font-bold pl-4 ml-6"
              />
            </div>

            <div className="SignIn-link items-center justify-center pt-4 ml-[300px] mt-6">
              <p className="text-[#000]">
                <NavLink
                  to=""
                  className="signUpBtn-link text-[#4b4242] font-semibold hover:underline ml-2"
                >
                  Forgot Password?
                </NavLink>
              </p>
            </div>

            <button
              type="submit"
              className="relative w-[200px] h-[50px] ml-10 bg-blue-500 text-[16px] text-black hover:bg-blue-900 ml-24 text-[#fff] cursor-pointer rounded-3xl mt-20 border border-black"
            >
              Login In
            </button>
          </form>
        </div>
        <img src={logimg} alt="Logo" className="w-[900px]" />
      </section>
    </div>
  );
};

export default Login;
