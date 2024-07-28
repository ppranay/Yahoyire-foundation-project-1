import React from 'react';
import '../../css/project.css';
import { Link } from 'react-router-dom';
// import project from '../../assets/go green 2/gg vd.mp4';
 
import projectImage1 from '../../assets/eduelevate/WhatsApp Image 2024-07-28 at 3.36.22 PM (1).jpeg'
import projectImage2 from  '../../assets/eduelevate/WhatsApp Image 2024-07-28 at 3.36.22 PM.jpeg'
import projectImage3 from  '../../assets/eduelevate/WhatsApp Image 2024-07-28 at 3.36.23 PM.jpeg'

import projectImage4 from '../../assets/eduelevate/WhatsApp Image 2024-07-28 at 4.25.11 PM.jpeg'
import projectImage5 from '../../assets/eduelevate/WhatsApp Image 2024-07-28 at 3.38.35 PM.jpeg'
import projectImage6 from '../../assets/eduelevate/WhatsApp Image 2024-07-28 at 3.38.40 PM (2).jpeg'
import projectImage7 from '../../assets/school/WhatsApp Image 2024-07-28 at 4.44.10 PM.jpeg'
import projectImage8 from '../../assets/school/WhatsApp Image 2024-07-28 at 4.31.58 PM.jpeg'
import projectImage9 from '../../assets/school/WhatsApp Image 2024-07-28 at 4.28.32 PM.jpeg'
import projectImage10 from '../../assets/school/WhatsApp Image 2024-07-28 at 4.28.54 PM.jpeg'
import projectImage11 from '../../assets/school/WhatsApp Image 2024-07-28 at 4.29.15 PM.jpeg'
import projectImage12 from '../../assets/school/WhatsApp Image 2024-07-28 at 4.29.37 PM.jpeg'
import projectImage13 from '../../assets/school/WhatsApp Image 2024-07-28 at 4.31.12 PM.jpeg'
import projectImage14 from '../../assets/school/WhatsApp Image 2024-07-28 at 4.31.37 PM.jpeg'
import projectImage15 from '../../assets/school/WhatsApp Image 2024-07-28 at 4.33.53 PM.jpeg'
import projectImage16 from '../../assets/school/WhatsApp Image 2024-07-28 at 4.50.28 PM.jpeg'

import projectImage17 from '../../assets/school/WhatsApp Image 2024-07-28 at 4.50.29 PM (1).jpeg'
import projectImage18 from '../../assets/school/WhatsApp Image 2024-07-28 at 4.50.29 PM.jpeg'




import PageHeader from '../PageHeader';

const Project4 = () => {
  const items = [
    { src: projectImage1, description: "Project Description 1", type: "image" },
    { src: projectImage2, description: "Project Description 2", type: "image" },
    { src: projectImage3, description: "Project Description 2", type: "image" },
    { src: projectImage4, description: "Project Description 4", type: "image" },
    { src: projectImage5, description: "Project Description 5", type: "image" },
    { src: projectImage6, description: "Project Description 6", type: "image" },
    
    
  ];


  const item = [
   
    { src: projectImage7, description: "Project Description 7", type: "image" },
    { src: projectImage8, description: "Project Description 7", type: "image" },
    { src: projectImage9, description: "Project Description 7", type: "image" },
    { src: projectImage10, description: "Project Description 7", type: "image" },
    { src: projectImage11, description: "Project Description 7", type: "image" },
    { src: projectImage12, description: "Project Description 7", type: "image" },
    { src: projectImage13, description: "Project Description 7", type: "image" },
    { src: projectImage14, description: "Project Description 7", type: "image" },
    { src: projectImage15, description: "Project Description 15", type: "image" },
    
  ];
  
  const College = [
   
   
    { src: projectImage16, description: "Project Description 16", type: "image" },
    { src: projectImage17, description: "Project Description 16", type: "image" },
    { src: projectImage18, description: "Project Description 16", type: "image" },
  ];

  return (
    <div>
      <PageHeader title={' EduElevate Project'} />
      <div className="project-top">
        <div><h1>1.Special School</h1></div>
        <div className="project-section">
          <div className="project-header"></div>
          <div className="project-gallery">
            {/* <p>
            The Health Project aims to improve the overall well-being of communities through accessible healthcare and preventive measures. This initiative includes establishing mobile clinics, organizing health camps, and providing essential medical services to underserved populations. The project also emphasizes health education, promoting practices like proper nutrition, hygiene, and regular exercise. By addressing both immediate health needs and long-term wellness strategies, the Health Project seeks to reduce disease prevalence, enhance health literacy, and ensure that everyone has the opportunity to lead a healthy life.
            </p> */}
             {items.map((image, index) => (
              <div key={index} className="project-box">
                <img src={image.src} alt={`Project ${index + 1}`} className="project-image" />
                <div className="project-description">{image.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div><h1>2. School</h1></div>
        <div className="project-section">
          <div className="project-header"></div>
          <div className="project-gallery">
            {/* <p>
            The Health Project aims to improve the overall well-being of communities through accessible healthcare and preventive measures. This initiative includes establishing mobile clinics, organizing health camps, and providing essential medical services to underserved populations. The project also emphasizes health education, promoting practices like proper nutrition, hygiene, and regular exercise. By addressing both immediate health needs and long-term wellness strategies, the Health Project seeks to reduce disease prevalence, enhance health literacy, and ensure that everyone has the opportunity to lead a healthy life.
            </p> */}
             {item.map((image, index) => (
              <div key={index} className="project-box">
                <img src={image.src} alt={`Project ${index + 1}`} className="project-image" />
                <div className="project-description">{image.description}</div>
              </div>
            ))}
          </div>
        </div>


        <div><h1>3.College</h1></div>
        <div className="project-section">
          <div className="project-header"></div>
          <div className="project-gallery">
            {/* <p>
            The Health Project aims to improve the overall well-being of communities through accessible healthcare and preventive measures. This initiative includes establishing mobile clinics, organizing health camps, and providing essential medical services to underserved populations. The project also emphasizes health education, promoting practices like proper nutrition, hygiene, and regular exercise. By addressing both immediate health needs and long-term wellness strategies, the Health Project seeks to reduce disease prevalence, enhance health literacy, and ensure that everyone has the opportunity to lead a healthy life.
            </p> */}
             {College.map((image, index) => (
              <div key={index} className="project-box">
                <img src={image.src} alt={`Project ${index + 1}`} className="project-image" />
                <div className="project-description">{image.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fundraiser-section">
        <Link to="/MembershipForm">
          <button className="fundraiser-button">BECOME A MEMBER</button>
        </Link>
        <Link to="/MembershipForm">
          <button className="fundraiser-button">DONATE NOW</button>
        </Link>
        <Link to="/MembershipForm">
          <button className="fundraiser-button">BECOME A VOLUNTEER</button>
        </Link>
      </div>
    </div>
  );
};

export default Project4;
