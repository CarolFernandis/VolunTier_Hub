import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from 'react-toastify';
import "./Register.css";

export default function Register() {
  const [role, setRole] = useState('volunteer');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!name || !email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success(`Registered as ${role.charAt(0).toUpperCase() + role.slice(1)}!`);
      navigate('/login');
    } catch (error) {
      toast.error('Registration failed: ' + error.message);
    }
  };
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
         <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" className="input-field" type="text" />

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