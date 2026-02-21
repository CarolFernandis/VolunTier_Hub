import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [role, setRole] = useState("volunteer");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: role,
    };

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // ✅ Check duplicate based on email + role
    const userExists = existingUsers.find(
      (user) =>
        user.email === newUser.email &&
        user.role === newUser.role
    );

    if (userExists) {
      alert(`This email is already registered as ${newUser.role}!`);
      return;
    }

    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Registration successful!");

    e.target.reset();
    setRole("volunteer");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="logo">
          <a href="/">
            <img alt="logo" src="/src/assets/Voluntier_Hub.png" />
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
          <input
            id="name"
            name="name"
            className="input-field"
            type="text"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            className="input-field"
            type="email"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            className="input-field"
            type="password"
            required
          />

          <div className="role-selection">
            <label>
              <input
                type="radio"
                name="role"
                value="volunteer"
                checked={role === "volunteer"}
                onChange={(e) => setRole(e.target.value)}
              />
              Volunteer
            </label>

            <label>
              <input
                type="radio"
                name="role"
                value="host"
                checked={role === "host"}
                onChange={(e) => setRole(e.target.value)}
              />
              Host
            </label>
          </div>

          <button className="signup-btn" type="submit">
            Sign Up
          </button>
        </form>

        <div className="signin-link">
          <h6>Already have an Account?</h6>
          <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
}
