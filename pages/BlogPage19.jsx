import React from "react";
import blog19 from "../assets/blog19.jpeg";
import "./BlogPage19.css";

export default function BlogPage19() {
  return (
    <div className="blog-page19 container">
      <h1 className="main-heading19">Healing Harmonies: A Musical Need</h1>


      <div className="content-section19">
        <img src={blog19} alt="garden" className="side-img19" />
        <div className="text-content19">
        <strong>By Rajesh Iyer</strong>
          <p>I took my flute to a local hospital ward last Sunday, realizing that sometimes a melody is the best medicine. 
            As the notes drifted through the quiet hallway, I saw the tension leave the faces of patients and tired nurses alike.
          </p>
         <p>
            One elderly man simply closed his eyes and whispered, "Thank you for the peace." It was a powerful reminder that our talents aren't just for ourselves; they are meant to be shared with those who need a moment of light.
        </p>
        </div>
      </div>
    </div>
  );
}
