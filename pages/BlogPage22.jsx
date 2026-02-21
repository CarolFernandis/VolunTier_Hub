import React from "react";
import blog22 from "../assets/blog22.jpeg";
import "./BlogPage22.css";

export default function BlogPage22() {
  return (
    <div className="blog-page22 container">
      <h1 className="main-heading22">Under the Banyan Tree</h1>


      <div className="content-section22">
        <img src={blog22} alt="under banyan tree studying" className="side-img22" />
        <div className="text-content22">
        <strong>Aditya Kulkarni</strong>
        <p>In a small village near Mahabaleshwar, I spent my weekends teaching "Environmental Science" to local school kids, using the forest itself as our classroom. We didn't look at diagrams in books; we looked at the roots of the trees and the flow of the streams.</p>
        <p>Teaching in the open air made the lessons stick in a way a whiteboard never could. When a ten-year-old pointed out a native bird we had studied the week before, I knew I had made a real connection.</p>
       <p>Teaching isn't about giving answers; it’s about sparking the right questions.</p>
        </div>
      </div>
    </div>
  );
}
