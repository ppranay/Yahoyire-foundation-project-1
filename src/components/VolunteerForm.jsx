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
          <label htmlFor="zipCode">ZIP:</label>
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
          <label htmlFor="contactName">Days Available::</label>
          <input
            type="date"
            id="contactName"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactPosition">Times Available::</label>
          <input
            type="time"
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
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="Health Initiatives"
              checked={formData.interestAreas.includes('Health Initiatives')}
              onChange={(e) => handleCheckboxChange(e, 'interestAreas')}
            />
            Relevant Experience
          </label>
          <label>
            <input
              type="checkbox"
              name="Children's Education"
              checked={formData.interestAreas.includes("Children's Education")}
              onChange={(e) => handleCheckboxChange(e, 'interestAreas')}
            />
            Special Skills
          </label>
          <label>
            <input
              type="checkbox"
              name="Employment Programs"
              checked={formData.interestAreas.includes('Employment Programs')}
              onChange={(e) => handleCheckboxChange(e, 'interestAreas')}
            />
            Certifications (if any)
          </label>
          <label>
            <input
              type="checkbox"
              name="Environmental Awareness"
              checked={formData.interestAreas.includes('Environmental Awareness')}
              onChange={(e) => handleCheckboxChange(e, 'interestAreas')}
            />
            Environmental Awareness
          </label>
        </div>

        <h3>Emergency Contact:</h3>
        <div className="form-group">
          <label htmlFor="contactPosition">Name:</label>
          <input
            type="time"
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
            type="time"
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
            type="time"
            id="contactPosition"
            name="contactPosition"
            value={formData.contactPosition}
            onChange={handleChange}
            required
          />
        </div>
        
         

        <h3>Agreement <h6>I agree to abide by the rules and regulations of Yehova Yire Foundation. I understand that my participation is voluntary and I will not receive monetary compensation.
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
        </div>




        <button type="button" class="  btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
         Submit
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel"> Rules and Regulations for Corporate/Group Members</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              
           
           <ol>
            <li><b>Commitment:-</b>
            <p>Companies/Groups must fulfill their commitments as agreed in the partnership arrangement.</p></li>

            <li><b>Conduct  :-</b>
              <p> Partners must conduct themselves in a manner that upholds the values and reputation of the NGO.</p>            
            </li>

            <li><b>Transparency  :-</b>
              <p> Partners should provide accurate information about their activities and any support they offer.</p>            
            </li>

            <li><b> Communication :-</b>
              <p>Regular communication with the NGO is required to ensure alignment and coordination.</p>            
            </li>

            <li><b> Confidentiality :-</b>
              <p>Sensitive information shared between the NGO and the partner must be kept confidential.</p>            
            </li>

            <li><b>Reporting  :-</b>
              <p> Partners should report on their contributions and involvement as agreed upon in the partnership</p>            
            </li>

            <li><b> Compliance :-</b>
              <p>Partners must comply with all relevant legal and regulatory requirements related to their support of the NGO.</p>            
            </li>


            <li><b>  Termination:-</b>
              <p>The NGO reserves the right to terminate the partnership if the company/group fails to adhere to the agreed terms or engages in conduct detrimental to the NGO’s mission.</p>            
            </li>

           </ol>
              </div>
              <div class="modal-footer-1">
                {/* <button type="button" class=" " data-bs-dismiss="modal">Close</button> */}
                  <MyButton/>
                  
                 
              </div>
            </div>
          </div>
        </div>
        {/* <div className="form-group submit-button">
       <MyButton/>
      </div> */}
      </form>

    </>
  );
};

export default VolunteerForm;
