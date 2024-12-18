import React from "react";
import "../assets/Blog.css";

const Blog = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-heading">Our Latest Blog</h2>
      <p className="blog-subheading">Check out our Latest posts on Studying Abroad</p>

      <div className="blog-cards-container">
        <div className="blog-card">
          <img src="src\assets\pg-in-china.jpg" alt="PG in China" className="blog-image" />
          <div className="blog-content">
            <h3>PG in China: Fees, Admission, Universities, Rankings 2020</h3>
            <p className="blog-summary">Are you planning to pursue a Master’s Degree from abroad? Eklavya Overseas will shed a light on this dream of yours.</p>
            <p className="blog-date">December 18, 2024</p>
          </div>
        </div>

        <div className="blog-card">
          <img src="src\assets\pg-in-russia.jpg" alt="5 Years MBBS in Abroad" className="blog-image" />
          <div className="blog-content">
            <h3>5 Years MBBS in Abroad</h3>
            <p className="blog-summary">Thousands of Indian medical aspirants usually have the fundamental concern of securing an MBBS seat in a good medical college...</p>
            <p className="blog-date">December 18, 2024</p>
          </div>
        </div>

        <div className="blog-card">
          <img src="src\assets\best-medical-universities-to-study-mbbs-in-abroad (1).jpg" alt="Best Medical Universities" className="blog-image" />
          <div className="blog-content">
            <h3>Best Medical Universities to Study MBBS in Abroad</h3>
            <p className="blog-summary">Over the years, the number of students choosing the best medical university to study MBBS in abroad has increased.</p>
            <p className="blog-date">December 18, 2024</p>
          </div>
        </div>

        <div className="blog-card">
          <img src="src\assets\5-years-mbbs-in-abroad.jpg" alt="PG in Russia" className="blog-image" />
          <div className="blog-content">
            <h3>PG in Russia: Fees, Admission, Universities, Rankings 2020</h3>
            <p className="blog-summary">Russia is popular for offering advanced scientific degrees comprising of Doctor degree at 2 levels i.e. The candidate of...</p>
            <p className="blog-date">December 18, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
