import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {

  const navigate = useNavigate();

  const [role, setRole] = useState("volunteer");
  const [errors, setErrors] = useState({});

  // Form Validation
  const validateForm = (data) => {

    let newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    } 
    else if (data.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } 
    else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!data.password) {
      newErrors.password = "Password is required";
    } 
    else if (data.password.length < 6) {
      newErrors.password = "Password must be 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: role
    };

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Get stored users
    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    // Check duplicate
    const userExists = existingUsers.find(
      (user) =>
        user.email === formData.email &&
        user.role === formData.role
    );

    if (userExists) {
      alert(`This email is already registered as ${formData.role}`);
      return;
    }

    // Save new user
    const updatedUsers = [...existingUsers, formData];

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    alert("Registration Successful!");

    navigate("/login");
  };


  // Google Signup Simulation
  const handleGoogleSignup = () => {

    const googleUser = {
      name: "Google User",
      email: "googleuser@gmail.com",
      password: "google-auth",
      role: "volunteer"
    };

    const existingUsers =
      JSON.parse(localStorage.getItem("users")) || [];

    const userExists = existingUsers.find(
      (user) => user.email === googleUser.email
    );

    if (!userExists) {
      existingUsers.push(googleUser);
      localStorage.setItem(
        "users",
        JSON.stringify(existingUsers)
      );
    }

    // Save current logged in user
    localStorage.setItem(
      "currentUser",
      JSON.stringify(googleUser)
    );

    alert("Signed in with Google!");

    navigate("/volunteer-dashboard");
  };

  return (
    <div className="register-container">

      <div className="register-box">

        <div className="logo">
          <a href="/">
            <img src="/src/assets/Voluntier_Hub.png" alt="logo"/>
          </a>
        </div>

        <h6 className="title">
          We Welcome You To Our Community
        </h6>

        {/* Social Buttons */}
        <div className="social-buttons">

          <button
            className="social-btn google-btn"
            type="button"
            onClick={handleGoogleSignup}
          >
            <img src="/src/assets/GoogleLogo.png" alt="google"/>
            Google
          </button>

          <button
            className="social-btn facebook-btn"
            type="button"
            onClick={() => alert("Facebook Login Coming Soon")}
          >
            <img src="/src/assets/FacebookLogo.png" alt="fb"/>
            Facebook
          </button>

        </div>

        <div className="divider">
          <span>or sign up with</span>
        </div>

        {/* Form */}
        <form className="register-form" onSubmit={handleSubmit}>

          <label>Name</label>
          <input
            type="text"
            name="name"
            className="input-field"
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label>Email</label>
          <input
            type="email"
            name="email"
            className="input-field"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Password</label>
          <input
            type="password"
            name="password"
            className="input-field"
          />
          {errors.password && <p className="error">{errors.password}</p>}

          {/* Role */}
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
