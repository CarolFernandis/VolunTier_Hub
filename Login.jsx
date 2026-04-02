import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("volunteer");
  const [showForgot, setShowForgot] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Check if already logged in on page load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setCurrentUser(storedUser);
      // Auto-redirect if session exists
      if (storedUser.role === "volunteer") {
        navigate("/volunteer-dashboard");
      } else {
        navigate("/host-dashboard");
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    alert("Logged out successfully!");
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: e.target.email.value,
      password: e.target.password.value,
      role: role, 
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("currentUser", JSON.stringify(data.user));
        setCurrentUser(data.user);
        alert("Login successful!");

        if (data.user.role === "volunteer") {
          navigate("/volunteer-dashboard");
        } else {
          navigate("/host-dashboard");
        }
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Server error. Is your backend running on port 5000?");
    }
  };

  // NOTE: This currently only works for local data. 
  // We will need a Backend route to fix this for MongoDB!
  const handlePasswordReset = (e) => {
    e.preventDefault();
    alert("Password reset is currently disabled. Please contact the administrator.");
    setShowForgot(false);
  };

  // UI rendering remains the same as your provided code...
  if (currentUser) {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: "200px", height: "100vh", background: "#f5f5f5", padding: "20px", borderRight: "1px solid #ddd" }}>
          <h4>Menu</h4>
          <button onClick={handleLogout} style={{ width: "100%", padding: "10px", marginTop: "20px", background: "#ff4d4d", color: "white", border: "none", cursor: "pointer", borderRadius: "6px" }}>
            Logout
          </button>
        </div>
        <div className="register-container" style={{ flex: 1 }}>
          <div className="register-box" style={{ textAlign: "center" }}>
            <h3>Welcome, {currentUser.name} 👋</h3>
            <p>You are logged in as {currentUser.role}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="register-container">
      <div className="register-box">
        <div className="logo">
          <a href="/"><img src="/src/assets/Voluntier_Hub.png" alt="logo" /></a>
        </div>
        <h6 className="title">Welcome Back to Our Community</h6>
        <div className="divider"><span>Log in</span></div>

        <form className="register-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" className="input-field" required />
          <label>Password</label>
          <input type="password" name="password" className="input-field" required />
          
          <div className="role-selection">
            <label><input type="radio" value="volunteer" checked={role === "volunteer"} onChange={(e) => setRole(e.target.value)} /> Volunteer</label>
            <label><input type="radio" value="host" checked={role === "host"} onChange={(e) => setRole(e.target.value)} /> Host</label>
          </div>

          <button type="submit" className="signup-btn">Log In</button>
        </form>

        <div style={{ textAlign: "right", marginTop: "10px" }}>
          <button style={{ background: "none", border: "none", color: "#007bff", cursor: "pointer" }} onClick={() => setShowForgot(!showForgot)}>
            Forgot Password?
          </button>
        </div>

        {showForgot && (
          <form className="register-form" style={{ marginTop: "15px" }} onSubmit={handlePasswordReset}>
            <label>Email</label>
            <input type="email" name="resetEmail" className="input-field" required />
            <label>Select Role</label>
            <select name="resetRole" className="input-field" required>
              <option value="volunteer">Volunteer</option>
              <option value="host">Host</option>
            </select>
            <label>New Password</label>
            <input type="password" name="newPassword" className="input-field" required />
            <button type="submit" className="signup-btn">Reset Password</button>
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