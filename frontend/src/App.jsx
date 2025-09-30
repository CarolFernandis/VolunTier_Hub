import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; //	Navbar → Your top navigation bar (links to Home, About, etc.).
import Footer from "./components/Footer/Footer"; // Footer → Your footer that stays at the bottom of every page.

import Home from "./pages/Home";
import About from "./pages/About";
import Opportunity from "./pages/Opportunity";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Faq from "./pages/Faq";

//NewFile
import NewFile from "./pages/NewFile";

//Login and Register Page
import Register from "./pages/Register"; 
import Login from "./pages/Login"; 

//Blog pages
import BlogPage1 from "./pages/BlogPage1";
import BlogPage2 from "./pages/BlogPage2";
import BlogPage3 from "./pages/BlogPage3";

import BlogPage4 from "./pages/BlogPage4";
import BlogPage5 from "./pages/BlogPage5";
import BlogPage6 from "./pages/BlogPage6";

//Opportunity page
import CleanUp from "./pages/Opportunity/CleanUp";
import FoodBank from "./pages/Opportunity/FoodBank";
import CareAssistance from "./pages/Opportunity/CareAssistance";
import Medical from "./pages/Opportunity/Medical";
import FoodDonation from "./pages/Opportunity/FoodDonation";
import DonationCamp from "./pages/Opportunity/DonationCamp";
import PlantDay from "./pages/Opportunity/PlantDay";
import SeniorCitizens from "./pages/Opportunity/SeniorCitizens";
import RuralSchools from "./pages/Opportunity/RuralSchools";
import FarmWork from "./pages/Opportunity/FarmWork";
import MiddayMeal from "./pages/Opportunity/MiddayMeal";
import AnimalShelter from "./pages/Opportunity/AnimalShelter";
import CleanCamp from "./pages/Opportunity/CleanCamp";
import DogShelter from "./pages/Opportunity/DogShelter";
import ForestClean from "./pages/Opportunity/ForestClean";



// Dashboard Pages
import VolunteerDashboard from "./pages/VolunteerDashboard";
import HostDashboard from "./pages/HostDashboard";

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

            {/* Blog Pages */}
            <Route path="/blog/volunteering" element={<BlogPage1 />} />  {/* Connects Blog page to another page[Read more]*/}
            <Route path="/blog/outreach" element={<BlogPage2 />} />
            <Route path="/blog/time" element={<BlogPage3 />} />
            <Route path="/blog/learning" element={<BlogPage4 />} />
            <Route path="/blog/teamwork" element={<BlogPage5 />} />
            <Route path="/blog/overcome" element={<BlogPage6 />} />


            {/* Opportunity Pages */}
             <Route path="/opportunity/cleanup" element={<CleanUp />} />
             <Route path="/opportunity/foodbank" element={<FoodBank />} />
             <Route path="/opportunity/careassistance" element={<CareAssistance />} />
             <Route path="/opportunity/medical" element={<Medical />} />
             <Route path="/opportunity/fooddonation" element={<FoodDonation />} />
             <Route path="/opportunity/donationcamp" element={<DonationCamp />} />
             <Route path="/opportunity/plantday" element={<PlantDay />} />
             <Route path="/opportunity/seniorcitizens" element={<SeniorCitizens />} />
             <Route path="/opportunity/ruralschools" element={<RuralSchools />} />
             <Route path="/opportunity/farmwork" element={<FarmWork />} />
             <Route path="/opportunity/middaymeal" element={<MiddayMeal />} />
             <Route path="/opportunity/animalshelter" element={<AnimalShelter />} />
             <Route path="/opportunity/cleancamp" element={<CleanCamp />} />
             <Route path="/opportunity/dogshelter" element={<DogShelter />} />
             <Route path="/opportunity/forestclean" element={<ForestClean />} />


            {/* Dashboard Pages */}
            <Route path="/dashboard/volunteer" element={<VolunteerDashboard />} />
            <Route path="/dashboard/host" element={<HostDashboard />} />


            <Route path="/newfile" element={<NewFile/>} /> {/* Newfile Page */}
          </Routes>
        </main>

        {/* Footer sticks to bottom - To add the footer to the bottom add </footer> before </div> and </Router> */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
