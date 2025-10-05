import React from "react";
import { Link } from "react-router-dom";

//blog pages images
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";

import "./Blog.css"; // css link

export default function Blog() {
  const blogData = [
    { title: "How Volunteering Changed my Life", image: blog1, link: "/blog/volunteering" },
    { title: "The Struggle to Find the Right Volunteering Opportunity", image: blog2, link: "/blog/outreach" },
    { title: "The Emotional Rewards of Giving Time", image: blog3, link: "/blog/time" },
    { title: "Learning Skills Through Volunteering", image: blog4, link: "/blog/learning" },
    { title: "The Joy of Teamwork in Volunteering", image: blog5, link: "/blog/teamwork" },
    { title: "Overcoming Challenges While Volunteering", image: blog6, link: "/blog/overcome" },
  ];

  return (
    <div className="container">
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
