import React from 'react';

const PayNowButton = ({ disabled })  => {
  const handlePayNowClick = () => {
    const paymentUrl = `${process.env.PUBLIC_URL}/hello.html`; // Adjust the path if needed
    window.open(paymentUrl, '_blank');
  };

  return (
    <div>

      <button onClick={handlePayNowClick} className="pay-now-button" style={{width:'100%'}}>
        I accept And Pay now
      </button>
    </div>
  );
};

export default PayNowButton;
