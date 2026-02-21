import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const HostDashboard = () => {

  const defaultProfiles = [
    {
      id: 1,
      name: "Green Earth Foundation",
      location: "Mumbai, Maharashtra",
      image: "https://i.pinimg.com/736x/58/80/94/5880947a46b1bc24324af9b70ff77900.jpg",
      opportunities: 6,
    },
    {
      id: 2,
      name: "Food For All NGO",
      location: "Pune, Maharashtra",
      image: "https://i.pinimg.com/1200x/64/fa/d3/64fad395b35bf77ed1aadb4de16206d3.jpg",
      opportunities: 4,
    },
    {
      id: 3,
      name: "Care & Smile Foundation",
      location: "Nagpur, Maharashtra",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      opportunities: 8,
    }
  ];

  const [profiles, setProfiles] = useState(defaultProfiles);
  const [orgName, setOrgName] = useState("");
  const [search, setSearch] = useState("");
  const [orgLocation, setOrgLocation] = useState("");
  const [orgImage, setOrgImage] = useState("");

  const handleCreateProfile = (e) => {
    e.preventDefault();

    const newProfile = {
      id: Date.now(),
      name: orgName,
      location: orgLocation,
      image: orgImage || "https://via.placeholder.com/400x300",
      opportunities: 0,
    };

    setProfiles([...profiles, newProfile]);
    setOrgName("");
    setOrgLocation("");
    setOrgImage("");
  };

  // ✅ FIXED SEARCH FILTER
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase()) ||
    profile.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="premium-layout">

      <div className="premium-sidebar">
        <h2>VolunTier Hub</h2>

        <form onSubmit={handleCreateProfile} className="premium-form">
          <h4>Create Host Profile</h4>

          <input
            type="text"
            placeholder="Organization Name"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Location"
            value={orgLocation}
            onChange={(e) => setOrgLocation(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Image URL (optional)"
            value={orgImage}
            onChange={(e) => setOrgImage(e.target.value)}
          />

          <button type="submit">Create</button>
        </form>

        <Link to="/host/post" className="premium-btn">
          ➕ Post Opportunity
        </Link>
      </div>

      <div className="premium-content">

        <div className="dashboard-header">
          <h1>🏢 Host Dashboard</h1>
          <p>Manage multiple organizations and opportunities</p>
        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="🔍 Search profiles..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="stats-row">
          <div className="stat-box">
            <h3>{profiles.length}</h3>
            <p>Total Profiles</p>
          </div>
          <div className="stat-box">
            <h3>
              {profiles.reduce((sum, p) => sum + p.opportunities, 0)}
            </h3>
            <p>Total Opportunities</p>
          </div>
        </div>

        <div className="premium-grid">
          {filteredProfiles.map((profile) => (
            <div key={profile.id} className="premium-card">
              <div
                className="card-image"
                style={{ backgroundImage: `url(${profile.image})` }}
              ></div>

              <div className="card-content">
                <h3>{profile.name}</h3>
                <p>{profile.location}</p>

                <div className="card-footer">
                  <span>{profile.opportunities} Opportunities</span>
                  <div>
                    <Link to="/host/post">Post</Link>
                    <Link to={`/host/activities/${profile.id}`}>
                    View My Activities
                  </Link>



                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: show message if no results */}
        {filteredProfiles.length === 0 && (
          <p style={{ marginTop: "20px", color: "#888" }}>
            No profiles found.
          </p>
        )}

        <Link to="/" className="back-home">
          ⬅ Back to Home
        </Link>

      </div>
    </div>
  );
};

export default HostDashboard;
