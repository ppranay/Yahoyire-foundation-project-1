import React from 'react';
import '../css/project.css';
import { Link } from 'react-router-dom';
import projectImage1 from '../assets/g1.jpg';
import projectImage2 from '../assets/g2.jpg';
import projectImage3 from '../assets/g3.jpeg';
import Navbar from './Navbar';
import Footer from './Footer';
import Project1 from '../components/Projects/Project1';
import Project2 from './Projects/Project2';
import Project3 from './Projects/Project3';
import Project4 from './Projects/Project4';
import Project5 from './Projects/Project5';


const Projects = () => {
    return (

        <>
       
            <Navbar />
            <Project1 />
            <Project2/>
            <Project3/>
            <Project4/>
            <Project5/>
          
           


            <div className="project-top">
                <div><h1>6.GrowthBridge</h1></div>
                <div className="project-section">
                    <div className="project-header">
                        {/* <h1>OUR PROJECTS</h1> */}
                    </div>
                    <div className="project-gallery">
                        <p>Our mission is to enhance economic stability and growth in communities by providing resources, training, and support for job creation, entrepreneurship, and sustainable practices. We envision thriving communities with robust economic opportunities and improved quality of life. We value empowerment, sustainability, equity, innovation, collaboration, and integrity. Our goals are to create jobs, provide skill development, support entrepreneurship, improve financial literacy, promote sustainable practices, and strengthen local economies.</p>
                        <div className="project-box">
                            <img src={projectImage1} alt="Project 1" className="project-image" />
                            <div className="project-description">Project Description 1</div>
                        </div>
                        <div className="project-box">
                            <img src={projectImage2} alt="Project 2" className="project-image" />
                            <div className="project-description">Project Description 2</div>
                        </div>
                        <div className="project-box">
                            <img src={projectImage3} alt="Project 3" className="project-image" />
                            <div className="project-description">Project Description 3</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Projects;
