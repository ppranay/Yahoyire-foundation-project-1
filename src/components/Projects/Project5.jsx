import React from 'react';
import '../../css/project.css';
import { Link } from 'react-router-dom';
import project from '../../assets/go green 2/gg vd.mp4';

import projectImage1 from '../../assets/emp/WhatsApp Image 2024-07-28 at 4.58.48 PM.jpeg' ;
import projectImage2 from '../../assets/emp/WhatsApp Image 2024-07-28 at 4.58.49 PM (1).jpeg' ;
import projectImage3 from '../../assets/emp/WhatsApp Image 2024-07-28 at 4.58.49 PM.jpeg' ;
import projectImage4 from '../../assets/emp/WhatsApp Image 2024-07-28 at 4.58.50 PM.jpeg' ;
import projectImage5 from '../../assets/emp/WhatsApp Image 2024-07-28 at 5.06.17 PM.jpeg' ;
import projectImage6 from '../../assets/emp/WhatsApp Image 2024-07-28 at 5.06.18 PM.jpeg'   
import projectImage7 from '../../assets/emp/WhatsApp Image 2024-07-28 at 5.06.19 PM.jpeg';
import projectImage8 from '../../assets/emp/WhatsApp Image 2024-07-28 at 5.06.20 PM (1).jpeg'   
import projectImage9 from '../../assets/emp/WhatsApp Image 2024-07-28 at 5.06.20 PM (2).jpeg'   
 
import PageHeader from '../PageHeader';

const Project5 = () => {
  const items = [
    { src: projectImage1, description: "Project Description 1", type: "image" },
    { src: projectImage2, description: "Project Description 2", type: "image" },
    { src: projectImage3, description: "Project Description 2", type: "image" },
    { src: projectImage4, description: "Project Description 4", type: "image" },
     
    { src: projectImage5, description: "Project Description 5", type: "image" },
    { src: projectImage6, description: "Project Description 6", type: "image" },
    { src: projectImage7, description: "Project Description 7", type: "image" },
    { src: projectImage8, description: "Project Description 8", type: "image" },
    { src: projectImage9, description: "Project Description 9", type: "image" },
 
    
  ];

  return (
    <div>
      <PageHeader title={'Learn And Earn'} />
      <div className="project-top">
        <div><h1>5.Learn And Earn </h1></div>
        <div className="project-section">
          <div className="project-header"></div>
          <div className="project-gallery">
            <p>
            The Employment Project aims to boost job opportunities and economic stability within communities. Key components include offering job training programs, career counseling, and job placement services. The project focuses on skill development through workshops and internships, creating partnerships with local businesses to facilitate hiring, and providing support for entrepreneurship. By addressing both immediate employment needs and long-term career growth, the project seeks to reduce unemployment rates, enhance workforce skills, and promote economic development in the community.
            </p>
            {items.map((item, index) => (
              <div key={index} className="project-box">
                {item.type === "image" ? (
                  <img src={item.src} alt={`Project ${index + 1}`} className="project-image" />
                ) : (
                  <video src={item.src} autoPlay loop controls className="project-video">
                    Your browser does not support the video tag.
                  </video>
                )}
                <div className="project-description">{item.description}</div>
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

export default Project5;
