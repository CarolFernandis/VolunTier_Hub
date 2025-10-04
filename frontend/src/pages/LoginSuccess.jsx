import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Login.css'; // Reuse login styles or create specific ones

export default function LoginSuccess() {
  const location = useLocation();
  const { role } = location.state || { role: 'User' };

  return (
    <div className="register-container">
      <div className="register-box">
        <h6 className="title">Login Successful!</h6>
        <p>Welcome back! You have logged in as a <strong>{role}</strong>.</p>
        <Link to="/" className="signup-btn">Go to Home</Link>
      </div>
    </div>
  );
}
