import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

// Dummy opportunity images
import CleanUp03 from "../assets/CleanUp03.jpeg";
import FoodDonation01 from "../assets/FoodDonation01.jpeg";
import SeniorHelp02 from "../assets/SeniorHelp02.jpg";
import MedicalHelp01 from "../assets/MedicalHelp01.jpg";
import FieldWork01 from "../assets/FieldWork01.jpeg";

export default function HostDashboard() {
  const [currentHost, setCurrentHost] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [opportunities, setOpportunities] = useState([]);
  const [totalApplicants, setTotalApplicants] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) {
      navigate("/login");
      return;
    }

    setCurrentHost(user);

    // Dummy opportunities
    const dummyOps = [
      {
        id: 1,
        title: "Volunteer in Community Clean-Up",
        location: "Gorgaon, Mumbai",
        image: CleanUp03,
      },
      {
        id: 2,
        title: "Volunteer in Food Distribution",
        location: "Kolhapur",
        image: FoodDonation01,
      },
      {
        id: 3,
        title: "Volunteer in Care Assistance",
        location: "Panvel, Navi Mumbai",
        image: SeniorHelp02,
      },
      {
        id: 4,
        title: "Volunteer in Medical Check-Up",
        location: "Nagpur",
        image: MedicalHelp01,
      },
      {
        id: 5,
        title: "Volunteer in Farm Work",
        location: "Nashik",
        image: FieldWork01,
      },
    ];

    const postedOps =
      JSON.parse(localStorage.getItem("postedOpportunities")) || [];

    const ops = [...dummyOps, ...postedOps];

    const loadApplications = () => {
      const allApplications =
        JSON.parse(localStorage.getItem("activities")) || [];

      const normalize = (str) => str.trim().toLowerCase();

      const opsWithApplicants = ops.map((op) => {
        const applicants = allApplications.filter(
          (app) => normalize(app.title) === normalize(op.title)
        );

        return { ...op, applicants };
      });

      setOpportunities(opsWithApplicants);

      const total = opsWithApplicants.reduce(
        (sum, op) => sum + op.applicants.length,
        0
      );

      setTotalApplicants(total);
    };

    loadApplications();

    const handleStorageChange = () => {
      loadApplications();
    };

    window.addEventListener("storage", handleStorageChange);

    return () =>
      window.removeEventListener("storage", handleStorageChange);

  }, [navigate]);

  const handleChange = (e) => {
    setCurrentHost({
      ...currentHost,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setCurrentHost({
        ...currentHost,
        profileImage: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const allHosts = JSON.parse(localStorage.getItem("hosts")) || [];

    const updatedHosts = allHosts.map((host) =>
      host.email === currentHost.email ? currentHost : host
    );

    localStorage.setItem("hosts", JSON.stringify(updatedHosts));
    localStorage.setItem("currentUser", JSON.stringify(currentHost));

    setIsEditing(false);
  };

  // LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  if (!currentHost) return null;

  return (
    <div className="host-layout">

      {/* Sidebar */}

      <div className="host-sidebar-purple">

        <h1 className="sidebar-title">VolunTier Hub</h1>

        <div className="profile-card">

          <h2>My Profile</h2>

          <div className="profile-image-wrapper">
            {currentHost.profileImage ? (
              <img
                src={currentHost.profileImage}
                alt="Host"
                className="profile-image"
              />
            ) : (
              <div className="profile-placeholder">
                {currentHost.name?.charAt(0)}
              </div>
            )}
          </div>

          {isEditing && (
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          )}

          {isEditing ? (
            <>
              <input
                name="name"
                value={currentHost.name}
                onChange={handleChange}
                placeholder="Name"
              />

              <input
                name="place"
                value={currentHost.place}
                onChange={handleChange}
                placeholder="Place"
              />

              <input
                name="contact"
                value={currentHost.contact}
                onChange={handleChange}
                placeholder="Contact"
              />

              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
            </>
          ) : (
            <>
              <p>
                <strong>Name:</strong> {currentHost.name}
              </p>

              <p>
                <strong>Place:</strong> {currentHost.place}
              </p>

              <p>
                <strong>Email:</strong> {currentHost.email}
              </p>

              <p>
                <strong>Contact:</strong> {currentHost.contact}
              </p>

              <button
                className="edit-profile-btn"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            </>
          )}

          <Link to="/host/post" className="new-event-btn">
            + New Event
          </Link>

          {/* LOGOUT BUTTON */}
          <button
            className="logout-btn"
            onClick={handleLogout}
            style={{
              marginTop: "10px",
              width: "100%",
              padding: "10px",
              background: "#e74c3c",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            Logout
          </button>

        </div>
      </div>

      {/* Main Content */}

      <div className="host-main">

        <div className="host-stats">

          <div className="stat-card">
            <h2>{opportunities.length}</h2>
            <p>No. of Events</p>
          </div>

          <div className="stat-card">
            <h2>{totalApplicants}</h2>
            <p>No. of Applicants</p>
          </div>

        </div>

        <h3 className="section-title">Events Created by You</h3>

        <div className="opp-grid-three">

          {opportunities.map((opp) => (
            <div className="opp-card" key={opp.id}>

              <div className="opp-image-wrapper">
                <img src={opp.image} alt={opp.title} />
              </div>

              <div className="opp-body">

                <h5 className="opp-title">{opp.title}</h5>

                <p className="opp-location">{opp.location}</p>

                <p className="opp-description">
                  Volunteer opportunity created by you.
                </p>

                <Link
                  to={`/applicants/${opp.id}?title=${encodeURIComponent(
                    opp.title
                  )}`}
                  className="applicants-link"
                >
                  👥 Total Applicants: {opp.applicants.length}
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}
