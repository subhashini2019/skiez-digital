import React from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

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
            <section className='contact-top'>
                <h1 className='contact-hd'>Contact Info</h1>

                <div className="row-container">
                    <div className="info-card">
                        <div className="icon-section"><FaPhone className="icon" /></div>
                        <div className="text-section">
                            <h3>Phone</h3>
                            <p>‪+91 82200 43041‬</p>
                            <p>‪+91 9994401291‬</p>
                            <p>‪+91 9444958197‬</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="icon-section"><FaEnvelope className="icon" /></div>
                        <div className="text-section">
                            <h3>Email</h3>
                            <p>hr@skiezdigital.com</p>
                        </div>
                    </div>
                </div>

                <div className="row-container">
                    <div className="info-card">
                        <div className="icon-section"><FaGlobe className="icon" /></div>
                        <div className="text-section">
                            <h3>Address</h3>
                            <p>81/5, 6th Street, Chengalpattu, TamilNadu</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="icon-section"><FaMapMarkerAlt className="icon" /></div>
                        <div className="text-section">
                            <h3>Website</h3>
                            <p>www.skiezdigital.com</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Contact Form */}
            <section className="contact-form-section">
                <form className="contact-form">
                    <div className="row">
                        <input type="text" placeholder="First Name" required />
                        <input type="text" placeholder="Last Name" required />
                    </div>
                    <div className="row">
                        <input type="tel" placeholder="Phone" />
                        <input type="email" placeholder="Email" required />
                    </div>
                    <textarea placeholder="Enter Your Text" rows="5" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>
            
            {/* Embedded Google Map */}
            <section className="map-section">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.5804196396894!2d80.00480307483606!3d12.675492987613346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52fc27ea82ab43%3A0x881f8239a8d025af!2sSkiez%20Technologies%20India%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1747132917103!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </section>
        </div>
    );
};

export default Contact;