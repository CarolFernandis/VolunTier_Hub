import React from "react";
import plant from "../assets/plant.jpeg";
import "./BlogPage7.css";

export default function BlogPage7() {
  return (
    <div className="blog-page7 container">
      <h1 className="main-heading">A Morning in the Mud: My Day with the Saplings</h1>


      <div className="content-section7">
        <img src={plant} alt="plant" className="side-img7" />
        <div className="text-content7">
        <strong>By Arjun Mehta</strong>
          <p>
           There is a specific kind of peace you find only when your fingernails are caked in damp earth. Last Sunday, I joined a local reforestation drive on the outskirts of the city, and honestly, I arrived expecting it to feel like "work."
          </p>
        <p>
           Instead, it felt like a homecoming. As I dug into the cool soil to settle a young Neem sapling, I realized I wasn't just digging a hole; I was creating a home. There was a beautiful, unspoken rhythm to the morning—the clinking of shovels, the shared water bottles, and the sight of dozens of volunteers from all walks of life working toward a singular, green goal. By the time we finished, my back was aching and my shoes were ruined, but looking back at that field of new life, I felt a profound sense of connection to the land that I hadn't felt in years. </p>
          <p>
            We often talk about "saving the planet" in the abstract, but that day, it felt as real and as simple as a handful of dirt and a bit of hope.       
        </p>
        </div>
      </div>
    </div>
  );
}
