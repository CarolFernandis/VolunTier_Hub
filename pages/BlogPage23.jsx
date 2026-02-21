import React from "react";
import blog23 from "../assets/blog23.jpeg";
import "./BlogPage23.css";

export default function BlogPage23() {
  return (
    <div className="blog-page23 container">
      <h1 className="main-heading23">Reviving the Mula-Mutha</h1>


      <div className="content-section23">
        <img src={blog23} alt="mula river" className="side-img23" />
        <div className="text-content23">
        <strong>By Aditya Kulkarni</strong>
        <p>Wading into the banks of the Mula-Mutha river in Pune was a wake-up call. Our volunteer group spent the morning pulling out "ghost nets" and layers of tangled plastic that had choked the riverbed for years.</p>
        <p>It’s easy to complain about water pollution from a distance, but when you feel the weight of the debris in your own hands, the urgency becomes real.</p>
        <p>As we cleared a small stretch, the water seemed to breathe again, flowing just a little bit faster. Cleaning a river isn't just about the water; it’s about restoring the lifeline of our city.</p>
        </div>
      </div>
    </div>
  );
}
