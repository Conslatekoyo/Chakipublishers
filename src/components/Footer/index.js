import React from "react";
import "./style.css";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-section" id="footer1">
          <h4 className="company">African Meadows International Organisation</h4>
          <ul className="about">
            <li>
              <a href="/">is a compassionate non- profit organization that is deeply committed to supporting refugees who have fled their homes due to conflict and persecution. Our mission is to help them rebuild their
lives and create a brighter future in their new environment.</a>
            </li>

          </ul>
        </div>
        <div className="footer-section" id="footer1">
          <h4 className="company">Quick Links</h4>
          <ul className="about">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Causes</a>
            </li>
            <li>
              <a href="/">Events</a>
            </li>
            <li>
              <a href="/">Become a Volunteer</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>

          </ul>
        </div>

        <div className="footer-section" id="footer2">
          <h4 className="office">OFFICES</h4>
          <ul>
            <li className="nairobi">
              <a href="/">Karen, Nairobi</a>
            </li>
          </ul>
        </div>

        <div className="footer-section" id="footer3">
          <h4 className="contact">CONTACT US</h4>
          <ul className="a">
            <li>
              <a href="/">Tel: +254000034278</a>
            </li>
            <li>
              <a href="/">info@amio.com</a>
            </li>
          </ul>
        </div>
      </div>
      

      <div className="social-section">
      <ul className="social-icons">
  <li>
    <a href="/" data-testid="twitter-icon">
      <FaTwitter />
    </a>
  </li>
  <li>
    <a href="/" data-testid="facebook-icon">
      <FaFacebook />
    </a>
  </li>
  <li>
    <a href="/" data-testid="linkedin-icon">
      <FaLinkedin />
    </a>
  </li>
  <li>
    <a href="/" data-testid="instagram-icon">
      <FaInstagram />
    </a>
  </li>
</ul>

        <small>&copy; AMIO {new Date().getFullYear()}, All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;