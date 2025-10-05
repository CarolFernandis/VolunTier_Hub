// src/pages/Opportunity.jsx
import React from "react";
import { Link } from "react-router-dom";

// Import all images
import CleanUp03 from "../assets/CleanUp03.jpg";
import FoodDonation01 from "../assets/FoodDonation01.jpg";
import SeniorHelp02 from "../assets/SeniorHelp02.jpg";
import MedicalHelp01 from "../assets/MedicalHelp01.jpg";
import FoodDonation02 from "../assets/FoodDonation02.jpg";
import MedicalHelp02 from "../assets/MedicalHelp02.jpg";
import SeniorHelp03 from "../assets/SeniorHelp03.jpg";
import SchoolHelp01 from "../assets/SchoolHelp01.jpg";
import FieldWork01 from "../assets/FieldWork01.jpg";
import FoodDonation03 from "../assets/FoodDonation03.jpg";
import AnimalHelp01 from "../assets/AnimalHelp01.jpg";
import CleanUp02 from "../assets/CleanUp02.jpeg";
import AnimalHelp02 from "../assets/AnimalHelp02.jpg";
import PlantTree01 from "../assets/PlantTree01.jpg";

import "./Opportunity.css"; // Link your CSS

export default function Opportunity() {
  const opportunities = [
    { id: 1, title: "Community Clean-up", location: "Gorgaon, Mumbai", description: "Join us to clean up the local Beaches and make our coastline cleaner.", date: "2025-10-04", image: CleanUp03, link: "/opportunity/cleanup" },
    { id: 2, title: "Food Bank Volunteer", location: "Kolhapur", description: "Help sort and distribute food to those in need.", date: "2024-07-20", image: FoodDonation01, link: "/opportunity/foodbank" },
    { id: 3, title: "Senior Care Assistance", location: "Panvel, Navi Mumbai", description: "Assist seniors with daily activities and companionship.", date: "2025-10-25", image: SeniorHelp02, link: "/opportunity/careassistance" },
    { id: 4, title: "Medical Assistance", location: "Nagpur", description: "Assist Medical Check-ups in villages.", date: "2025-12-11", image: MedicalHelp01, link: "/opportunity/medical" },
    { id: 5, title: "Food Donation Camp", location: "Moshi, Pune", description: "Help in Serving and Distributing food in local communities.", date: "2025-10-08", image: FoodDonation02, link: "/opportunity/fooddonation" },
    { id: 6, title: "Blood Donation Camp", location: "Solapur", description: "Help and Volunteer in Blood Donation camp.", date: "2025-11-06", image: MedicalHelp02, link: "/opportunity/donationcamp" },
    { id: 8, title: "Assist Senior Citizens", location: "Kalyan, Mumbai", description: "Assist seniors with daily activities and companionship.", date: "2025-12-21", image: SeniorHelp03, link: "/opportunity/seniorcitizens" },
    { id: 9, title: "Helping Rural Schools", location: "Borgaon, Beed", description: "Volunteer rural schools by teaching skills.", date: "2025-09-18", image: SchoolHelp01, link: "/opportunity/ruralschools" },
    { id: 10, title: "Farm Work Assistance", location: "Nashik", description: "Help us with different farming activities.", date: "2025-10-19", image: FieldWork01, link: "/opportunity/farmwork" },
    { id: 11, title: "Organizing Mid-day Meals", location: "Moshi, Pune", description: "Help sort and distribute food to those in need.", date: "2025-11-20", image: FoodDonation03, link: "/opportunity/middaymeal" },
    { id: 12, title: "Help Animal Shelter", location: "Mahabaleshwar", description: "Assist shelter animals by feeding, nursing and petting them.", date: "2025-09-25", image: AnimalHelp01, link: "/opportunity/animalshelter" },
    { id: 13, title: "Garbage Cleaning Camp", location: "Viman Nagar, Pune", description: "Join us to clean the nearby parks.", date: "2025-07-15", image: CleanUp02, link: "/opportunity/cleancamp" },
    { id: 14, title: "Volunteer Dogs Shelter", location: "Talegaon", description: "Nurse and help the shelter dogs.", date: "2025-08-20", image: AnimalHelp02, link: "/opportunity/dogshelter" },
    { id: 15, title: "Forest Cleaning Drive", location: "Chiplun, Kokan", description: "Participate in Go-Green drive by helping us.", date: "2025-07-25", image: CleanUp03, link: "/opportunity/forestclean" },
    { id: 16, title: "Tree Plantation", location: "Gujarat, Maharashtra", description: "Participate in Go-Green drive by planting saplings.", date: "2025-07-25", image: PlantTree01, link: "/opportunity/planttrees" },

  ];

  return (
    <div className="container mt-4">
      {/* Search Form */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="input-group mb-3 rounded">
              <select className="form-select" style={{ maxWidth: 150 }}>
                <option defaultValue>Search Skill</option>
                <option value={1}>Teacher</option>
                <option value={2}>Musician</option>
                <option value={3}>Artist</option>
              </select>
              <input type="text" className="form-control" placeholder="Search Location..." />
              <button className="btn btn-light" type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>

      {/* Opportunities Cards */}
      <div className="row mt-4">
        {opportunities.map((opp) => (
          <div className="col-md-4 mb-3" key={opp.id}>
            <Link to={opp.link} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="opp-card p-3 border rounded shadow-sm h-100">
                <img src={opp.image} alt={opp.title} className="opp-image" />
                <h5 className="opp-title">{opp.title}</h5>
                <p className="opp-location"><strong>Location:</strong> {opp.location}</p>
                <p className="opp-description">{opp.description}</p>
                <p className="opp-date"><strong>Date:</strong> {opp.date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
