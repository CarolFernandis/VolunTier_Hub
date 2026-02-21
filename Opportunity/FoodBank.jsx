import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import "./FoodBank.css";

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
    name: "Sahil",
    verified: true,
    description:
      "Offering a garden and mountain view, our stay is located in Nagar, 25 km from Hidimba Devi Temple and 22 km from Tibetan Monastery.",
    hostImageUrl:
      "https://i.pinimg.com/736x/d2/95/e9/d295e952fda41fa6524ff2ccc33e17b6.jpg",
  },
  details: {
    locationName: "Hostel in Kagal",
    title: "Volunteer in Food Distribution",
    header: "About This Experience",
    intro:
      "When children in Kolhapur go to bed with empty stomachs, is it right for us to live with the comfort of our full pantry, knowing we have the power to share? If a single morning of your effort can turn a day of hunger into a day of hope, can your heart truly afford to stay away?",
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
  <span className="fb-badge">
    {icon && <i className={`bi bi-${icon} me-1`}></i>}
    {children}
  </span>
);

// --- Quick Peek Item ---
const QuickPeekItem = ({ icon, text }) => (
  <div className="fb-quick-item">
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
      <div className="fb-gallery-container">
        <div className="fb-main-image" onClick={() => openModal(0)}>
          <img src={images[0]} alt="Main view" />
        </div>
        <div className="fb-small-images">
          {smallImages.map((img, idx) => (
            <div className="fb-small-wrapper" key={idx} onClick={() => openModal(idx + 1)}>
              <img src={img} alt={`Detail ${idx + 1}`} />
            </div>
          ))}
          {remainingCount > 0 && (
            <div
              className="fb-small-wrapper fb-overlay-wrapper"
              onClick={() => openModal(maxSmallImages + 1)}
            >
              <img src={images[maxSmallImages + 1]} alt="More images" />
              <div className="fb-overlay">+{remainingCount} more</div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fb-modal-overlay" onClick={closeModal}>
          <div className="fb-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="fb-close-btn" onClick={closeModal}>&times;</button>
            <button className="fb-prev-btn" onClick={prevImage}>&#10094;</button>
            <img src={images[currentIndex]} alt="Zoomed" />
            <button className="fb-next-btn" onClick={nextImage}>&#10095;</button>
          </div>
        </div>
      )}
    </>
  );
};

// --- Main Component ---
export default function FoodBank() {
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
    <div className="fb-container">
      <h1 className="fb-page-heading">{/*Volunteer Opportunities at Kolhapur*/}</h1>

      <div className="fb-breadcrumb">
        <a href="#">Opportunity</a> / <a href="#">Kagal</a> / Kolhapur
      </div>
      <h1>{details.title}</h1>
      <span className="fb-location">{details.locationName}</span>

      <ImageGallery images={galleryImages} />

      <div className="fb-main-content">
        <div className="fb-left-column">
          {/* Experience Section */}
          <section className="fb-experience-section">
            <h2>{details.header}</h2>
            <p>{details.intro}</p>
            <div className="fb-tasks">
              {details.tasks.map((task, idx) => (
                <Badge key={idx} icon="check-circle">{task}</Badge>
              ))}
            </div>
            <h3>What You Get:</h3>
            <div className="fb-offers">
              {details.offer.map((item, idx) => (
                <div className="fb-offer-item" key={idx}>
                  <i className="bi bi-star-fill"></i> {item}
                </div>
              ))}
            </div>
          </section>

          {/* Commitment Section */}
          <section className="fb-experience-section fb-light-bg">
            <h2>Commitment & Skills</h2>
            <div className="fb-workload">
              <Badge icon="clock-history">{work.hoursPerWeek}</Badge>
              {work.roles.map((role, idx) => (
                <Badge key={idx} icon="code-slash">{role}</Badge>
              ))}
              <Badge icon="calendar-check">{work.daysOffPerWeek} off per week</Badge>
            </div>
            <div className="fb-qualities">
              {work.qualities.map((q, idx) => <Badge key={idx}>{q}</Badge>)}
            </div>
          </section>

          {/* Inclusions Section */}
          <section className="fb-experience-section">
            <h2>Inclusions & Location</h2>
            <div className="fb-inclusions">
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

        <div className="fb-right-column">
          {/* Host Card */}
          <div className="fb-host-card">
            <h2>Meet Your Host</h2>
            <img src={host.hostImageUrl} alt={host.name} />
            <h3>{host.name}</h3>
            {host.verified && <span className="fb-verified">Verified Host</span>}
            <p>{host.description}</p>
          </div>

          {/* Quick Peek */}
          <div className="fb-quick-peek-card">
            <h2>Quick Peek</h2>
            <QuickPeekItem icon="house-door" text={quickPeek.type} />
            <QuickPeekItem icon="people" text={quickPeek.volunteersRequired} />
            <QuickPeekItem icon="globe" text={quickPeek.volunteerType} />
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="fb-sticky-footer mt-4">
        <p>
          <span>{requirements.minimumStay}</span> Min. Stay | <span>{requirements.totalVolunteersNeeded}</span> Volunteers Needed
        </p>
        <button className="fb-apply-btn" onClick={handleApplyClick}>
          <i className="bi bi-send me-2"></i> APPLY NOW
        </button>
      </div>

      {/* Login Modal */}
      {showLoginPrompt && (
        <div className="fb-login-overlay">
          <div className="fb-login-content advanced">
            <button className="fb-close-btn" onClick={() => setShowLoginPrompt(false)}>&times;</button>
            <h3>Almost There!</h3>
            <p>We noticed you're not logged in yet. Please login as a volunteer to apply for this opportunity.</p>
            <Link to="/login" className="fb-login-btn">Login as Volunteer</Link>
          </div>
        </div>
      )}
    </div>
  );
}
