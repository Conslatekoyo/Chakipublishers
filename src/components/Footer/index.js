import React from "react";
import "./style.css";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-section" id="footer1">
          <h4 className="company">Chaki Publishers</h4>
          <ul className="about">
            <li>
              <a href="/">Join us as we give life to ideas.We are a cutting-edge publishing house founded in 2023,
         devoted to transforming exceptional content into published masterpieces.
        </a>
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
              <a href="/">Why Chaki</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Our Services</a>
            </li>
            <li>
              <a href="/">Our Work</a>
            </li>
            <li>
              <a href="/">Join Our Community</a>
            </li>

          </ul>
        </div>

        <div className="footer-section" id="footer2">
          <h4 className="office">OFFICES</h4>
          <ul>
            <li className="nairobi">
              <a href="/">Nairobi, Kenya</a>
            </li>
          </ul>
        </div>

        <div className="footer-section" id="footer3">
          <h4 className="contact">CONTACT US</h4>
          <ul className="a">
            <li>
              <a href="/">Tel: +254758006982</a>
            </li>
            <li>
              <a href="/">chakipublishers@gmail.com</a>
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

        <small>&copy; CHAKIPUBLISHERS {new Date().getFullYear()}, All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;