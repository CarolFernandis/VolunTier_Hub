import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {

  const navigate = useNavigate();

  const [role, setRole] = useState("volunteer");
  const [showForgot, setShowForgot] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Check if already logged in
  useEffect(() => {

    const storedUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (storedUser) {
      setCurrentUser(storedUser);

      if (storedUser.role === "volunteer") {
        navigate("/volunteer-dashboard");
      } else {
        navigate("/host-dashboard");
      }
    }

  }, [navigate]);



  // Logout
  const handleLogout = () => {

    localStorage.removeItem("currentUser");
    setCurrentUser(null);

    alert("Logged out successfully!");

    navigate("/login");

  };



  // Login
  const handleSubmit = (e) => {

    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password &&
        user.role === role
    );

    if (!matchedUser) {
      alert("Invalid email, password or role!");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify(matchedUser)
    );

    setCurrentUser(matchedUser);

    alert("Login successful!");

    if (matchedUser.role === "volunteer") {
      navigate("/volunteer-dashboard");
    } else {
      navigate("/host-dashboard");
    }

  };



  // Reset Password
  const handlePasswordReset = (e) => {

    e.preventDefault();

    const email = e.target.resetEmail.value;
    const newPassword = e.target.newPassword.value;
    const resetRole = e.target.resetRole.value;

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const userIndex = users.findIndex(
      (user) =>
        user.email === email &&
        user.role === resetRole
    );

    if (userIndex === -1) {
      alert("User not found!");
      return;
    }

    users[userIndex].password = newPassword;

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Password updated successfully!");

    setShowForgot(false);

  };



  // If already logged in
  if (currentUser) {

    return (

      <div style={{ display: "flex" }}>

        {/* LEFT LOGOUT SIDEBAR */}
        <div
          style={{
            width: "200px",
            height: "100vh",
            background: "#f5f5f5",
            padding: "20px",
            borderRight: "1px solid #ddd"
          }}
        >
          <h4>Menu</h4>

          <button
            onClick={handleLogout}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "20px",
              background: "#ff4d4d",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "6px"
            }}
          >
            Logout
          </button>
        </div>



        {/* MAIN CONTENT */}
        <div
          className="register-container"
          style={{ flex: 1 }}
        >

          <div
            className="register-box"
            style={{ textAlign: "center" }}
          >

            <h3>Welcome, {currentUser.name} 👋</h3>

            <p>
              You are logged in as {currentUser.role}
            </p>

          </div>

        </div>

      </div>

    );
  }



  return (

    <div className="register-container">

      <div className="register-box">

        <div className="logo">
          <a href="/">
            <img
              src="/src/assets/Voluntier_Hub.png"
              alt="logo"
            />
          </a>
        </div>

        <h6 className="title">
          Welcome Back to Our Community
        </h6>

        <div className="divider">
          <span>Log in</span>
        </div>



        <form
          className="register-form"
          onSubmit={handleSubmit}
        >

          <label>Email</label>

          <input
            type="email"
            name="email"
            className="input-field"
            required
          />

          <label>Password</label>

          <input
            type="password"
            name="password"
            className="input-field"
            required
          />


          <div className="role-selection">

            <label>
              <input
                type="radio"
                value="volunteer"
                checked={role === "volunteer"}
                onChange={(e) =>
                  setRole(e.target.value)
                }
              />
              Volunteer
            </label>

            <label>
              <input
                type="radio"
                value="host"
                checked={role === "host"}
                onChange={(e) =>
                  setRole(e.target.value)
                }
              />
              Host
            </label>

          </div>

          <button
            type="submit"
            className="signup-btn"
          >
            Log In
          </button>

        </form>



        <div
          style={{
            textAlign: "right",
            marginTop: "10px"
          }}
        >

          <button
            style={{
              background: "none",
              border: "none",
              color: "#007bff",
              cursor: "pointer"
            }}
            onClick={() =>
              setShowForgot(!showForgot)
            }
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
              type="email"
              name="resetEmail"
              className="input-field"
              required
            />

            <label>Select Role</label>

            <select
              name="resetRole"
              className="input-field"
              required
            >
              <option value="volunteer">
                Volunteer
              </option>
              <option value="host">
                Host
              </option>
            </select>

            <label>New Password</label>

            <input
              type="password"
              name="newPassword"
              className="input-field"
              required
            />

            <button
              type="submit"
              className="signup-btn"
            >
              Reset Password
            </button>

          </form>

        )}



        <div className="signin-link">

          <h6>Don't have an Account?</h6>

          <Link to="/register">
            Sign Up
          </Link>

        </div>

      </div>

    </div>

  );
}
