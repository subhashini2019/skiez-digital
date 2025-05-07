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
</section>
  
 

<section className="elevate-brand">
        <h2>Elevate Your Brand with Innovative Digital Strategies</h2>
        <p>
          Unlock your Brand's full Potential with tailored strategies in Digital Marketing, SEO, PPC, Google Ads, Social Media Marketing, and Lead Generation. We provide end-to-end solutions that Drive Growth, Enhance Visibility, and Deliver Measurable Results.
        </p>
      </section>

      <section className="service-categories">
        {[
          {
            img: "/socialmedia.jpg",
            title: "SOCIAL MEDIA MARKETING",
            desc: "Growing is more important than merely posting. Socialize your brand’s story, amplify your calls-to-action, convert followers, and enhance your social media presence."
          },
          {
            img: "/email_marketing.jpg",
            title: "Email Marketing",
            desc: "Email is powerful and it isn’t going away. We create mobile-first designs, build your lists, automate trust, and personalize with segmentation."
          },
          {
            img: "/google_ads.jpg",
            title: "Google Ads",
            desc: "Want to grow more quickly? Google Ads helps you reach your audience with smart campaigns, great ad copy, and optimized keyword targeting."
          },
          {
            img: "/seo.png",
            title: "Search Engine Optimization",
            desc: "Improve your visibility on search engines and attract organic traffic to your website through proven SEO strategies."
          },
          {
            img: "/app_development.jpg",
            title: "App Development",
            desc: "We build fast, responsive mobile apps to streamline bookings, services, and sales. Transform your ideas into smart applications."
          },
          {
            img: "/website_design.jpg",
            title: "Website Design",
            desc: "Your website is your digital storefront. We design modern, responsive, and user-friendly websites that convert."
          }
        ].map((card, i) => (
          <div className="service-card" key={i}>
            <div className="card-header">
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
            </div>
            <div className="card-body">
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </section>

  <ContactSection /> {/* Include the new contact section */}
 

  
  </div>
  );
 }
 

 export default ServicePage;