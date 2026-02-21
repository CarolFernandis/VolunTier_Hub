import React from "react";
import blogone from "../assets/blogone.jpg";
import "./BlogPage1.css";

export default function BlogPage1() {
  return (
    <div className="blog-page1 container">
      <h1 className="main-heading1">How Volunteering Changed My Life</h1>


      <div className="content-section1">
        <img src={blogone} alt="Volunteering" className="side-img1" />
        <div className="text-content1">
          <p>
            Volunteering changed the way I see the world. I still remember the first time I walked into a local community center to help out with an <strong>educational program</strong> for underprivileged children. I was nervous, unsure if I could make any real difference.
          </p>
          <p>
            But the moment I saw their bright eyes, their eager smiles, and listened to their life stories, I knew I was in the right place. Every week, I dedicated a few hours to tutoring, organizing activities, and simply being there to listen.
          </p>
          <p>
            Over time, I saw small changes—children who once hesitated to speak began sharing their thoughts confidently, their academic performance improved, and they even began to believe in themselves. That feeling of knowing I contributed to someone’s growth became incredibly fulfilling.
          </p>
          <p>
            Volunteering gave me purpose, deepened my empathy, and reminded me that positive change is made one small step at a time.
          </p>
        </div>
      </div>
    </div>
  );
}
