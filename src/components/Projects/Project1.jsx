import React from 'react';
import '../../css/project.css';
import { Link } from 'react-router-dom';
import project from '../../assets/go green 2/gg vd.mp4';
import projectImage1 from '../../assets/g1.jpg';
import projectImage2 from '../../assets/g2.jpg';
import projectImage3 from '../../assets/g3.jpeg';
import projectImage4 from '../../assets/go green/WhatsApp Image 2024-07-28 at 12.56.28 PM.jpeg';
import projectImage5 from '../../assets/go green/WhatsApp Image 2024-07-28 at 12.56.29 PM (1).jpeg';
import projectImage6 from '../../assets/go green/WhatsApp Image 2024-07-28 at 12.56.29 PM.jpeg';
import projectImage7 from '../../assets/go green/WhatsApp Image 2024-07-28 at 12.56.30 PM (1).jpeg';
import projectImage8 from '../../assets/go green/WhatsApp Image 2024-07-28 at 12.56.30 PM.jpeg';
import projectImage9 from '../../assets/go green/WhatsApp Image 2024-07-28 at 12.57.47 PM.jpeg';
import projectImage10 from '../../assets/go green/WhatsApp Image 2024-07-28 at 12.57.48 PM (1).jpeg';
import projectImage11 from '../../assets/go green/WhatsApp Image 2024-07-28 at 12.57.48 PM.jpeg';
import projectImage12 from '../../assets/go green 2/WhatsApp Image 2024-07-28 at 1.00.36 PM.jpeg';
import projectImage13 from '../../assets/go green 2/WhatsApp Image 2024-07-28 at 1.01.57 PM.jpeg';
import projectImage14 from '../../assets/go green 2/WhatsApp Image 2024-07-28 at 1.01.58 PM (1).jpeg';
import projectImage15 from '../../assets/go green 2/WhatsApp Image 2024-07-28 at 1.01.58 PM.jpeg';
import projectImage16 from '../../assets/go green 2/WhatsApp Image 2024-07-28 at 1.03.26 PM (1).jpeg';
import projectImage17 from '../../assets/go green 2/WhatsApp Image 2024-07-28 at 1.03.26 PM.jpeg';
import projectImage18 from '../../assets/go green 2/WhatsApp Image 2024-07-28 at 1.03.27 PM (1).jpeg';
import projectImage19 from '../../assets/go green 2/WhatsApp Image 2024-07-28 at 1.03.27 PM (2).jpeg';
import projectImage20 from '../../assets/go green 2/WhatsApp Image 2024-07-28 at 1.03.27 PM.jpeg';
import projectImage21 from '../../assets/go green 2/WhatsApp Image 2024-07-28 at 12.58.52 PM.jpeg';
import PageHeader from '../PageHeader';

const Project1 = () => {
  const items = [
    { src: projectImage1, description: "Project Description 1", type: "image" },
    { src: project, description: "Project Video", type: "video" },
    { src: projectImage2, description: "Project Description 2", type: "image" },
    { src: projectImage4, description: "Project Description 4", type: "image" },
    { src: projectImage5, description: "Project Description 5", type: "image" },
    { src: projectImage6, description: "Project Description 6", type: "image" },
    { src: projectImage7, description: "Project Description 7", type: "image" },
    { src: projectImage8, description: "Project Description 8", type: "image" },
    { src: projectImage9, description: "Project Description 9", type: "image" },
    { src: projectImage10, description: "Project Description 10", type: "image" },
    { src: projectImage11, description: "Project Description 11", type: "image" },
    { src: projectImage12, description: "Project Description 12", type: "image" },
    { src: projectImage13, description: "Project Description 13", type: "image" },
    { src: projectImage14, description: "Project Description 14", type: "image" },
    { src: projectImage15, description: "Project Description 15", type: "image" },
    { src: projectImage16, description: "Project Description 16", type: "image" },
    { src: projectImage17, description: "Project Description 17", type: "image" },
    { src: projectImage18, description: "Project Description 18", type: "image" },
    { src: projectImage19, description: "Project Description 19", type: "image" },
    { src: projectImage20, description: "Project Description 20", type: "image" },
    { src: projectImage21, description: "Project Description 21", type: "image" },
  ];

  return (
    <div>
      <PageHeader title={'Go Green Project'} />
      <div className="project-top">
        <div><h1>1. Go Green Project</h1></div>
        <div className="project-section">
          <div className="project-header"></div>
          <div className="project-gallery">
            <p>
              The Go Green Project is an environmental initiative aimed at promoting sustainable living and reducing carbon footprints. This project focuses on various activities such as tree planting, recycling drives, and educational workshops on eco-friendly practices. By engaging local communities, schools, and businesses, the Go Green Project encourages the adoption of renewable energy sources, conservation of natural resources, and reduction of waste. The ultimate goal is to create a cleaner, healthier environment for future generations and foster a culture of environmental responsibility and awareness.
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

export default Project1;
