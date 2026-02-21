import React from "react";
import blog9 from "../assets/blog9.jpeg";
import "./BlogPage9.css";

export default function BlogPage9() {
  return (
    <div className="blog-page9 container">
      <h1 className="main-heading8">My Week at the Shelter</h1>


      <div className="content-section8">
        <img src={blog9} alt="shelter" className="side-img9" />
        <div className="text-content8">
        <strong>By Ananya Iyer</strong>
          <p>
          If you had told me a month ago that I’d be spending my Saturday mornings scrubbing kennels and dodging playful nips from energetic
           puppies, I might have laughed. Yet, volunteering at a local animal rescue in Kerala has become the highlight of my week.        
        </p>
         <p>
        There is something incredibly grounding about the honesty of an animal; a rescued street dog doesn't care about your job title or
         your social media following—they only care that you’ve brought a full bowl of food and a kind hand. Last week, I spent three hours 
         sitting with 'Sheru,' a senior dog who had been terrified of humans since his accident.
        </p>
          <p>
         When he finally rested his head on my knee, the world felt right. Volunteering with these "indies" has taught me 
         that healing isn't just about medicine; it's about time, patience, and the quiet courage of showing up.        
          </p>
        </div>
      </div>
    </div>
  );
}
