import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const PostOpportunity = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("postedOpportunities")) || [];
    setOpportunities(saved);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

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

    const updated = [...opportunities, newOpportunity];

    setOpportunities(updated);

    localStorage.setItem(
      "postedOpportunities",
      JSON.stringify(updated)
    );

    setTitle("");
    setLocation("");
    setDescription("");
    setDate("");
    setImage("");
  };

  // DELETE FUNCTION
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Delete this opportunity?");
    if (!confirmDelete) return;

    const updated = opportunities.filter((opp) => opp.id !== id);

    setOpportunities(updated);

    localStorage.setItem(
      "postedOpportunities",
      JSON.stringify(updated)
    );
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">➕ Post New Opportunity</h1>

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
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
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

      {/* Cards preview */}

      <div className="opp-grid-three">

        {opportunities.map((opp) => (

          <div key={opp.id} className="opp-card">

            {/* THREE DOT DELETE BUTTON */}

            <div className="card-menu">

              <button
                className="menu-btn"
                onClick={() => handleDelete(opp.id)}
              >
                ⋮
              </button>

            </div>

            <div
              onClick={() => navigate(`/opportunity/${opp.id}`)}
            >

              <div className="opp-image-wrapper">
                <img src={opp.image} alt={opp.title} />
              </div>

              <div className="opp-body">

                <h5 className="opp-title">{opp.title}</h5>

                <p className="opp-location">
                  📍 {opp.location}
                </p>

                <p className="opp-description">
                  {opp.description}
                </p>

                <p className="opp-date">
                  📅 {opp.date}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default PostOpportunity;
