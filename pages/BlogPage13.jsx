import React from "react";
import blog13 from "../assets/blog13.jpeg";
import "./BlogPage13.css";

export default function BlogPage13() {
  return (
    <div className="blog-page13 container">
      <h1 className="main-heading13">My First Blood Donation Camp</h1>


      <div className="content-section13">
        <img src={blog13} alt="donation" className="side-img13" />
        <div className="text-content13">
        <strong>By Rohan D’Souza</strong>
          <p>
             I used to be deathly afraid of needles. The mere sight of a syringe made me lightheaded, but after seeing a frantic plea for a rare blood group on a community group, I decided it was time to grow up. Walking into the donation camp in Delhi, my heart was hammering, but the nurses were incredibly calm, treating the process like the routine miracle it is.      
        </p>
         <p>
              As I lay back and watched the bag fill, a strange sense of pride replaced my fear. It took only fifteen minutes of my time, but those units of O-positive could literally be the difference between a life lost and a life saved.        </p>
         <p>
              Leaving the camp with a small bandage on my arm and a juice box in my hand, I felt ten feet tall. It’s perhaps the only way to be a hero while lying perfectly still.        </p>
        </div>
      </div>
    </div>
  );
}
