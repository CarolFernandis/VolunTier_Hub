import React from "react";
import blog1 from "../assets/blog1.jpg";

export default function BlogVolunteering() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">The Power of Volunteering</h1>
      <img src={blog1} alt="Volunteering" className="img-fluid mb-4 rounded" />
      <p>Volunteering is a powerful means of engaging individuals in meaningful social change.</p>
      <p>You can contribute your time and skills to causes that matter, create positive impact, and develop personally and professionally.</p>
    </div>
  );
}
