import React from "react";
import blog18 from "../assets/blog18.jpeg";
import "./BlogPage18.css";

export default function BlogPage18() {
  return (
    <div className="blog-page18 container">
      <h1 className="main-heading18">The Mahabaleshwar Cleanup</h1>


      <div className="content-section18">
        <img src={blog18} alt="cleanup" className="side-img18" />
        <div className="text-content18">
        <strong>By Rajesh Iyer</strong>
          <p>
            While tourists were busy taking photos of the sunrise, a group of us were deep in the forest trails of Mahabaleshwar, clearing plastic from the valley floor. It’s easy to love the mountains, but it takes effort to respect them.
         </p>        
         <p>
          Filling bags with debris near the Venna Lake wasn't the typical "vacation" I planned, but as the mist cleared to reveal a pristine forest, I felt a sense of pride no souvenir could buy.        </p>
        </div>
      </div>
    </div>
  );
}
