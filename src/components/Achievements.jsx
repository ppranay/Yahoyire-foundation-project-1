import React from 'react';
// import videoFile from '../assets/vd.mp4'; // Adjust the path based on your project structure
import image1 from '../assets/aw1.jpg';
import image2 from '../assets/aw4.jpg';
import image3 from '../assets/aw3.jpg';
import image4 from '../assets/achievements/IMG-20240724-WA0073.jpg';
import image5 from '../assets/achievements/eliza.jpeg';
import image6 from '../assets/achievements/IMG-20240205-WA0133.jpg';
import image7 from '../assets/achievements/IMG-20240724-WA0072.jpg';
import image8 from '../assets/achievements/WhatsApp Image 2024-07-27 at 2.28.46 PM.jpeg';
import image9 from '../assets/achievements/IMG-20240726-WA0030.jpg';
import image10 from '../assets/achievements/WhatsApp Image 2024-07-27 at 2.28.47 PM.jpeg';
import image11 from '../assets/achievements/WhatsApp Image 2024-07-27 at 2.28.48 PM.jpeg';
import image12 from '../assets/achievements/awwchange.jpeg';
import image13 from '../assets/achievements/WhatsApp Image 2024-07-27 at 2.28.49 PM.jpeg';
import image14 from '../assets/achievements/WhatsApp Image 2024-07-27 at 2.28.50 PM.jpeg';
import image15 from '../assets/achievements/WhatsApp Image 2024-07-27 at 2.28.50 PM (1).jpeg';
import image16 from '../assets/achievements/aww5.jpeg';
import image17 from '../assets/achievements/aww2.jpeg';
import image18 from '../assets/achievements/aww3.jpeg';
import image19 from '../assets/achievements/aww4.jpeg';
import image20 from '../assets/achievements/aww6.jpeg';
import image21 from '../assets/achievements/aww7.jpeg';
import image22 from '../assets/achievements/aww8.jpeg';
import image23 from '../assets/achievements/aww9.jpeg';
// import image24 from '../assets/achievements/achievelast.jpeg';






 
import '../css/abtPageHeader.css'; // Ensure the path is correct
import '../css/achievements.css'
import AbtPageHeader from './AbtPageHeader';
import Navbar from '../components/Navbar.jsx'
import Footer from './Footer.jsx';

const Achievements = () => {
  return (  
         <>
         <Navbar/>
         <AbtPageHeader   path="/achievements" name="About Us" />
 
        <div className="gallery">
          <h1 >ACHIEVEMENTS</h1>
        
       <div className="gallery-grid">
            <div className="gallery-item">
              <img src={image1} alt="Image 1" />
            </div>
            <div className="gallery-item">
              <img src={image2} alt="Image 2" />
            </div>
            <div className="gallery-item">
              <img src={image3} alt="Image 3" />
           
            </div>
            
          </div>

          <div className="gallery-grid">
            <div className="gallery-item">
              <img src={image4} alt="Image 1" />
            </div>
            <div className="gallery-item">
              <img src={image5} alt="Image 2" />
            </div>
            <div className="gallery-item">
              <img src={image6} alt="Image 3" />
            </div>
            <div className="gallery-item">
              <img src={image7} alt="Image 4" />
            </div>
            <div className="gallery-item">
              <img src={image8} alt="Image 4" />
            </div>
            <div className="gallery-item">
              <img src={image9} alt="Image 4" />
            </div>
            <div className="gallery-item">
              <img src={image10} alt="Image 4" />
            </div>
            <div className="gallery-item">
              <img src={image11} alt="Image 4" />
            </div>
            <div className="gallery-item">
              <img src={image12} alt="Image 4" />
            </div>
            <div className="gallery-item">
              <img src={image13} alt="Image 4" />
            </div>
            <div className="gallery-item">
              <img src={image14} alt="Image 4" />
            </div>
            <div className="gallery-item">
              <img src={image15} alt="Image 4" />
            </div>



            <div className="gallery-item">
              <img src={image16} alt="Image 4" />
            </div>
            <div className="gallery-item">
              <img src={image17} alt="Image 4" />
            </div>
            <div className="gallery-item">
              <img src={image18} alt="Image 4" />
            </div>
            <div className="gallery-item">
              <img src={image19} alt="Image 4" />
            </div>
            <div className="gallery-item">
              <img src={image20} alt="Image 4" />
            </div>

            <div className="gallery-item">
              <img src={image21} alt="Image 4" />
            </div>
            <div className="gallery-item">
              <img src={image22} alt="Image 4" />
            </div>
            <div className="gallery-item">
              <img src={image23} alt="Image 4" />
            </div>
            
            

          </div>
        </div>

        <Footer/>
        </>
  );
}

export default Achievements;
