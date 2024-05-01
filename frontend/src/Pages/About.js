import React from "react";
import Footer from "./Footer";
import Navbar from "../Component/Shared/Navbar";
import vision from "../Images/vision.jpg"
const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        {/* Header section */}
        <div
          className="relative bg-cover bg-center h-96 md:h-96"
          style={{ backgroundImage: `url(${vision})` }}
        >
          <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
          <div className="container mx-auto h-full flex justify-center items-center">
            <h2 className="text-white text-5xl font-bold text-center opacity-70">
              About us
            </h2>
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left content */}
            <div className="border-r-2 border-gray-200 pr-8">
              <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed">
                The MNNIT Alumni Association is a community of former students
                of Motilal Nehru National Institute of Technology, dedicated to
                fostering connections, organizing events, and supporting current
                students and faculty. Our goal is to create a strong network
                that benefits both alumni and the institute.
              </p>
            </div>
            {/* Right content */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to create a vibrant network of alumni, providing
                opportunities for networking, professional development, and
                philanthropic initiatives that contribute to the growth and
                success of both our members and the institute. We aim to foster
                a sense of community and collaboration among alumni and support
                the ongoing development and advancement of MNNIT.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
