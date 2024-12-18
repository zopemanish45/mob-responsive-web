import React from "react";
import "../assets/experts.css";

const Experts = () => {
  return (
    <div className="expert-container">
      {/* Title Section */}
      <section className="header">
        <h1>Why Uzbekistan Expert?</h1>
        <p>Best MBBS Education Consultants in India</p>
      </section>

      {/* Overview Section */}
      <section className="overview">
        <div className="images">
          <img src="src/assets/university 2/right-side-img.png" alt="Expertise" />
        </div>
        <div>
          <h2>What We Offer</h2>
          <ul className="text-left">
            <li>
              A one-stop solution for students specialized in MBBS overseas education counseling, and admission guidance.
            </li>
            <li>Complete support for the necessary documentation.</li>
            <li>
              Guaranteed Admission in top MBBS universities in Uzbekistan having low fees for Indian students.
            </li>
            <li>
              Free counseling to students and assistance such that it will help their career grow.
            </li>
            <li>Full assistance in travel agreement and visa clearance for students.</li>
            <li>
              Support for educational loans and help with accommodation when a student arrives at the university.
            </li>
            <li>
              We give in-depth knowledge of study patterns and study quality of the top universities in Uzbekistan to our clients.
            </li>
            <li>
              All kinds of help provided, right from passport application, filling admission forms, air tickets to forex.
            </li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Valuable Services</h2>
        <div className="service-grid">
          <div className="service-card">
            <h3>Admission</h3>
            <p>Get guaranteed admission to top universities.</p>
          </div>
          <div className="service-card">
            <h3>Visa Process</h3>
            <p>Visa application assistance as per university guidelines.</p>
          </div>
          <div className="service-card">
            <h3>Accommodation</h3>
            <p>Secure and comfortable dormitory stay.</p>
          </div>
          <div className="service-card">
            <h3>Airport Pickup</h3>
            <p>Convenient airport pickup by our representative.</p>
          </div>
          <div className="service-card">
            <h3>Documentation</h3>
            <p>Legalized and verified documentation support.</p>
          </div>
          <div className="service-card">
            <h3>Free Counseling</h3>
            <p>Personalized guidance from our experts.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experts;
