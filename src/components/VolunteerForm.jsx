// src/PartnershipForm.js
import React, { useState } from 'react';
import '../css/membership.css';
import logo from '../assets/faundation.png'
import MyButton from '../components/MyButton.jsx'

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: '',
    website: '',
    contactName: '',
    contactPosition: '',
    contactPhone: '',
    contactEmail: '',
    partnershipTypes: [],
    interestAreas: [],
    companyDescription: '',
    previousExperience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e, category) => {
    const { name, checked } = e.target;
    setFormData((prevData) => {
      const updatedList = checked
        ? [...prevData[category], name]
        : prevData[category].filter((item) => item !== name);
      return { ...prevData, [category]: updatedList };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <div className="form-top">
        <img src={logo} alt="Foundation Logo" />
        <h1>Volunteer Application Form</h1>
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h3>Personal Information:</h3>
        <div className="form-group">
          <label htmlFor="companyName">Full Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Date of Birth::</label>
          <input
            type="datetime-local"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="datetime-local"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">Pincode:</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
         

        <h3>Availability</h3>
        <div className="form-group">
          <label htmlFor="contactName">Days Available in a month:</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactPosition">Contribution Time (in a Day):</label>
          <input
            type="text"
            id="contactPosition"
            name="contactPosition"
            value={formData.contactPosition}
            onChange={handleChange}
            required
          />
        </div>
        
        
        <h3>Areas of Interest(Check all that apply):</h3>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="Financial Support"
              checked={formData.partnershipTypes.includes('Financial Support')}
              onChange={(e) => handleCheckboxChange(e, 'partnershipTypes')}
            />
            Health Initiatives
          </label>
          <label>
            <input
              type="checkbox"
              name="In-Kind Donations"
              checked={formData.partnershipTypes.includes('In-Kind Donations')}
              onChange={(e) => handleCheckboxChange(e, 'partnershipTypes')}
            />
            In-Kind Donations
          </label>
          <label>
            <input
              type="checkbox"
              name="Volunteer Engagement"
              checked={formData.partnershipTypes.includes('Volunteer Engagement')}
              onChange={(e) => handleCheckboxChange(e, 'partnershipTypes')}
            />
            Children's Education
          </label>
          <label>
            <input
              type="checkbox"
              name="Program Sponsorship"
              checked={formData.partnershipTypes.includes('Program Sponsorship')}
              onChange={(e) => handleCheckboxChange(e, 'partnershipTypes')}
            />
            Employment Programs
          </label>
          <label>
            <input
              type="checkbox"
              name="Event Participation"
              checked={formData.partnershipTypes.includes('Event Participation')}
              onChange={(e) => handleCheckboxChange(e, 'partnershipTypes')}
            />
            Environmental Awareness
          </label>
          <label>
            <input
              type="checkbox"
              name="Other"
              checked={formData.partnershipTypes.includes('Other')}
              onChange={(e) => handleCheckboxChange(e, 'partnershipTypes')}
            />
            Other
          </label>
        </div>

        <h3>Skills and Experience: (Check all that apply):</h3>
        <div className="form-group">
          <label htmlFor="contactName">Relevant Experience:</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            required
          />
          <label>
          Special Skills
            <input
              type="text"
              name="Children's Education"
              checked={formData.interestAreas.includes("Children's Education")}
              onChange={(e) => handleCheckboxChange(e, 'interestAreas')}
            />
           
          </label>
          <label>
          Certificates (if any)
            <input
              type="text"
              name="Employment Programs"
              checked={formData.interestAreas.includes('Employment Programs')}
              onChange={(e) => handleCheckboxChange(e, 'interestAreas')}
            />
          
          </label>
          
        </div>

        <h3>Emergency Contact:</h3>
        <div className="form-group">
          <label htmlFor="contactPosition">Name:</label>
          <input
            type="text"
            id="contactPosition"
            name="contactPosition"
            value={formData.contactPosition}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactPosition">Relationship :</label>
          <input
            type="text"
            id="contactPosition"
            name="contactPosition"
            value={formData.contactPosition}
            onChange={handleChange}
            required
          />
        </div>


        <div className="form-group">
          <label htmlFor="contactPosition"> Phone Number :</label>
          <input
            type="number"
            id="contactPosition"
            name="contactPosition"
            value={formData.contactPosition}
            onChange={handleChange}
            required
          />
        </div>
        
        <h3>Please Upload Your Documents:</h3>
        <div className="form-group">
          <label htmlFor="contactPosition">Adhar Card (Front Side):</label>
          <input
            type="file"
            id="contactPosition"
            name="contactPosition"
            value={formData.contactPosition}
            onChange={handleChange}
            required
          />
          <label htmlFor="contactPosition">Adhar Card (Back Side):</label>
          <input
            type="file"
            id="contactPosition"
            name="contactPosition"
            value={formData.contactPosition}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactPosition">Pan Card :</label>
          <input
            type="file"
            id="contactPosition"
            name="contactPosition"
            value={formData.contactPosition}
            onChange={handleChange}
            required
          />
        </div>

        {/* <h3>Agreement <h6>I agree to abide by the rules and regulations of Yehova Yire Foundation. I understand that my participation is voluntary and I will not receive monetary compensation.
        </h6></h3>
        <div className="form-group">
          <label htmlFor="signature">Authorized Signature:</label>
          <input
            type="file"
            id="signature"
            name="signature"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            required
          />
        </div> */}




        <button type="button" class="p-1  btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
         Submit
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel"> Volunteer Rules and Regulations:</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              
           
           <ol>
            <li><b>Attendance:-</b>
            <p>Volunteers must commit to the agreed schedule and notify the coordinator of any changes.</p></li>

            <li><b>Conduct  :-</b>
              <p> Volunteers must maintain professionalism and respect towards staff, fellow volunteers, and beneficiaries.
              Confidentiality: Volunteers must respect the privacy of the individuals and information they work with.</p>            
            </li>

            <li><b>Training:-</b>
              <p> Volunteers are required to attend orientation and any relevant training sessions.</p>            
            </li>

            <li><b> Safety :-</b>
              <p> Volunteers must adhere to safety guidelines and report any hazards immediately.</p>            
            </li>

            <li><b> Confidentiality :-</b>
              <p>Volunteers must respect the privacy of the individuals and information they work with.</p>            
            </li>

            <li><b>Reporting  :-</b>
              <p>Volunteers should report their activities and hours regularly to the volunteer coordinator.</p>            
            </li>

            <li><b> Termination :-</b>
              <p>The NGO reserves the right to terminate volunteer services for misconduct or breach of rules.</p>            
            </li>

            <label>
              
            <input
            
              type="checkbox"
              name="Other"
              checked={formData.partnershipTypes.includes('Other')}
              onChange={(e) => handleCheckboxChange(e, 'partnershipTypes')}
            />
           I agree to abide by the rules and regulations of Yehova Yire Foundation. I understand that my participation is voluntary and I will not receive monetary compensation.
          </label>
           </ol>
              </div>
              <div class="modal-footer-1">
            
                  <MyButton/>
                  
                 
              </div>
            </div>
          </div>
        </div>
       
      </form>

    </>
  );
};

export default VolunteerForm;
