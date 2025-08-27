//Opportunity Page
import React from "react";

import "./Opportunity.css";

export default function Opportunity() {
  return (
      <div className="container mt-4">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <form>
        <div className="input-group mb-3 rounded">
          <select className="form-select" style={{maxWidth: 150}}>
            <option selected> Search Skill </option>
            <option value={1}>Skill- 1</option>
            <option value={2}>Skill- 2</option>
            <option value={3}>Skill- 3</option>
          </select>
          <input type="text" className="form-control" placeholder="Search Location..." />
          <button className="btn btn-light" type="submit">Search</button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
}
