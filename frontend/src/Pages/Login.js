import React, { useEffect, useState } from "react";
import Logo from "../Images/Logo.jpg";
import codeimg from "../Images/logimg.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';

// import { toast } from "react-toastify";
import { useToast } from "@chakra-ui/react";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const toast = useToast();

  const navigate = useNavigate();

  const [token, setToken_] = useState(localStorage.getItem("user-jwt-token"));
  const [userid, setUserId_] = useState(localStorage.getItem("userid"));

  const setToken = (tkn) => {
    localStorage.setItem("user-jwt-token", tkn);
    setToken_(token);
  };
  const setUserId = (usrid) => {
    localStorage.setItem("userid", usrid);
    setUserId_(usrid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    try {
      const response = await axios.post(
         `https://connect-hub-r42b.onrender.com/api/v1/login`,
          //"http://localhost:4000/api/v1/login",
        userData
      );
      if (response.data.success) {
       
        navigate("/ClientHomepage", { state: { profile: response.data.user } });
      }
    } catch (err) {
      if (err.response && err.response.status === 403) {
        //toast.error("Incorrect email or password");
        toast({
          title: "Error",
          description: "Incorrect Password",
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
    <section className="flex flex-col md:flex-row overflow-hidden p-4 md:items-center md:justify-center">
      <div className="flex flex-col gap-8">
        <img src={Logo} alt="Logo" className="h-16 w-16" />

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col gap-y-5">
            <h1 className="text-4xl font-bold md:drop-shadow-lg text-blackmd:text-left">
              Welcome back :)
            </h1>
            <p className="text-sm md:text-base md:text-left">
              To stay connected with us, please login with your email and
              password.
            </p>

            <div className="flex flex-row items-center">
              <label htmlFor="email" className="text-xl md:text-4xl">
                <i className="zmdi zmdi-account"></i>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Email"
                required
                className="text-black border rounded-xl border-b border-gray-500 shadow-md outline-none focus:outline-none w-full h-12 md:h-14 placeholder-black text-base md:text-xl font-bold pl-2 md:pl-4"
              />
            </div>
            <div className="flex flex-row items-center">
              <label htmlFor="password" className="text-xl md:text-4xl">
                <i className="zmdi zmdi-lock"></i>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Password"
                required
                className="text-black border rounded-xl border-b border-gray-500 shadow-md outline-none focus:outline-none w-full h-12 md:h-14 placeholder-black text-base md:text-xl font-bold pl-2 md:pl-4"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center md:justify-start md:items-start">
            <p className=" text-gray-600 py-4">
              Click here to reset your password?{" "}
              <NavLink
                to="/login"
                className="text-blue-500 hover:text-blue-700 ml-2 underline"
              >
                Forget password
              </NavLink>
            </p>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <img
        src={codeimg}
        alt="Logo"
        className="hidden md:block md:w-1/2 h-auto"
      />
    </section>
  );
};

export default Login;
