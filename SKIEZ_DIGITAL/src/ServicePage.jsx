import React from 'react';
 import './ServicePage.css'; // Import the CSS specific to this page
 

 function ContactSection() {
    return (
      <div className="contact-section">
      <div className="contact-info">
        <img src="/phone_icon.png" alt="Phone" />
        <div className='phone-section'>
        <h4 className='phone-heading'>Know Our Services In Detail</h4>
        <p className="phone-number">+91 82208 8041</p>
        <p className="phone-number">+91 99944 01291</p>
      </div>
      </div>
    
      <div className="vertical-line"></div>
    
      <div className="contact-text">
        <p className='ser-para'>
          Our experts are here to guide you with personalized advice.
          Book your free consultation today and take the first step toward smarter decisions!
        </p>
      </div>
    
      <div className="vertical-line"></div>
    
      <div className="call-button">
        <button className='ser-btn'>Call Now</button>
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
            img: "/smm.jpg",
            title: "Social Media Marketing",
            desc: "Growing is more important than merely posting. Socialize your brand’s story, amplify your calls-to-action, convert followers, and enhance your social media presence."
          },
          {
            img: "/email_marketing.jpg",
            title: "Email Marketing",
            desc: "Email is powerful and it isn’t going away. We create mobile-first designs, build your lists, automate trust, and personalize with segmentation."
          },
          {
            img: "/seoo.png",
            title: "Search Engine Optimization",
            desc: "Improve your visibility on search engines and attract organic traffic to your website through proven SEO strategies."
          },
          {
            img: "/google_ads.jpg",
            title: "Google Ads",
            desc: "Want to grow more quickly? Google Ads helps you reach your audience with smart campaigns, great ad copy, and optimized keyword targeting."
          },
          
          {
            img: "/app_development.jpg",
            title: "App Development",
            desc: "We build fast, responsive mobile apps to streamline bookings, services, and sales. Transform your ideas into smart applications."
          },
          {
            img: "/website_design.jpg",
            title: "Website Development",
            desc: "Your website is your digital storefront. We design modern, responsive, and user-friendly websites that convert."
          },
          {
            img: "/uiux.jpg",
            title: "UI\UX Design",
            desc: "We design clean and user-friendly interfaces that make websites and apps easy to navigate. We ensure users have a smooth, enjoyable experience that keeps them coming back."
          },
          {
            img: "/graphic.jpg",
            title: "Graphic Design",
            desc: "At SKIEZ DIGITAL, we create eye-catching designs that make your brand stand out. Our graphics are made to grab attention and help grow your business"
          }
        ].map((card, i) => (
          <div className="service-card-ser" key={i}>
            <div className="card-header">
              <img src={card.img} alt={card.title} />
            </div>
            <div className="card-body">
            <h3>{card.title}</h3>
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