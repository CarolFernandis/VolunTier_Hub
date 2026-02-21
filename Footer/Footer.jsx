import React from "react";
import "./Footer.css";
import VolunTier_Hub from "../../assets/VolunTier_Hub.png";

const Footer = () => {
  return (
  <footer className="footer py-3">
      <div className="footer-container">
        {/* Logo + Text */}
        <div className="footer-section">
          <img src={VolunTier_Hub} alt="Logo" className="footer-logo" />
          <p>
            VolunTier Hub connects volunteers with meaningful opportunities.
            Join us for sustainable and impactful projects that bring change.
  
          </p>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/refund">Refund & Cancellation</a></li>
          </ul>
        </div>

        {/* Community Links */}
        <div className="footer-section">
          <h3> Community</h3>
          <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/opportunity">Find Opportunities</a></li>
            <li><a href="/login">Login as Volunteer</a></li>
            <li><a href="/register">Login as Host</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Join Our Volunteer Family</h3>
          <div className="newsletter">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
          <small>* Get weekly updates and insights directly to your inbox.</small>
        </div>
      </div>

      {/* Bottom copyright */} {/* Footer sticks to bottom - The code is in App.jsx*/} 

      <div className="footer-bottom">
        <p>© VolunTier Hub 2025. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;  