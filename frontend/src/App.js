import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ClientHomepage from './Pages/ClientHomepage';
import EditProfile from './Pages/EditProfile';
import Profile from './Pages/Profile';
import ChangePassword from './Pages/ChangePassword';
import Dashboard from './Pages/Dashboard';
import Layout from './Component/Shared/Layout';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Otppg from './Pages/Otppg';
import VerifyOtp from './Pages/VerifyOtp';
import Chat from './Pages/Chat/Chat';
import Vision from './Pages/Vision';
import ViewDetails from './Pages/ViewDetails';
import Cookies from 'js-cookie';

const App = () => {
  // Retrieve the userid from the cookie
  const userid = Cookies.get('userid');
  console.log(userid + "appjs")
  // Redirect to Login page if userid is not available in cookie


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Chat Route */}
        <Route path="/chat/:userid" element={<Chat />} />
        {/* Dashboard Route */}
        <Route path="/dashboard/:userid" element={<Layout />}>
          <Route path="user/:userid" element={<Dashboard />} />
          <Route path="ChangePassword/:userid" element={<ChangePassword />} />
          <Route path="Profile/:userid" element={<Profile />} />
          <Route path="EditProfile/:userid" element={<EditProfile />} />
        </Route>

        <Route path="/ClientHomepage" element={<ClientHomepage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Otppg" element={<Otppg />} />
        <Route path="/VerifyOtp" element={<VerifyOtp />} />
        <Route path="/Vision" element={<Vision />} />
        <Route path="/ViewDetails/:userid" element={<ViewDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
