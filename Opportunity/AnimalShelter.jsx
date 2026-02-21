import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AnimalShelter.css";

// --- Gallery Images ---
const galleryImages = [
  "https://i.pinimg.com/736x/62/1c/a2/621ca2e69c52bc13835f6e2218eed4a1.jpg",
  "https://i.pinimg.com/736x/c0/8a/12/c08a122460a216391ca8173d108f810d.jpg",
  "https://images.unsplash.com/photo-1597317319427-8fe74703a940?q=80&w=1139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.pinimg.com/736x/95/61/27/956127ea474fad4b3cc90ee409d0cbc6.jpg",
  "https://images.unsplash.com/photo-1675605711717-1b94be8b9580?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.pinimg.com/1200x/75/13/22/75132272f3c8140fcdf623652862945a.jpg",
  "https://i.pinimg.com/1200x/5a/50/84/5a508483c340f78b287ac866474ca12c.jpg",
  "https://i.pinimg.com/1200x/1e/bd/40/1ebd40ccb254bc886a0fdd84cfe0d11b.jpg",
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
    locationName: "Hostel in Mahabaleshwar",
    title: "Volunteer in Dog Shelter",
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
  <span className="as-badge">
    {icon && <i className={`bi bi-${icon} me-1`}></i>}
    {children}
  </span>
);

// --- Quick Peek Item ---
const QuickPeekItem = ({ icon, text }) => (
  <div className="as-quick-item">
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
      <div className="as-gallery-container">
        <div className="as-main-image" onClick={() => openModal(0)}>
          <img src={images[0]} alt="Main view" />
        </div>
        <div className="as-small-images">
          {smallImages.map((img, idx) => (
            <div className="as-small-wrapper" key={idx} onClick={() => openModal(idx + 1)}>
              <img src={img} alt={`Detail ${idx + 1}`} />
            </div>
          ))}
          {remainingCount > 0 && (
            <div
              className="as-small-wrapper as-overlay-wrapper"
              onClick={() => openModal(maxSmallImages + 1)}
            >
              <img src={images[maxSmallImages + 1]} alt="More images" />
              <div className="as-overlay">+{remainingCount} more</div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="as-modal-overlay" onClick={closeModal}>
          <div className="as-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="as-close-btn" onClick={closeModal}>
              &times;
            </button>
            <button className="as-prev-btn" onClick={prevImage}>
              &#10094;
            </button>
            <img src={images[currentIndex]} alt="Zoomed" />
            <button className="as-next-btn" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// --- Main Component ---
export default function AnimalShelter() {
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
    <div className="as-container">
      <h1 className="as-page-heading">{/*Volunteer Opportunities at Mahabaleshwar*/}</h1>

      <div className="as-breadcrumb">
        <a href="#">Opportunity</a> / <a href="#">Panchganga Ghar</a> / Mahabaleshwar
      </div>
      <h1>{details.title}</h1>
      <span className="as-location">{details.locationName}</span>

      <ImageGallery images={galleryImages} />

      <div className="as-main-content">
        <div className="as-left-column">
          <section className="as-experience-section">
            <h2>{details.header}</h2>
            <p>{details.intro}</p>
            <div className="as-tasks">
              {details.tasks.map((task, idx) => (
                <Badge key={idx} icon="check-circle">{task}</Badge>
              ))}
            </div>
            <h3>What You Get:</h3>
            <div className="as-offers">
              {details.offer.map((item, idx) => (
                <div className="as-offer-item" key={idx}>
                  <i className="bi bi-star-fill"></i> {item}
                </div>
              ))}
            </div>
          </section>

          <section className="as-experience-section as-light-bg">
            <h2>Commitment & Skills</h2>
            <div className="as-workload">
              <Badge icon="clock-history">{work.hoursPerWeek}</Badge>
              {work.roles.map((role, idx) => (
                <Badge key={idx} icon="code-slash">{role}</Badge>
              ))}
              <Badge icon="calendar-check">{work.daysOffPerWeek} off per week</Badge>
            </div>
            <div className="as-qualities">
              {work.qualities.map((q, idx) => <Badge key={idx}>{q}</Badge>)}
            </div>
          </section>

          <section className="as-experience-section">
            <h2>Inclusions & Location</h2>
            <div className="as-inclusions">
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

        <div className="as-right-column">
          <div className="as-host-card">
            <h2>Meet Your Host</h2>
            <img src={host.hostImageUrl} alt={host.name} />
            <h3>{host.name}</h3>
            {host.verified && <span className="as-verified">Verified Host</span>}
            <p>{host.description}</p>
          </div>

          <div className="as-quick-peek-card">
            <h2>Quick Peek</h2>
            <QuickPeekItem icon="house-door" text={quickPeek.type} />
            <QuickPeekItem icon="people" text={quickPeek.volunteersRequired} />
            <QuickPeekItem icon="globe" text={quickPeek.volunteerType} />
          </div>
        </div>
      </div>

      <div className="as-sticky-footer mt-4">
        <p>
          <span>{requirements.minimumStay}</span> Min. Stay | <span>{requirements.totalVolunteersNeeded}</span> Volunteers Needed
        </p>
        <button className="as-apply-btn" onClick={handleApplyClick}>
          <i className="bi bi-send me-2"></i> APPLY NOW
        </button>
      </div>

      {showLoginPrompt && (
        <div className="as-login-overlay">
          <div className="as-login-content advanced">
            <button className="as-close-btn" onClick={() => setShowLoginPrompt(false)}>&times;</button>
            <h3>Almost There!</h3>
            <p>We noticed you're not logged in yet. Please login as a volunteer to apply for this opportunity.</p>
            <Link to="/login" className="as-login-btn">Login as Volunteer</Link>
          </div>
        </div>
      )}
    </div>
  );
}
