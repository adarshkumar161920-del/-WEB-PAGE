import React from 'react';
import './OffersSection.css';

const OffersSection = () => {
  return (
    <section className="offers-section container">
      {/* Background line coming from top right */}
      <svg className="offers-bg-line" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M400,0 C300,100 250,250 150,250 C100,250 100,200 120,100 C150,-50 300,-100 400,0" stroke="#FF5C66" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      
      <h2 className="section-heading">
        What we <span className="highlight-green-pill">can</span><br/>
        <span className="highlight-yellow-underline">offer</span> you!
      </h2>

      <div className="offer-list">
        
        <div className="offer-item">
          <div className="offer-left">
            Office of multiple<br/>interest content
          </div>
          <div className="offer-center">
            <h3>Colaborative & partnership</h3>
          </div>
          <div className="offer-right">
            <span className="long-arrow-icon"></span>
          </div>
        </div>

        <div className="offer-item">
          <div className="offer-left">
            The hanger US Air force<br/>digital experimental
          </div>
          <div className="offer-center">
            <h3>We talk about our weight</h3>
          </div>
          <div className="offer-right">
            <span className="long-arrow-icon"></span>
          </div>
        </div>

        <div className="offer-item">
          <div className="offer-left">
            Delta faucet content,<br/>social, digital
          </div>
          <div className="offer-center">
            <div className="abstract-blob"></div>
            <h3>Piloting digital confidence</h3>
          </div>
          <div className="offer-right">
            <span className="long-arrow-icon"></span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OffersSection;
