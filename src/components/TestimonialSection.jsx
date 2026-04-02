import React from 'react';
import './TestimonialSection.css';

const TestimonialSection = () => {
  return (
    <section className="testimonial-section container">
      
      <div className="testimonial-header">
        <h2 className="section-heading testimonial-title">
          <span className="highlight-green-pill">What</span> our customer<br/>
          says <span className="highlight-yellow-underline">About Us</span>
        </h2>
      </div>

      <div className="testimonial-content-area">
        
        {/* Scattered left avatars */}
        <div className="t-avatar ta-1"><img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=150&h=150" alt="Customer 1" /></div>
        <div className="t-avatar ta-2"><img src="https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=150&h=150" alt="Customer 2" /></div>
        <div className="t-avatar ta-3"><img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=150&h=150" alt="Customer 3" /></div>
        
        <div className="quote-card">
          <span className="quote-mark open-quote">❝</span>
          <p className="quote-text">
            Elementum delivered the site with inthe timeline<br/>
            as they requested. Inthe end, the client found a 50%<br/>
            increase in traffic with in days since its launch. They<br/>
            also had an impressive ability to use technologies that<br/>
            the company hasn't used, which have also proved to<br/>
            be easy to use and reliable
          </p>
          <span className="quote-mark close-quote">❞</span>
        </div>

        {/* Scattered right avatars */}
        <div className="t-avatar ta-4"><img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=150&h=150" alt="Customer 4" /></div>
        <div className="t-avatar ta-5"><img src="https://images.unsplash.com/photo-1601455763536-eba569aca196?auto=format&fit=crop&w=150&h=150" alt="Customer 5" /></div>
        <div className="t-avatar ta-6"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&h=250" alt="Customer 6" /></div>

      </div>

    </section>
  );
};

export default TestimonialSection;
