import React from "react";
import blog8 from "../assets/blog8.jpeg";
import "./BlogPage8.css";

export default function BlogPage8() {
  return (
    <div className="blog-page8 container">
      <h1 className="main-heading8">What My Students Taught Me</h1>


      <div className="content-section8">
        <img src={blog8} alt="student" className="side-img8" />
        <div className="text-content8">
        <strong>By Ishaan Sharma</strong>
          <p>
           I walked into the makeshift classroom in a Pune slum thinking I was there to teach English grammar, but within an hour, 
           I realized I was the one being schooled. My students—ten bright-eyed kids with tattered notebooks—didn’t just want to learn verbs; 
           they wanted to share their worlds.          
        </p>
         <p>
         When I struggled to explain a complex sentence, a young girl named Priya related it to the way her mother weaves garlands, 
         making the abstract suddenly concrete. Teaching through an NGO like Teach For India has stripped away my corporate cynicism. 
         I used to think "impact" was a metric on a slide deck; now, I know impact is the moment a shy 8-year-old finally finds the 
         confidence to stand up and read a paragraph out loud.
        </p>
          <p>
          Their resilience in the face of hardship is a daily masterclass in gratitude. 
          I came to give them a future, but they’ve given me a much-needed perspective on the present.        
          </p>
        </div>
      </div>
    </div>
  );
}
