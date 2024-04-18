import React from 'react';
import home1 from '../Images/home1.png';
import { CCard, CCardBody, CCardTitle, CCardText,CCol ,CRow,CardImg,Card ,CardImgOverlay,CardTitle,CardText
  ,CCardImage,CCardFooter} from '@coreui/react';
  import '../App.css';
import Footer from './Footer';
import Navbar from '../Component/Shared/Navbar'
import about from '../Images/about.jpg';
import vision from '../Images/vision.webp'
import gallery from '../Images/gallery.jpg'
import stories from '../Images/stories.jpg'
import { Link } from 'react-router-dom';




const Home = () => {
  
  return (
    <>
    <Navbar/>
    <div className='bg-white'>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-6">
  <div className="flex flex-col space-y-6 ml-20">
    <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left text-black ml-4">
      Welcome to Connect Hub
    </h1>
    <h2 className="text-5xl md:text-4xl text-center md:text-left text-gray-700 ml-20">
      "Grow the network"
    </h2>
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-4 
    rounded self-center md:self-start ml-[200px] mt-[20px] ">
      Connect Now
    </button>
  </div>
  <img
    src={home1}
    alt="Logo"
    className="h-8 md:h-auto max-w-[500px] md:w-auto"
  />
</div>
{/* ABOUT US SECTION */}
<div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4 md:space-x-10 mt-4">
  <img src={about} alt="Logo" className="h-20 w-20 md:h-72 md:w-96" />
  <p className="text-lg md:text-xl mt-16">The MNNIT Alumni Association is a vibrant community of number
   alumni who are passionate about staying connected with their alma mater. We offer a variety of benefits and resources to our members, including access to exclusive events, discounts on products and services, and career resources.
We are proud of our alumni's accomplishments and are committed to helping
 them succeed. We encourage you to get involved with the association and stay connected with your fellow alumni.</p>
 
</div>

      {/* GRID SECTION */}
      <div class="card">
            <div class="card__container">
                <article class="card__article">
                <div class="card__data">
    <img src={vision} alt="card image" className="card__img" />
    <Link to="/Vision">
        <h1 class="card__title">Vision</h1>
    </Link>
    {/* <p class="card__description">Beautiful card, with hover effects</p> */}
</div>
    
                    <div class="card__shapes">
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                    </div>
                </article>
    
                <article class="card__article">
                    <div class="card__data">
                        <img src={gallery} alt="card image" class="card__img"/>
                        <Link to="/Gallery">
                        <h1 class="card__title">Gallery</h1>
                        </Link>
                        {/* <p class="card__description">Beautiful card, with hover effects</p> */}
                    </div>
    
                    <div class="card__shapes">
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                    </div>
                </article>
    
                <article class="card__article">
                    <div class="card__data">
                        <img src={stories} alt="card image" class="card__img"/>
    
                        <Link to="/Stories">
                        <h1 class="card__title">Stories</h1>
                        </Link>
                        
                    </div>
    
                    <div class="card__shapes">
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                        <span class="card__shape"></span>
                    </div>
                </article>
            </div>
        </div>

        {/*--------------------- Footer section---------------------- */}
        <div className='bg-gray-900 text-white'>

        </div>
      <Footer/>
    </div></>
  );
}


export default Home;
