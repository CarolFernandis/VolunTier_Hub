import React from "react";
import blog24 from "../assets/blog24.jpeg";
import "./BlogPage24.css";

export default function BlogPage24() {
  return (
    <div className="blog-page24 container">
      <h1 className="main-heading24">The Ganges Cleaning Drive</h1>


      <div className="content-section34">
        <img src={blog24} alt="ganga river" className="side-img24" />
        <div className="text-content24">
        <strong>By Akash Sharma</strong>
       <p>In Varanasi, the Ganga isn't just a river; it’s a mother. Volunteering for a Ghat cleanup was a spiritual experience that stripped away my ego. We spent hours scrubbing stone steps and removing ritual waste that had accumulated near the water's edge.</p>
       <p>Seeing the community come together—from young students to elderly devotees—to protect the sanctity of the water was incredibly moving. It taught me that faith and ecology must walk hand in hand.</p>
       <p>To truly worship the river, we must first learn to keep it pure.</p>
        </div>
      </div>
    </div>
  );
}
