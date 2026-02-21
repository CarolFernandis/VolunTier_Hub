import React from "react";
import blog16 from "../assets/blog16.jpeg";
import "./BlogPage16.css";

export default function BlogPage16() {
  return (
    <div className="blog-page16 container">
      <h1 className="main-heading16">Tech for Seniors: Bridging the Gap</h1>


      <div className="content-section16">
        <img src={blog16} alt="digital" className="side-img16" />
        <div className="text-content16">
        <strong>Varun Saxena</strong>
          <p>
          I volunteered at a local community center to help senior citizens learn how to use digital payment apps and video call their families.        
          </p>
         <p>
            Many started the session frustrated and intimidated by their smartphones, but by the end, they were scanning QR codes with huge smiles. One gentleman, Mr. Gupta, finally managed to see his grandson’s face on a screen for the first time in months.
        </p>
         <p>
            It reminded me that a little bit of my time can solve a mountain of frustration for someone else.
        </p>
        </div>
      </div>
    </div>
  );
}
