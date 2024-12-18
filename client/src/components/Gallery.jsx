import React from "react";
import "../assets/gallary.css"

const Gallary = () => {
  return (
    <div className="gallery-container">
      <h2> Why Study MBBS in Uzbekistan?
      </h2>
      <p>Eklavya Overseas gives you several reasons to Study MBBS Abroad</p>

      <div className="gallery-grid">
        <div className="card">
          <img src="src\assets\low-tuition-fees.png" alt="Low Tuition Fees" />
          <h3>Low Tuition Fees</h3>
          <p>Experience minimal living costs and affordable tuition fees.</p>
        </div>

        <div className="card">
          <img src="src\assets\donation.png" alt="Top Medical Universities" />
          <h3>Top Medical Universities</h3>
          <p>Get seats in high-ranked international medical universities.</p>
        </div>

        <div className="card">
          <img src="src\assets\no-entrance-exam.png" alt="NMC/WHO Approved" />
          <h3>NMC/WHO Approved</h3>
          <p>Complete your course in approved and recognized institutions.</p>
        </div>

        <div className="card">
          <img src="src\assets\nmc.png" alt="No Entrance Exam" />
          <h3>No Entrance Exam</h3>
          <p>Apply without entrance examinations if you meet the criteria.</p>
        </div>

        <div className="card">
          <img src="src\assets\study-in-english-medium.png" alt="No Donations" />
          <h3>There is no donation</h3>
          <p>No hidden charges except for the fee structure.</p>
        </div>

        <div className="card">
          <img src="src\assets\low-tuition-fees.png" alt="English Medium" />
          <h3>Study in English medium</h3>
          <p>Study in an English-medium environment with affordable fees.</p>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
