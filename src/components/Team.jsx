import React from 'react';
import '../css/team.css';
import vd from '../assets/team.mp4'
// import Social from '../components/SocialMedia'
import { Link } from 'react-router-dom';
// import teamMember1 from '../assets/dr ramesh.jpeg';
// import teamMember2 from '../assets/elija.jpeg';
// import teamMember3 from '../assets/sachin.jpeg';
// import teamMember4 from '../assets/diksha.jpeg';
// import teamMember5 from '../assets/carousel-3.jpg'
// import SocialMedia from '../components/SocialMedia';

const Team = () => {


  return (
    <>
  <h1>TEAM MEMBERS</h1>
{/* 
      <div className="team-section">
        <div className="team-header">
          <h2>OUR TEAM</h2>
          <p>Meet our team members</p>
        </div>
        <div className="team-members">
          <div className="team-row">
            <div className="team-member">
              <div className="member-photo-container">
                <img src={teamMember1} alt="Lynda Edward" className="member-photo" />
              </div>
              <h3>Dr. Ramesh Borkute</h3>
              <p>CEO-YEHOVA YIRE FOUNDATION</p>
              <div className="social-icons">
                <SocialMedia />

              </div>
            </div>
            <div className="team-member">
              <div className="member-photo-container">
                <img src={teamMember2} alt="Eva Clevis" className="member-photo" />
              </div>
              <h3>Ms. Elija R Borkute</h3>
              <p>PRESIDENT </p>
              <div className="social-icons">
                <SocialMedia />

              </div>
            </div>
            <div className="team-member">
              <div className="member-photo-container">
                <img src={teamMember3} alt="Charlie Smith" className="member-photo" />
              </div>
              <h3>Mr. Sachin H. Panghate</h3>
              <p>Voice President</p>
              <div className="social-icons">
                <SocialMedia />

              </div>
            </div>
          </div>
          <div className="team-row second-row">
            <div className="team-member">
              <div className="member-photo-container">
                <img src={teamMember4} alt="Member 4" className="member-photo" />
              </div>
              <h3>Shrimati Deeksha Nanavare</h3>
              <p>Auditor</p>
              <div className="social-icons">
                <SocialMedia />

              </div>
            </div>
            <div className="team-member">
              <div className="member-photo-container">
                <img src={teamMember5} alt="Member 5" className="member-photo" />
              </div>
              <h3>Durga Mandal</h3>
              <p>Manager</p>
              <div className="social-icons">
                <SocialMedia />

              </div>
            </div>

            <div className="team-member">
              <div className="member-photo-container">
                <img src={teamMember5} alt="Member 5" className="member-photo" />
              </div>
              <h3>Ku. Nikita Gadge</h3>
              <p>Accountant</p>
              <div className="social-icons">
                <SocialMedia />

              </div>
            </div>
          </div>
        </div>
      </div> */}








<video src={vd}  autoPlay loop muted>
          Your browser does not support the video tag.
        </video>


      <div>
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
      </div>
    </>
  );
};

export default Team;
