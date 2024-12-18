import React from 'react';
import "../assets/University.css"

const University = () => {
  const testimonials = [
    {
      name: "Nishant Kharb",
      location: "Haryana",
      image: "nishant.jpg", 
      description: "I am grateful to Eklavya to help me get admission in Irkutsk State Medical University, Russia. I strongly recommend them as the efficient faculty booked my seat for the course and helped me find accommodation."
    },
    {
      name: "Sanskar Singh",
      location: "Uttar Pradesh",
      image: "sanskar.jpg", 
      description: "My dreams came true! I wanted to study MBBS in Georgia, but I was unable to complete my application due to proper guidance. The team of Eklavya guided me well and helped me study MBBS in Ivane Javakhishvili Tbilisi State University."
    },
    {
      name: "Harsh Gautam",
      location: "Haryana",
      image: "harsh.jpg", // Replace with actual image URL
      description: "Are you clueless about how to join MBBS courses in Georgia? Then contact Eklavya in the first place. The best educational consultants helped me finish my MBBS in Georgia from Akaki Tsereteli State University."
    },
  ];

  return (
    <div className="testimonial-container">
      <h2 className="section-title">What They Say</h2>
      <p className="section-subtitle">Listen to our successfully Placed Students</p>

      <div className="cards-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card">
            <img src={testimonial.image} alt={testimonial.name} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{testimonial.name}</h3>
              <p className="card-location">{testimonial.location}</p>
              <p className="card-description">{testimonial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default University;
