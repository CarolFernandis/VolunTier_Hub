import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; //	Navbar → Your top navigation bar (links to Home, About, etc.).
import Footer from "./components/Footer/Footer"; // Footer → Your footer that stays at the bottom of every page.

import Home from "./pages/Home";
import About from "./pages/About";
import Opportunity from "./pages/Opportunity";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Faq from "./pages/Faq";



//Login and Register Page
import Register from "./pages/Register"; 
import Login from "./pages/Login"; 
import VolunteerDashboard from "./pages/VolunteerDashboard";
import HostDashboard from "./pages/HostDashboard";
import PostOpportunity from "./pages/PostOpportunity";
import HostActivities from "./pages/HostActivities";
import HostProfile from "./pages/HostProfile";

//Blog pages
import BlogPage1 from "./pages/BlogPage1";
import BlogPage2 from "./pages/BlogPage2";
import BlogPage3 from "./pages/BlogPage3";

import BlogPage4 from "./pages/BlogPage4";
import BlogPage5 from "./pages/BlogPage5";
import BlogPage6 from "./pages/BlogPage6";

import BlogPage7 from "./pages/BlogPage7";
import BlogPage8 from "./pages/BlogPage8";
import BlogPage9 from "./pages/BlogPage9";

import BlogPage10 from "./pages/BlogPage10";
import BlogPage11 from "./pages/BlogPage11";
import BlogPage12 from "./pages/BlogPage12";

import BlogPage13 from "./pages/BlogPage13";
import BlogPage14 from "./pages/BlogPage14";
import BlogPage15 from "./pages/BlogPage15";

import BlogPage16 from "./pages/BlogPage16";
import BlogPage17 from "./pages/BlogPage17";
import BlogPage18 from "./pages/BlogPage18";

import BlogPage19 from "./pages/BlogPage19";
import BlogPage20 from "./pages/BlogPage20";
import BlogPage21 from "./pages/BlogPage21";

import BlogPage22 from "./pages/BlogPage22";
import BlogPage23 from "./pages/BlogPage23";
import BlogPage24 from "./pages/BlogPage24";








//Opportunity page
import CleanUp from "./pages/Opportunity/CleanUp";
import FoodBank from "./pages/Opportunity/FoodBank";
import CareAssistance from "./pages/Opportunity/CareAssistance";
import Medical from "./pages/Opportunity/Medical";
import FoodDonation from "./pages/Opportunity/FoodDonation";
import DonationCamp from "./pages/Opportunity/DonationCamp";
import SeniorCitizens from "./pages/Opportunity/SeniorCitizens";
import RuralSchools from "./pages/Opportunity/RuralSchools";
import FarmWork from "./pages/Opportunity/FarmWork";
import MiddayMeal from "./pages/Opportunity/MiddayMeal";
import AnimalShelter from "./pages/Opportunity/AnimalShelter";
import CleanCamp from "./pages/Opportunity/CleanCamp";
import DogShelter from "./pages/Opportunity/DogShelter";
import ForestClean from "./pages/Opportunity/ForestClean";
import PlantTrees from "./pages/Opportunity/PlantTrees";






