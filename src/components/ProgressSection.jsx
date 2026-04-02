import React from 'react';
import './ProgressSection.css';

const ProgressSection = () => {
  return (
    <section className="progress-section container">
      {/* Background swoosh line */}
      <svg className="progress-swoosh" viewBox="0 0 1000 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1000,0 C600,200 500,600 0,400" stroke="#FF5C66" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
      
      <div className="progress-grid">
        {/* Top Left Text */}
        <div className="progress-text-block text-top-left">
          <h2 className="progress-title">
            <span className="highlight-yellow-underline">Tomorrow</span> should<br/>
            be better than <span className="highlight-green-pill">today</span>
          </h2>
          <p className="text-gray progress-desc">
            We are a team of strategists, designers communicators, researchers.<br/>
            Togeather, we belive that progress only happens when you refuse<br/>
            to play things safe.
          </p>
          <a href="#" className="read-more">
            Read more <span className="long-arrow"></span>
          </a>
        </div>
        
        {/* Top Right Image */}
        <div className="progress-image-block img-top-right">
          <div className="shape-pink-polygon"></div>
          <div className="circle-image-wrapper top-circle">
             <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&h=800" alt="Team meeting" />
          </div>
        </div>

        {/* Bottom Left Image */}
        <div className="progress-image-block img-bottom-left">
          <div className="shape-red-triangle-top"></div>
          <div className="shape-red-triangle"></div>
          <div className="circle-image-wrapper bottom-circle">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=800" alt="Team working" />
          </div>
        </div>

        {/* Bottom Right Text */}
        <div className="progress-text-block text-bottom-right">
          <h2 className="progress-title">
            <span className="highlight-green-pill">See</span> how we can<br/>
            help you <span className="highlight-yellow-underline">progress</span>
          </h2>
          <p className="text-gray progress-desc">
            We add a layer of fearless insights and action that allows change<br/>
            makers to accelerate their progress in areas such as brand, design<br/>
            digital, comms and social research.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
