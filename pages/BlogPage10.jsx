import React from "react";
import blog10 from "../assets/blog10.jpeg";
import "./BlogPage10.css";

export default function BlogPage10() {
  return (
    <div className="blog-page10 container">
      <h1 className="main-heading10">Serving More Than Just Meals</h1>


      <div className="content-section10">
        <img src={blog10} alt="meal" className="side-img10" />
        <div className="text-content10">
        <strong>By Ekta Sharma</strong>
          <p>
         Every Wednesday evening, I join a local "Community Kitchen" drive in Mumbai, and it has completely redefined my 
         understanding of hunger. When we set up our distribution point near the railway station, the goal isn't just to hand out 
         packets of khichdi; it’s to acknowledge the humanity of people who are often looked past.        
        </p>
         <p>
        I remember an elderly man named Vitthal who comes every week; he once told me that the conversation we have is as nourishing 
        as the food itself. In the rush of the city, we forget that poverty is isolating.
        </p>
          <p>
         Volunteering here has taught me that a smile and a respectful "Namaste" can be just as vital as a warm meal. 
         It’s a humbling reminder that while we can’t fix the world’s problems overnight, we can ensure that, for one night, 
         our neighbors don't go to bed feeling forgotten.       
          </p>
        </div>
      </div>
    </div>
  );
}
