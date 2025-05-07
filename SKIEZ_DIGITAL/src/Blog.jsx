import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
     
      <section className="blog-hero">
        <div className="blog-hero-overlay">
          <h1>Next Level <span>Digital Marketing</span></h1>
          <p>With our innovative strategies and cutting-edge techniques, we will boost your sales!</p>
          <button className="blog-button">BLOGS</button>
        </div>
      </section>

      {/* Blog Highlight Card */}
      <section className="blog-highlight">
        <div className="blog-card">
          <div className="blog-text">
            <h2>
              THE REASONS YOUR COMPANY ISN'T APPEARING ON GOOGLE
              <br />
              (AND HOW TO FIX IT)
            </h2>
            <button className="join-us-button">JOIN US</button>
          </div>
          <div className="blog-image">
            <img src="/Blog_bg.png" alt="Girl with headphones" />
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
        </div>
      </section>
    </div>
  );
};

export default Blog;
