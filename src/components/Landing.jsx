import React from 'react';
import { Link } from 'react-router-dom';
import '../css/LandingPage.css'
// import landing from '../assets/LandImg.png'
import abt from '../assets/about.png'

const AboutUs = () => {
  return (

    <> 
       <div className="about-us">
      <h1>ABOUT US</h1>
      <img src={abt} alt="" />
      <Link to={"/about"}>
        <button className='btn btn-success mx-auto d-block mt-3'>Read More</button>
      </Link>
      
    </div>



    </>

  );
}

export default AboutUs;
