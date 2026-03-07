import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ApplyPage() {
  const { id } = useParams(); // Opportunity ID
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  // Get current user
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (!user) {
      navigate("/login");
      return;
    }
    setCurrentUser(user);
  }, [navigate]);

  const handleApply = () => {
    if (!currentUser) return;

    // Fetch existing activities
    const existingActivities = JSON.parse(localStorage.getItem("activities")) || [];

    // Dummy opportunity titles (replace with your actual dynamic mapping if needed)
    const opportunities = [
      { id: 1, title: "Volunteer in Community Clean-Up" },
      { id: 2, title: "Food Bank Volunteer" },
      { id: 3, title: "Senior Care Assistance" },
      { id: 4, title: "Medical Assistance" },
      { id: 5, title: "Farm Work Assistance" },
    ];

    const opportunity = opportunities.find(op => op.id.toString() === id);
    if (!opportunity) {
      alert("Invalid opportunity!");
      return;
    }

    // Check if user already applied
    const alreadyJoined = existingActivities.find(
      (activity) =>
        activity.email === currentUser.email &&
        activity.title === opportunity.title
    );

    if (alreadyJoined) {
      alert("You have already applied!");
      return;
    }

    // Create new activity
    const newActivity = {
      email: currentUser.email,
      name: currentUser.name || "Anonymous",
      phone: currentUser.contact || currentUser.phone || "N/A",
      profileImage: currentUser.profileImage || "",
      title: opportunity.title,
      location: "TBD", // optional, or fetch dynamically if needed
      date: new Date().toLocaleDateString(),
    };

    const updatedActivities = [...existingActivities, newActivity];
    localStorage.setItem("activities", JSON.stringify(updatedActivities));

    // Trigger storage event for real-time updates
    window.dispatchEvent(new Event("storage"));

    alert("Applied successfully!");
    navigate("/volunteer-dashboard"); // Redirect back to volunteer dashboard
  };

  if (!currentUser) return null;

  return (
    <div style={{ padding: "30px" }}>
      <h2>Apply for Opportunity</h2>
      <p>Name: {currentUser.name}</p>
      <p>Email: {currentUser.email}</p>
      <button onClick={handleApply}>Apply Now</button>
    </div>
  );
}