import React from "react";
import Footer from "./Footer";
import Navbar from "../Component/Shared/Navbar";
import vision from "../Images/vision.jpg";
import { Link } from "react-router-dom";
const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div
        className="relative bg-cover bg-center h-96 md:h-96"
        style={{ backgroundImage: `url(${vision})` }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="container mx-auto h-full flex justify-center items-center">
          <h2 className="text-white text-5xl font-bold text-center opacity-70">
            Gallery
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 p-4">
            <Link to="#"
                className="group relative flex items-end overflow-hidden rounded-lg  shadow-lg md:h-80 object-fit">
                <img src="https://placeholder.com/300x400" className="w-full" />
            </Link>

            <Link to="#"
                className="group relative flex items-end overflow-hidden rounded-lg  shadow-lg md:h-80 object-fit">
                <img src="https://placeholder.com/300x400" className="w-full" />
            </Link>

            <Link to="#"
                className="group relative flex items-end overflow-hidden rounded-lg  shadow-lg md:h-80 object-fit">
                <img src="https://placeholder.com/300x400" className="w-full" />
            </Link>


            <Link to="#"
                className="group relative flex items-end overflow-hidden rounded-lg  shadow-lg md:h-80 object-fit">
                <img src="https://placeholder.com/300x400" className="w-full" />
            </Link>

            <Link to="#"
                className="group relative flex items-end overflow-hidden rounded-lg  shadow-lg md:h-80 object-fit">
                <img src="https://placeholder.com/300x400" className="w-full" />
            </Link>

            <Link to="#"
                className="group relative flex items-end overflow-hidden rounded-lg  shadow-lg md:h-80 object-fit">
                <img src="https://placeholder.com/300x400" className="w-full" />
            </Link>

            <Link to="#"
                className="group relative flex items-end overflow-hidden rounded-lg  shadow-lg md:h-80 object-fit">
                <img src="https://placeholder.com/300x400" className="w-full" />
            </Link>

            <Link to="#"
                className="group relative flex items-end overflow-hidden rounded-lg  shadow-lg md:h-80 object-fit">
                <img src="https://placeholder.com/300x400" className="w-full" />
            </Link>

            <Link to="#"
                className="group relative flex items-end overflow-hidden rounded-lg  shadow-lg md:h-80 object-fit">
                <img src="https://placeholder.com/300x400" className="w-full" />
            </Link>
        </div>
      <Footer />
    </div>
  );
};

export default Gallery;
