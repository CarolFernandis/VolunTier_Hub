import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [role, setRole] = useState("volunteer");
  const [showForgot, setShowForgot] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Check if user already logged in
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    alert("Logged out successfully!");
  };

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
    setCurrentUser(matchedUser);

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

  // ✅ If already logged in → show logout UI only
  if (currentUser) {
    return (
      <div className="register-container">
        <div className="register-box" style={{ textAlign: "center" }}>
          <h3>Welcome, {currentUser.name} 👋</h3>
          <p>You are already logged in as {currentUser.role}.</p>

          <button className="signup-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="logo">
          <a href="/">
            <img alt="logo" src="/src/assets/Voluntier_Hub.png" />
          </a>
        </div>

        <h6 className="title">Welcome Back to Our Community</h6>

        <div className="divider">
          <span>Log in with</span>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            name="email"
            className="input-field"
            type="email"
            required
          />

          <label>Password</label>
          <input
            name="password"
            className="input-field"
            type="password"
            required
          />

          <div className="role-selection">
            <label>
              <input
                type="radio"
                value="volunteer"
                checked={role === "volunteer"}
                onChange={(e) => setRole(e.target.value)}
              />
              Volunteer
            </label>

            <label>
              <input
                type="radio"
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

        {/* Forgot Password */}
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
