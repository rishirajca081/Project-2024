import Home from './Pages/Home'
import React, {useEffect} from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
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
import Cookies from 'js-cookie';
import Chat from './Pages/Chat/Chat'

import Vision from './Pages/Vision'
import ViewDetails from './Pages/ViewDetails'



const App = () => {
 

  return (
    <div>
    
      <BrowserRouter>
      {/* <MaybeShowNavbar>
      <Navbar/>
      </MaybeShowNavbar> */}
        <Routes>
          <Route path = "/" element={<Home />} />

          {/* ..................Chat Route ................ */}

            <Route path="/chat/:userid" element={<Chat/>}></Route>

          {/* ..................The End....................... */}
          <Route path="/dashboard/:userid" element={<Layout />}>
            <Route path="user/:userid" element={<Dashboard />} />
            <Route path="ChangePassword/:userid" element={<ChangePassword />} />
            <Route path="Profile/:userid" element={<Profile />} />
            <Route path="EditProfile/:userid" element={<EditProfile />} />
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
          <Route path="/Vision" element={<Vision />} />
          <Route path="/ViewDetails" element={<ViewDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
