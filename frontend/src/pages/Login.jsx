import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [role, setRole] = useState('volunteer');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email: e.target.email.value, password: e.target.password.value, role });
  };
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="logo">
          <a href="/">
            <img alt="logo" width="200" height="60" src="/src/assets/Voluntier_Hub.png" />
          </a>
        </div>
        <h6 className="title">Welcome Back to Our Community</h6>
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
          <span>or Log in with</span>
        </div>
         <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input id="email" className="input-field" type="email" />

          <label htmlFor="password">Password</label>
          <input id="password" className="input-field" type="password" />

          <div className="role-selection">
            <label>
              <input type="radio" name="role" value="volunteer" checked={role === 'volunteer'} onChange={(e) => setRole(e.target.value)} />
              Volunteer
            </label>
            <label>
              <input type="radio" name="role" value="host" checked={role === 'host'} onChange={(e) => setRole(e.target.value)} />
              Host
            </label>
          </div>

          <button className="signup-btn" type="submit">Log In</button>
        </form>
        <div className="signin-link">
          <h6>Don't have an Account?</h6>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}