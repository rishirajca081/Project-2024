import React, { useState } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";

import Logo from "../Images/Logo.jpg";
import RegisterSide from "../Images/RegisterSide.jpg";
import axios from "axios";


const Register = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state || {};

  
  const [batchYear, setBatchYear] = useState("");
  const [company, setCompany] = useState("");
  const currentYear = new Date().getFullYear();
  
  //const [userEmail, setuserEmail] = useState(email);

  //setuserEmail(email);
  const handleBatchYearChange = (e) => {
    setBatchYear(e.target.value);
    // If current year is filled, disable company field
    if (parseInt(e.target.value) === currentYear) {
      setCompany("");
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const userData = {
      FirstName: data.get("firstname"),
      LastName: data.get("lastname"),
      collegeRegno: data.get("regno"),
      dob: data.get("dob"),
      phoneNumber: data.get("phone"),
      batchYear: data.get("batchyear"),
      company: data.get("company"),
      password: data.get("password"),
      gender: data.get("gender"),
      email: data.get("email"),
    };
    console.log(userData);
    await axios
      .post("https://connect-hub-r42b.onrender.com/api/v1/user-account", userData)
      .then((response) => {
        console.log(response);
        if(response.data.success === true) {
          console.log("created user successfully!");
          alert("Registration successfull!\nLogin to proceed!")
          navigate("/login");
        } 
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={{ height: "100vh" }}>
      <section className="flex flex-col md:flex-row md:gap-20">
        <div className="flex flex-col px-10 py-5">
          <div className="flex flex-col">
            <img src={Logo} alt="Logo" className="h-16 w-16" />
            <h1 className="text-4xl font-bold mt-4 drop-shadow-lg">
              Register{" "}
            </h1>
          </div>

          <form onSubmit={handleSubmit} action="#" method="post">
            <div className="flex flex-col md:flex-row md:gap-10">
              <div className="mt-2">
                <label htmlFor="firstname" className="block ">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  required
                  className="border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-full md:w-[300px] h-[40px] mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="lastname" className="block ">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  required
                  className="border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-full md:w-[300px] h-[40px] mt-2"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-10">
              <div className="mt-2">
                <label htmlFor="regno" className="block ">
                  {" "}
                  College Registration No
                </label>
                <input
                  type="text"
                  id="regno"
                  name="regno"
                  required
                  className="border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-full md:w-[300px] h-[40px] mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="dob" className="block ">
                  Date of Birth:
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  required
                  className="border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-full md:w-[300px] h-[40px] mt-2"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-10">
              <div className="mt-2">
                <label htmlFor="phone" className="block">
                  Phone Number:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  required
                  className="border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-full md:w-[300px] h-[40px] mt-2 border rounded-md "
                />
              </div>
              <div className="mt-2">
                <label htmlFor="gender" className="block">
                  Gender:
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-full md:w-[300px] h-[40px] mt-2"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-10">
              <div className="mt-2">
                <label htmlFor="company" className="block">
                  Current Company:
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={`border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-full md:w-[300px] h-[40px] mt-2 ${
                    parseInt(batchYear) === currentYear ? "bg-gray-200" : ""
                  }`}
                  disabled={parseInt(batchYear) === currentYear}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="password" className="block">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="border border-black rounded-md p-2 focus:outline-none focus:border-black-500 w-full md:w-[300px] h-[40px] mt-2"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-10 flex-wrap">
              <div className="mt-2">
                <label htmlFor="batchyear" className="block">
                  Batch Year:
                </label>
                <input
                  type="text"
                  id="batchyear"
                  name="batchyear"
                  value={batchYear}
                  onChange={handleBatchYearChange}
                  required
                  className="border border-black rounded-md focus:outline-none focus:border-black-500 w-full md:w-[300px] h-[40px] mt-2 "
                />
              </div>
              <div className="mt-2 block">
                <label htmlFor="email" className="block">
                  email
                </label>
                <input
                   type="text"
                  id="email"
                  name="email"
                  defaultValue={email || ''}
                  readOnly
                  required
                  className="border border-black bg-gray-200 rounded-md p-2 focus:outline-none focus:border-black-500 w-full md:w-[300px] h-[40px] mt-2"
                />
              </div>
            </div>
            <div className="flex justify-center items-center py-5">
              <button
                type="submit"
                className="relative w-[200px] h-[40px] bg-blue-500 text-[16px] text-black hover:bg-blue-900 text-[#fff] cursor-pointer rounded-3xl border border-black"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div
  className="hidden md:col-span-4  p-10 w-full text-white md:flex justify-center items-center relative"
  style={{
    backgroundImage: `url(${RegisterSide})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
  }}
>
  <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
  {/* Overlay */}
  <p className="text-center text-6xl font-600 leading-normal uppercase z-10">
    Connecting the past <br />to <br /> shape the future
  </p>
</div>

      </section>
    </div>
  );
};

export default Register;
