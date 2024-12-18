import React from "react";
import "../assets/MBBSConsultant.css";
import first from "../assets/sapthagiri-institute-of-medical-sciences-admission.webp";

const MBBSConsultant = () => {
  return (
    <div className="consultant-container">
      <h2 className="popular-heading">Top medical universities</h2>
      <p>connect with evalya we will help you to get top university</p>
      <div className="countries-container">
        <div className="country-card">
          <img src="src/assets/lviv.jpg" alt="MBBS in Georgia" />
          <p>Vitebsk State Medical University</p>
          <p>Fees Structure: Rs.2131200</p>
        </div>
        <div className="country-card">
          <img src="src/assets/kazan.jpg" alt="MBBS in Russia" />
          <p>Tbilisi State University</p>
          <p>Fees Structure: Rs. 31,08,000</p>
        </div>
        <div className="country-card">
          <img src="src/assets/ivane.jpg" alt="MBBS in Belarus" />
          <p> Kazan State Medical University</p>
          <p>Fees Structure: Rs. 26,49,200</p>
        </div>
        <div className="country-card">
          <img src="src/assets/university.jpg" alt="MBBS in Poland" />
          <p> Kazan State Medical University</p>
          <p>Fees Structure: Rs. 26,49,200</p>
        </div>
        <div className="country-card">
          <img src="src/assets/vitebsk.jpg" alt="MBBS in Georgia" />
          <p>Tbilisi State University</p>
          <p>Fees Structure: Rs. 31,08,000</p>
        </div>
        <div className="country-card">
          <img src="src/assets/kazakh.jpg" alt="MBBS in Russia" />
          <p>Vitebsk State Medical University</p>
          <p>Fees Structure: Rs.2131200</p>
        </div>
        <div className="country-card">
          <img src="src/assets/uni-grad.webp" alt="MBBS in Belarus" />
          <p>AMA School of Medicine</p>
          <p>Fees Structure: Rs. 19,00,000</p>
        </div>
        <div className="country-card">
          <img src="src/assets/lviv.jpg" alt="MBBS in Poland" />
          <p>Crimea Federal University</p>
          <p>Fees Structure: Rs. 15,09,600</p>
        </div>
      </div>

      {/* Header */}
      <h2 className="consultant-heading">
        <span>Number Speaks Everything For Us </span>
        Uzbekistan Expert always stands out in the <strong>Crowd</strong>
      </h2>

      {/* Highlights Section */}
      {/* <div className="consultant-highlights">
        <p>12 Years of expertise</p>
        <p>1500 Satisfied students counselled</p>
        <p>10 Universities affiliated with us!</p>
        <p>100 Visa Assistance</p>
      </div> */}

      {/* Grid Section */}
      <div className="grid-container">
        <div className="education">
          <h3>#1 MBBS Education Consultants </h3>
          <div className="para">
            <p> Contact us unhersitantly as we are perhps the best MBBS educational counsellors thaat you can ever meet.our honest efforts.valuable advice and fair guidlines and fir guidlines will make yourdreams come true1! </p>
          </div>
          <div className="love">
            <div className="action">
              
                
            <li>Most trusted shirmed consultancy firm in India, </li>
            <li>th over 12 years of experience we provide the
              <br /> best educational solutions
            </li>
            <li>Read our testimonials and
               clear your doubts, if any.</li>
            <li>Our active associates will guide 
              you thoroughly to <br /> study MBBS abroad. </li>
              
            </div>
          </div>
        </div>
        <div className="boxes">
          <div className="first">
            <div className="grid-item">
              <h3>10+</h3>
              <p>CAREER GUIDES</p>
            </div>
            <div className="grid-item">
              <h3>13+</h3>
              <p>YEARS OF EXPERIENCE</p>
            </div>
          </div>
          <div className="second">
            <div className="grid-item">
              <h3>200+</h3>
              <p>ENROLMENTS</p>
            </div>
            <div className="grid-item">
              <h3>200+</h3>
              <p>CUSTOMER TESTIMONIALS</p>
            </div>
          </div>

        </div>

      </div>

      {/* Disclaimer */}
      
    </div >
  );
};

export default MBBSConsultant;
