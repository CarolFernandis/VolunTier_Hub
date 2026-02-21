import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PlantTrees.css";

// --- Gallery Images ---
const galleryImages = [
  "https://i.pinimg.com/1200x/bd/11/2f/bd112f1cf58d3a9b69d753825b59322e.jpg",
  "https://i.pinimg.com/1200x/75/61/76/756176f084852845710b7d093d45abe4.jpg",
  "https://i.pinimg.com/1200x/b4/9b/06/b49b064a6419629b825cf499553a67a4.jpg",
  "https://i.pinimg.com/1200x/c6/0d/94/c60d94adbd71de1f93b69992d4c3fff3.jpg",
  "https://i.pinimg.com/736x/e0/45/73/e0457372e3a945685feb72a17b9f0792.jpg",
  "https://i.pinimg.com/736x/01/cb/59/01cb594e81b8f206112381272dece68b.jpg",
  "https://i.pinimg.com/736x/2f/1b/09/2f1b093f3af921bc3c41e8003017f76d.jpg",
  "https://i.pinimg.com/1200x/ab/31/b3/ab31b372a3acde6db55c7195d1aa1b89.jpg",
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
    locationName: "Hostel in Gujarat",
    title: "Volunteer in Tree Plantation",
    header: "About This Experience",
    intro:
      "As temperatures rise and the land cries out for shelter from the sun, can we afford to stand by and simply watch the changing climate when the solution—a tiny sapling and a few moments of our labor—is literally in our hands? Join us; let's weave a life-giving canopy of green across the farmlands and communities of Gujarat and Maharashtra for generations to come.",
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
  <span className="pt-badge">
    {icon && <i className={`bi bi-${icon} me-1`}></i>}
    {children}
  </span>
);

// --- Quick Peek Item ---
const QuickPeekItem = ({ icon, text }) => (
  <div className="pt-quick-item">
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
      <div className="pt-gallery-container">
        <div className="pt-main-image" onClick={() => openModal(0)}>
          <img src={images[0]} alt="Main view" />
        </div>
        <div className="pt-small-images">
          {smallImages.map((img, idx) => (
            <div className="pt-small-wrapper" key={idx} onClick={() => openModal(idx + 1)}>
              <img src={img} alt={`Detail ${idx + 1}`} />
            </div>
          ))}
          {remainingCount > 0 && (
            <div
              className="pt-small-wrapper pt-overlay-wrapper"
              onClick={() => openModal(maxSmallImages + 1)}
            >
              <img src={images[maxSmallImages + 1]} alt="More images" />
              <div className="pt-overlay">+{remainingCount} more</div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="pt-modal-overlay" onClick={closeModal}>
          <div className="pt-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="pt-close-btn" onClick={closeModal}>&times;</button>
            <button className="pt-prev-btn" onClick={prevImage}>&#10094;</button>
            <img src={images[currentIndex]} alt="Zoomed" />
            <button className="pt-next-btn" onClick={nextImage}>&#10095;</button>
          </div>
        </div>
      )}
    </>
  );
};

// --- Main Component ---
export default function PlantTrees() {
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
    <div className="pt-container">
      <h1 className="pt-page-heading">{/*Volunteer Opportunities at Gujarat*/}</h1>

      <div className="pt-breadcrumb">
        <a href="#">Opportunity</a> / <a href="#">Gujarat</a> / Maharashtra
      </div>
      <h1>{details.title}</h1>
      <span className="pt-location">{details.locationName}</span>

      <ImageGallery images={galleryImages} />

      <div className="pt-main-content">
        <div className="pt-left-column">
          <section className="pt-experience-section">
            <h2>{details.header}</h2>
            <p>{details.intro}</p>
            <div className="pt-tasks">
              {details.tasks.map((task, idx) => (
                <Badge key={idx} icon="check-circle">{task}</Badge>
              ))}
            </div>
            <h3>What You Get:</h3>
            <div className="pt-offers">
              {details.offer.map((item, idx) => (
                <div className="pt-offer-item" key={idx}>
                  <i className="bi bi-star-fill"></i> {item}
                </div>
              ))}
            </div>
          </section>

          <section className="pt-experience-section pt-light-bg">
            <h2>Commitment & Skills</h2>
            <div className="pt-workload">
              <Badge icon="clock-history">{work.hoursPerWeek}</Badge>
              {work.roles.map((role, idx) => (
                <Badge key={idx} icon="code-slash">{role}</Badge>
              ))}
              <Badge icon="calendar-check">{work.daysOffPerWeek} off per week</Badge>
            </div>
            <div className="pt-qualities">
              {work.qualities.map((q, idx) => <Badge key={idx}>{q}</Badge>)}
            </div>
          </section>

          <section className="pt-experience-section">
            <h2>Inclusions & Location</h2>
            <div className="pt-inclusions">
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

        <div className="pt-right-column">
          <div className="pt-host-card">
            <h2>Meet Your Host</h2>
            <img src={host.hostImageUrl} alt={host.name} />
            <h3>{host.name}</h3>
            {host.verified && <span className="pt-verified">Verified Host</span>}
            <p>{host.description}</p>
          </div>

          <div className="pt-quick-peek-card">
            <h2>Quick Peek</h2>
            <QuickPeekItem icon="house-door" text={quickPeek.type} />
            <QuickPeekItem icon="people" text={quickPeek.volunteersRequired} />
            <QuickPeekItem icon="globe" text={quickPeek.volunteerType} />
          </div>
        </div>
      </div>

      <div className="pt-sticky-footer mt-4">
        <p>
          <span>{requirements.minimumStay}</span> Min. Stay | <span>{requirements.totalVolunteersNeeded}</span> Volunteers Needed
        </p>
        <button className="pt-apply-btn" onClick={handleApplyClick}>
          <i className="bi bi-send me-2"></i> APPLY NOW
        </button>
      </div>

      {showLoginPrompt && (
        <div className="pt-login-overlay">
          <div className="pt-login-content advanced">
            <button className="pt-close-btn" onClick={() => setShowLoginPrompt(false)}>&times;</button>
            <h3>Almost There!</h3>
            <p>We noticed you're not logged in yet. Please login as a volunteer to apply for this opportunity.</p>
            <Link to="/login" className="pt-login-btn">Login as Volunteer</Link>
          </div>
        </div>
      )}
    </div>
  );
}
