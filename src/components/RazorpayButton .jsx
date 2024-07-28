import React from 'react'

const RazorpayButton  = () => {
  return (
    <div>
         <div id="membership-form-container">
        {/* <!-- Form content here --> */}
        <div class="terms-container">
            <h2>Terms and Conditions</h2>
            <p>
                By signing below, the company/group acknowledges that it has read and understood the above terms and conditions and agrees to abide by them.
            </p>
            <h1>Rules and Regulations</h1>
            <ol>
                <li><h5>Alignment with Mission:</h5> <p>Members must align with and support the mission and values of Yehova Yire Foundation.</p></li>
                <li><h5>Financial Contribution:</h5> <p>Timely payment of any agreed membership fees, donations, or sponsorships.</p></li>
                  
            </ol>

            <form>
                <button>buty</button>
                <script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_Oe3LGTuZsq9bZj" async>   </script>
            </form>
        </div>
    </div> </div>
  )
}

export default RazorpayButton 