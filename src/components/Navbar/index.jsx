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
              src={process.env.PUBLIC_URL + '/images/logo.jpg'}
              alt="Logo"
              className="logo-img"
            />
          </a>
          <a className="brand-name" href="#logoBrand">
            African Meadows International Organisation
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
            <a href="#causes">Causes</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#volunteer">Become a volunteer</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          <li>
            <a href="#footer">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
