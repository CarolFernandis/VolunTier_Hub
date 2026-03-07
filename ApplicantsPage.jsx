import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import "./Dashboard.css";

export default function ApplicantsPage() {
  const { id } = useParams(); // Opportunity ID
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const title = query.get("title") || "Opportunity";

  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const allApplications = JSON.parse(localStorage.getItem("activities")) || [];
    const oppApplicants = allApplications.filter(app => app.title === title);
    setApplicants(oppApplicants);
  }, [title]);

  return (
    <div className="host-main" style={{ padding: "30px" }}>
      <h2>Applicants for: {title}</h2>
      <p>Total Applicants: {applicants.length}</p>

      {applicants.length === 0 && <p>No applicants yet.</p>}

      <div className="opp-grid-three">
        {applicants.map((app, idx) => (
          <div className="opp-card" key={idx}>
            <div className="opp-image-wrapper">
              {app.profileImage ? (
                <img src={app.profileImage} alt={app.name} />
              ) : (
                <div className="profile-placeholder">{app.name?.charAt(0)}</div>
              )}
            </div>
            <div className="opp-body">
              <h5 className="opp-title">{app.name}</h5>
              <p><strong>Email:</strong> {app.email}</p>
              <p><strong>Contact:</strong> {app.phone || "N/A"}</p>
              <p><small>Applied on: {app.date}</small></p>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}