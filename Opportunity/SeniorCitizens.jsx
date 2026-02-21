import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SeniorCitizens.css";

// --- Gallery Images ---
const galleryImages = [
  "https://i.pinimg.com/736x/e0/9c/69/e09c6927ff8298ec400004bebf51bfc8.jpg",
  "https://i.pinimg.com/1200x/a2/9d/e1/a29de1c01bd1fa35823b2f0f98207b56.jpg",
  "https://i.pinimg.com/736x/60/ae/f9/60aef963843983de4086b5cf2639f5a8.jpg",
  "https://i.pinimg.com/736x/1f/f4/47/1ff447b91a440df044b535674b43a9c1.jpg",
  "https://i.pinimg.com/736x/64/31/2c/64312c9f6380036f95e24c7b93e1ad5a.jpg",
  "https://i.pinimg.com/736x/b3/63/a1/b363a1508774d42c17950679fe23eed8.jpg",
  "https://i.pinimg.com/1200x/6e/1c/54/6e1c54f0c51f653496cb39488d6a8235.jpg",
  "https://i.pinimg.com/1200x/3c/40/fb/3c40fbf47a401bfeeb376d4601ba4be3.jpg",
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
    locationName: "Hostel in Kalyan",
    title: "Volunteer in Senior Citizens",
    header: "About This Experience",
    intro:
      "In Kalyan, amidst the clamor of daily life in Mumbai, there are seniors who simply need a helping hand with tasks we take for granted; if lending your time means preserving the dignity and comfort of an elder in your community, is there any reason to delay offering the compassion that makes a house feel like a home? Join us in making their golden years truly shine.",
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
  <span className="sec-badge">
    {icon && <i className={`bi bi-${icon} me-1`}></i>}
    {children}
  </span>
);

// --- Quick Peek Item ---
const QuickPeekItem = ({ icon, text }) => (
  <div className="sec-quick-item">
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
      <div className="sec-gallery-container">
        <div className="sec-main-image" onClick={() => openModal(0)}>
          <img src={images[0]} alt="Main view" />
        </div>
        <div className="sec-small-images">
          {smallImages.map((img, idx) => (
            <div className="sec-small-wrapper" key={idx} onClick={() => openModal(idx + 1)}>
              <img src={img} alt={`Detail ${idx + 1}`} />
            </div>
          ))}
          {remainingCount > 0 && (
            <div
              className="sec-small-wrapper sec-overlay-wrapper"
              onClick={() => openModal(maxSmallImages + 1)}
            >
              <img src={images[maxSmallImages + 1]} alt="More images" />
              <div className="sec-overlay">+{remainingCount} more</div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="sec-modal-overlay" onClick={closeModal}>
          <div className="sec-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="sec-close-btn" onClick={closeModal}>&times;</button>
            <button className="sec-prev-btn" onClick={prevImage}>&#10094;</button>
            <img src={images[currentIndex]} alt="Zoomed" />
            <button className="sec-next-btn" onClick={nextImage}>&#10095;</button>
          </div>
        </div>
      )}
    </>
  );
};

// --- Main Component ---
export default function SeniorCitizens() {
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
    <div className="sec-container">
      <h1 className="sec-page-heading">{/*Volunteer Opportunities at Kalyan*/}</h1>

      <div className="sec-breadcrumb">
        <a href="#">Opportunity</a> / <a href="#">Mumbai</a> / Kalyan
      </div>
      <h1>{details.title}</h1>
      <span className="sec-location">{details.locationName}</span>

      <ImageGallery images={galleryImages} />

      <div className="sec-main-content">
        <div className="sec-left-column">
          <section className="sec-experience-section">
            <h2>{details.header}</h2>
            <p>{details.intro}</p>
            <div className="sec-tasks">
              {details.tasks.map((task, idx) => (
                <Badge key={idx} icon="check-circle">{task}</Badge>
              ))}
            </div>
            <h3>What You Get:</h3>
            <div className="sec-offers">
              {details.offer.map((item, idx) => (
                <div className="sec-offer-item" key={idx}>
                  <i className="bi bi-star-fill"></i> {item}
                </div>
              ))}
            </div>
          </section>

          <section className="sec-experience-section sec-light-bg">
            <h2>Commitment & Skills</h2>
            <div className="sec-workload">
              <Badge icon="clock-history">{work.hoursPerWeek}</Badge>
              {work.roles.map((role, idx) => (
                <Badge key={idx} icon="code-slash">{role}</Badge>
              ))}
              <Badge icon="calendar-check">{work.daysOffPerWeek} off per week</Badge>
            </div>
            <div className="sec-qualities">
              {work.qualities.map((q, idx) => <Badge key={idx}>{q}</Badge>)}
            </div>
          </section>

          <section className="sec-experience-section">
            <h2>Inclusions & Location</h2>
            <div className="sec-inclusions">
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

        <div className="sec-right-column">
          <div className="sec-host-card">
            <h2>Meet Your Host</h2>
            <img src={host.hostImageUrl} alt={host.name} />
            <h3>{host.name}</h3>
            {host.verified && <span className="sec-verified">Verified Host</span>}
            <p>{host.description}</p>
          </div>

          <div className="sec-quick-peek-card">
            <h2>Quick Peek</h2>
            <QuickPeekItem icon="house-door" text={quickPeek.type} />
            <QuickPeekItem icon="people" text={quickPeek.volunteersRequired} />
            <QuickPeekItem icon="globe" text={quickPeek.volunteerType} />
          </div>
        </div>
      </div>

      <div className="sec-sticky-footer mt-4">
        <p>
          <span>{requirements.minimumStay}</span> Min. Stay | <span>{requirements.totalVolunteersNeeded}</span> Volunteers Needed
        </p>
        <button className="sec-apply-btn" onClick={handleApplyClick}>
          <i className="bi bi-send me-2"></i> APPLY NOW
        </button>
      </div>

      {showLoginPrompt && (
        <div className="sec-login-overlay">
          <div className="sec-login-content advanced">
            <button className="sec-close-btn" onClick={() => setShowLoginPrompt(false)}>&times;</button>
            <h3>Almost There!</h3>
            <p>We noticed you're not logged in yet. Please login as a volunteer to apply for this opportunity.</p>
            <Link to="/login" className="sec-login-btn">Login as Volunteer</Link>
          </div>
        </div>
      )}
    </div>
  );
}
