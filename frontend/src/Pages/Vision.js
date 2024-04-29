import React from 'react';
import logimg from "../Images/logimg.jpg";
import vision from "../Images/vision.jpg"
import Header from '../Component/Shared/Header';
import Navbar from '../Component/Shared/Navbar';
import Footer from './Footer';
const Vision = () => {
    return (
        <div className="font-sans bg-gray-200">
           <Navbar/>
            
            {/* Parallax Background */}
            <div className="relative bg-cover bg-center h-96 md:h-96" style={{ backgroundImage: `url(${vision})` }}>
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
                <div className="container mx-auto h-full flex justify-center items-center">
                    <h2 className="text-white text-5xl font-bold text-center opacity-70">Our Vision</h2>
                </div>
            </div>

            {/* Vision Section */}
            <section className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Vision Card 1 */}
                    <div className="bg-white rounded-lg shadow-lg p-6 ">
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
            <Footer />
        </div>
    );
};

export default Vision;
