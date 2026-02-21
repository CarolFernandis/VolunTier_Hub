import React from "react";
import blogsix from "../assets/blogsix.jpg";
import "./BlogPage6.css";

export default function BlogPage6() {
  return (
    <div className="blog-page6 container">
      <h1 className="main-heading6">Overcoming Challenges While Volunteering</h1>


      <div className="content-section6">
        <img src={blogsix} alt="overcome" className="side-img6" />
        <div className="text-content6">
          <p>
           Volunteering is not always smooth sailing. I once participated in a health awareness camp where supplies were delayed, volunteers were confused about tasks, and schedules kept changing. Initially, I felt frustrated and unsure if my efforts would make any difference.
          </p>
          <p>
            Coordinating a fundraising event for a local NGO taught me project management, communication, and problem-solving.
            I learned how to handle unexpected challenges, delegate tasks, and work efficiently under pressure. 
            Writing promotional materials, engaging with donors, and organizing logistics gave me confidence and practical 
            experience that I couldn’t get elsewhere. </p>
          <p>
           But as the day went on, I learned to adapt, communicate clearly, and support my fellow volunteers. We improvised, reassigned tasks, and motivated each other, ultimately delivering a successful event.
          </p>
          <p>
           Facing these challenges taught me patience, problem-solving, and resilience. Volunteering shows you that even imperfect circumstances can lead to meaningful outcomes if you stay committed, flexible, and positive. These lessons translate directly into life, teaching perseverance and the value of collaboration under pressure.
          </p>
        </div>
      </div>
    </div>
  );
}
