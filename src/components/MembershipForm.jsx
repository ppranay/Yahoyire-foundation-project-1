import React, { useState } from 'react';
import '../css/membership.css';
import logo from '../assets/faundation.png';
import RazorpayButton from '../components/RazorpayButton '
const MembershipForm = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        address: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        contactPersonName: '',
        title: '',
        businessEmail: '',
        personalEmail: '',
        businessPhone: '',
        personalPhone: '',
        country: '',
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
            New Membership Form Submission:
            Company/Group Name: ${formData.companyName}
            Address: ${formData.address}, ${formData.address2}, ${formData.city}, ${formData.state}, ${formData.zipCode}
            Contact Person: ${formData.contactPersonName}, Title: ${formData.title}, Business Email: ${formData.businessEmail}, Personal Email: ${formData.personalEmail}, Business Phone: ${formData.businessPhone}, Personal Phone: ${formData.personalPhone}
            Number of Members/Employees: ${formData.goals}
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
                    By signing below, the company/group acknowledges that it has read and understood the above terms and conditions and agrees to abide by them.
                    </p>
                    <h1>Rules and Regulations</h1>
                    <ol>
                        <li> <h5>Alignment with Mission :-</h5> <p> - Members must align with and support the mission and values ​​of Yehova Yire Foundation.</p></li>
                    

                  
                        <li> <h5>Financial Contribution :-</h5> <p>  - Timely payment of any agreed membership fees, donations or sponsorships.
                        </p></li>
                    
                  
                        <li> <h5>Participation :-</h5> <p> - Participating as actively as possible in NGO activities, meetings and events.</p></li>
                    
                  
                        <li> <h5>Privacy :-</h5> <p>- Respecting the confidentiality of sensitive information relating to the NGO and its beneficiaries.</p></li>
                    
                  
                        <li> <h5>Ethical Conduct :-</h5> <p> Conduct all communications in an ethical and professional manner.
                        - Avoid conflicts of interest and disclose any that may arise.</p></li>
                    
                  
                        <li> <h5>Resource Usage :-</h5> <p>    - Responsible use of NGO resources for core purposes.</p></li>
                                      
                        <li> <h5>Health and Safety:-</h5> <p>    - Ensuring that all group activities comply with health and safety regulations.
                        </p></li>

                        <li> <h5>Compliance:-</h5> <p>  - Complying with all local, state and federal laws and regulations as well as yehova Yire Foundation policies.</p></li>
                        <li> <h1>Conclusion:-</h1> <p>   - yehova Yire Foundation reserves the right to cancel membership for non-compliance with these rules and regulations.
                        - Members may also choose to terminate their membership by giving reasonable notice to the NGO</p></li>
                    </ol>




                    <button className="agree-button text-center" onClick={handleAgreeTerms}>Agree And Pay Now 2999</button>
                    <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_Oe3LGTuZsq9bZj" async> </script> </form>
                </div>
            ) : (
                <>
                    <div>
                        <div className="form-top">
                            <img src={logo} alt="Foundation Logo" />
                            <h1>BECOME A MEMBER OF THE ENERGETIC TEAM</h1>
                        </div>
                    </div>
                    <form className="h-screen grid justify-center items-center" onSubmit={handleSubmit}>
                        <div className="grid gap-6" id="form">
                            <div className="flex flex-col gap-3">
                                <label className="input-label">Company/Group Name <span className="required">*</span></label>
                                <input
                                    className="input-box"
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="input-label">Address (personal and business) <span className="required">*</span></label>
                                <div className="flex flex-row gap-3">
                                    <input
                                        className="input-box"
                                        type="text"
                                        name="address"
                                        placeholder="Address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        className="input-box"
                                        type="text"
                                        name="address2"
                                        placeholder="Address2"
                                        value={formData.address2}
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="input-box"
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        className="input-box"
                                        type="text"
                                        name="zipCode"
                                        placeholder="Zip Code"
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
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
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="input-label">Contact Person Details <span className="required">*</span></label>
                                <div className="flex flex-row gap-3">
                                    <input
                                        className="input-box"
                                        type="text"
                                        name="contactPersonName"
                                        placeholder="Name"
                                        value={formData.contactPersonName}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        className="input-box"
                                        type="text"
                                        name="title"
                                        placeholder="Title / Position"
                                        value={formData.title}
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="input-box"
                                        type="email"
                                        name="businessEmail"
                                        placeholder="Business Email"
                                        value={formData.businessEmail}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="flex flex-row gap-3">
                                    <input
                                        className="input-box"
                                        type="email"
                                        name="personalEmail"
                                        placeholder="Personal Email"
                                        value={formData.personalEmail}
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="input-box"
                                        type="text"
                                        name="businessPhone"
                                        placeholder="Business Phone"
                                        value={formData.businessPhone}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        className="input-box"
                                        type="text"
                                        name="personalPhone"
                                        placeholder="Personal Phone"
                                        value={formData.personalPhone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="input-label">Number of Members/Employees:<span className="required">*</span></label>
                                <input
                                    className="input-box"
                                    type="text"
                                    name="goals"
                                    value={formData.goals}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="input-label">Why Do You Want To Join NGO <span className="required">*</span></label>
                                <textarea
                                    className="input-box"
                                    name="reasonForJoining"
                                    value={formData.reasonForJoining}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                          
                        </div>
                    </form>
                </>
            )}
        </>
    );
};

export default MembershipForm;
