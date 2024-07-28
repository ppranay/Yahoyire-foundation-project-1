import React from 'react';
import Navbar from "../components/Navbar";
import home3 from '../assets/home3.jpg';
import home from '../assets/carousel-1.jpg';
import '../css/home.css';
import Initiatives from "../components/Initiatives";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
// import Landing from "../components/Landing";
import Funds from "../components/Funds";
import BackToTop from "../components/BackToTop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import caro1 from '../assets/newcar.jpg'
import Banner from '../components/Banner';
import pp2 from '../assets/DSC-6303.jpg'
import pp3 from '../assets/car new.jpeg'
// import About2 from '../components/About2';
import Landing from '../components/Landing'
import MyButton from '../components/MyButton';
 

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000, // speed of the transition in milliseconds
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // interval between slides in milliseconds
        fade: true, // enable smooth fade animation
    };

    return (
        <>
            <Navbar />
        <MyButton/>
            <div className="video-container">
                <Slider {...settings}>
                    <div>
                        <img src={pp2} alt="Carousel Image 1" />
                    </div>
                    <div>
                        <img src={caro1} alt="Carousel Image 2 "  />
                    </div>
                    <div>
                        <img src={pp3} alt="Carousel Image 3" />
                    </div>
              
                </Slider>
            </div>
            <Banner/>
            <Landing />
           
            {/* <About2/> */}
            <Initiatives />
            <Funds />
            <ContactForm />
            <Footer />
            <BackToTop />
        </>
    );
}
