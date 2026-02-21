import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [role, setRole] = useState("volunteer");
  const [showForgot, setShowForgot] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password &&
        user.role === role
    );

    if (!matchedUser) {
      alert("Invalid email, password, or role!");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(matchedUser));
    alert("Login successful!");

    if (matchedUser.role === "volunteer") {
      navigate("/volunteer-dashboard");
    } else {
      navigate("/host-dashboard");
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();

    const email = e.target.resetEmail.value;
    const newPassword = e.target.newPassword.value;
    const resetRole = e.target.resetRole.value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userIndex = users.findIndex(
      (user) => user.email === email && user.role === resetRole
    );

    if (userIndex === -1) {
      alert("User not found!");
      return;
    }

    users[userIndex].password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Password updated successfully!");
    setShowForgot(false);
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="logo">
          <a href="/">
            <img alt="logo" src="/src/assets/Voluntier_Hub.png" />
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
            Log In
          </button>
        </form>

        {/* Forgot Password Link */}
        <div style={{ textAlign: "right", marginTop: "10px" }}>
          <button
            style={{
              background: "none",
              border: "none",
              color: "#007bff",
              cursor: "pointer",
              fontSize: "14px"
            }}
            onClick={() => setShowForgot(!showForgot)}
          >
            Forgot Password?
          </button>
        </div>

        {/* Forgot Password Form */}
        {showForgot && (
          <form
            className="register-form"
            style={{ marginTop: "15px" }}
            onSubmit={handlePasswordReset}
          >
            <label>Email</label>
            <input
              name="resetEmail"
              className="input-field"
              type="email"
              required
            />

            <label>Select Role</label>
            <select name="resetRole" className="input-field" required>
              <option value="volunteer">Volunteer</option>
              <option value="host">Host</option>
            </select>

            <label>New Password</label>
            <input
              name="newPassword"
              className="input-field"
              type="password"
              required
            />

            <button className="signup-btn" type="submit">
              Reset Password
            </button>
          </form>
        )}

        <div className="signin-link">
          <h6>Don't have an Account?</h6>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
