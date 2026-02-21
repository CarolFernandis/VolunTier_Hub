import React from "react";
import blog20 from "../assets/blog20.jpeg";
import "./BlogPage20.css";

export default function BlogPage20() {
  return (
    <div className="blog-page20 container">
      <h1 className="main-heading20">The Evening School</h1>


      <div className="content-section20">
        <img src={blog20} alt="womenschool" className="side-img20" />
        <div className="text-content20">
        <strong>By Rahul Deshmukh</strong>
          <p>I spent my summer volunteering at a "Nari Pathshala" in rural Maharashtra, teaching basic literacy 
            to women who had never held a pen. On the first day, my student, Laxmi Tai, was so nervous her hand shook as 
            she tried to trace the letter ‘A’.</p>
         <p>
            One elderly man simply closed his eyes and whispered, "Thank you for the peace." It was a powerful reminder that our talents aren't just for ourselves; they are meant to be shared with those who need a moment of light.
        </p>
        </div>
      </div>
    </div>
  );
}
