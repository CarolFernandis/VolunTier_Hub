import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import "./FarmWork.css";

// --- Gallery Images ---
const galleryImages = [
  "https://images.unsplash.com/photo-1594051769596-843cb33e04f4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.pinimg.com/736x/65/13/ec/6513ec0f398bd7f38b948f8056d87fd2.jpg",
  "https://images.unsplash.com/photo-1695730404055-fc2d4006aefc?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.pinimg.com/1200x/3a/ed/75/3aed75105e0eb214104932869814464e.jpg",
  "https://images.unsplash.com/photo-1691347895179-599af708e3c7?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1708513520903-f96f6cd9310d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682092640390-986e05bcbb5d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661811702909-7771dc119508?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    locationName: "Hostel in Nashik",
    title: "Volunteer in Farm Work",
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
  <span className="fw-badge">
    {icon && <i className={`bi bi-${icon} me-1`}></i>}
    {children}
  </span>
);

// --- Quick Peek Item ---
const QuickPeekItem = ({ icon, text }) => (
  <div className="fw-quick-item">
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
      <div className="fw-gallery-container">
        <div className="fw-main-image" onClick={() => openModal(0)}>
          <img src={images[0]} alt="Main view" />
        </div>
        <div className="fw-small-images">
          {smallImages.map((img, idx) => (
            <div className="fw-small-wrapper" key={idx} onClick={() => openModal(idx + 1)}>
              <img src={img} alt={`Detail ${idx + 1}`} />
            </div>
          ))}
          {remainingCount > 0 && (
            <div
              className="fw-small-wrapper fw-overlay-wrapper"
              onClick={() => openModal(maxSmallImages + 1)}
            >
              <img src={images[maxSmallImages + 1]} alt="More images" />
              <div className="fw-overlay">+{remainingCount} more</div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fw-modal-overlay" onClick={closeModal}>
          <div className="fw-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="fw-close-btn" onClick={closeModal}>&times;</button>
            <button className="fw-prev-btn" onClick={prevImage}>&#10094;</button>
            <img src={images[currentIndex]} alt="Zoomed" />
            <button className="fw-next-btn" onClick={nextImage}>&#10095;</button>
          </div>
        </div>
      )}
    </>
  );
};

// --- Main Component ---
export default function FarmWork() {
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
    <div className="fw-container">
      <h1 className="fw-page-heading">{/*Volunteer Opportunities at Nashik*/}</h1>

      <div className="fw-breadcrumb">
        <a href="#">Opportunity</a> / <a href="#"> Dindori</a> / Nashik
      </div>
      <h1>{details.title}</h1>
      <span className="fw-location">{details.locationName}</span>

      <ImageGallery images={galleryImages} />

      <div className="fw-main-content">
        <div className="fw-left-column">
          {/* Experience Section */}
          <section className="fw-experience-section">
            <h2>{details.header}</h2>
            <p>{details.intro}</p>
            <div className="fw-tasks">
              {details.tasks.map((task, idx) => (
                <Badge key={idx} icon="check-circle">{task}</Badge>
              ))}
            </div>
            <h3>What You Get:</h3>
            <div className="fw-offers">
              {details.offer.map((item, idx) => (
                <div className="fw-offer-item" key={idx}>
                  <i className="bi bi-star-fill"></i> {item}
                </div>
              ))}
            </div>
          </section>

          {/* Commitment Section */}
          <section className="fw-experience-section fw-light-bg">
            <h2>Commitment & Skills</h2>
            <div className="fw-workload">
              <Badge icon="clock-history">{work.hoursPerWeek}</Badge>
              {work.roles.map((role, idx) => (
                <Badge key={idx} icon="code-slash">{role}</Badge>
              ))}
              <Badge icon="calendar-check">{work.daysOffPerWeek} off per week</Badge>
            </div>
            <div className="fw-qualities">
              {work.qualities.map((q, idx) => <Badge key={idx}>{q}</Badge>)}
            </div>
          </section>

          {/* Inclusions Section */}
          <section className="fw-experience-section">
            <h2>Inclusions & Location</h2>
            <div className="fw-inclusions">
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

        <div className="fw-right-column">
          {/* Host Card */}
          <div className="fw-host-card">
            <h2>Meet Your Host</h2>
            <img src={host.hostImageUrl} alt={host.name} />
            <h3>{host.name}</h3>
            {host.verified && <span className="fw-verified">Verified Host</span>}
            <p>{host.description}</p>
          </div>

          {/* Quick Peek */}
          <div className="fw-quick-peek-card">
            <h2>Quick Peek</h2>
            <QuickPeekItem icon="house-door" text={quickPeek.type} />
            <QuickPeekItem icon="people" text={quickPeek.volunteersRequired} />
            <QuickPeekItem icon="globe" text={quickPeek.volunteerType} />
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="fw-sticky-footer mt-4">
        <p>
          <span>{requirements.minimumStay}</span> Min. Stay | <span>{requirements.totalVolunteersNeeded}</span> Volunteers Needed
        </p>
        <button className="fw-apply-btn" onClick={handleApplyClick}>
          <i className="bi bi-send me-2"></i> APPLY NOW
        </button>
      </div>

      {/* Login Modal */}
      {showLoginPrompt && (
        <div className="fw-login-overlay">
          <div className="fw-login-content advanced">
            <button className="fw-close-btn" onClick={() => setShowLoginPrompt(false)}>&times;</button>
            <h3>Almost There!</h3>
            <p>We noticed you're not logged in yet. Please login as a volunteer to apply for this opportunity.</p>
            <Link to="/login" className="fw-login-btn">Login as Volunteer</Link>
          </div>
        </div>
      )}
    </div>
  );
}
