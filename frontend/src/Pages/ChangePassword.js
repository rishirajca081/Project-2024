import React, { useState } from 'react';
import logimg from '../Images/logimg.jpg'; // Import your background image

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password change logic here
    console.log(formData);
    // Reset form after submission
    setFormData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="flex flex-col md:flex-row overflow-hidden">
      <div className="flex justify-center items-center w-full md:w-1/2 min-h-screen bg-white">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Change Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
              <input type="password" id="currentPassword" name="currentPassword" value={formData.currentPassword} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm" required />
            </div>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <input type="password" id="newPassword" name="newPassword" value={formData.newPassword} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm" required />
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-sm" required />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Change Password</button>
          </form>
        </div>
      </div>
      <div className="hidden md:flex md:flex-1 bg-cover bg-center" style={{ backgroundImage: `url(${logimg})` }}></div>
    </div>
  );
};

export default ChangePassword;
