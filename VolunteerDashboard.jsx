import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function VolunteerDashboard() {
  const [currentUser, setCurrentUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      navigate("/login");
      return;
    }

    setCurrentUser(user);

    const allActivities =
      JSON.parse(localStorage.getItem("activities")) || [];

    const userActivities = allActivities.filter(
      (activity) => activity.email === user.email
    );

    setActivities(userActivities);
  }, [navigate]);

  // 🔥 UNAPPLY FUNCTION
  const handleUnapply = (indexToRemove) => {
    const allActivities =
      JSON.parse(localStorage.getItem("activities")) || [];

    // Remove only selected activity for this user
    const updatedActivities = allActivities.filter((activity, index) => {
      const isSameUser = activity.email === currentUser.email;
      const isSameIndex =
        activities[indexToRemove] &&
        activity.title === activities[indexToRemove].title &&
        isSameUser;

      return !isSameIndex;
    });

    localStorage.setItem("activities", JSON.stringify(updatedActivities));

    // Update state instantly
    const newUserActivities = updatedActivities.filter(
      (activity) => activity.email === currentUser.email
    );

    setActivities(newUserActivities);
  };

  if (!currentUser) return null;

  return (
    <div className="dashboard-wrapper">

      {/* Top Section */}
      <div className="top-section">
        <h2>Volunteer Dashboard</h2>
      </div>

      {/* Stats */}
      <div className="stats-card">
        <h3>Total Activities Participated</h3>
        <h1>{activities.length}</h1>
      </div>

      {/* Find Opportunities */}
      <div className="main-card">
        <h3>Find Opportunities</h3>
        <p>Explore volunteering opportunities that match your interests.</p>

        <Link to="/opportunity" className="violet-btn">
          Browse Opportunities
        </Link>
      </div>

      {/* My Activities */}
      <div className="main-card">
        <h3>📋 My Activities</h3>

        {activities.length === 0 ? (
          <p>No activities joined yet.</p>
        ) : (
          <ul className="activity-list">
            {activities.map((activity, index) => (
              <li key={index} className="activity-item">
                <div>
                  <strong>{activity.title}</strong> – {activity.location}
                </div>

                <button
                  className="unapply-btn"
                  onClick={() => handleUnapply(index)}
                >
                  Unapply
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}
