import React from 'react';
import '../css/news.css';
import image1 from '../assets/news1.jpeg';
import image2 from '../assets/news2.jpeg';
import image3 from '../assets/news event/WhatsApp Image 2024-07-27 at 10.54.10 PM.jpeg';
import image4 from '../assets/news event/WhatsApp Image 2024-07-27 at 10.54.07 PM (1).jpeg';
import image5 from '../assets/news event/WhatsApp Image 2024-07-27 at 10.54.07 PM.jpeg';
import image6 from '../assets/news event/WhatsApp Image 2024-07-27 at 10.54.08 PM.jpeg';
// import image7 from '../assets/news/WhatsApp Image 2024-07-27 at 10.54.10 PM.jpeg';
import { Link } from 'react-router-dom';
import Events from '../components/Events';
import Navbar from './Navbar';
import AbtPageHeader from './AbtPageHeader';

const News = () => {
    return (
        <>
     <AbtPageHeader />
        <Navbar/>
       <Events/>
            <div className="news">
                <h1>LATEST NEWS</h1>
                <div className="image-row">
                    <img src={image1} alt="Image 1" style={{ border: '5px solid black' }} />
                    <img src={image2} alt="Image 1" />
                </div>

                <div className="fundraiser-section">
                    <Link to="/MembershipForm">
                        <button className="fundraiser-button" >
                            BECOME A MEMBER
                        </button>

                    </Link>
                    <Link to="/MembershipForm">
                        <button className="fundraiser-button" >
                            DONATE NOW
                        </button>

                    </Link>

                    <Link to="/MembershipForm">
                        <button className="fundraiser-button" >
                            BECOME A VOLIENTER
                        </button>

                    </Link>
                </div>

                <div className="image-row">
                    <img src={image3} alt="Image 1" style={{ border: '5px solid black' }} />
                    <img src={image4} alt="Image 1" />

                </div>
                <div className="image-row">

                    <img src={image5} alt="Image 1" />
                    <img src={image6} alt="Image 1" />
                </div>

            </div>

        </>
    );
}

export default News;
