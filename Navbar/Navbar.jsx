
import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import VolunTier_Hub from "../../assets/VolunTier_Hub.png";
import login from "../../assets/login.png";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown if clicked outside.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (

        <nav className="navbar">
     <Link to="/">
         <img src={VolunTier_Hub}
          alt="Logo" 
          className="logo" />
     </Link>

      <ul className="navbar-menu">
        <li><NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink></li>
        <li><NavLink to="/opportunity" className={({ isActive }) => (isActive ? "active" : "")}>Opportunity</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>Blog</NavLink></li>
        <li><NavLink to="/testimonials" className={({ isActive }) => (isActive ? "active" : "")}>Testimonials</NavLink></li>
        <li><NavLink to="/faq" className={({ isActive }) => (isActive ? "active" : "")}>FAQ</NavLink></li>
      </ul>

      <div className="custom-dropdown" ref={dropdownRef}>
        <img
          src={login}
          alt="Login"
          className="login-icon"
          onClick={() => setOpen(!open)}
        />
        {open && (

<div className="custom-dropdown-menu">
            <NavLink to="/login" onClick={() => setOpen(false)}>Login</NavLink>
            <NavLink to="/register" onClick={() => setOpen(false)}>Register</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
