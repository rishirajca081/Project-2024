import React from 'react';
import logimg from "../Images/logimg.jpg";
import vision from "../Images/vision.jpg"
import Header from '../Component/Shared/Header';
import Navbar from '../Component/Shared/Navbar';

const Vision = () => {
    return (
        <div className="font-sans bg-gray-200">
           {/* <Navbar/> */}
            {/* Navigation Bar */}
            {/* <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-white font-semibold text-2xl">Alumni Association</h1>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-white hover:text-gray-200">Home</a></li>
                        <li><a href="#" className="text-white hover:text-gray-200">About</a></li>
                        <li><a href="#" className="text-white hover:text-gray-200">Vision</a></li>
                        <li><a href="#" className="text-white hover:text-gray-200">Contact</a></li>
                    </ul>
                </div>
            </nav> */}

            {/* Parallax Background */}
            <div className="relative bg-cover bg-center h-96 md:h-96" style={{ backgroundImage: `url(${vision})` }}>
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
                <div className="container mx-auto h-full flex justify-center items-center">
                    <h2 className="text-white text-5xl font-bold text-center opacity-70">Our Vision</h2>
                </div>
            </div>

            {/* Vision Section */}
            <section className="container mx-auto py-12 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Vision Card 1 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 h-[300px] ">
                        <h3 className=" font-bold text-blue-500 mb-4 text-3xl ">Empowerment</h3>
                        <p className="text-gray-700 text-[16px] mt-6 ">Empower alumni to contribute to society through 
                        their skills and experiences.Provide opportunities for alumni to enhance their leadership skills through mentorship programs, leadership workshops, and networking events. </p>
                    </div>
                    {/* Vision Card 2 */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="font-bold text-blue-500 mb-4 text-3xl">Innovation</h3>
                        <p className="text-gray-700 text-[16px] mt-6">Foster a culture of innovation and continuous learning among alumni
                        Encourage alumni to embrace creativity and think outside the box when approaching challenges.</p>
                    </div>
                    {/* Vision Card 3 */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="font-bold text-blue-500 mb-4 text-3xl">Community</h3>
                        <p className="text-gray-700 text-[16px] mt-6">Build a strong and supportive community of alumni to network and collaborate
                        Create an online community platform or alumni network where alumni can stay connected, share updates, and engage in discussions..</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 Alumni Association. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Vision;
