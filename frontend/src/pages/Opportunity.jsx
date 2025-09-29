//Opportunity Page
import React from "react";

import "./Opportunity.css"; //Link Opportunity css

export default function Opportunity() {
  // Sample data for volunteer opportunities
  const opportunities = [
    {
      id: 1,
      title: "Community Clean-up",
      location: "Gorgaon, Mumbai",
      description: "Join us to clean up the local Beaches and make our coastline cleaner.",
      date: "2025-10-04",
      image: "/assets/CleanUp01.avif",
    },
    {
      id: 2,
      title: "Food Bank Volunteer",
      location: "Kolhapur",
      description: "Help sort and distribute food to those in need.",
      date: "2025-11-20",
      image: "/assets/FoodDonation01.jpg",
    },
    {
      id: 3,
      title: "Senior Care Assistance",
      location: "Panvel, Navi Mumbai",
      description: "Assist seniors with daily activities and companionship.",
      date: "2025-10-25",
      image: "/assets/SeniorHelp02.jpg",
    },
    {
      id: 3,
      title: "Medical Assistance",
      location: "Nagpur",
      description: "Assist Medical Check-ups in vilages.",
      date: "2025-12-11",
      image: "/assets/MedicalHelp01.jpg",
    },
    {
      id: 3,
      title: "Food Donation Camp",
      location: "Moshi, Pune",
      description: "Help in Serving and Distributing food in local communities.",
      date: "2025-10-08",
      image: "/assets/FoodDonation02.jpg",
    },
    {
      id: 3,
      title: "Blood Donation Camp",
      location: "Solapur",
      description: "Help and Volunteer in Blood Donation camp.",
      date: "2025-11-06",
      image: "/assets/MedicalHelp02.jpg",
    },
    {
      id: 3,
      title: "Tree Plantation Day",
      location: "Pune",
      description: "Celebrate the GoGreen Moment with our students.",
      date: "2025-10-25",
      image: "/assets/Plant.jpg",
    },
    {
      id: 3,
      title: "Assist Senior Citizens",
      location: "Kalyan, Mumbai",
      description: "Assist seniors with daily activities and companionship.",
      date: "2025-12-21",
      image: "/assets/SeniorHelp03.jpg",
    },
    {
      id: 3,
      title: "Helping Rural Schools",
      location: "Borgaon,Beed",
      description: "Volunteer rural schools by teaching skills.",
      date: "2025-09-18",
      image: "/assets/SchoolHelp01.jpg",
    },
    {
      id: 1,
      title: "Farm work Assistance",
      location: "Nashik",
      description: "Help us with different farming activities.",
      date: "2025-10-19",
      image: "/assets/FieldWork01.jpg",
    },
    {
      id: 2,
      title: "Organizing Mid-day Meals",
      location: "Los Angeles",
      description: "Help sort and distribute food to those in need.",
      date: "2025-11-20",
      image: "/assets/FoodDonation03.jpg",
    },
    {
      id: 3,
      title: "Help Animal Shelter",
      location: "Mahabaleshwar",
      description: "Assist shelter animals by feeding, nursing and petting them.",
      date: "2025-09-25",
      image: "public/assets/AnimalHelp01.jpg",
    },
    {
      id: 1,
      title: "Garbage Cleaning camp",
      location: "Viman nagar, Pune",
      description: "Join us to clean the nearby parks.",
      date: "2025-07-15",
      image: "src/assets/CleanUp02.avif",
    },
    {
      id: 2,
      title: "Volunteer Dogs Shelter",
      location: "Talegaon",
      description: "Nurse and help the shelter dogs.",
      date: "2025-08-20",
      image: "/assets/AnimalHelp02.jpg",
    },
    {
      id: 3,
      title: "Forest Cleaning Drive",
      location: "Chiplun, Kokan",
      description: "Participate in Go-Green drive by helping us.",
      date: "2025-07-25",
      image: "/assets/CleanUp03.jpg",
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
              <img src={opp.image} alt={opp.title} className="opp-image" />
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
