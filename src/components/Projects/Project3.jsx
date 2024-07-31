import React from 'react';
import '../../css/project.css';
import { Link } from 'react-router-dom';
import project from '../../assets/health/health.mp4';
 
import projectImage4 from '../../assets/health/WhatsApp Image 2024-07-28 at 1.54.59 PM (1).jpeg' ;
import projectImage5 from '../../assets/health/WhatsApp Image 2024-07-28 at 1.55.06 PM.jpeg' ;
import projectImage6 from '../../assets/health/WhatsApp Image 2024-07-28 at 1.54.59 PM.jpeg'   
import projectImage7 from '../../assets/health/WhatsApp Image 2024-07-28 at 1.55.00 PM (1).jpeg';
import projectImage8 from '../../assets/health/WhatsApp Image 2024-07-28 at 1.55.00 PM (2).jpeg'   
// import projectImage9 from '../../assets/health/WhatsApp Image 2024-07-28 at 1.55.00 PM.jpeg'   
import projectImage10 from '../../assets/health/WhatsApp Image 2024-07-28 at 1.55.01 PM (1).jpeg';
import projectImage11 from '../../assets/health/WhatsApp Image 2024-07-28 at 1.55.01 PM.jpeg'   
import projectImage12 from '../../assets/health/WhatsApp Image 2024-07-28 at 1.55.02 PM (1).jpeg'   ;
import projectImage13 from '../../assets/health/WhatsApp Image 2024-07-28 at 1.55.02 PM (2).jpeg';
import projectImage14 from '../../assets/health/WhatsApp Image 2024-07-28 at 1.55.02 PM.jpeg';
import projectImage15 from '../../assets/health/WhatsApp Image 2024-07-28 at 1.55.03 PM (1).jpeg'   ;
import projectImage16 from '../../assets/health/WhatsApp Image 2024-07-28 at 1.55.03 PM (2).jpeg';
import projectImage17 from '../../assets/health/WhatsApp Image 2024-07-28 at 1.55.08 PM (1).jpeg'   ;
 
import projectImage21 from '../../assets/health/WhatsApp Image 2024-07-28 at 1.55.05 PM (1).jpeg';
import PageHeader from '../PageHeader';
import Navbar from '../Navbar';

const Project1 = () => {
  const items = [
    // { src: projectImage1, description: "Project Description 1", type: "image" },
    // { src: projectImage2, description: "Project Description 2", type: "image" },
    // { src: projectImage3, description: "Project Description 2", type: "image" },
    { src: projectImage4, description: "Project Description 4", type: "image" },
    { src: project, description: "Project Video", type: "video" },
    { src: projectImage5, description: "Project Description 5", type: "image" },
    { src: projectImage6, description: "Project Description 6", type: "image" },
    { src: projectImage7, description: "Project Description 7", type: "image" },
    { src: projectImage8, description: "Project Description 8", type: "image" },
    // { src: projectImage9, description: "Project Description 9", type: "image" },
    { src: projectImage10, description: "Project Description 10", type: "image" },
    { src: projectImage11, description: "Project Description 11", type: "image" },
    { src: projectImage12, description: "Project Description 12", type: "image" },
    { src: projectImage13, description: "Project Description 13", type: "image" },
    { src: projectImage14, description: "Project Description 14", type: "image" },
    { src: projectImage15, description: "Project Description 15", type: "image" },
    { src: projectImage16, description: "Project Description 16", type: "image" },
    { src: projectImage17, description: "Project Description 17", type: "image" },
    // { src: projectImage18, description: "Project Description 18", type: "image" },
    // { src: projectImage19, description: "Project Description 19", type: "image" },
    // { src: projectImage20, description: "Project Description 20", type: "image" },
    { src: projectImage21, description: "Project Description 21", type: "image" },
  ];

  return (
    <div>
        <Navbar/>
      <PageHeader title={'HealthRise Project'} />
      <div className="project-top">
        <div><h1>3. Health Rise Project</h1></div>
        <div className="project-section">
          <div className="project-header"></div>
          <div className="project-gallery">
            <p>
            The HealthRise Project aims to improve the overall well-being of communities through accessible healthcare and preventive measures. This initiative includes establishing mobile clinics, organizing health camps, and providing essential medical services to underserved populations. The project also emphasizes health education, promoting practices like proper nutrition, hygiene, and regular exercise. By addressing both immediate health needs and long-term wellness strategies, the HealthRise Project seeks to reduce disease prevalence, enhance health literacy, and ensure that everyone has the opportunity to lead a healthy life.
            </p>
            {items.map((item, index) => (
              <div key={index} className="project-box">
                {item.type === "image" ? (
                  <img src={item.src} alt={`Project ${index + 1}`} className="project-image" />
                ) : (
                  <video src={item.src} autoPlay loop controls className="project">
                    Your browser does not support the video tag.
                  </video>
                )}
                {/* <div className="project-description">{item.description}</div> */}
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

export default Project1;