import "./App.css"; // Add CSS for layout

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />

        {/* Main content area grows to fill space */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/opportunity" element={<Opportunity />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/register" element={<Register />} />  {/* Register route */}
            <Route path="/login" element={<Login />} />  {/* Login route */}
            <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
            <Route path="/host-dashboard" element={<HostDashboard />} />
            <Route path="/host/post" element={<PostOpportunity />} />
            <Route path="/host/profile" element={<HostProfile />} />
            <Route path="/host/activities/:hostId" element={<HostActivities />} />


            {/* Blog Pages */}
            <Route path="/blog/volunteering" element={<BlogPage1 />} />  {/* Connects Blog page to another page[Read more]*/}
            <Route path="/blog/outreach" element={<BlogPage2 />} />
            <Route path="/blog/time" element={<BlogPage3 />} />
            <Route path="/blog/learning" element={<BlogPage4 />} />
            <Route path="/blog/teamwork" element={<BlogPage5 />} />
            <Route path="/blog/overcome" element={<BlogPage6 />} />
            <Route path="/blog/plant" element={<BlogPage7 />} />
            <Route path="/blog/student" element={<BlogPage8 />} />
            <Route path="/blog/shelter" element={<BlogPage9 />} />
            <Route path="/blog/meal" element={<BlogPage10 />} />
            <Route path="/blog/beach" element={<BlogPage11 />} />
            <Route path="/blog/flood" element={<BlogPage12 />} />
            <Route path="/blog/donation" element={<BlogPage13 />} />
            <Route path="/blog/health" element={<BlogPage14 />} />
            <Route path="/blog/blind" element={<BlogPage15 />} />
            <Route path="/blog/digital" element={<BlogPage16 />} />
            <Route path="/blog/garden" element={<BlogPage17 />} />
            <Route path="/blog/cleanup" element={<BlogPage18 />} />
            <Route path="/blog/music" element={<BlogPage19 />} />
            <Route path="/blog/women" element={<BlogPage20 />} />
            <Route path="/blog/digitals" element={<BlogPage21 />} />
            <Route path="/blog/banyan" element={<BlogPage22 />} />
            <Route path="/blog/mula" element={<BlogPage23 />} />
            <Route path="/blog/ganga" element={<BlogPage24 />} />








            {/* Opportunity Pages */}
             <Route path="/opportunity/cleanup" element={<CleanUp />} />
             <Route path="/opportunity/foodbank" element={<FoodBank />} />
             <Route path="/opportunity/careassistance" element={<CareAssistance />} />
             <Route path="/opportunity/medical" element={<Medical />} />
             <Route path="/opportunity/fooddonation" element={<FoodDonation />} />
             <Route path="/opportunity/donationcamp" element={<DonationCamp />} />
             <Route path="/opportunity/seniorcitizens" element={<SeniorCitizens />} />
             <Route path="/opportunity/ruralschools" element={<RuralSchools />} />
             <Route path="/opportunity/farmwork" element={<FarmWork />} />
             <Route path="/opportunity/middaymeal" element={<MiddayMeal />} />
             <Route path="/opportunity/animalshelter" element={<AnimalShelter />} />
             <Route path="/opportunity/cleancamp" element={<CleanCamp />} />
             <Route path="/opportunity/dogshelter" element={<DogShelter />} />
             <Route path="/opportunity/forestclean" element={<ForestClean />} />
             <Route path="/opportunity/planttrees" element={<PlantTrees />} />

             {/*Opportunity activity join*/}
            <Route path="/opportunity/animalshelter" element={<AnimalShelter />} />
            <Route path="/opportunity/careassistance" element={<CareAssistance />} />
            <Route path="/opportunity/cleancamp" element={<CleanCamp />} />
            <Route path="/opportunity/cleanup" element={<CleanUp/>} />
            <Route path="/opportunity/dogshelter" element={<DogShelter />} />
            <Route path="/opportunity/donationcamp" element={<DonationCamp />} />
            <Route path="/opportunity/farmwork" element={<FarmWork />} />
            <Route path="/opportunity/foodbank" element={<FoodBank />} />
            <Route path="/opportunity/fooddonation" element={<FoodDonation />} />
            <Route path="/opportunity/forestclean" element={<ForestClean />} />
            <Route path="/opportunity/medical" element={<Medical />} />
            <Route path="/opportunity/middaymeal" element={<MiddayMeal />} />
            <Route path="/opportunity/plantrees" element={<PlantTrees />} />
            <Route path="/opportunity/ruralschools" element={<RuralSchools />} />
            <Route path="/opportunity/seniorcitizens" element={<SeniorCitizens />} />
            



           
          </Routes>
        </main>

        {/* Footer sticks to bottom - To add the footer to the bottom add </footer> before </div> and </Router> */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
