import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      {/* Promo Banner */}
      <section className="promo-banner">
        <div className="promo-left">
          <img src="/contact.png" alt="Promo" />
        </div>
        <div className="promo-right">
          {/* Add promotional content here */}
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info">
        <div className="info-card">
          <h3>📞 Phone</h3>
          <p>+91 82200 43041</p>
          <p>+91 ‪+91 9994401291</p>
          <p>++91 9444958197‬</p>

        </div>
        <div className="info-card">
          <h3>✉️ Email</h3>
          <p>hr@skiezdigital.com</p>
        </div>
        <div className="info-card">
          <h3>📍 Address</h3>
          <p>81/5, 6th Street, Chengalpattu, TN</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone" />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Embedded Google Map */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;