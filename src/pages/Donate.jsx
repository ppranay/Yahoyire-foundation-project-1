import React from 'react';
import Card from './Card';
import axios from 'axios';
import '../css/donate.css';
import PageHeader from '../components/PageHeader.jsx'
import loadScript from '../utils/loadScript';
import Footer from '../components/Footer.jsx'
import video from '../assets/donation.mp4'
// import  BackToTop from '../components/BackToTop.jsx'

const Donate = () => {
  const checkoutHandler = async (amount) => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    try {
      const { data: { key } } = await axios.get('http://localhost:4000/api/getkey');
      const { data: { order } } = await axios.post('http://localhost:4000/api/checkout', { amount });

      const options = {
        key, // Enter the Key ID generated from the Dashboard
        amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: 'Yahova Yire Foundation',
        description: 'Test Transaction',
        image: 'https://example.com/your_logo',
        order_id: order.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: 'http://localhost:4000/api/paymentverification',
        notes: {
          address: 'Razorpay Corporate Office'
        },
        theme: {
          color: '#3399cc'
        },
        method: 'upi', // Example of specifying a method; adjust as needed
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Error during checkout:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
    <div className="box-donate">
      <h1>Donate Now</h1>
    </div>
    <div>
    <video src={video} autoPlay loop controls className="project-video">
                    Your browser does not support the video tag.
                  </video>
      <div className="donations">
        <div className="container">
          <div className="donate">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="donate-content">
                  <div className="section-header">
                    <p style={{color:'yellow'}}>Donate Now</p>
                    <h2><span style={{color:'yellow'}}>CHANGING LIVES </span>, ONE DONATION AT A TIME</h2>
                  </div>
                  <div className="donate-text">
                    <p style={{fontSize:'25px'}}>
                       A chance to do something for society and awaken your soul and feel great. The joy and satisfaction of bringing smile to the other through our organization 
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="donate-form">
                  <form>
                    <div className="control-group">
                      <input id='name' type="text" className="form-control" placeholder="Name" required autoComplete='name' />
                    </div>
                    <div className="control-group">
                      <input id='email' type="email" className="form-control" placeholder="Email" required autoComplete='email' />
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                      <button type="button" className="btn-donate" onClick={() => checkoutHandler(100)}>
                        Donate ₹100
                      </button>
                      <button type="button" className="btn-donate" onClick={() => checkoutHandler(200)}>
                        Donate ₹200
                      </button>

                      <button type="button" className="btn-donate" onClick={() => checkoutHandler(300)}>
                        Donate ₹300
                      </button>
                    </div>
                    <div>
                      {/* <button className="btn-donate" type="submit">Donate Now</button> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>

    <Footer></Footer>
</>
    
  );
};

export default Donate;
