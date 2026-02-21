import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const HostProfile = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "VolunTier Hub NGO",
    email: "host@voluntierhub.com",
    location: "India",
    about:
      "We create meaningful volunteering experiences through environmental drives, education support programs, and community welfare initiatives.",
    followers: 1250,
    opportunities: 24,
    volunteers: 180,
    rating: 4.8,
    logo: "https://images.unsplash.com/photo-1573164713988-8665fc963095"
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="advanced-profile-container">

      {/* COVER */}
      <div className="advanced-cover">
        <div className="cover-overlay"></div>
        <h1>{profile.name}</h1>
        <span className="verified-badge">✔ Verified Organization</span>
      </div>

      {/* MAIN PROFILE CARD */}
      <div className="advanced-profile-card">

        {/* HEADER */}
        <div className="profile-top-section">

          <img
            src={profile.logo}
            alt="logo"
            className="advanced-logo"
          />

          <div className="top-info">
            <h2>{profile.name}</h2>
            <p>📍 {profile.location}</p>
            <p>📧 {profile.email}</p>
          </div>

          <div className="top-actions">
            <button className="follow-btn">+ Follow</button>
            <button
              className="edit-btn"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </div>

        </div>

        {/* STATS */}
        <div className="advanced-stats">
          <div>
            <h3>{profile.opportunities}</h3>
            <p>Opportunities</p>
          </div>
          <div>
            <h3>{profile.volunteers}</h3>
            <p>Volunteers</p>
          </div>
          <div>
            <h3>{profile.followers}</h3>
            <p>Followers</p>
          </div>
          <div>
            <h3>{profile.rating} ⭐</h3>
            <p>Rating</p>
          </div>
        </div>

        {/* ABOUT */}
        <div className="profile-section">
          <h3>About Organization</h3>
          <p>{profile.about}</p>
        </div>

        {/* IMPACT HIGHLIGHTS */}
        <div className="profile-section">
          <h3>Impact Highlights</h3>
          <ul className="impact-list">
            <li>🌳 10,000+ Trees Planted</li>
            <li>📚 3,500+ Students Supported</li>
            <li>🍲 20,000+ Meals Distributed</li>
          </ul>
        </div>

        {/* ACTIVE OPPORTUNITIES PREVIEW */}
        <div className="profile-section">
          <h3>Active Opportunities</h3>
          <div className="mini-opportunity-card">
            🌱 Tree Plantation Drive
          </div>
          <div className="mini-opportunity-card">
            📚 Weekend Teaching Program
          </div>
        </div>

      </div>

      <Link to="/host/dashboard" className="dashboard-back">
        ⬅ Back to Dashboard
      </Link>

      {/* EDIT MODAL */}
      {isEditing && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Profile</h2>

            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Organization Name"
            />

            <input
              type="text"
              name="location"
              value={profile.location}
              onChange={handleChange}
              placeholder="Location"
            />

            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Email"
            />

            <textarea
              name="about"
              value={profile.about}
              onChange={handleChange}
              placeholder="About"
            />

            <input
              type="text"
              name="logo"
              value={profile.logo}
              onChange={handleChange}
              placeholder="Logo URL"
            />

            <div className="modal-buttons">
              <button onClick={() => setIsEditing(false)}>Save</button>
              <button
                className="cancel-btn"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default HostProfile;
