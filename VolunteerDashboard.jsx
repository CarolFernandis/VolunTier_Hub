import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function VolunteerDashboard() {
  const [currentUser, setCurrentUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
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

  // Handle input change
  const handleChange = (e) => {
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value,
    });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setCurrentUser({
        ...currentUser,
        profileImage: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  // Save profile
  const handleSave = () => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    const allUsers = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = allUsers.map((user) =>
      user.email === currentUser.email ? currentUser : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setIsEditing(false);
  };

  // Unapply activity
  const handleUnapply = (indexToRemove) => {
    const allActivities =
      JSON.parse(localStorage.getItem("activities")) || [];

    const updatedActivities = allActivities.filter((activity) => {
      return !(
        activity.email === currentUser.email &&
        activity.title === activities[indexToRemove].title
      );
    });

    localStorage.setItem("activities", JSON.stringify(updatedActivities));

    const newUserActivities = updatedActivities.filter(
      (activity) => activity.email === currentUser.email
    );

    setActivities(newUserActivities);
  };

  if (!currentUser) return null;

  return (
    <div className="volunteer-dashboard">

      {/* SIDEBAR */}
      <div className="vd-sidebar">
        <h2 className="logo">VolunTier Hub</h2>

        <div className="profile-section">
          <h3>👤 My Profile</h3>

          {/* Profile Image */}
          <div className="profile-image-container">
            <img
              src={
                currentUser.profileImage ||
                "https://via.placeholder.com/120"
              }
              alt="Profile"
              className="profile-image"
            />

            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            )}
          </div>

          {isEditing ? (
            <>
              <input name="name" value={currentUser.name || ""} onChange={handleChange} placeholder="Name" />
              <input name="place" value={currentUser.place || ""} onChange={handleChange} placeholder="Place" />
              <input name="age" value={currentUser.age || ""} onChange={handleChange} placeholder="Age" />
              <input name="gender" value={currentUser.gender || ""} onChange={handleChange} placeholder="Gender" />
              <input name="skills" value={currentUser.skills || ""} onChange={handleChange} placeholder="Skills" />
              <input name="qualification" value={currentUser.qualification || ""} onChange={handleChange} placeholder="Qualification" />
              <input name="contact" value={currentUser.contact || ""} onChange={handleChange} placeholder="Contact No" />
              <input value={currentUser.email} disabled />

              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
            </>
          ) : (
            <>
              <p><strong>Name:</strong> {currentUser.name}</p>
              <p><strong>Place:</strong> {currentUser.place}</p>
              <p><strong>Age:</strong> {currentUser.age}</p>
              <p><strong>Gender:</strong> {currentUser.gender}</p>
              <p><strong>Skills:</strong> {currentUser.skills}</p>
              <p><strong>Qualification:</strong> {currentUser.qualification}</p>
              <p><strong>Email:</strong> {currentUser.email}</p>
              <p><strong>Contact:</strong> {currentUser.contact}</p>

              <button
                className="edit-btn"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="vd-main">

        <div className="vd-header">
          <h1>🙋 Volunteer Dashboard</h1>
          <p>Manage your volunteering journey</p>
        </div>

        <div className="vd-stats">
          <div className="stat-card">
            <h2>{activities.length}</h2>
            <p>Total Activities Joined</p>
          </div>
        </div>

        <div className="vd-card">
          <h3>Find Opportunities</h3>
          <p>Explore volunteering opportunities that match your interests.</p>

          <Link to="/opportunity" className="violet-btn">
            Browse Opportunities
          </Link>
        </div>

        <div className="vd-card">
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
    </div>
  );
}
