import React from "react";
import { Link } from "react-router-dom";

//blog pages images
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";
import plant from "../assets/plant.jpeg";
import blog8 from "../assets/blog8.jpeg";
import blog9 from "../assets/blog9.jpeg";
import blog10 from "../assets/blog10.jpeg";
import blog11 from "../assets/blog11.jpeg";
import blog12 from "../assets/blog12.jpeg";
import blog13 from "../assets/blog13.jpeg";
import blog14 from "../assets/blog14.jpeg";
import blog15 from "../assets/blog15.jpeg";
import blog16 from "../assets/blog16.jpeg";
import blog17 from "../assets/blog17.jpeg";
import blog18 from "../assets/blog18.jpeg";
import blog19 from "../assets/blog19.jpeg";
import blog20 from "../assets/blog20.jpeg";
import blog21 from "../assets/blog21.jpeg";
import blog22 from "../assets/blog22.jpeg";
import blog23 from "../assets/blog23.jpeg";
import blog24 from "../assets/blog24.jpeg";






import "./Blog.css"; // css link

export default function Blog() {
  const blogData = [
    { title: "How Volunteering Changed my Life", image: blog1, link: "/blog/volunteering" },
    { title: "The Struggle to Find the Right Volunteering Opportunity", image: blog2, link: "/blog/outreach" },
    { title: "The Emotional Rewards of Giving Time", image: blog3, link: "/blog/time" },
    { title: "Learning Skills Through Volunteering", image: blog4, link: "/blog/learning" },
    { title: "The Joy of Teamwork in Volunteering", image: blog5, link: "/blog/teamwork" },
    { title: "Overcoming Challenges While Volunteering", image: blog6, link: "/blog/overcome" },
    { title: "A Morning in the Mud: My Day with the Saplings", image: plant, link: "/blog/plant" },
    { title: "What My Students Taught Me", image: blog8, link: "/blog/student" },
    { title: "My Week at the Shelter", image: blog9, link: "/blog/shelter" },
    { title: "Serving More Than Just Meals", image: blog10, link: "/blog/meal" },
    { title: "The Silence of a Clean Beach", image: blog11, link: "/blog/beach" },
    { title: "Lessons from the Flood Relief Camp", image: blog12, link: "/blog/flood" },
    { title: "My First Blood Donation Camp", image: blog13, link: "/blog/donation" },
    { title: "The Road to Wellness", image: blog14, link: "/blog/health" },
    { title: "Light in the Dark:", image: blog15, link: "/blog/blind" },
    { title: "Tech for Seniors: Bridging the Gap", image: blog16, link: "/blog/digital" },
    { title: "The Community Garden", image: blog17, link: "/blog/garden" },
    { title: "The Mahabaleshwar Cleanup", image: blog18, link: "/blog/cleanup" },
    { title: "Healing Harmonies: A Musical Need", image: blog19, link: "/blog/music" },
    { title: "The Evening School", image: blog20, link: "/blog/women" },
    { title: "Coding for a Cause: The Digital Classroom", image: blog21, link: "/blog/digitals" },
    { title: "The Open-Air Academy: Under the Banyan Tree", image: blog22, link: "/blog/banyan" },
    { title: "Reviving the Mula-Mutha", image: blog23, link: "/blog/mula" },
    { title: "The Ganges Cleaning Drive", image: blog24, link: "/blog/ganga" },



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
