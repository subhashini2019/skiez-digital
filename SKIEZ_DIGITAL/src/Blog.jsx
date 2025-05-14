import React from 'react';
import './Blog.css';
import { FaMapMarkerAlt, FaHatCowboy, FaSearchLocation, FaHome, FaGlobe } from 'react-icons/fa';
import { MdBlock } from 'react-icons/md';

const Blog = () => {
  return (
    <div className="blog-container">
      <section className="blog-hero"></section>

      {/* Blog Highlight Card */}
      <section className="blog-highlight">
        <div className="blog-image">
          <img src="/blog_bg2.png" alt="Girl with headphones" />
        </div>
      </section>

      {/* Blog Target and Overview */}
      <section className="blog-info">
        <p className="target-audience">
          Target Audience: Small Business owners who are annoyed that their company isn't showing up on maps or Google searches.
        </p>

        <h3 className='blog-ctn-hd'>➔ Overview</h3>
        <p className='blog-ctn-para'>
          “Have you Googled your business and found... nothing?” is a relatable way to start.
          <br /><br />
          Give a relatable example of the significance of being visible on Google.
          <br /><br />
          Give a sneak peek of the fixes you’ll teach in this post.
        </p>

        {/* Section 1: Typical Causes */}
        {/* Section 1: Typical Causes */}
        <div className="absence-wrapper">
          <h4>Section 1</h4>
          <h5 className="subtitle">Typical Causes of Your Company's Absence</h5>
          <h6 className="subnote">Enumerate the main concerns:</h6>
          <div className="divider"></div>

          <div className="section1-container">
            <div className="section1-grid">
              <div className="absence-card">
                <div className="icon">
                  <MdBlock size={40} color="#e53935" />
                </div>
                <div className="text">
                  <h4>No Google Business Profile (GBP):</h4>
                  <p>You won’t appear in Maps or the Local Pack if you haven’t claimed it.</p>
                </div>
              </div>

              <div className="absence-card">
                <div className="icon">
                  <FaHatCowboy size={40} color="#37474f" />
                </div>
                <div className="text">
                  <h4>Poor SEO Setup:</h4>
                  <p>Slow website, poor structure, missing keywords.</p>
                </div>
              </div>

              <div className="absence-card">
                <div className="icon">
                  <FaSearchLocation size={40} color="#42a5f5" />
                </div>
                <div className="text">
                  <h4>No Local SEO:</h4>
                  <p>You’re not focusing on terms that are specific to a particular location.</p>
                </div>
              </div>

              <div className="absence-card">
                <div className="icon">
                  <FaHome size={40} color="#ffb300" />
                </div>
                <div className="text">
                  <h4>(NAP) Details:</h4>
                  <p>Inconsistent Name, Address, and Phone. Google doesn’t trust contradicting information.</p>
                </div>
              </div>

              <div className="absence-card large-card">
                <div className="icon">
                  <FaGlobe size={40} color="#1e88e5" />
                </div>
                <div className="text">
                  <h4>Google Does Not Index:</h4>
                  <p>This Website. Perhaps you accidentally blocked it.</p>
                </div>
              </div>
            </div>

            {/* Bottom Images */}
            <img src="/megaphone.png" alt="Megaphone Icon" className="bottom-image right" />
            <img src="/dashboard.png" alt="Dashboard Icon" className="bottom-image left" />
          </div>
        </div>
      </section>

      {/* Section 2: Solutions */}
      <section className="blog-solutions">
        <h4 className='sec-hd'>Section 2</h4>
        <h5 className="section-title">A STEP-BY-STEP GUIDE TO FIXING IT</h5>

          <h3 className='blog-hd'>Make A Solution Out Of Every Issue:</h3>
          <ul className="checklist">
            <li><span className="icon">✅</span> Claim and enhance your Google Business Profile by adding images, services, hours of operation, and reviews.</li>
            <li><span className="icon">✅</span> Fundamental SEO for your website: make use of mobile-friendly design, alt text, meta tags, and appropriate keywords.</li>
            <li><span className="icon">✅</span> Include location keywords: for instance, "Best Salon in Anna Nagar" rather than simply "Best Salon."</li>
            <li><span className="icon">✅</span> Consistent NAP across platforms: the same information appears on directories, social media, and websites.</li>
            <li><span className="icon">✅</span> Make sure your website is indexed by submitting it to Google Search Console.</li>
          </ul>
       

      </section>
    </div>
  );
};

export default Blog;
