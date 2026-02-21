import React from "react";
import blog15 from "../assets/blog15.jpeg";
import "./BlogPage15.css";

export default function BlogPage15() {
  return (
    <div className="blog-page15 container">
      <h1 className="main-heading15">Reading for the Blind</h1>


      <div className="content-section15">
        <img src={blog15} alt="Blindchildren" className="side-img15" />
        <div className="text-content15">
        <strong>Dr. Vikram Malhotra</strong>
          <p>
           Twice a week, I visit a local center to record audiobooks and read newspapers for visually impaired students. Sitting in that small booth, I’ve realized how much I take my sight for granted.        
        </p>
         <p>
           As I describe the colors of a sunset or the layout of a news story, I see my listeners painting pictures in their minds. We often laugh at the tongue-twisters in the text, turning a simple task into a shared joy.         
        </p>
         <p>
          It’s a quiet kind of volunteering, but knowing that my voice helps someone else study for their exams or stay connected to the world is incredibly fulfilling        
        </p>
        </div>
      </div>
    </div>
  );
}
