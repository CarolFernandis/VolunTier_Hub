import React from "react";
import blogthree from "../assets/blogthree.jpg"; 
import "./BlogPage3.css";

export default function BlogPage3() {
  return (
    <div className="blog-page3 container">
      <h1 className="main-heading3">The Emotional Rewards of Giving Time</h1>

      <div className="content-section3">
        <img src={blogthree} alt="Time" className="side-img3" />
        <div className="text-content3">
          <p>
            Some of the most rewarding moments in my life came from giving my time without expecting anything in return.
            I remember volunteering at a community kitchen, serving meals to people struggling with homelessness.
          </p>
          <p>
            At first, I thought it would be a simple task—just prepare food and distribute it. 
            But it became so much more than that. I found myself sitting down to chat with regular visitors,
            learning about their life journeys, the struggles that led them here, and their dreams for the future. 
            One man told me, “Thank you for seeing me when no one else does.” I was stunned. I realized that in those small 
            moments of connection, I wasn’t just providing meals—I was offering recognition, dignity, and human compassion.
          </p>
          <p>
            Those words, simple but profound, stayed with me long after the event ended.
          </p>
          <p>
            Every time I volunteered, I walked away with a sense of fulfillment and a belief that small actions truly matter. 
            It taught me that volunteering isn’t about grand gestures; it’s about showing up, listening, and treating people
            with kindness.
          </p>
        </div>
      </div>
    </div>
  );
}
