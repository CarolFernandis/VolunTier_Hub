import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CleanUp.css";

// --- Gallery Images ---
const galleryImages = [
  "https://i.pinimg.com/1200x/75/84/4b/75844b2613bd578fe19ab27ba3577fe1.jpg",
  "https://i.pinimg.com/736x/40/4e/83/404e83df1267cecaeebb2e64e6add7c2.jpg",
  "https://i.pinimg.com/736x/da/25/d2/da25d29a557952cec9ee8652d1fc78ff.jpg",
  "https://i.pinimg.com/1200x/c4/9b/c5/c49bc5d09dd3169db72599bd9c9fbd43.jpg",
  "https://i.pinimg.com/1200x/13/58/37/135837d48e178c394b5185d23c1ba7b9.jpg",
  "https://i.pinimg.com/1200x/1c/ab/27/1cab27488f7a9dc750bc8ab121477f6c.jpg",
  "https://i.pinimg.com/736x/5a/05/f2/5a05f27a9e4b11cb7943771c66857b39.jpg",
  "https://i.pinimg.com/736x/42/11/89/4211896e36752937a8e9a5393d64885f.jpg",
];

// --- Experience Data ---
const experienceData = {
  host: {
    name: "Vishal",
    verified: true,
    description:
      "Offering a garden and mountain view, our stay is located in Nagar, 25 km from Hidimba Devi Temple and 22 km from Tibetan Monastery.",
    hostImageUrl:
      "https://i.pinimg.com/1200x/6a/d1/57/6ad157c8278e090a7151341adc8eaaa6.jpg",
  },
  details: {
    locationName: "Hostel in Gorgaon",
    title: "Volunteer in Community Clean-Up",
    header: "About This Experience",
    intro:
      "In Gorgaon, when the tide rolls out and leaves behind a plastic tide, who will be the hands that claim the shore back for the ocean and its creatures? If the future of our beautiful coastline rests on a single Saturday morning, can we stand by and watch it wash away?",
    tasks: ["Content creation", "Digital marketing"],
    offer: [
      "Free accommodation and meals",
      "A chance to experience the community service",
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
    "Are you passionate about dogs, animal welfare, and community service? We are dedicated to providing a safe, loving, and nurturing environment for dogs awaiting their forever homes, and are looking for volunteers to join our team.",
};

// --- Badge Component ---
const Badge = ({ children, icon }) => (
  <span className="cu-badge">
    {icon && <i className={`bi bi-${icon} me-1`}></i>}
    {children}
  </span>
);

// --- Quick Peek Item ---
const QuickPeekItem = ({ icon, text }) => (
  <div className="cu-quick-item">
    <i className={`bi bi-${icon}`}></i>
    <span>{text}</span>
  </div>
);

// --- Image Gallery with "+X More" ---
const ImageGallery = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxSmallImages = 3;
  const smallImages = images.slice(1, 1 + maxSmallImages);
  const remainingCount = images.length - 1 - maxSmallImages;

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="cu-gallery-container">
        <div className="cu-main-image" onClick={() => openModal(0)}>
          <img src={images[0]} alt="Main view" />
        </div>
        <div className="cu-small-images">
          {smallImages.map((img, idx) => (
            <div className="cu-small-wrapper" key={idx} onClick={() => openModal(idx + 1)}>
              <img src={img} alt={`Detail ${idx + 1}`} />
            </div>
          ))}
          {remainingCount > 0 && (
            <div
              className="cu-small-wrapper cu-overlay-wrapper"
              onClick={() => openModal(maxSmallImages + 1)}
            >
              <img src={images[maxSmallImages + 1]} alt="More images" />
              <div className="cu-overlay">+{remainingCount} more</div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="cu-modal-overlay" onClick={closeModal}>
          <div className="cu-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cu-close-btn" onClick={closeModal}>
              &times;
            </button>
            <button className="cu-prev-btn" onClick={prevImage}>
              &#10094;
            </button>
            <img src={images[currentIndex]} alt="Zoomed" />
            <button className="cu-next-btn" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// --- Main Component ---
export default function CleanUp() {
  const { host, details, work, inclusions, quickPeek, requirements, locationDetails } = experienceData;

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  
  const handleApplyClick = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user) {
    setShowLoginPrompt(true);
    return;
  }

  // Get all activities
  const existingActivities =
    JSON.parse(localStorage.getItem("activities")) || [];

  // Check if already joined
  const alreadyJoined = existingActivities.find(
    (activity) =>
      activity.email === user.email &&
      activity.title === details.title
  );

  if (alreadyJoined) {
    alert("You have already joined this opportunity!");
    return;
  }

  const newActivity = {
    email: user.email,
    title: details.title,
    location: details.locationName,
    date: new Date().toLocaleDateString(),
  };

  const updatedActivities = [...existingActivities, newActivity];

  localStorage.setItem("activities", JSON.stringify(updatedActivities));

  alert("Successfully Joined!");
};


  return (
    <div className="cu-container">
      <h1 className="cu-page-heading">{/*Volunteer Opportunities at Mumbai*/}</h1>

      <div className="cu-breadcrumb">
        <a href="#">Opportunity</a> / <a href="#">Gorgaon</a> / Mumbai
      </div>
      <h1>{details.title}</h1>
      <span className="cu-location">{details.locationName}</span>

      <ImageGallery images={galleryImages} />

      <div className="cu-main-content">
        <div className="cu-left-column">
          <section className="cu-experience-section">
            <h2>{details.header}</h2>
            <p>{details.intro}</p>
            <div className="cu-tasks">
              {details.tasks.map((task, idx) => (
                <Badge key={idx} icon="check-circle">{task}</Badge>
              ))}
            </div>
            <h3>What You Get:</h3>
            <div className="cu-offers">
              {details.offer.map((item, idx) => (
                <div className="cu-offer-item" key={idx}>
                  <i className="bi bi-star-fill"></i> {item}
                </div>
              ))}
            </div>
          </section>

          <section className="cu-experience-section cu-light-bg">
            <h2>Commitment & Skills</h2>
            <div className="cu-workload">
              <Badge icon="clock-history">{work.hoursPerWeek}</Badge>
              {work.roles.map((role, idx) => (
                <Badge key={idx} icon="code-slash">{role}</Badge>
              ))}
              <Badge icon="calendar-check">{work.daysOffPerWeek} off per week</Badge>
            </div>
            <div className="cu-qualities">
              {work.qualities.map((q, idx) => <Badge key={idx}>{q}</Badge>)}
            </div>
          </section>

          <section className="cu-experience-section">
            <h2>Inclusions & Location</h2>
            <div className="cu-inclusions">
              <div>
                <h4>Stay & Food</h4>
                {inclusions.stayAndFood.map((item, idx) => <Badge key={idx}>{item}</Badge>)}
              </div>
              <div>
                <h4>Amenities</h4>
                {inclusions.amenities.map((item, idx) => <Badge key={idx}>{item}</Badge>)}
              </div>
            </div>
            <h4>About the Location</h4>
            <p>{locationDetails}</p>
          </section>
        </div>

        <div className="cu-right-column">
          <div className="cu-host-card">
            <h2>Meet Your Host</h2>
            <img src={host.hostImageUrl} alt={host.name} />
            <h3>{host.name}</h3>
            {host.verified && <span className="cu-verified">Verified Host</span>}
            <p>{host.description}</p>
          </div>

          <div className="cu-quick-peek-card">
            <h2>Quick Peek</h2>
            <QuickPeekItem icon="house-door" text={quickPeek.type} />
            <QuickPeekItem icon="people" text={quickPeek.volunteersRequired} />
            <QuickPeekItem icon="globe" text={quickPeek.volunteerType} />
          </div>
        </div>
      </div>

      <div className="cu-sticky-footer mt-4">
        <p>
          <span>{requirements.minimumStay}</span> Min. Stay | <span>{requirements.totalVolunteersNeeded}</span> Volunteers Needed
        </p>
        <button className="cu-apply-btn" onClick={handleApplyClick}>
          <i className="bi bi-send me-2"></i> APPLY NOW
        </button>
      </div>

      {showLoginPrompt && (
        <div className="cu-login-overlay">
          <div className="cu-login-content advanced">
            <button className="cu-close-btn" onClick={() => setShowLoginPrompt(false)}>&times;</button>
            <h3>Almost There!</h3>
            <p>We noticed you're not logged in yet. Please login as a volunteer to apply for this opportunity.</p>
            <Link to="/login" className="cu-login-btn">Login as Volunteer</Link>
          </div>
        </div>
      )}
    </div>
  );
}
