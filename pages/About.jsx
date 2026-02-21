// About.jsx
import React from "react";
import { Link } from "react-router-dom";

// Section 1
import aboutus from "../assets/aboutus.jpeg";

// Section 2 - Cards
import vision from "../assets/vision.png";
import purpose from "../assets/purpose.png";
import approach from "../assets/approach.png";
import opportunities from "../assets/opportunities.png";
import registration from "../assets/registration.png";
import dashboard from "../assets/dashboard.png";

// Section 3 - Volunteers
import Community from "../assets/Community.jpg";
import Education from "../assets/Education.jpg";
import Health from "../assets/Health.jpg";
import Skilled from "../assets/Skilled.jpg";
import Campaign from "../assets/Campaign.jpg";
import Plant from "../assets/Plant.jpg";

import "./About.css";

export default function About() {
  const scrollCards = (scrollOffset) => {
    const container = document.getElementById("volunteer-scroll");
    if (container) {
      container.scrollLeft += scrollOffset;
    }
  };

  return (
    <React.Fragment>
      {/* About Section 1 */}
      <section
        className="about-section py-5"
        style={{ minHeight: "210px",  background: "linear-gradient(180deg, #f8fafc, #eef2ff)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="about-heading ">About us</h1>
              <p style={{ fontSize: "40px", lineHeight: "1.5" }} className="fw-light">
                Empower Change with <span className="extra-bold">VolunTier_Hub</span> – Connecting Hearts
              </p>
              <p>
                Volunteer Hub connects passionate individuals with NGOs and non-profits, making it easier than ever to discover volunteer opportunities, register for projects, and contribute to social change.
                <br />
                Our platform promotes active participation, builds community networks, and empowers organizations to manage their volunteer base efficiently.
                <br />
                Whether you’re a volunteer looking for impactful projects or a host organization seeking committed help, Volunteer Hub streamlines the connection and fosters a strong ecosystem for civic engagement.
              </p>

              <Link to="/register">
                <button className="btn-custom mt-3">Join Us</button>
              </Link>
            </div>
            <div className="col-lg-5 d-flex justify-content-center">
              <img src={aboutus} alt="About us" className="rounded shadow about-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section 2 */}
      <section className="mission-section py-5" style={{background: "#f6f7fb"}}>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 mb-4">
              <div className="mission-card p-4 h-100">
                <img src={vision} alt="Vision" className="mission-icon mb-3" />
                <h3>Our Vision</h3>
                <p>
                  We imagine a world where volunteering is more than action—it's connection, contribution, and community.
                </p>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="mission-card p-4 h-100">
                <img src={purpose} alt="Purpose" className="mission-icon mb-3" />
                <h3>Our Purpose</h3>
                <p>
                  To make volunteering accessible to all. We bridge the gap between willing volunteers and organizations driving social causes.
                </p>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="mission-card p-4 h-100">
                <img src={approach} alt="Approach" className="mission-icon mb-3" />
                <h3>Our Approach</h3>
                <p>
                  Connect. Volunteer. Grow.Real impact with real people through curated opportunities and support for NGOs.
                </p>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="mission-card p-4 h-100">
                <img src={opportunities} alt="opportunities" className="mission-icon mb-3" />
                <h3>Discover Meaningful Opportunities</h3>
                <p>
                 VolunTier_Hub helps you find the right volunteer work near you—fast and easy.
                </p>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="mission-card p-4 h-100">
                <img src={registration} alt="registration" className="mission-icon mb-3" />
                <h3>Registration for Volunteers and Hosts</h3>
                <p>
                  Volunteers can register, while organizations manage projects and track participation—all in one platform
                </p>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="mission-card p-4 h-100">
                <img src={dashboard} alt="Dashboards" className="mission-icon mb-3" />
                <h3>Dashboards for Enhanced Experience</h3>
                <p>
                Volunteers use a dashboard to find opportunities, track activities, and get updates. Organizations use a dashboard to create projects and manage volunteers easily.                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Volunteers Needed Section 3 */}
      <section className="what-we-do-section py-5" style={{ background:"linear-gradient(180deg, #f8fafc, #eef2ff)" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Types of Volunteers Needed</h2>
            <p className="text-muted" style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 2rem" }}>
              "We need these types of volunteers to help with our VolunTier_Hub."
            </p>
          </div>

          <div className="card-scroll-wrapper">
            <button className="scroll-btn left" onClick={() => scrollCards(-300)}>‹</button>

            <div className="card-scroll" id="volunteer-scroll">
              {/* Card 1 */}
              <div className="card shadow h-100">
                <img src={Community} className="card-img-top" alt="Community Service Volunteers" />
                <div className="card-body" style={{background: "#c9b6f6"}}>
                  <h5 className="card-title fw-bold">Community Service Volunteers</h5>
                  <p className="card-text">Helping communities and people through events, food drives, and local projects.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card shadow h-100">
                <img src={Education} className="card-img-top" alt="Education & Mentorship Volunteers" />
                <div className="card-body"style={{background: "#c9b6f6"}}>
                  <h5 className="card-title fw-bold">Education & Mentorship Volunteers</h5>
                  <p className="card-text">Tutoring, mentoring, and teaching life skills to children and teens.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="card shadow h-100">
                <img src={Health} className="card-img-top" alt="Healthcare & Wellness Volunteers" />
                <div className="card-body" style={{background: "#c9b6f6"}}>
                  <h5 className="card-title fw-bold">Healthcare & Wellness Volunteers</h5>
                  <p className="card-text">Helping with public health initiatives and caring for vulnerable people.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="card shadow h-100">
                <img src={Plant} className="card-img-top" alt="Environmental Volunteers" />
                <div className="card-body" style={{background: "#c9b6f6"}}>
                  <h5 className="card-title fw-bold">Environmental Volunteers</h5>
                  <p className="card-text">Helping with environmental projects like cleanups and tree planting.</p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="card shadow h-100">
                <img src={Skilled} className="card-img-top" alt="Skilled/Professional Volunteers" />
                <div className="card-body" style={{background: "#c9b6f6"}}>
                  <h5 className="card-title fw-bold">Skilled/Professional Volunteers</h5>
                  <p className="card-text">Offering professional skills like design, writing, or legal help to support a cause.</p>
                </div>
              </div>

              {/* Card 6 */}
              <div className="card shadow h-100">
                <img src={Campaign} className="card-img-top" alt="Event & Campaign Volunteers" />
                <div className="card-body" style={{background: "#c9b6f6"}}>
                  <h5 className="card-title fw-bold">Event & Campaign Volunteers</h5>
                  <p className="card-text">Helping with event planning and spreading the word about a cause.</p>
                </div>
              </div>
            </div>

            <button className="scroll-btn right" onClick={() => scrollCards(300)}>›</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
