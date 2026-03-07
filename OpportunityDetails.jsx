import React from "react";
import { useParams } from "react-router-dom";

const OpportunityDetails = () => {
  const { id } = useParams();

  const opportunities =
    JSON.parse(localStorage.getItem("postedOpportunities")) || [];

  const opportunity = opportunities.find(
    (opp) => opp.id === Number(id)
  );

  if (!opportunity) {
    return <h2 style={{ textAlign: "center" }}>Opportunity Not Found</h2>;
  }

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>{opportunity.title}</h1>

      <img
        src={opportunity.image}
        alt={opportunity.title}
        style={{
          width: "400px",
          borderRadius: "12px",
          margin: "20px 0",
        }}
      />

      <h3>📍 {opportunity.location}</h3>

      <h4>📅 {opportunity.date}</h4>

      <p style={{ maxWidth: "600px", margin: "20px auto" }}>
        {opportunity.description}
      </p>
    </div>
  );
};

export default OpportunityDetails;