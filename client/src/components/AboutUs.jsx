import React from "react";
import "../assets/about.css"; 

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Section */}
        <div className="about-image">
          <img
            src="src\assets\2.png" 
            alt="About Us"
          />
        </div>

        {/* Right Section */}
        <div className="about-content">
          <h2>Who we are ?</h2>
          <h3>We're #1 MBBS Educational Consultants</h3>
          <p>
            Uzbekistan is responsible for helping you get admitted to the
            top universities across the world. Many students dream of enrolling
            names for MBA or MBBS courses abroad. If you are one of them, we can
            guide you on the right path. International education will pave the
            way for your future aspirations, and thus you should prepare from
            now for more significant achievements. We are partnered with
            several colleges, universities, and medical institutions globally,
            so you can contact us to discuss further steps.
          </p>
          <button className="about-btn">Know More</button>
        </div>
      </div>
    </section>
  );
};

export default About;

