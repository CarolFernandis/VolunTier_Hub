import React from "react";
import blog12 from "../assets/blog12.jpeg";
import "./BlogPage12.css";

export default function BlogPage12() {
  return (
    <div className="blog-page12 container">
      <h1 className="main-heading12">Lessons from the Flood Relief Camp</h1>


      <div className="content-section12">
        <img src={blog12} alt="flood" className="side-img12" />
        <div className="text-content12">
        <strong>By Rohan D’Souza</strong>
          <p>
       When the monsoon rains turned our district's streets into rivers last year, I joined a volunteer logistics team at a temporary relief camp. It was chaotic, loud, and physically exhausting, but I’ve never felt more alive.      
        </p>
         <p>
        My job was simple: sorting through mountain-sized piles of donated clothes and medicines to ensure they reached the right families. There was no ego in that room; a CEO was packing boxes next to a college student, both drenched and tired. That experience stripped away all the social barriers we usually obsess over.
        </p>
          <p>
       It taught me that in a crisis, we don't need "heroes"—we need people who are willing to show up, grab a crate, and ask, "Where does this go next?"      
          </p>
        </div>
      </div>
    </div>
  );
}
