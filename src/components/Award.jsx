import React from 'react';
import '../css/award.css'; // Import the CSS file
import pic from '../assets/prajaktamam.jpeg'
// import logo from '../assets/logo-removebg-preview.png'
const Award = ({ text, imageSrc, imageAlt }) => {
    return (
        <>
            {/* <h1>AWARD AND ACREDITATION</h1> */}
            {/* <img src={logo} alt="" height={100} className='' /> */}
            <div className="text-and-image">
                <div className="text-content">
                    <h1 >EMPOWERING LIVES ONE STEP AT A TIME</h1>
                    <h4> Yehova Yire Foundation is a non-profit organization committed to enhancing the health and education of underprivileged communities. Established in 2022 , our mission is to bridge the gap in healthcare and education access, empowering individuals to lead healthier, more informed lives.,</h4>
                </div>
                <div className="image-content">
                    <img src={pic} alt={imageAlt} />
                   
                </div>
            </div>

        </>
    );
};

export default Award;
