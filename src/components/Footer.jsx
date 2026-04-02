import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        
        {/* Newsletter Section */}
        <div className="newsletter-section">
          {/* Floating red scribbles */}
          <svg className="newsletter-scribbles" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0 C40 30, 20 50, 40 80 M35 70 L40 80 L50 75" stroke="#FF5C66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M120 0 C100 50, 80 80, 100 120 M95 110 L100 120 L110 115" stroke="#FF5C66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M150 0 C170 30, 190 20, 200 0" stroke="#FF5C66" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* Floating purple shape (Quarter Circle right aligned) */}
          <div className="footer-purple-shape"></div>

          <h2 className="newsletter-title">
            Subscribe to<br/>our newsletter
          </h2>
          <p className="newsletter-subtitle">
            To make your stay special and even more memorable
          </p>
          <button className="subscribe-btn">Subscribe Now</button>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Footer Links Grid */}
        <div className="footer-links-grid">
          
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#studio">Studio</a></li>
              <li><a href="#service">Service</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Terms & Policies</h4>
            <ul className="footer-list">
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#explore">Explore</a></li>
              <li><a href="#access">Accessibility</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Follow Us</h4>
            <ul className="footer-list">
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#linkedin">LinkedIn</a></li>
              <li><a href="#youtube">Youtube</a></li>
              <li><a href="#twitter">Twitter</a></li>
            </ul>
          </div>

          <div className="footer-col">
            {/* The image says 'Terms & Policies' again but realistically it's Contact */}
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-list contact-list">
              <li>1498w Fluton ste, STE<br/>2D Chicago, IL 63867</li>
              <li>(123) 456789000</li>
              <li>info@elementum.com</li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          ©2023 Elementum. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
