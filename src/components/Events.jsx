import React from 'react'
import '../css/event.css'
import img1 from '../assets/news event/event1.jpeg'
import img2 from '../assets/news event/event2.jpeg'
const Events = () => {
  return (
    <div>
       
        <div className="event">
        <h1 >OUR UPCOMING EVENT</h1>
            <h2>VIDARBH SOCIAL WORKER AND UDYOGRATNA PURASKAR  <br /> <span>Date:-3rd-Aug-2024</span> </h2>
            
            <img src={img2} alt="Image 1" />

            <h1 style={{margin:' 50px 0'}}>ONE DAY MAKEUP SEMINAR <br />
            <span>Date:-2nd-Aug-2024</span> </h1>
            <img src={img1} alt="" /> 
        </div>
    </div>
  )
}

export default Events