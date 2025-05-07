import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <section className="blog-hero">
      
      </section>

      {/* Blog Highlight Card */}
      <section className="blog-highlight">
        <div className="blog-card">
          <div className="blog-image">
            <img src="/blog_bg2.png" alt="Girl with headphones" />
          </div>
        </div>
      </section>

      {/* Blog Target and Overview */}
      <section className="blog-info">
        <p className="target-audience">
          <strong>Target Audience:</strong> Small business owners who are <span className="highlight-blue">annoyed</span> that their company <span className="highlight-blue">isn't showing up on maps or Google searches</span>.
        </p>

        <div className="overview-section">
          <h3>➤ Overview</h3>
          <p>
            “Have you Googled your business and found... nothing?” is a relatable way to start.
            <br /><br />
            Give a relatable example of the significance of being visible on Google.
            <br /><br />
            Give a sneak peek of the fixes you’ll teach in this post.
          </p>

          {/* Inserted image section from your upload */}
          <div className="overview-image-section">
          <h4>Section 1</h4>
            <h5>Typical Causes of Your Company's Absence</h5>
            <p><strong>Enumerate the main concerns:</strong></p>
            <img
              src="/3c63a429-f30a-45aa-b4fe-c011fb3148d3.png"
              alt="Business SEO Issues"
              className="overview-image"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Solutions */}
      <section className="blog-solutions">
        <h4>Section 2</h4>
        <h5 className="section-title">A STEP-BY-STEP GUIDE TO FIXING IT</h5>
        <p className="solution-intro"><strong>Make A Solution Out Of Every Issue:</strong></p>
        <ul className="solution-list">
          <li>✅ Claim and enhance your Google Business Profile by adding images, services, hours of operation, and reviews.</li>
          <li>✅ Fundamental SEO for your website: make use of mobile-friendly design, alt text, meta tags, and appropriate keywords.</li>
          <li>✅ Include location keywords: for instance, "Best Salon in Anna Nagar" rather than simply "Best Salon."</li>
          <li>✅ Consistent NAP across platforms: the same information appears on directories, social media, and websites.</li>
          <li>✅ Make sure your website is indexed by submitting it to Google Search Console.</li>
        </ul>

        {/* Section 2 Image */}
        <div className="solution-image-section">
          <img
            src="/082a0afa-3449-4f41-b766-90a9318f9d78.png"
            alt="Step-by-step solution visual"
            className="solution-image"
          />
        </div>
      </section>
    </div>
  );
};


export default Blog;