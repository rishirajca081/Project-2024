import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import EditProfile from './Pages/EditProfile';
import ChangePassword from './Pages/ChangePassword';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import UserProfile from './Pages/UserProfile';
import Profile from './Pages/Profile';
import Layout from './Component/Shared/Layout';  // HOME

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/EditProfile" element={<EditProfile />} />
            <Route path="/ChangePassword" element={<ChangePassword />} />
            
          </Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
