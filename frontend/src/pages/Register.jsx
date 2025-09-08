import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="logo">
          <a href="/">
            <img alt="logo" width="200" height="60" src="/src/assets/Voluntier_Hub.png" />
          </a>
        </div>
        <h6 className="title">We Welcome You To Our Community</h6>
        <div className="social-buttons">
          <button className="social-btn google-btn" type="button">
            <img alt="icon1" src="/src/assets/GoogleLogo.png" />
            Google
          </button>
          <button className="social-btn facebook-btn" type="button">
            <img alt="icon2" src="/src/assets/FacebookLogo.png" />
            Facebook
          </button>
        </div>
        <div className="divider">
          <span>or sign up with</span>
        </div>
        <form className="register-form">
          <label htmlFor="name">Name</label>
          <input id="name" className="input-field" type="text" />

          <label htmlFor="email">Email Address</label>
          <input id="email" className="input-field" type="email" />

          <label htmlFor="password">Password</label>
          <input id="password" className="input-field" type="password" />

          <button className="signup-btn" type="submit">Sign Up</button>
        </form>
        <div className="signin-link">
          <h6>Already have an Account?</h6>
          <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
