import React from "react";
import blogfour from "../assets/blogfour.jpg";
import "./BlogPage4.css";

export default function BlogPage4() {
  return (
    <div className="blog-page4 container">
      <h1 className="main-heading4">Learning Skills Through Volunteering</h1>


      <div className="content-section">
        <img src={blogfour} alt="learning" className="side-img4" />
        <div className="text-content4">
          <p>
           Volunteering isn’t just about helping—it’s about learning. 
           I never expected that my volunteer work would equip me with skills that directly influenced my personal and 
           professional life.
          </p>
          <p>
            Coordinating a fundraising event for a local NGO taught me project management, communication, and problem-solving.
            I learned how to handle unexpected challenges, delegate tasks, and work efficiently under pressure. 
            Writing promotional materials, engaging with donors, and organizing logistics gave me confidence and practical 
            experience that I couldn’t get elsewhere. </p>
          <p>
           Those words, simple but profound, stayed with me long after the event ended.Volunteering became more than a hobby; 
           it became a training ground for life skills that no classroom could teach.
          </p>
          <p>
           The satisfaction of seeing a successful event, knowing that my efforts made a tangible difference in someone’s life,
           and realizing that I had grown as a person simultaneously was incredibly rewarding.
          </p>
        </div>
      </div>
    </div>
  );
}
