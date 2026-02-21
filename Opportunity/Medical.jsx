import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Medical.css";

// --- Gallery Images ---
const galleryImages = [
 "https://i.pinimg.com/1200x/ca/fa/d7/cafad7a2ded9d89e0cbc12589d6be735.jpg",
  "https://i.pinimg.com/1200x/f9/2f/4a/f92f4a9537920c4eb61e5af7e7241c66.jpg",
  "https://i.pinimg.com/736x/df/18/85/df1885df797ba9850e26ab9e0cc3a959.jpg",
  "https://i.pinimg.com/1200x/53/86/ff/5386ff34e96b40b9c391118851f69f58.jpg",
  "https://i.pinimg.com/1200x/1c/13/b3/1c13b39250cf0e95539de7a757c31b4e.jpg",
  "https://i.pinimg.com/736x/31/80/ee/3180ee4c70fca08273e8b30c9c450159.jpg",
  "https://i.pinimg.com/736x/ef/83/06/ef8306b1c6c9fbd08897d5438deceee6.jpg",
  "https://i.pinimg.com/1200x/3a/90/d3/3a90d30559941683cc55b5e2e3001077.jpg",
];

// --- Experience Data ---
const experienceData = {
  host: {
    name: "Vishal",
    verified: true,
    description:
      "Offering a beautiful garden and sweeping mountain views, our stay is located in Nagpur, a scenic 25 km drive from the bustling Sitabuldi Main Market and just 22 km from the tranquil waters of Futala Lake.",
    hostImageUrl:
      "https://i.pinimg.com/1200x/6a/d1/57/6ad157c8278e090a7151341adc8eaaa6.jpg",
  },
  details: {
    locationName: "Hostel in Butibori r",
    title: "Volunteer in Medical Check-Up",
    header: "About This Experience",
    intro:
      "When health is a luxury few can afford in the villages surrounding Nagpur, and a simple check-up could change a child's future or save a grandparent's life, who will step forward and bring the doctor to their door? If your skills and compassion can bridge the distance between a simple illness and a preventable tragedy, can you truly look away from the call to heal?",
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
  <span className="med-badge">
    {icon && <i className={`bi bi-${icon} me-1`}></i>}
    {children}
  </span>
);

// --- Quick Peek Item ---
const QuickPeekItem = ({ icon, text }) => (
  <div className="med-quick-item">
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
      <div className="med-gallery-container">
        <div className="med-main-image" onClick={() => openModal(0)}>
          <img src={images[0]} alt="Main view" />
        </div>
        <div className="med-small-images">
          {smallImages.map((img, idx) => (
            <div className="med-small-wrapper" key={idx} onClick={() => openModal(idx + 1)}>
              <img src={img} alt={`Detail ${idx + 1}`} />
            </div>
          ))}
          {remainingCount > 0 && (
            <div
              className="med-small-wrapper med-overlay-wrapper"
              onClick={() => openModal(maxSmallImages + 1)}
            >
              <img src={images[maxSmallImages + 1]} alt="More images" />
              <div className="med-overlay">+{remainingCount} more</div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="med-modal-overlay" onClick={closeModal}>
          <div className="med-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="med-close-btn" onClick={closeModal}>&times;</button>
            <button className="med-prev-btn" onClick={prevImage}>&#10094;</button>
            <img src={images[currentIndex]} alt="Zoomed" />
            <button className="med-next-btn" onClick={nextImage}>&#10095;</button>
          </div>
        </div>
      )}
    </>
  );
};

// --- Main Component ---
export default function Medical() {
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
    <div className="med-container">
      <h1 className="med-page-heading">{/*Volunteer Opportunities at Nagpur*/}</h1>

      <div className="med-breadcrumb">
        <a href="#">Opportunity</a> / <a href="#">Butibori </a> / Nagpur
      </div>
      <h1>{details.title}</h1>
      <span className="med-location">{details.locationName}</span>

      <ImageGallery images={galleryImages} />

      <div className="med-main-content">
        <div className="med-left-column">
          <section className="med-experience-section">
            <h2>{details.header}</h2>
            <p>{details.intro}</p>
            <div className="med-tasks">
              {details.tasks.map((task, idx) => (
                <Badge key={idx} icon="check-circle">{task}</Badge>
              ))}
            </div>
            <h3>What You Get:</h3>
            <div className="med-offers">
              {details.offer.map((item, idx) => (
                <div className="med-offer-item" key={idx}>
                  <i className="bi bi-star-fill"></i> {item}
                </div>
              ))}
            </div>
          </section>

          <section className="med-experience-section med-light-bg">
            <h2>Commitment & Skills</h2>
            <div className="med-workload">
              <Badge icon="clock-history">{work.hoursPerWeek}</Badge>
              {work.roles.map((role, idx) => (
                <Badge key={idx} icon="code-slash">{role}</Badge>
              ))}
              <Badge icon="calendar-check">{work.daysOffPerWeek} off per week</Badge>
            </div>
            <div className="med-qualities">
              {work.qualities.map((q, idx) => <Badge key={idx}>{q}</Badge>)}
            </div>
          </section>

          <section className="med-experience-section">
            <h2>Inclusions & Location</h2>
            <div className="med-inclusions">
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

        <div className="med-right-column">
          <div className="med-host-card">
            <h2>Meet Your Host</h2>
            <img src={host.hostImageUrl} alt={host.name} />
            <h3>{host.name}</h3>
            {host.verified && <span className="med-verified">Verified Host</span>}
            <p>{host.description}</p>
          </div>

          <div className="med-quick-peek-card">
            <h2>Quick Peek</h2>
            <QuickPeekItem icon="house-door" text={quickPeek.type} />
            <QuickPeekItem icon="people" text={quickPeek.volunteersRequired} />
            <QuickPeekItem icon="globe" text={quickPeek.volunteerType} />
          </div>
        </div>
      </div>

      <div className="med-sticky-footer mt-4">
        <p>
          <span>{requirements.minimumStay}</span> Min. Stay | <span>{requirements.totalVolunteersNeeded}</span> Volunteers Needed
        </p>
        <button className="med-apply-btn" onClick={handleApplyClick}>
          <i className="bi bi-send me-2"></i> APPLY NOW
        </button>
      </div>

      {showLoginPrompt && (
        <div className="med-login-overlay">
          <div className="med-login-content advanced">
            <button className="med-close-btn" onClick={() => setShowLoginPrompt(false)}>&times;</button>
            <h3>Almost There!</h3>
            <p>We noticed you're not logged in yet. Please login as a volunteer to apply for this opportunity.</p>
            <Link to="/login" className="med-login-btn">Login as Volunteer</Link>
          </div>
        </div>
      )}
    </div>
  );
}
