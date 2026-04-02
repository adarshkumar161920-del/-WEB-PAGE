import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="navbar-logo">
        Elementum
      </div>
      
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#studio">Studio</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#faqs">FAQ's</a></li>
      </ul>
      
      <div className="navbar-menu">
        <div className="menu-icon">
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
