import React from "react";
import blog21 from "../assets/blog21.jpeg";
import "./BlogPage19.css";

export default function BlogPage21() {
  return (
    <div className="blog-page21 container">
      <h1 className="main-heading21">The Digital Classroom</h1>


      <div className="content-section21">
        <img src={blog21} alt="digital classroom" className="side-img21" />
        <div className="text-content21">
        <strong>By Rajesh Iyer</strong>
          <p>Last month, I volunteered to teach basic computer skills to a group of teenagers in a local NGO. 
            These kids had incredible ideas but had never touched a laptop.
          </p>
         <p>
          Watching their faces light up as they wrote their first line of HTML code was like watching a lightbulb turn on in a dark room. We didn't have high-speed internet or fancy gadgets, just a few old desktops and a lot of curiosity.        </p>
        <p>I went there to teach them about technology, but they taught me about resilience and the hunger to learn against all odds.</p>
        </div>
      </div>
    </div>
  );
}
