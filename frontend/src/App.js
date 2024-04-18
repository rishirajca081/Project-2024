import Home from './Pages/Home'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import ClientHomepage from './Pages/ClientHomepage'
import EditProfile from './Pages/EditProfile';
import Profile from './Pages/Profile';
import ChangePassword from './Pages/ChangePassword';
import Dashboard from './Pages/Dashboard';
import Layout from './Component/Shared/Layout';
import MaybeShowNavbar from './Component/Shared/MaybeShowNavbar';
import Navbar from './Component/Shared/Navbar';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Otppg from './Pages/Otppg';
import VerifyOtp from './Pages/VerifyOtp';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <MaybeShowNavbar>
      <Navbar/>
      </MaybeShowNavbar>
        <Routes>
          <Route path = "/Home" element={<Home />} />

          <Route path="/" element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ChangePassword" element={<ChangePassword />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/EditProfile" element={<EditProfile />} />
          </Route>
          <Route path="/ClientHomepage" element={<ClientHomepage />} />
          <Route path = "/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Otppg" element={<Otppg />} />
          <Route path="/VerifyOtp" element={<VerifyOtp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
