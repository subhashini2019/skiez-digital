import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="logo">YourLogo</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

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
          <div className="card">Social Media Marketing</div>git
          <div className="card">Content Creation</div>
        </div>
        <button>View All</button>
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

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Your Company. All rights reserved.</p>
        <div className="social-icons">[FB] [TW] [IG]</div>
      </footer>
    </div>
  );
}

export default App;
