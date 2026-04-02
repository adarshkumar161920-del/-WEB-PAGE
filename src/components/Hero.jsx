import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="bg-elements">
        {/* Left Side Loops */}
        <svg className="left-loops" viewBox="0 0 100 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0 C100 0, 100 125, 50 125 C0 125, 0 250, 50 250" stroke="#FF5C66" strokeWidth="6" strokeLinecap="round" />
          <path d="M50 25 C120 25, 120 150, 50 150 C-20 150, -20 275, 50 275" stroke="#1A1A1A" strokeWidth="6" strokeLinecap="round" />
        </svg>

        {/* Right Side Semicircle */}
        <div className="right-shape" />

        {/* Cursor Wrapper */}
        <div className="cursor-element">
          <svg className="cursor-arrow" width="24" height="24" viewBox="0 0 24 24" fill="#8B5CF6" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3L10 21L13 14L21 11L3 3Z" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
          <div className="cursor-label">Roshan Roy</div>
        </div>
      </div>

      <div className="hero-content">
        <h1 className="main-title">
          <div className="title-row">
            The <span className="highlight-underline">thinkers</span> and
          </div>
          <div className="title-row">
            doers were <span className="highlight-pill">changing</span>
          </div>
          <div className="title-row">
            the <span className="highlight-box">status</span> Quo with
          </div>
        </h1>

        <p className="subtitle">
          We are a team of strategists, designers communicators, researchers. Togeather,<br />
          we belive that progress only hghappens when you refuse to play things safe.
        </p>
      </div>

      <div className="avatar-cluster">
        <div className="avatar-group">
          {/* We'll use placeholder images here that resemble the people in the screenshot */}
          <div className="avatar a1"><img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&h=200" alt="Team member" /></div>
          <div className="avatar a2"><img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&h=200" alt="Team member" /></div>
          <div className="avatar a3"><img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&h=200" alt="Team member" /></div>
          <div className="avatar a4"><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&h=200" alt="Team member" /></div>
          <div className="avatar a5"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200" alt="Team member" /></div>
          <div className="avatar a6"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200" alt="Team member" /></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
