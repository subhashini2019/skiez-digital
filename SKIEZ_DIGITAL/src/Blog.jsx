import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      {/* Promo Banner */}
      <section className="promo-banner">
        <div className="promo-left">
          <img src="/jabin.png" alt="Promo" />
        </div>
        <div className="promo-right">{/* Add promotional content here */}</div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <div className="about-image">
            <img src="/about.png" alt="Kingston" />
          </div>
          <div className="about-text">
            <h2>Skiez Digital: Elevating Brands with Data-Driven 
            Digital Marketing</h2>
            <p>
            At Skiez Digital, we are passionate about helping businesses thrive in the Digital 
World. As a leading Digital Marketing Agency, we specialize in crafting data-driven 
strategies that enhance Online Visibility, Drive Targeted Traffic, and maximize 
conversions
            </p>
            <p>
            With a team of Experienced, Dedicated Staffs, Marketers, Creative Designers, and 
Tech-savvy strategists, we offer a comprehensive range of Services, including SEO, 
Social Media Marketing, Content Creation, PPC advertising, and E-mail Campaigns. 
Our goal is to deliver Personalized, Innovative solutions that align with your Brand’s 
Unique Objectives and Ensure Measurable Growth.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
