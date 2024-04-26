import React from 'react';
import Footer from './Footer';

const AboutUsPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header section */}
            <header className="bg-blue-600 text-white py-12">
                <div className="container mx-auto flex items-center justify-between">
                    <h1 className="text-3xl font-bold">About Us</h1>
                </div>
            </header>

            {/* Main content */}
            <div className="container mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left content */}
                    <div className="border-r-2 border-gray-200 pr-8">
                        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The MNNIT Alumni Association is a community of former students of Motilal Nehru National Institute of Technology, dedicated to fostering connections, organizing events, and supporting current students and faculty. Our goal is to create a strong network that benefits both alumni and the institute.
                        </p>
                    </div>
                    {/* Right content */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our mission is to create a vibrant network of alumni, providing opportunities for networking, professional development, and philanthropic initiatives that contribute to the growth and success of both our members and the institute. We aim to foster a sense of community and collaboration among alumni and support the ongoing development and advancement of MNNIT.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-blue-600 text-white py-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 MNNIT Alumni Association. All rights reserved.</p>
                </div>
            </footer>
            
        </div>
       
    );
};

export default AboutUsPage;
