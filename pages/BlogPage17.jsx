import React from "react";
import blog17 from "../assets/blog17.jpeg";
import "./BlogPage17.css";

export default function BlogPage17() {
  return (
    <div className="blog-page17 container">
      <h1 className="main-heading17">Shared Strength: The Community Garden</h1>


      <div className="content-section17">
        <img src={blog17} alt="garden" className="side-img17" />
        <div className="text-content17">
        <strong>By Rajesh Iyer</strong>
          <p>
            Last Sunday, I helped clear a trash-strewn vacant lot to make room for a community vegetable patch. Working alongside neighbors I had previously only nodded to in passing, we transformed a neglected eyesore into a space of potential.          </p>
         <p>
            My hands were sore from hauling rocks, but the sight of the first seeds being planted in the dark, rich soil was incredibly rewarding.        </p>
         <p>
           My hands were sore from hauling rocks, but the sight of the first seeds being planted in the dark, rich soil was incredibly rewarding.
        </p>
        </div>
      </div>
    </div>
  );
}
