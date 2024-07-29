import React, { useState } from 'react';
import '../css/volunteer.css';
import logo from '../assets/faundation.png';
 

const VolunteerForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        date: '',
        contact: '',
        city: '',
        state: '',
        country: '',
        education: '',
        occupation: '',
        achievements: '',
        hobbies: '',
        selfDescription: '',
        goals: '',
        reasonForJoining: ''
    });

    const [showTerms, setShowTerms] = useState(false);

    const states = [
        "Select State", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", 
        "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", 
        "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", 
        "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", 
        "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
        "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowTerms(true);
    };

    const handleAgreeTerms = () => {
        const message = `
            New Volunteer Form Submission:
            Name: ${formData.firstName} ${formData.lastName}
            Email: ${formData.email}
            Contact: ${formData.contact}
            City: ${formData.city}, State: ${formData.state}, Country: ${formData.country}
            Education: ${formData.education}
            Occupation: ${formData.occupation}
            Achievements: ${formData.achievements}
            Hobbies: ${formData.hobbies}
            Self Description: ${formData.selfDescription}
            Goals: ${formData.goals}
            Reason for Joining: ${formData.reasonForJoining}
        `;

        const whatsappUrl = `https://wa.me/8080710158?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        setShowTerms(false);
    };

    return (
        <>
            {showTerms ? (
                <div className="terms-container">
                    <h2>Terms and Conditions</h2>
                    <p>
                        By signing below, I acknowledge that I have read and agree to all of the above rules. I agree to abide by them.
                    </p>
                    <h1>Volunteer Rules and Regulations</h1>
                    <ol>
                        <li><h3>Behavior:</h3> Treat everyone with empathy and respect.</li>
                        <li><h3>Attendance:</h3> Always present and notify your supervisor of any absences in advance.</li>
                        <li><h3>Privacy:</h3> We respect the privacy of those we serve. Non-disclosure of sensitive information.</li>
                        <li><h3>Dress Code:</h3> Wearing appropriate attire for activities and using ID if provided.</li>
                        <li><h3>Health and Safety:</h3> Complying with all safety guidelines and promptly reporting any untoward incidents.</li>
                        <li><h3>Resource Use:</h3> Responsible handling of NGO resources and use only for official purposes.</li>
                        <li><h3>Communication:</h3> Communicating freely with your supervisor and fellow volunteers.</li>
                        <li><h3>Training:</h3> Attend all required training sessions and meetings.</li>
                        <li><h3>Commitment:</h3> Completing tasks reliably and reporting to your supervisor if unable to perform duties.</li>
                        <li><h3>Termination:</h3> NGO reserves the right to terminate volunteer service if guidelines are not followed.</li>
                    </ol>
                    <button className="agree-button" onClick={handleAgreeTerms}>Agree And Pay Now 499/ </button>
                </div>
            ) : (
                <>
                    <div>
                        <div className="form-top">
                            <img src={logo} alt="Foundation Logo" />
                            <h1>BECOME A VOLUNTEER</h1>
                        </div>
                    </div>
                    <form className="px-7 h-screen grid justify-center items-center" onSubmit={handleSubmit}>
                        <div className="grid gap-6" id="form">
                            <div className="w-full flex gap-3">
                                <input
                                    className="input-box"
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="input-box"
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex gap-2">
                                <input
                                    className="input-box"
                                    type="text"
                                    placeholder="Age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="input-box"
                                    type="text"
                                    placeholder="Gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="input-box"
                                    type="text"
                                    placeholder="Date Of Birth"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="input-box"
                                    type="text"
                                    placeholder="Hobbies"
                                    name="hobbies"
                                    value={formData.hobbies}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex gap-2">
                                <input
                                    className="input-box"
                                    type="text"
                                    placeholder="Occupation"
                                    name="occupation"
                                    value={formData.occupation}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="input-box"
                                    type="text"
                                    placeholder="Education"
                                    name="education"
                                    value={formData.education}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="input-box"
                                    type="text"
                                    placeholder="Achievements (Awards Or Certificates)"
                                    name="achievements"
                                    value={formData.achievements}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="flex gap-2">
                                <input
                                    className="input-box"
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                                <select
                                    className="input-box"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                >
                                    {states.map((state, index) => (
                                        <option key={index} value={state}>
                                            {state}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    className="input-box"
                                    type="text"
                                    placeholder="Country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="input-box"
                                    type="text"
                                    placeholder="Pin Code"
                                    name="pinCode"
                                    value={formData.pinCode}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <textarea
                                className="input-box"
                                placeholder="Goals in life"
                                name="goals"
                                value={formData.goals}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                className="input-box"
                                placeholder="Reason for joining the NGO"
                                name="reasonForJoining"
                                value={formData.reasonForJoining}
                                onChange={handleChange}
                                required
                            />
                         <iframe
        src={`${process.env.PUBLIC_URL}/hello.html`}
        style={{  height:'100vh', border: 'none', }}
        title="Hello HTML Page"
      ></iframe>
                        </div>
                    </form>
                </>
            )}
        </>
    );
};

export default VolunteerForm;
