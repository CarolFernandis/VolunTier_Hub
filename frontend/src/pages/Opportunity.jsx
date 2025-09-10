//Opportunity Page
import React from "react";

import "./Opportunity.css"; //Link Opportunity css

export default function Opportunity() {
  // Sample data for volunteer opportunities
  const opportunities = [
    {
      id: 1,
      title: "Community Clean-up",
      location: "New York",
      description: "Join us to clean up the local park and make our community greener.",
      date: "2024-07-15"
    },
    {
      id: 2,
      title: "Food Bank Volunteer",
      location: "Los Angeles",
      description: "Help sort and distribute food to those in need.",
      date: "2024-07-20"
    },
    {
      id: 3,
      title: "Senior Care Assistance",
      location: "Chicago",
      description: "Assist seniors with daily activities and companionship.",
      date: "2024-07-25"
    },
    {
      id: 3,
      title: "Senior Care Assistance",
      location: "Chicago",
      description: "Assist seniors with daily activities and companionship.",
      date: "2024-07-25"
    },
    {
      id: 3,
      title: "Senior Care Assistance",
      location: "Chicago",
      description: "Assist seniors with daily activities and companionship.",
      date: "2024-07-25"
    },
    {
      id: 3,
      title: "Senior Care Assistance",
      location: "Chicago",
      description: "Assist seniors with daily activities and companionship.",
      date: "2024-07-25"
    },
    {
      id: 3,
      title: "Senior Care Assistance",
      location: "Chicago",
      description: "Assist seniors with daily activities and companionship.",
      date: "2024-07-25"
    },
    {
      id: 3,
      title: "Senior Care Assistance",
      location: "Chicago",
      description: "Assist seniors with daily activities and companionship.",
      date: "2024-07-25"
    },
    {
      id: 3,
      title: "Senior Care Assistance",
      location: "Chicago",
      description: "Assist seniors with daily activities and companionship.",
      date: "2024-07-25"
    },
    {
      id: 1,
      title: "Community Clean-up",
      location: "New York",
      description: "Join us to clean up the local park and make our community greener.",
      date: "2024-07-15"
    },
    {
      id: 2,
      title: "Food Bank Volunteer",
      location: "Los Angeles",
      description: "Help sort and distribute food to those in need.",
      date: "2024-07-20"
    },
    {
      id: 3,
      title: "Senior Care Assistance",
      location: "Chicago",
      description: "Assist seniors with daily activities and companionship.",
      date: "2024-07-25"
    },
    {
      id: 1,
      title: "Community Clean-up",
      location: "New York",
      description: "Join us to clean up the local park and make our community greener.",
      date: "2024-07-15"
    },
    {
      id: 2,
      title: "Food Bank Volunteer",
      location: "Los Angeles",
      description: "Help sort and distribute food to those in need.",
      date: "2024-07-20"
    },
    {
      id: 3,
      title: "Senior Care Assistance",
      location: "Chicago",
      description: "Assist seniors with daily activities and companionship.",
      date: "2024-07-25"
    }
  ];

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="input-group mb-3 rounded">
              <select className="form-select" style={{ maxWidth: 150 }}>
                <option defaultValue> Search Skill </option>
                <option value={1}>Teacher</option>
                <option value={2}>Musician</option>
                <option value={3}>Arist</option>
              </select>
              <input type="text" className="form-control" placeholder="Search Location..." />
              <button className="btn btn-light" type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>

      <div className="row mt-4">
        {opportunities.map((opp) => (
          <div key={opp.id} className="col-md-4 mb-3">
            <div className="opp-card p-3 border rounded shadow-sm h-100">
              <h5 className="opp-title">{opp.title}</h5>
              <p className="opp-location"><strong>Location:</strong> {opp.location}</p>
              <p className="opp-description">{opp.description}</p>
              <p className="opp-date"><strong>Date:</strong> {opp.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
