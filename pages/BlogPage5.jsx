import React from "react";
import blogfive from "../assets/blogfive.jpg";
import "./BlogPage5.css";

export default function BlogPage5() {
  return (
    <div className="blog-page5 container">
      <h1 className="main-heading5">The Joy of Teamwork in Volunteering</h1>


      <div className="content-section5">
        <img src={blogfive} alt="teamwork" className="side-img5" />
        <div className="text-content5">
          <p>
          Volunteering has a unique way of bringing people together. I experienced this during a school supply 
          distribution event where I worked alongside a diverse group of volunteers. Each person brought a different skill set: 
          some were excellent organizers, others excelled at interacting with children, and a few handled logistics.
          </p>
          <p>
            We had never worked together before, yet by the end of the day, the event ran flawlessly because of our collaboration. 
            Seeing children smile as they received their supplies made every effort worth it. </p>
          <p>
           I realized that volunteering teaches teamwork and empathy in ways no office project ever could. 
           When people unite for a common cause, they learn to communicate better, adapt, and value each other’s strengths, 
           creating bonds that last far beyond the event itself.
          </p>
          
        </div>
      </div>
    </div>
  );
}
