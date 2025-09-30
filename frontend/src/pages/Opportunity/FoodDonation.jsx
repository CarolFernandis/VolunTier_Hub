// src/pages/CleanUp.jsx
import React from "react";
import "./FoodDonation.css"; // Separate CSS file

// --- Gallery Images ---
const galleryImages = [
  "https://i.pinimg.com/736x/e6/a6/12/e6a612a2df7a3e590a9cbc8b5e2a985e.jpg",
  "https://i.pinimg.com/736x/f0/59/a7/f059a74c5e28f39e429b8fcb5f77960b.jpg",
  "https://i.pinimg.com/1200x/fe/d3/d2/fed3d2bd1f6b99aa2af1c0259da4971e.jpg",
  "https://i.pinimg.com/1200x/3c/10/5b/3c105bd35e1102a4d5633692b45bd548.jpg",
];

// --- Experience Data ---
const experienceData = {
  host: {
    name: "SAHIL",
    verified: true,
    description:
      "Offering a garden and mountain view, our stay is located in Nagar, 25 km from Hidimba Devi Temple and 22 km from Tibetan Monastery.",
    hostImageUrl:
      "https://i.pinimg.com/1200x/6a/d1/57/6ad157c8278e090a7151341adc8eaaa6.jpg",
  },
  details: {
    locationName: "Hostel in Moshi, Pune",
    title: "Volunteer in Food Donation Camp",
    header: "About This Experience",
    intro:
      "Ready to be part of the solution? Will you join our team to help with our impactful community food donation drive this season in Moshi, Pune?",
    tasks: ["Content creation", "Digital marketing"],
    offer: [
      "Free accommodation and meals",
      "A chance to experience the breathtaking beauty of Moshi, Pune",
      "A friendly and collaborative environment",
    ],
  },
  work: {
    hoursPerWeek: "16 hrs per week",
    roles: ["Content Creator", "Digital Marketer"],
    daysOffPerWeek: "3 days",
    qualities: ["Friendly", "Skilled And Reliable", "Team Work", "Adaptable To Rural Life"],
  },
  inclusions: {
    stayAndFood: ["Team Dorm", "3 Meals/Day"],
    amenities: ["Free Hiking Tours", "Internet Access"],
  },
  quickPeek: {
    type: "Hostel",
    volunteersRequired: "Up to 4 volunteers",
    volunteerType: "Worldwide Volunteers",
  },
  requirements: {
    minimumStay: "2 Weeks",
    totalVolunteersNeeded: 4,
  },
  locationDetails:
    "Are you passionate about travel, hospitality, and music? We are dedicated to providing serene and rejuvenating getaways, and are looking for volunteers to join our team.",
};

// --- Badge Component ---
const Badge = ({ children, type = "primary", icon }) => {
  return (
    <span className={`badge ${type}`}>
      {icon && <i className={`bi bi-${icon} me-1`}></i>}
      {children}
    </span>
  );
};

// --- Quick Peek Item ---
const QuickPeekItem = ({ icon, text }) => (
  <div className="quick-peek-item">
    <i className={`bi bi-${icon}`}></i>
    <span>{text}</span>
  </div>
);

// --- Image Gallery ---
const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) return null;
  const mainImage = images[0];
  const smallImages = images.slice(1, 4);
  const remainingCount = images.length - 4;

  return (
    <div className="gallery-container">
      <div className="main-image">
        <img src={mainImage} alt="Main view" />
      </div>
      <div className="small-images">
        {smallImages.map((img, idx) => (
          <div className="small-img-wrapper" key={idx}>
            <img src={img} alt={`Hostel detail ${idx + 1}`} />
            {idx === smallImages.length - 1 && remainingCount > 0 && (
              <div className="overlay">+{remainingCount} more</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Component ---
export default function FoodDonation() {
  const { host, details, work, inclusions, quickPeek, requirements, locationDetails } = experienceData;

  return (
    <div className="clean-up-container">
      {/* Top Breadcrumb & Title */}
      <div className="breadcrumb">
        <a href="#">Opportunity</a> / <a href="#">Moshi</a> / Pune 
      </div>
      <h1>{details.title}</h1>
      <span className="location">{details.locationName}</span>

      {/* Image Gallery */}
      <ImageGallery images={galleryImages} />

      {/* Main Content */}
      <div className="main-content">
        {/* Left Column */}
        <div className="left-column">
          {/* About Experience */}
          <section className="experience-section">
            <h2>{details.header}</h2>
            <p>{details.intro}</p>
            <div className="tasks">
              {details.tasks.map((task, idx) => (
                <Badge key={idx} type="primary" icon="check-circle">
                  {task}
                </Badge>
              ))}
            </div>
            <h3>What You Get:</h3>
            <ul>
              {details.offer.map((item, idx) => (
                <li key={idx}>
                  <i className="bi bi-star-fill"></i> {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Work & Qualities */}
          <section className="experience-section light-bg">
            <h2>Commitment and Skills</h2>
            <div className="workload">
              <Badge type="accent" icon="clock-history">{work.hoursPerWeek}</Badge>
              {work.roles.map((role, idx) => (
                <Badge key={idx} type="accent" icon="code-slash">{role}</Badge>
              ))}
              <Badge type="primary" icon="calendar-check">{work.daysOffPerWeek} off per week</Badge>
            </div>
            <div className="qualities">
              {work.qualities.map((quality, idx) => (
                <Badge key={idx} type="primary">{quality}</Badge>
              ))}
            </div>
          </section>

          {/* Inclusions & Location */}
          <section className="experience-section">
            <h2>Inclusions & Location</h2>
            <div className="inclusions">
              <div>
                <h4>Stay & Food</h4>
                {inclusions.stayAndFood.map((item, idx) => <Badge key={idx} type="accent">{item}</Badge>)}
              </div>
              <div>
                <h4>Amenities</h4>
                {inclusions.amenities.map((item, idx) => <Badge key={idx} type="accent">{item}</Badge>)}
              </div>
            </div>
            <h4>About the Location</h4>
            <p>{locationDetails}</p>
          </section>
        </div>

        {/* Right Column */}
        <div className="right-column">
          {/* Host Card */}
          <div className="host-card">
            <h2>Meet Your Host</h2>
            <img src={host.hostImageUrl} alt={host.name} />
            <h3>{host.name}</h3>
            {host.verified && <span className="verified">Verified Host</span>}
            <p>{host.description}</p>
          </div>

          {/* Quick Peek Card */}
          <div className="quick-peek-card">
            <h2>Quick Peek</h2>
            <QuickPeekItem icon="house-door" text={quickPeek.type} />
            <QuickPeekItem icon="people" text={quickPeek.volunteersRequired} />
            <QuickPeekItem icon="globe" text={quickPeek.volunteerType} />
          </div>
        </div>
      </div>

       {/* Sticky Footer Above Content */}
      <div className="sticky-footer mt-4">
        <p>
          <span>{requirements.minimumStay}</span> Min. Stay | <span>{requirements.totalVolunteersNeeded}</span> Volunteers Needed
        </p>
        <button className="apply-btn">
          <i className="bi bi-send me-2"></i> APPLY NOW
        </button>
      </div>
  
    </div>
  );
}