import React from "react";
import blog11 from "../assets/blog11.jpeg";
import "./BlogPage11.css";

export default function BlogPage11() {
  return (
    <div className="blog-page11 container">
      <h1 className="main-heading11">The Silence of a Clean Beach</h1>


      <div className="content-section11">
        <img src={blog11} alt="beach" className="side-img11" />
        <div className="text-content11">
        <strong>By Rohan D’Souza</strong>
          <p>
        The first time I stood on Versova beach for a cleanup, the sheer amount of plastic was overwhelming. 
        It felt like trying to empty the ocean with a teaspoon. But as I joined a human chain of volunteers, 
        passing heavy bags of debris, the task shifted from "impossible" to "inevitable." There is a rhythmic, almost
         meditative quality to picking up trash—a piece of a discarded flip-flop here, a tangled fishing net there.       
        </p>
         <p>
        By noon, when we looked back at the stretch of sand we had cleared, the sight was breathtaking. For the first time in
         years, you could actually see the shore. Being part of a beach cleanup isn't just about the environment; it’s about 
         reclaiming our public spaces.
        </p>
          <p>
        It taught me that collective action is the only antidote to individual despair. We are the ones who made the mess, 
        and there is a deep, rugged satisfaction in being the ones to clear it.       
          </p>
        </div>
      </div>
    </div>
  );
}
