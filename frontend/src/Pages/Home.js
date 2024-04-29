import React from "react";
import home1 from "../Images/home1.png";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CCol,
  CRow,
  CardImg,
  Card,
  CardImgOverlay,
  CardTitle,
  CardText,
  CCardImage,
  CCardFooter,
} from "@coreui/react";
import "../App.css";
import Footer from "./Footer";
import Navbar from "../Component/Shared/Navbar";
import about from "../Images/about.jpg";
import vision from "../Images/vision.webp";
import gallery from "../Images/gallery.jpg";
import stories from "../Images/stories.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-6 border-b-2 px-4 bg-gray-200">
          <div className="flex flex-col space-y-4 items-center md:ml-4 sm:items-center py-8">
            <h1 className="text-2xl md:text-5xl font-bold text-black text-center">
              Welcome to Connect Hub
            </h1>
            <h2 className="text-2xl md:text-5xl text-gray-700">
              "Grow the network"
            </h2>
            <Link
              to="/Otppg"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
            >
              Connect Now
            </Link>
          </div>
          <img
            src={home1}
            alt="Logo"
            className="h-64 md:h-auto max-w-[500px] md:w-auto"
          />
        </div>

        {/* ABOUT US SECTION */}
        <div className="md:py-10 py-4">
          <h1 className="md:mt-6 mt-3 text-2xl md:text-4xl font-bold text-center">
            About us
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-center  space-x-1 md:space-x-4 ">
            <img src={about} alt="Logo" className="h-40 w-40 md:h-72 md:w-96" />
            <p className="px-3 md:px-10 text-sm leading-6">
              The MNNIT Alumni Association is a vibrant community of number
              alumni who are passionate about staying connected with their alma
              mater. We offer a variety of benefits and resources to our
              members, including access to exclusive events, discounts on
              products and services, and career resources. We are proud of our
              alumni's accomplishments and are committed to helping them
              succeed. We encourage you to get involved with the association and
              stay connected with your fellow alumni.
            </p>
          </div>
        </div>

        {/* GRID SECTION */}

        <div className="md:py-10 py-4 bg-gray-200">
          <h1 className="md:mt-6 mt-3 text-2xl md:text-4xl font-bold text-center">
            Quick Links
          </h1>
          <div className="p-10 flex flex-col md:flex-row gap-7 justify-center">
            <div className="rounded overflow-hidden shadow-lg bg-white md:w-60">
              <img
                className="w-full h-48 object-cover"
                src={vision}
                alt="Vision"
              />
              <div className="px-6 py-4">
                <Link to="/vision" className="font-bold text-xl mb-2">Vision</Link>
              </div>
            </div>

            <div className="rounded overflow-hidden shadow-lg bg-white md:w-60">
              <img
                className="w-full h-48 object-cover"
                src={gallery}
                alt="Gallery"
              />
              <div className="px-6 py-4">
                <Link to="/galleries" className="font-bold text-xl mb-2">Gallery</Link>
              </div>
            </div>

            <div className="rounded overflow-hidden shadow-lg bg-white md:w-60">
              <img
                className="w-full h-48 object-cover"
                src={stories}
                alt="Stories"
              />
              <div className="px-6 py-4">
                <Link to="/stories" className="font-bold text-xl mb-2">Stories</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
