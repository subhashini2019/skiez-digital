import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import ServicePage from './ServicePage.jsx';
import './App.css';

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
          <img src="googleads.png" alt="Google Ads" />
          <h3 className='card-hd'>Google Ads</h3>
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
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><button className="join-btn">Join Us</button></li>
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
        </Routes>

        {/* Footer */}
        <footer className="service-footer">
          <div className="footer-content">
            <p>© 2025 Your Digital Agency. All rights reserved.</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;