import React from 'react';
import '../../css/project.css';
import project from '../../assets/PROJECT.mp4';
import { Link } from 'react-router-dom';
import projectImage1 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.41.24 PM.jpeg';
import projectImage2 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.12 PM.jpeg';
import projectImage3 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.16 PM (1).jpeg';
import projectImage4 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.16 PM.jpeg';
import projectImage5 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.17 PM (1).jpeg';
import projectImage6 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.17 PM (2).jpeg';
import projectImage7 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.17 PM.jpeg';
import projectImage8 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.19 PM.jpeg';
import projectImage9 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.20 PM (1).jpeg';
import projectImage10 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.20 PM.jpeg';
import projectImage11 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.27 PM.jpeg';

import projectImage12 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.32 PM (1).jpeg';
import projectImage13 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.33 PM (1).jpeg'
import projectImage14 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.33 PM.jpeg'
import projectImage15 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.34 PM (1).jpeg'
import projectImage16 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.41.24 PM.jpeg'
import projectImage17 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.34 PM (1).jpeg'
import projectImage18 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.34 PM (2).jpeg'
import projectImage19 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.35 PM (1).jpeg'
import projectImage20 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.35 PM.jpeg'
import projectImage21 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.36 PM (1).jpeg'
import projectImage22 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.36 PM (2).jpeg'
import projectImage23 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.36 PM.jpeg'
import projectImage24 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.36 PM (1).jpeg'
import projectImage25 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.37 PM (2).jpeg'
import projectImage26 from '../../assets/empher/WhatsApp Image 2024-07-28 at 1.42.37 PM.jpeg'



// import projectImage23 from '../../assets/go green 2/new g2.jpeg'
import PageHeader from '../PageHeader';

const Project2 = () => {
  const images = [
    { src: projectImage1, description: "Project Description 1" },
    { src: projectImage2, description: "Project Description 2" },
    { src: projectImage3, description: "Project Description 3" },
    { src: projectImage4, description: "Project Description 4" },
    { src: projectImage5, description: "Project Description 5" },
    { src: projectImage6, description: "Project Description 6" },
    { src: projectImage7, description: "Project Description 7" },
    { src: projectImage8, description: "Project Description 8" },
    { src: projectImage9, description: "Project Description 9" },
    { src: projectImage10, description: "Project Description 10" },
    { src: projectImage11, description: "Project Description 11" },
    { src: projectImage12, description: "Project Description 11" },
    { src: projectImage13, description: "Project Description 11" },
    { src: projectImage14, description: "Project Description 11" },
    { src: projectImage15, description: "Project Description 11" },
    { src: projectImage16, description: "Project Description 11" },
    { src: projectImage17, description: "Project Description 11" },
    { src: projectImage18, description: "Project Description 11" },
    { src: projectImage19, description: "Project Description 11" },
    { src: projectImage20, description: "Project Description 11" },
    { src: projectImage21, description: "Project Description 11" },
    { src: projectImage22, description: "Project Description 11" },
    { src: projectImage21, description: "Project Description 11" },
    { src: projectImage23, description: "Project Description 11" },
    { src: projectImage24, description: "Project Description 11" },
    { src: projectImage25, description: "Project Description 11" },
    { src: projectImage2, description: "Project Description 11" },
   



  ];

  return (
    <div>
      <PageHeader title={'EmpowerHer Project'} />
      <video src={project} autoPlay loop muted>
        Your browser does not support the video tag.
      </video>
      <div className="project-top">
        <div><h1>1.EmpowerHer</h1></div>
        <div className="project-section">
          <div className="project-header"></div>
          <div className="project-gallery">
            <p>
            The  EmpowerHer Project is dedicated to promoting gender equality and enhancing the social, economic, and political status of women. This initiative provides resources such as vocational training, educational scholarships, and mentorship programs to help women gain skills, confidence, and independence. The project also focuses on raising awareness about women's rights, advocating for policy changes, and creating support networks for women facing challenges. By fostering a supportive and inclusive environment, the   EmpowerHer Project aims to enable women to reach their full potential, contribute to their communities, and achieve sustainable development.
            </p>
            {images.map((image, index) => (
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

export default Project2;
