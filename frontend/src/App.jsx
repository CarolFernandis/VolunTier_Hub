import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; //	Navbar → Your top navigation bar (links to Home, About, etc.).
import Footer from "./components/Footer/Footer"; // Footer → Your footer that stays at the bottom of every page.

import Home from "./pages/Home";
import About from "./pages/About";
import Opportunity from "./pages/Opportunity";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Faq from "./pages/Faq";

import NewFile from "./pages/NewFile";

import Register from "./pages/Register"; 
import Login from "./pages/Login"; 

import BlogVolunteering from "./pages/BlogVolunteering";


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

            
            <Route path="/blog/volunteering" element={<BlogVolunteering />} />
            


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
