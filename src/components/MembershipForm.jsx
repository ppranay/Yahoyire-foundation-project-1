// src/PartnershipForm.js
import React, { useState } from 'react';
import '../css/membership.css';
import logo from '../assets/faundation.png'
import MyButton from '../components/MyButton.jsx'

const PartnershipForm = () => {
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
      <h1>BECOME A MEMBER OF THE ENERGETIC TEAM</h1>
    </div>
    <form className="form-container" onSubmit={handleSubmit}>
      <h3>Company/Group Information</h3>
      <div className="form-group">
        <label htmlFor="companyName">Company/Group Name:</label>
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
        <label htmlFor="address">Address:</label>
        <input
          type="text"
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
      <div className="form-group">
        <label htmlFor="website">Website (if applicable):</label>
        <input
          type="url"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      <h3>Contact Person</h3>
      <div className="form-group">
        <label htmlFor="contactName">Full Name:</label>
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
        <label htmlFor="contactPosition">Position:</label>
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
        <label htmlFor="contactPhone">Phone Number:</label>
        <input
          type="tel"
          id="contactPhone"
          name="contactPhone"
          value={formData.contactPhone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contactEmail">Email:</label>
        <input
          type="email"
          id="contactEmail"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
          required
        />
      </div>

      <h3>Type of Partnership (Check all that apply):</h3>
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="Financial Support"
            checked={formData.partnershipTypes.includes('Financial Support')}
            onChange={(e) => handleCheckboxChange(e, 'partnershipTypes')}
          />
          Financial Support
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
          Volunteer Engagement
        </label>
        <label>
          <input
            type="checkbox"
            name="Program Sponsorship"
            checked={formData.partnershipTypes.includes('Program Sponsorship')}
            onChange={(e) => handleCheckboxChange(e, 'partnershipTypes')}
          />
          Program Sponsorship
        </label>
        <label>
          <input
            type="checkbox"
            name="Event Participation"
            checked={formData.partnershipTypes.includes('Event Participation')}
            onChange={(e) => handleCheckboxChange(e, 'partnershipTypes')}
          />
          Event Participation
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

      <h3>Areas of Interest (Check all that apply):</h3>
      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="Health Initiatives"
            checked={formData.interestAreas.includes('Health Initiatives')}
            onChange={(e) => handleCheckboxChange(e, 'interestAreas')}
          />
          Health Initiatives
        </label>
        <label>
          <input
            type="checkbox"
            name="Children's Education"
            checked={formData.interestAreas.includes("Children's Education")}
            onChange={(e) => handleCheckboxChange(e, 'interestAreas')}
          />
          Children's Education
        </label>
        <label>
          <input
            type="checkbox"
            name="Employment Programs"
            checked={formData.interestAreas.includes('Employment Programs')}
            onChange={(e) => handleCheckboxChange(e, 'interestAreas')}
          />
          Employment Programs
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

      <h3>Additional Information</h3>
      <div className="form-group">
        <label htmlFor="companyDescription">Description of Company/Group and its relevant expertise:</label>
        <textarea
          id="companyDescription"
          name="companyDescription"
          value={formData.companyDescription}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="previousExperience">Previous experience with NGOs or similar initiatives (if any):</label>
        <textarea
          id="previousExperience"
          name="previousExperience"
          value={formData.previousExperience}
          onChange={handleChange}
        />
      </div>

      <h3>Agreement <h6>We agree to support Yehova Yire Foundation and adhere to its mission and values. We understand that our participation is subject to the rules and regulations set forth by the NGO.
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

      <div className="form-group submit-button">
       <MyButton/>
      </div>
    </form>

    </>
  );
};

export default PartnershipForm;
