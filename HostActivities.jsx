import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Opportunity.css";

// Import images
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



export default function HostActivities() {
  const { hostId } = useParams();

  console.log("Host ID from URL:", hostId); // 🔍 Debug

  const opportunities = [
    // HOST 1 - Green Earth Foundation
  {
    id: 1,
    hostId: "1",
    title: "Community Clean-up",
    location: "Goregaon, Mumbai",
    description: "Join us to clean up beaches.",
    date: "2025-10-04",
    image: CleanUp03,
    link: "/opportunity/cleanup",
  },
  {
    id: 14,
    hostId: "1",
    title: "Tree Plantation Drive",
    location: "Mumbai",
    description: "Help us plant 500 trees.",
    date: "2025-11-10",
    image: PlantTree01,
    link: "/opportunity/planttrees",
  },

  { id: 13,
    hostId: "1",
    title: "Garbage Cleaning Camp", 
    location: "Viman Nagar, Pune", 
    description: "Join us to clean the nearby parks.", 
    date: "2025-07-15", 
    image: CleanUp02, 
    link: "/opportunity/cleancamp", 
  },

  { id: 10, hostId: "1", 
    title: "Farm Work Assistance", 
    location: "Nashik", 
    description: "Help us with different farming activities.", 
    date: "2025-10-19", 
    image: FieldWork01, 
    link: "/opportunity/farmwork",
   },
  
  { id: 13, 
    hostId: "1", 
    title: "Garbage Cleaning Camp", 
    location: "Viman Nagar, Pune", 
    description: "Join us to clean the nearby parks.", 
    date: "2025-07-15", 
    image: CleanUp02, 
    link: "/opportunity/cleancamp", 
  },
  
  { id: 15, 
    hostId: "1",  
    title: "Forest Cleaning Drive", 
    location: "Chiplun, Kokan", 
    description: "Participate in Go-Green drive by helping us.", 
    date: "2025-07-25", 
    image: Forest01, 
    link: "/opportunity/forestclean", 
   },
  

  // HOST 2 - Food For All NGO
  {
    id: 2,
    hostId: "2",
    title: "Food Bank Volunteer",
    location: "Kolhapur",
    description: "Help distribute food.",
    date: "2025-07-20",
    image: FoodDonation01,
    link: "/opportunity/foodbank",
  },
  {
    id: 4,
    hostId: "2",
    title: "Mid-Day Meal Support",
    location: "Pune",
    description: "Help prepare and serve meals.",
    date: "2025-08-12",
    image: FoodDonation03,
    link: "/opportunity/middaymeal",
  },

  { id: 5, 
    hostId: "2",
    title: "Food Donation Camp", 
    location: "Moshi, Pune", 
    description: "Help in Serving and Distributing food in local communities.", 
    date: "2025-10-08", 
    image: FoodDonation02, 
    link: "/opportunity/fooddonation",
   },

  { id: 11, hostId: "2", title: "Organizing Mid-day Meals", location: "Moshi, Pune", description: "Help sort and distribute food to those in need.", 
    date: "2025-11-20", image: FoodDonation03, link: "/opportunity/middaymeal", 
   },
   


  

    // HOST 3 - Care & Smile Foundation
  {
    id: 5,
    hostId: "3",
    title: "Medical Camp Volunteer",
    location: "Nagpur",
    description: "Assist in rural medical camps.",
    date: "2025-12-01",
    image: CleanUp03,
    link: "/opportunity/medicalcamp",
  },

  { 
    id: 3, 
    hostId: "3",
    title: "Senior Care Assistance", 
    location: "Panvel, Navi Mumbai", 
    description: "Assist seniors with daily activities and companionship.", 
    date: "2025-10-25", 
    image: SeniorHelp02, 
    link: "/opportunity/careassistance", 
   },

  { id: 4,     
    hostId: "3",
    title: "Medical Assistance", 
    location: "Nagpur", 
    description: "Assist Medical Check-ups in villages.", 
    date: "2025-12-11", 
    image: MedicalHelp01, 
    link: "/opportunity/medical",
  },

  { 
    id: 6, 
    hostId: "3",
    title: "Blood Donation Camp", 
    location: "Solapur", 
    description: "Help and Volunteer in Blood Donation camp.", 
    date: "2025-11-06", 
    image: MedicalHelp02, 
    link: "/opportunity/donationcamp", 
    skill: "medical" 
  },

  { id: 8, hostId: "3", 
    title: "Assist Senior Citizens", 
    location: "Kalyan, Mumbai", 
    description: "Assist seniors with daily activities and companionship.", 
    date: "2025-12-21", 
    image: SeniorHelp03, 
    link: "/opportunity/seniorcitizens", 
   },
   
  { id: 9, 
    hostId: "3", 
    title: "Helping Rural Schools", 
    location: "Borgaon, Beed", 
    description: "Volunteer rural schools by teaching skills.", 
    date: "2025-09-18", image: SchoolHelp01, link: "/opportunity/ruralschools", 
   },
  
  { id: 12, 
    hostId: "3", 
    title: "Help Animal Shelter", 
    location: "Mahabaleshwar", 
    description: "Assist shelter animals by feeding, nursing and petting them.", 
    date: "2025-09-25", image: AnimalHelp01, link: "/opportunity/animalshelter", 
   },
  
  { id: 14, 
    hostId: "3", 
    title: "Volunteer Dogs Shelter", 
    location: "Talegaon", 
    description: "Nurse and help the shelter dogs.", 
    date: "2025-08-20", image: AnimalHelp02, link: "/opportunity/dogshelter", 
   },
  
  
];

  const filtered = opportunities.filter(
    (opp) => String(opp.hostId) === String(hostId)
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Host Opportunities</h2>

      <div className="row">
        {filtered.length === 0 ? (
          <p className="text-center text-muted">
            No opportunities posted yet.
          </p>
        ) : (
          filtered.map((opp) => (
            <div className="col-md-4 mb-4" key={opp.id}>
              <Link to={opp.link} className="opp-link">
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
          ))
        )}
      </div>
      

       <Link to="/host-dashboard" className="btn btn-secondary mt-3">
        ⬅ Back to Dashboard
      </Link>
    </div>
  );
}
