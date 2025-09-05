// src/pages/Blog.js
import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import "./Blog.css"; // Make sure this exists

export default function Blog() {
  const blogData = [
    { title: "The Power of Volunteering", image: blog1, link: "/blog/volunteering" },
    { title: "Challenges in Outreach", image: blog2, link: "/blog/outreach" },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold">Our Blogs</h1>
      <div className="row">
        {blogData.map((blog, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img src={blog.image} alt={blog.title} className="card-img-top rounded-top" />
              <div className="card-body">
                <h5 className="card-title fw-bold">{blog.title}</h5>
                <Link to={blog.link} className="btn btn-primary">Read More →</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
