import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import ServicePage from './ServicePage.jsx';
import AboutUs from './AboutUs.jsx';
import Blog from './Blog.jsx';
import './App.css';
import Contact from './Contact.jsx';


function HomePage() {
  return (
    <>
      {/* Promo Banner Section */}
      <section className="promo">
        <div className="promo-left">
          <img src="/subha.png" alt="Promo"/>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <div className="about-image">
            <img src="/kingston.png" alt="Kingston" />
          </div>
          <div className="about-text">
            <h2 className="about-hd">Skiez Digital World</h2>
            <p className='about-para'>
              Welcome to Skiez Digital, a leading force in the digital marketing world since 2013. We provide
              exceptional services in SEO, SMM, Email Marketing, Google Ads, Web Design, and B2B solutions that
              streamline operations and increase efficiency to help businesses achieve their goals. With a team of
              skilled and dedicated professionals, we are committed to excellence. We are proud to say that Skiez
              Digital consistently exceeds clients’ expectations.
            </p>
            <p className='about-para'>
              We leverage the latest technologies to create custom solutions that help our clients stay ahead.
              Additionally, our SEO consulting services optimize technological infrastructure and enhance overall
              operational efficiency.
            </p>
            <button className='about-learn-btn'>Learn More</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div class="stats-container d-flex justify-content-center align-items-center">
      <section className="stats-section">
        <div className="stat">
          <span role="img" aria-label="clients">🌟</span>
          <h2>30+</h2>
          <p>Satisfied Clients</p>
        </div>
        <div className="stat">
          <span role="img" aria-label="projects">🎯</span>
          <h2>25+</h2>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <span role="img" aria-label="team">👥</span>
          <h2>20+</h2>
          <p>Team Members</p>
        </div>
        <div className="stat">
          <span role="img" aria-label="awards">🏆</span>
          <h2>5+</h2>
          <p>Awards Won</p>
        </div>
        </section>
      </div>

      {/* Services Section */}
      <div className='service-container'>
      <h2 className="services-heading">Our Services</h2>
      <section className="services">
        <div className="service-card">
          <img src="social.jpg" alt="Social Media Marketing" />
          <h3 className='card-hd'>Social Media Marketing</h3>
          <p className='card-para'>Promoting products or services through platforms like Facebook, Instagram, LinkedIn, and Twitter.</p>
        </div>
        <div className="service-card">
        <img src="googleads.jpg" alt="Google Ads" />
          <p className='card-para'>Running paid ads on platforms like Google Ads or social media.</p>
        </div>
        <div className="service-card">
          <img src="seo.png" alt="SEO" />
          <h3 className='card-hd'>SEO</h3>
          <p className='card-para'>Key elements like website optimization, keywords, and growth analytics.</p>
        </div>
      </section>
      </div>   
      <div className="button-container">
        <button className="view-more-button">View More</button>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <img src="/skiez digital logo.jpg" alt="Logo" />
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><a href="/AboutUs">About</a></li>
              <li><a href="/Blog">Blog</a></li>
              <li><a href="/Contact">Contact</a></li>
              <li><button className="join-btn">Join Us</button></li>
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    
        {/* Footer */}
        <footer className="footer">
          <div className="footer-section logo-section">
            <div className="logo">SKIEZ <span>DIGITAL</span></div>
            <p>
              Welcome to Skiez Digital Marketing Agency. Since 2013, we’ve provided exceptional services in
              SEO, SMM, Email Marketing, Google Ads, Web Design, and B2B solutions to streamline operations
              and boost business growth.
            </p>
          </div>

          <div className="footer-section quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/AboutUs">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><a href="/Blog">Blog</a></li>
              <li><a href="/Contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section contact-info">
            <h4>Get In Touch</h4>
            <p>📞 +91 8220043041</p>
            <p>📞 +91 9994401291</p>
            <p>✉️ hr@skiezdigital.com</p>
            <p>🌐 www.skiezdigital.com</p>
            <p>📍 81/5, 6th Street, Near Amma Park, Shanthi Nagar, Chengalpattu 603003</p>
          </div>
        </footer>

        {/* Copyright */}
        <div className="copyright">
          <p>
            © 2025 Skiez Digital Innovations Pvt Ltd. All Rights Reserved. Designed by 
            <a href="https://www.skiezdigital.com" target="_blank" rel="noopener noreferrer"> Skiez Digital</a>
          </p>
        </div>
      </div>
    </Router>
  );
}

export default App;