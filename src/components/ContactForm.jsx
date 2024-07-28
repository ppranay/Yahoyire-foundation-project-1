import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../css/contactForm.css';
import PhoneIcon from '../assets/circle.png'; // Adjust the path as per your project structure
import EmailIcon from '../assets/mail.png'; // Adjust the path as per your project structure
import AddressIcon from '../assets/location.png'; // Adjust the path as per your project structure
import SocialMedia from './SocialMedia';
// import UKAddressIcon from './uk-address.png'; // Adjust the path as per your project structure

const ContactForm = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={fade} className="contact-form-container">


<div class="contact-form-container">
        <div class="contact-head">
          <h1>CONTACT US</h1>
        </div>
        <div class="contact-form">
          <h3>Get in Touch</h3>
          <p>Please fill out the form below and we will get back to you as soon as possible.</p>
          <div class="form-row">
            <div class="form-group form-group-half">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div class="form-group form-group-half">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group form-group-half">
              <label for="phone">Phone</label>
              <input type="text" id="phone" name="phone" />
            </div>
            <div class="form-group form-group-half">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <div class="form-buttons">
            <button type="submit" class="send-btn">Send</button>
            <button type="reset" class="reset-btn">Reset</button>
          </div>
        </div>

      </div>
      <div className="contact-details">
        <div className="contact-item">
          <img src={PhoneIcon} alt="Phone" />
          <div>
            <h3>Phone</h3>
            <p>+91 9823915612</p>
          </div>
        </div>
        <div className="contact-item">
          <img src={EmailIcon} alt="Email" />
          <div>
            <h3>Email</h3>
            <p>yyf.ngo@gmail.com </p>
          </div>
        </div>
        <div className="contact-item">
          <img src={AddressIcon} alt="Address" />
          <div>
            <h3>Address</h3>
            <p> YEHOVA YIRE FOUNDATION 2nd floor, civil, warora naka ,   chandrapur 442401</p>
          </div>
        </div>
        <div className="contact-item">
          {/* <img src={UKAddressIcon} alt="UK Address" /> */}
          <div>
            <SocialMedia />
          </div>
        </div>
      </div>
      

    </animated.div>
  );
};

export default ContactForm;
