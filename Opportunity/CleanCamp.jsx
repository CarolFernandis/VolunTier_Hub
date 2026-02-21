import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CleanCamp.css";

// --- Gallery Images ---
const galleryImages = [
  "https://i.pinimg.com/1200x/6b/37/08/6b37086de921106e0d9933c914099075.jpg",
  "https://i.pinimg.com/736x/4c/eb/ae/4cebaee4529a7592249d4b971765ffb1.jpg",
  "https://i.pinimg.com/1200x/09/e7/47/09e747e28df114cba76387fcaa3618a7.jpg",
  "https://i.pinimg.com/1200x/1a/25/c1/1a25c111d16a17c1890ff2466d2a8881.jpg",
  "https://i.pinimg.com/736x/60/ec/eb/60eceb363762114e0284da45849263d3.jpg",
  "https://i.pinimg.com/1200x/48/dd/15/48dd15219ae44c25507865c4ee2a01c8.jpg",
  "https://i.pinimg.com/1200x/8c/55/6f/8c556f3f07cb7e6f07843268c1d4eeda.jpg",
  "https://i.pinimg.com/736x/86/5f/8e/865f8e51ba3dcb51d6d77f71b7a0f977.jpg",
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
    locationName: "Hostel in Pune",
    title: "Volunteer in Garbage Cleaning Camp",
    header: "About This Experience",
    intro:
      "In a place of such breathtaking natural beauty as Mahabaleshwar, isn't it true that the most profound experience is not just observing the scenery, but offering your hands and heart to the voiceless dogs who need help at the local animal shelter?",
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
  <span className="ccam-badge">
    {icon && <i className={`bi bi-${icon} me-1`}></i>}
    {children}
  </span>
);

// --- Quick Peek Item ---
const QuickPeekItem = ({ icon, text }) => (
  <div className="ccam-quick-item">
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
      <div className="ccam-gallery-container">
        <div className="ccam-main-image" onClick={() => openModal(0)}>
          <img src={images[0]} alt="Main view" />
        </div>
        <div className="ccam-small-images">
          {smallImages.map((img, idx) => (
            <div className="ccam-small-wrapper" key={idx} onClick={() => openModal(idx + 1)}>
              <img src={img} alt={`Detail ${idx + 1}`} />
            </div>
          ))}
          {remainingCount > 0 && (
            <div
              className="ccam-small-wrapper ccam-overlay-wrapper"
              onClick={() => openModal(maxSmallImages + 1)}
            >
              <img src={images[maxSmallImages + 1]} alt="More images" />
              <div className="ccam-overlay">+{remainingCount} more</div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="ccam-modal-overlay" onClick={closeModal}>
          <div className="ccam-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="ccam-close-btn" onClick={closeModal}>
              &times;
            </button>
            <button className="ccam-prev-btn" onClick={prevImage}>
              &#10094;
            </button>
            <img src={images[currentIndex]} alt="Zoomed" />
            <button className="ccam-next-btn" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// --- Main Component ---
export default function CleanCamp() {
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
    <div className="ccam-container">
      <h1 className="ccam-page-heading">{/*Volunteer Opportunities at Viman Nagar*/}</h1>

      <div className="ccam-breadcrumb">
        <a href="#">Opportunity</a> / <a href="#">Viman Nagar</a> / Pune
      </div>
      <h1>{details.title}</h1>
      <span className="ccam-location">{details.locationName}</span>

      <ImageGallery images={galleryImages} />

      <div className="ccam-main-content">
        <div className="ccam-left-column">
          <section className="ccam-experience-section">
            <h2>{details.header}</h2>
            <p>{details.intro}</p>
            <div className="ccam-tasks">
              {details.tasks.map((task, idx) => (
                <Badge key={idx} icon="check-circle">{task}</Badge>
              ))}
            </div>
            <h3>What You Get:</h3>
            <div className="ccam-offers">
              {details.offer.map((item, idx) => (
                <div className="ccam-offer-item" key={idx}>
                  <i className="bi bi-star-fill"></i> {item}
                </div>
              ))}
            </div>
          </section>

          <section className="ccam-experience-section ccam-light-bg">
            <h2>Commitment & Skills</h2>
            <div className="ccam-workload">
              <Badge icon="clock-history">{work.hoursPerWeek}</Badge>
              {work.roles.map((role, idx) => (
                <Badge key={idx} icon="code-slash">{role}</Badge>
              ))}
              <Badge icon="calendar-check">{work.daysOffPerWeek} off per week</Badge>
            </div>
            <div className="ccam-qualities">
              {work.qualities.map((q, idx) => <Badge key={idx}>{q}</Badge>)}
            </div>
          </section>

          <section className="ccam-experience-section">
            <h2>Inclusions & Location</h2>
            <div className="ccam-inclusions">
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

        <div className="ccam-right-column">
          <div className="ccam-host-card">
            <h2>Meet Your Host</h2>
            <img src={host.hostImageUrl} alt={host.name} />
            <h3>{host.name}</h3>
            {host.verified && <span className="ccam-verified">Verified Host</span>}
            <p>{host.description}</p>
          </div>

          <div className="ccam-quick-peek-card">
            <h2>Quick Peek</h2>
            <QuickPeekItem icon="house-door" text={quickPeek.type} />
            <QuickPeekItem icon="people" text={quickPeek.volunteersRequired} />
            <QuickPeekItem icon="globe" text={quickPeek.volunteerType} />
          </div>
        </div>
      </div>

      <div className="ccam-sticky-footer mt-4">
        <p>
          <span>{requirements.minimumStay}</span> Min. Stay | <span>{requirements.totalVolunteersNeeded}</span> Volunteers Needed
        </p>
        <button className="ccam-apply-btn" onClick={handleApplyClick}>
          <i className="bi bi-send me-2"></i> APPLY NOW
        </button>
      </div>

      {showLoginPrompt && (
        <div className="ccam-login-overlay">
          <div className="ccam-login-content advanced">
            <button className="ccam-close-btn" onClick={() => setShowLoginPrompt(false)}>&times;</button>
            <h3>Almost There!</h3>
            <p>We noticed you're not logged in yet. Please login as a volunteer to apply for this opportunity.</p>
            <Link to="/login" className="ccam-login-btn">Login as Volunteer</Link>
          </div>
        </div>
      )}
    </div>
  );
}
