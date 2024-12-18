import React from "react";
import "../assets/Home.css";

const Home = () => {
  return (
    <div className="banner">
      {/* Left Section */}
      <div className="content">
        <h1>Why Study MBBS in Uzbekistan?
        </h1>
        <p>Building Careers Globally</p>
        <div className="stats">
          <span>
            <strong>80+</strong> University Partners
          </span>
          <span>
            <strong>10K+</strong> Careers Transformed
          </span>
        </div>
        <button className="explore-btn">Explore Courses &rarr;</button>
      </div>

      {/* Right Section */}
      <div className="form-container">
        <div className="form-box">
          <p>
            📚 <strong>250+ courses</strong> 🌍 <strong>9 countries</strong>
          </p>
          <h3>International Degree Now in Your Budget</h3>
          <form>
            <label htmlFor="phone">Phone Number *</label>
            <div className="phone-input">
              <select name="country-code" id="country-code">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <button type="submit" className="counseling-btn">
              Book Your Free Counseling &rarr;
            </button>
            <p className="disclaimer">
              By submitting this form, you agree to the{" "}
              <a href="/">Terms of Use</a> and <a href="/">Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;

