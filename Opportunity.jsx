import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import CleanUp03 from "../assets/CleanUp03.jpeg";
import FoodDonation01 from "../assets/FoodDonation01.jpeg";
import SeniorHelp02 from "../assets/SeniorHelp02.jpg";
import MedicalHelp01 from "../assets/MedicalHelp01.jpg";
import FoodDonation02 from "../assets/FoodDonation02.jpeg";
import MedicalHelp02 from "../assets/MedicalHelp02.jpg";
import SeniorHelp03 from "../assets/SeniorHelp03.jpeg";
import SchoolHelp01 from "../assets/SchoolHelp01.jpeg";
import FieldWork01 from "../assets/FieldWork01.jpeg";
import FoodDonation03 from "../assets/FoodDonation03.jpeg";
import AnimalHelp01 from "../assets/AnimalHelp01.jpeg";
import CleanUp02 from "../assets/CleanUp02.jpeg";
import AnimalHelp02 from "../assets/AnimalHelp02.jpg";
import PlantTree01 from "../assets/PlantTree01.jpg";
import Forest01 from "../assets/Forest01.jpeg";

import "./Opportunity.css";

export default function Opportunity() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("all");
  const [postedOpportunities, setPostedOpportunities] = useState([]);

  // Load host created opportunities
  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("postedOpportunities")) || [];
    setPostedOpportunities(saved);
  }, []);

  const opportunities = [
    { id: 1, title: "Community Clean-up", location: "Gorgaon, Mumbai", description: "Join us to clean up beaches.", date: "2025-10-04", image: CleanUp03, link: "/opportunity/cleanup", skill: "environment" },
    { id: 2, title: "Food Bank Volunteer", location: "Kolhapur", description: "Help distribute food.", date: "2024-07-20", image: FoodDonation01, link: "/opportunity/foodbank", skill: "food" },
    { id: 3, title: "Senior Care Assistance", location: "Panvel", description: "Assist senior citizens.", date: "2025-10-25", image: SeniorHelp02, link: "/opportunity/careassistance", skill: "social" },
    { id: 4, title: "Medical Assistance", location: "Nagpur", description: "Assist medical camps.", date: "2025-12-11", image: MedicalHelp01, link: "/opportunity/medical", skill: "medical" },
    { id: 5, title: "Food Donation Camp", location: "Moshi, Pune", description: "Serve food to communities.", date: "2025-10-08", image: FoodDonation02, link: "/opportunity/fooddonation", skill: "food" },
    { id: 6, title: "Blood Donation Camp", location: "Solapur", description: "Volunteer in blood donation.", date: "2025-11-06", image: MedicalHelp02, link: "/opportunity/donationcamp", skill: "medical" },
    { id: 8, title: "Assist Senior Citizens", location: "Kalyan", description: "Support senior citizens.", date: "2025-12-21", image: SeniorHelp03, link: "/opportunity/seniorcitizens", skill: "social" },
    { id: 9, title: "Helping Rural Schools", location: "Beed", description: "Teach rural students.", date: "2025-09-18", image: SchoolHelp01, link: "/opportunity/ruralschools", skill: "teaching" },
    { id: 10, title: "Farm Work Assistance", location: "Nashik", description: "Help farming activities.", date: "2025-10-19", image: FieldWork01, link: "/opportunity/farmwork", skill: "environment" },
    { id: 11, title: "Organizing Mid-day Meals", location: "Pune", description: "Distribute meals.", date: "2025-11-20", image: FoodDonation03, link: "/opportunity/middaymeal", skill: "food" },
    { id: 12, title: "Help Animal Shelter", location: "Mahabaleshwar", description: "Care for shelter animals.", date: "2025-09-25", image: AnimalHelp01, link: "/opportunity/animalshelter", skill: "animal" },
    { id: 13, title: "Garbage Cleaning Camp", location: "Viman Nagar", description: "Clean parks.", date: "2025-07-15", image: CleanUp02, link: "/opportunity/cleancamp", skill: "environment" },
    { id: 14, title: "Volunteer Dogs Shelter", location: "Talegaon", description: "Help shelter dogs.", date: "2025-08-20", image: AnimalHelp02, link: "/opportunity/dogshelter", skill: "animal" },
    { id: 15, title: "Forest Cleaning Drive", location: "Chiplun", description: "Clean forests.", date: "2025-07-25", image: Forest01, link: "/opportunity/forestclean", skill: "environment" },
    { id: 16, title: "Tree Plantation", location: "Maharashtra", description: "Plant trees.", date: "2025-07-25", image: PlantTree01, link: "/opportunity/planttrees", skill: "environment" },
  ];

  // Merge default + host created
  const allOpportunities = [...opportunities, ...postedOpportunities];

  const filteredOpportunities = allOpportunities.filter((opp) => {
    const matchesSearch =
      opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSkill =
      selectedSkill === "all" || opp.skill === selectedSkill;

    return matchesSearch && matchesSkill;
  });

  return (
    <div className="container mt-4">

      {/* Search */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <div className="search-skill-row">

            <input
              type="text"
              className="form-control search-input"
              placeholder="Search opportunities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              className="form-select skill-select"
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
            >
              <option value="all">All Skills</option>
              <option value="teaching">Teaching</option>
              <option value="medical">Medical</option>
              <option value="environment">Environment</option>
              <option value="animal">Animal Care</option>
              <option value="food">Food Service</option>
              <option value="social">Social Work</option>
            </select>

          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="row">

        {filteredOpportunities.map((opp) => (
          <div className="col-md-4 mb-4" key={opp.id}>

            <Link
              to={opp.link ? opp.link : `/opportunity/${opp.id}`}
              className="opp-link"
            >

              <div className="opp-card h-100">

                <div className="opp-image-wrapper">
                  <img src={opp.image} alt={opp.title} />
                </div>

                <div className="opp-body">
                  <h5 className="opp-title">{opp.title}</h5>
                  <p className="opp-location">{opp.location}</p>
                  <p className="opp-description">{opp.description}</p>
                  <span className="opp-date">📅 {opp.date}</span>
                </div>

              </div>

            </Link>

          </div>
        ))}

      </div>

    </div>
  );
}
