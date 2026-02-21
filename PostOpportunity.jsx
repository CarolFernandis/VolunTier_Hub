import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const PostOpportunity = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [opportunities, setOpportunities] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOpportunity = {
      id: Date.now(),
      title,
      location,
      description,
      date,
      image,
    };

    setOpportunities([...opportunities, newOpportunity]);

    setTitle("");
    setLocation("");
    setDescription("");
    setDate("");
    setImage("");
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">➕ Post New Opportunity</h1>

      {/* FORM */}
      <form className="dashboard-card" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Opportunity Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
          required
        />

        <input
          type="text"
          placeholder="Location (City, State)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input-field"
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input-field"
          required
        />

        <input
          type="text"
          placeholder="Image URL (paste image link)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="input-field"
          required
        />

        <textarea
          placeholder="Opportunity Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-field"
          rows="3"
          required
        />

        <button className="signup-btn" type="submit">
          Post Opportunity
        </button>
      </form>

      {/* CARDS SECTION */}
      <div className="opportunity-grid">
        {opportunities.map((opp) => (
          <div key={opp.id} className="opportunity-card">
            <img
              src={opp.image}
              alt={opp.title}
              className="opportunity-image"
            />

            <div className="opportunity-content">
              <h3>{opp.title}</h3>
              <p className="location-text">{opp.location}</p>
              <p className="description-text">{opp.description}</p>

              <div className="date-row">
                📅 <span>{opp.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to="/host/dashboard" className="dashboard-back">
        ⬅ Back to Dashboard
      </Link>
    </div>
  );
};

export default PostOpportunity;
