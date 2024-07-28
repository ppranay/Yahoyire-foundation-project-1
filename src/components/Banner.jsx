import React from 'react';
import '../css/banner.css';
import logo from '../assets/logo-removebg-preview.png'; // Ensure you have the logo image in the correct folder

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="top-section">
        <div className="logo-container">
          <img src={logo} alt="Yehova Yire Logo"  />
        </div>
        <div className="text-container">
          <h1>WELCOME TO</h1>
        </div>
      </div>
      <div className="additional-info">
        <h1 > YEHOVA YIRE FOUNDATION</h1>
        <p>GOVERNMENT OF INDIA MINISTRY OF CORPORATE AFFAIRS</p>
        <p>REG.NO.- U85300MH2022NPL3855290</p>
      </div>
    </div>
  );
}

export default Banner;
