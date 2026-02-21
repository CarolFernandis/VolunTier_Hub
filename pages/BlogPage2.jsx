import React from "react";
import blogtwo from "../assets/blogtwo.jpg";
import "./BlogPage2.css";

export default function BlogPage2() {
  return (
    <div className="blog-page2 container">
      <h1 className="main-heading2">The Struggle to Find the Right Volunteering Opportunity</h1>


      <div className="content-section2">
        <img src={blogtwo} alt="outreach" className="side-img2" />
        <div className="text-content2">
          <p>
            I still remember the endless hours I spent trying to find a meaningful volunteering opportunity. 
            I scoured social media groups, NGO websites, and community notice boards, only to hit dead ends or 
            outdated information.
          </p>
          <p>
            I’d send emails to multiple organizations, waiting weeks for a reply that never came. 
            I felt lost, frustrated, and disheartened because my motivation to help was real, but the system seemed 
            to discourage me. That all changed when I discovered a centralized volunteering platform designed to 
            solve this exact problem. Suddenly, I could search for projects by category, location, or availability, 
            apply in just a few clicks, and track the progress of my applications. It was revolutionary. No more guesswork, 
            no more repeated calls. </p>
          <p>
            I applied for a clean-up drive in my city and was accepted in less than 24 hours. The difference was night and day.</p>
          <p>
            I realized that connecting willing volunteers with meaningful projects should not be this complicated, and I was thrilled to 
            finally be part of a system that made volunteering accessible to everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
