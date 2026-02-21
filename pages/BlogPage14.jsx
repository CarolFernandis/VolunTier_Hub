import React from "react";
import blog14 from "../assets/blog14.jpeg";
import "./BlogPage14.css";

export default function BlogPage14() {
  return (
    <div className="blog-page14 container">
      <h1 className="main-heading14">A Day at the Rural Health Camp</h1>


      <div className="content-section14">
        <img src={blog14} alt="health" className="side-img14" />
        <div className="text-content14">
        <strong>Dr. Vikram Malhotra</strong>
          <p>
           As a medical student, it’s easy to get lost in textbooks and sterile hospital wings. However, volunteering at a mobile health clinic in rural Rajasthan brought the human element of medicine back into focus. We spent fourteen hours under a tin roof, treating everything from seasonal fevers to chronic joint pain.     
        </p>
         <p>
        I met a farmer who had walked six kilometers just to get his blood pressure checked. There were no fancy machines or quiet waiting rooms, just a stethocope, a basic pharmacy, and the profound trust of people who rarely see a doctor. That day taught me that healthcare isn't just about the "cure"—it’s about access, empathy, and being present where the need is greatest. 
         </p>
         <p>
              I went there to provide care, but I returned with a renewed vow to serve.
        </p>
        </div>
      </div>
    </div>
  );
}
