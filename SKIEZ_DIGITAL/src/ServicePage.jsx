import React from 'react';
 import './ServicePage.css'; // Import the CSS specific to this page
 

 function ContactSection() {
    return (
    <div className="contact-section-grid">
    <div className="contact-info">
    <h3>Know Our Services, Call Us Now</h3>
    <div className="phone-numbers">
    <div className="phone">
    <span className="phone-icon">📞</span> +91 8220 XXX XXX
    </div>
    <div className="phone">
    <span className="phone-icon">📞</span> +91 99944 01291
    </div>
    </div>
    <div className="email">
    <span className="email-icon">📧</span> example@email.com
    </div>
    </div>
    <div className="consultation-text">
    <p>Our experts are here to guide you with personalized advice. Book your free consultation today and take the first step toward smarter decisions!</p>
    </div>
    <div className="call-now-button">
    <button>Call Now</button>
    </div>
    </div>
    );
   }

   

 function ServicePage() {
  return (
  <div className="service-page">
  <header className="service-header">
  <div className="logo">Your Digital Agency</div>
  <nav>
  <ul>
  <li><a href="/">Home</a></li>
  <li><a href="/about">About Us</a></li>
  <li><a href="/services" className="active">Services</a></li>
  <li><a href="/blog">Blog</a></li>
  <li><a href="/contact">Contact</a></li>
  <li><button className="book-now">Book Now</button></li>
  </ul>
  </nav>
  </header>
 

  <section className="hero-section">
  <div className="hero-content">
  <h1>TAKE YOUR BUSINESS TO THE NEXT LEVEL</h1>
  <p>Empower Your Business with Our Comprehensive Services.</p>
  <div className="hero-image">
  {/* You'll likely want to import your image here */}
  <img src="/hero-image.jpg" alt="People working on a laptop" />
  </div>
  </div>
  </section>
 

  <section className="our-services">
  <h2>Services</h2>
  </section>
 

  <section className="elevate-brand">
  <h2>Elevate Your Brand with Innovative Digital Strategies</h2>
  <p>Unlock your Brand's full Potential with tailored strategies in Digital Marketing, SEO, PPC, Google Ads, Social Media Marketing, and Lead Generation. We provide end-to-end solutions that Drive Growth, Enhance Visibility, and Deliver Measurable Results.</p>
  </section>
 

  <section className="service-categories">
  <div className="service-card">
  <div className="card-header">
  <img src="/socialmedia.jpg" alt="Social Media Marketing" />
  <h3>SOCIAL MEDIA MARKETING</h3>
  </div>
  <div className="card-body">
  <p>Growing is more important than merely posting. Socialize your brand’s story, amplify your calls-to-action, and convert followers, engage your audience, and transform your social media accounting effectiveness and social media presence.</p>
  </div>
  </div>
 

  <div className="service-card">
  <div className="card-header">
  <img src="/email_marketing.jpg" alt="Email Marketing" />
  <h3>Email Marketing</h3>
  </div>
  <div className="card-body">
  <p>Email is powerful and it isn’t going away. We create mobile-first designs, build your lists, automate your trust, keep your brand & the forefront of their minds, and segment for personalization and relevance.</p>
  </div>
  </div>
 

  <div className="service-card">
  <div className="card-header">
  <img src="/google_ads.jpg" alt="Google Ads" />
  <h3>Google Ads</h3>
  </div>
  <div className="card-body">
  <p>Want to grow more quickly? Google Ads can help get you there. Our team of certified specialists will ensure your budget can be converted into impressions with the best ad copy, the right keywords, and properly run campaigns.</p>
  </div>
  </div>
 

  <div className="service-card">
  <div className="card-header">
  <img src="/seo.png" alt="Search Engine Optimization" />
  <h3>Search Engine Optimization</h3>
  </div>
  <div className="card-body">
  <p>Improve your visibility on search engines and attract organic traffic to your website.</p>
  </div>
  </div>
 

  <div className="service-card">
  <div className="card-header">
  <img src="/app_development.jpg" alt="App Development" />
  <h3>App Development</h3>
  </div>
  <div className="card-body">
  <p>Drive targeted traffic to your website with effective paid advertising campaigns.</p>
  </div>
  </div>
 

  <div className="service-card">
  <div className="card-header">
  <img src="/website_design.jpg" alt="Website Design" />
  <h3>Website Design</h3>
  </div>
  <div className="card-body">
  <p>Attract and convert potential customers into valuable leads for your business.</p>
  </div>
  </div>
  </section>
 

  <ContactSection /> {/* Include the new contact section */}
 

  
  </div>
  );
 }
 

 export default ServicePage;