// src/components/RazorpayButton.js
import React, { useEffect } from 'react';

const MyButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    const options = {
      key: 'rzp_test_2hTo20SDyKb7Iu', // Replace with your Razorpay key ID
      amount: '299900', // Amount is in the smallest currency unit (paise for INR)
      currency: 'INR',
      name: 'Yehova Yire Foundation',
      description: 'Membership Fee',
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Bhavesh Patil',
        email: 'bhavesh@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'Yehova Yire Foundation Office'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (response) {
      alert(`Payment failed! Error: ${response.error.description}`);
    });
    rzp.open();
  };

  return (
<>
    <h1>hwiihsd</h1>
    <button onClick={handlePayment} className="pay-now-button">
      Pay Now
    </button>
    </>
  );
};

export default MyButton;
