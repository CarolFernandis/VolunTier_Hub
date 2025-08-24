import React from 'react'
import { Link } from 'react-router-dom';

function OpportunityPage() {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-transparent">
  <div className="container-fluid ">
    <Link className="navbar-brand" to="/aboutpage"> VolunTier </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar极客时间NavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item mx-2 px-2">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-2 px-2">
          <Link className="nav-link" to="/aboutpage">About</Link>
        </li>
        <li className="nav-item mx-2 px-2">
          <Link className="nav-link active" to="/opportunitypage">Opportunity</Link>
        </li>
        <li className="nav-item mx-2 px-2">
          <Link className="nav-link " to="/blogpage">Blog</Link>
        </li>
        <li className="nav-item mx-2 px-2">
          <Link className="nav-link" to="/testimonialpage">Testimonials</Link>
        </li>
        <li className="nav-item mx-2 px-2">
          <Link className="nav-link" to="/faqpage">FAQs</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="navbar-brand dropdown-toggle me-3 pe-2" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="/images/ProfilePng.webp" alt="Profile" width={30} height={28} />
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/login">Log In</Link></li>
            <li><Link className="dropdown-item" to="/register">Register</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

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

    </>
  )
}

export default OpportunityPage;