import React, { useState } from 'react';
import './style.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    console.log(toggleNav);
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav>
      <div className={`navbar-wrapper ${isNavOpen ? 'nav-open' : ''}`}>
        <span className="brand-container">
          <a className="logo-link" href="#logo">
            <img
             
            />
          </a>
          <a className="brand-name" href="#logoBrand">
            Chaki Publishers
          </a>
        </span>
        <div className={`hamburger-menu ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-list ${isNavOpen ? 'open' : ''}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#causes">Why Chaki</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>

          <li>
            <a href="#volunteer">Our Services</a>
          </li>
          <li>
            <a href="#events">Our Work</a>
          </li>
          <li>
            <a href="#footer">Join our Community</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
