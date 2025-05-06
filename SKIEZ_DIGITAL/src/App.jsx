import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import ServicePage from './ServicePage.jsx';

import './App.css';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Affordable Digital Marketing Services</h1>
          <p>Grow your business with expert digital solutions.</p>
          <button>Get Started</button>
        </div>
        <img src="your-hero-image.jpg" alt="Hero" />
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div>50+ Satisfied Clients</div>
        <div>50+ Projects</div>
        <div>50+ Campaigns</div>
        <div>50+ Awards</div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">SEO</div>
          <div className="card">Social Media Marketing</div>
          <div className="card">Content Creation</div>
        </div>
        <Link to="/services"><button>View All</button></Link>
      </section>

      {/* Promo Section */}
      <section className="promo">
        <h3>Take Your Business to the Next Level</h3>
        <p>Let us handle your digital marketing needs.</p>
        <button>Contact Us</button>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <div>
            <p>Email: info@example.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?...your_location..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <header className="header">
          <div className="logo">YourLogo</div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="#about">About</Link></li>
              <li><Link to="#contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
        </Routes>

        {/* Footer */}
        <footer className="service-footer bg-gray-900 text-white py-8 px-4 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-400">
          © 2025 Your Digital Agency. All rights reserved.
        </p>

        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
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
