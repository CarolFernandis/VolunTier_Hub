// Home Page
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Home.css";

//Section 1 - Slides
import slide1homepage from "../assets/slide1homepage.jpg";
import slide2homepage from "../assets/slide2homepage.jpg";
import slide3homepage from "../assets/slide3homepage.jpg";

// Section 2 - Cards
import card1homepage from "../assets/card1homepage.png";
import card2homepage from "../assets/card2homepage.png";
import card3homepage from "../assets/card3homepage.png";
import card4homepage from "../assets/card4homepage.png";

// Section 3- Cards
import hosthomepage from "../assets/hosthomepage.jpg";
import hosthomepage2 from "../assets/hosthomepage2.jpg";
import hosthomepage3 from "../assets/hosthomepage3.jpg";
import hosthomepage4 from "../assets/hosthomepage4.jpg";

//Section 5 - Faq Section 
import faqImage from "../assets/faqImage.jpg";


// If you prefer module import instead of using the global, uncomment this:
// import Carousel from "bootstrap/js/dist/carousel";

export default function Home() {
  const carouselRef = useRef(null);

  // FAQ toggle state
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



  useEffect(() => {
    // Use the global bootstrap from the bundle import
    const el = carouselRef.current;
    if (!el || !window.bootstrap) return;

    
    const carousel = new window.bootstrap.Carousel(el, {
  interval: 3000,
  ride: "carousel",
  pause: false,
  touch: true,
  wrap: true,   // important: keeps looping forever
});


    return () => carousel.dispose();
  }, []);


  // FAQ Data
  const faqData = [
   {
        question: "What is this platform and why is it needed?",
        answer:
          "It is a web-based system that connects volunteers with NGOs and non-profits to make volunteering more accessible and impactful.",
      },
      {
        question: "Who can volunteer with VolunTier Hub?",
        answer:
          "Anyone passionate about making a difference – students, professionals, retirees, or groups – can volunteer.",
      },
      {
        question: "When should I apply?",
        answer:
          "You can apply anytime, but applying earlier ensures better placement and preparation.",
      },
      {
        question: "What benefits does it provide to volunteers?",
        answer:
          "Volunteers can explore opportunities that match their skills, register easily, get updates, and track their contributions.",
      },
      {
        question: "What features does the platform provide?",
        answer:
          "Advanced search, project registration, communication tools, role-based dashboards, and secure login.",
      },
      {
        question: "Do I need prior experience?",
        answer:
          "Not always, many opportunities only require willingness to help.",
      },
  ];

  return (
    <div>
      

  {/* Fullscreen Carousel */}
  <div
  ref={carouselRef}   // attach the ref here
  id="heroCarousel"
  className="carousel slide carousel-fade"
  data-bs-ride="carousel"  //data-bs-ride="carousel" → tells Bootstrap to auto start fade.
  data-bs-interval="3000" //data-bs-interval="3000" → sets interval between slides (3000 ms = 3 sec).
>
  <div className="carousel-inner">

    {/* Slide 1 */}
    <div className="carousel-item active">
      <img src={slide1homepage} className="d-block w-100 hero-img" alt="Slide 1" />
      <div className="carousel-caption d-flex flex-column align-items-start">
        <h1>Make a Difference</h1>
        <p>Join hands to volunteer and create impact together.</p>
        <Link to="/opportunity">
          <button className="btn btn-outline-primary">Explore Opportunities</button>
        </Link>
      </div>
    </div>

    {/* Slide 2 */}
    <div className="carousel-item">
      <img src={slide2homepage} className="d-block w-100 hero-img" alt="Slide 2" />
      <div className="carousel-caption d-flex flex-column align-items-start">
        <h1>Connect & Inspire</h1>
        <p>Work with NGOs and support meaningful causes.</p>
        <Link to="/about">
          <button className="btn btn-outline-primary">Learn More</button>
        </Link>
      </div>
    </div>

    {/* Slide 3 */}
    <div className="carousel-item">
      <img src={slide3homepage} className="d-block w-100 hero-img" alt="Slide 3" />
      <div className="carousel-caption d-flex flex-column align-items-start">
        <h1>Be the Change</h1>
        <p>Volunteer, share skills, and transform communities.</p>
        <Link to="/register">
          <button className="btn btn-outline-primary">Get Started</button>
        </Link>
      </div>
    </div>
  </div>

  {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


{/* Who We Are Section */}
     <section className="who-we-are py-5">
  <div className="container">
    <div className="row align-items-center">
      {/* Left side: Image */}
      <div className="col-md-6 image-oval">
        <img
          src={slide2homepage}
          alt="Who We Are"
          className="img-fluid shadow"
        />
      </div>

      {/* Right side: Text */}
      <div className="col-md-6">
        <h2 className="mb-4 text-center">Who We Are</h2>
        <p>
          We are a community-driven platform dedicated to connecting
          volunteers with NGOs and non-profits. Our mission is to inspire
          individuals to contribute their skills, time, and passion towards
          building a better world.
        </p>
        <p>
          Whether you're a student, professional, or retiree, we provide
          opportunities to make an impact and grow through volunteering.
        </p>
        <Link to="/about">
          <button className="btn btn-primary mt-3">Learn More</button>
        </Link>
      </div>
    </div>
  </div>
</section>


      {/* Mission Section 2*/}
<section className="mission-section py-5" style={{ background: "#efefefff" }}>
  <div className="container">
     <h2 className="fw-bold text-center">What Defines Us</h2>
            <p
              className="text-muted"
              style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 2rem" }}
            >
             "Connecting passion with purpose — making volunteering simple, meaningful, and impactful."
            </p>
    <div className="row text-center">
      <div className="col-lg-3 mb-4">
        <div className="mission-card p-4 h-100">
          <img src={card1homepage} alt="Mission" className="mission-icon mb-3" />
          <h3>Our Mission</h3>
          <p>
            We connect volunteers with NGOs and non-profits to create meaningful social impact and stronger communities.
          </p>
        </div>
      </div>

      <div className="col-lg-3 mb-4">
        <div className="mission-card p-4 h-100">
          <img src={card2homepage} alt="What we do" className="mission-icon mb-3" />
          <h3>What We Do</h3>
          <p>
            We provide a simple platform to discover opportunities, register for projects, and communicate effectively.
          </p>
        </div>
      </div>

      <div className="col-lg-3 mb-4">
        <div className="mission-card p-4 h-100">
          <img src={card3homepage} alt="Matters" className="mission-icon mb-3" />
          <h3>Why It Matters</h3>
          <p>
            We make volunteering more accessible, ensuring that every individual’s skills and passion reach the right caus
          </p>
        </div>
      </div>

      <div className="col-lg-3 mb-4">
        <div className="mission-card p-4 h-100">
          <img src={card4homepage} alt="Vision" className="mission-icon mb-3" />
          <h3>Our Vision</h3>
          <p>
            To build a culture of giving where everyone contributes to positive change and civic responsibility.
          </p>
        </div>
      </div>
       <Link to="/register">
          <button className="btn btn-primary mt-3">Join us</button>
        </Link>
    </div>
  </div>
</section>

{/* How It Works Section */}
<section className="how-it-works-alt py-5">
  <div className="container">
    <div className="text-center mb-5">
      <h6 className="fw-bold ">How it works</h6>
      <h2 className="fw-bold">
        Start your volunteering journey in{" "}
        <span className="text-primary">3 easy steps</span>
      </h2>
    </div>

    <div className="steps-wrapper">
      {/* Step 1 */}
      <div className="step-item d-flex align-items-center">
        <div className="step-number">1</div>
        <div className="step-content">
          <h5 className="fw-bold">Create Your Profile</h5>
          <p className="text-muted">
            Share your skills, interests, and passions. This helps us connect you with the right projects.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="step-item d-flex align-items-center">
        <div className="step-number">2</div>
        <div className="step-content">
          <h5 className="fw-bold">Find Opportunities</h5>
          <p className="text-muted">
            Search for volunteer opportunities that match your skills, interests, and location.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="step-item d-flex align-items-center">
        <div className="step-number">3</div>
        <div className="step-content">
          <h5 className="fw-bold">Start Volunteering</h5>
          <p className="text-muted">
           Join the opportunity, contribute your time, and make a real difference.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Popular Hosts Section */}
<section className="popular-hosts py-5" style={{ background: "#f0eeeeff" }}>
  <div className="container">
    <h2 className="text-center mb-4 fw-bold">Connect with Popular Hosts</h2>
    <p className="text-center mb-5">
      Explore some of the most trusted NGOs and non-profits actively engaging volunteers.
    </p>
    <div className="row text-center">
      {/* Host 1 */}
      <div className="col-md-3 mb-4">
        <div className="card h-100 shadow-sm border-0">
          <img src={hosthomepage} alt="Host 1" className="host-img" />
          <div className="card-body text-center">
            <h5 className="card-title">Helping Hands NGO</h5>
            <p className="card-text">Focused on education and child welfare.</p>
          </div>
        </div>
      </div>

      {/* Host 2 */}
      <div className="col-md-3 mb-4">
        <div className="card h-100 shadow-sm border-0">
          <img src={hosthomepage2} alt="Host 2" className="host-img" />
          <div className="card-body text-center">
            <h5 className="card-title">Green Earth Foundation</h5>
            <p className="card-text">Promoting environmental awareness.</p>
          </div>
        </div>
      </div>

      {/* Host 3 */}
      <div className="col-md-3 mb-4">
        <div className="card h-100 shadow-sm border-0">
          <img src={hosthomepage3} alt="Host 3" className="host-img" />
          <div className="card-body text-center">
            <h5 className="card-title">Health First Org</h5>
            <p className="card-text">Providing healthcare to underprivileged communities.</p>
          </div>
        </div>
      </div>

      {/* Host 4 */}
      <div className="col-md-3 mb-4">
        <div className="card h-100 shadow-sm border-0">
          <img src={hosthomepage4} alt="Host 4" className="host-img" />
          <div className="card-body text-center">
            <h5 className="card-title">Food For All</h5>
            <p className="card-text">Working towards hunger eradication.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 

{/* Testimonials / Impact Stories Section */}
<section className="testimonials py-5">
  <div className="container">
    <h2 className="text-center mb-4 fw-bold">What Volunteers Say</h2>
    <p className="text-center mb-5 text-muted">
      Hear inspiring stories from our volunteers who have created impact through Volunteer Yatra.
    </p>

    <div className="row">
      {/* Testimonial 1 */}
      <div className="col-md-4 mb-4">
        <div className="testimonial-card p-4 h-100 shadow-sm">
          <div className="d-flex align-items-center mb-3">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Volunteer"
              className="rounded-circle me-3"
              width="50"
              height="50"
            />
            <div>
              <h6 className="mb-0 fw-bold">Aditi Sharma</h6>
              <small className="text-muted">Student Volunteer</small>
            </div>
          </div>
          <p className="text-muted">
            "Volunteering gave me purpose and helped me grow as a person. I loved connecting with NGOs and learning from real experiences."
          </p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="col-md-4 mb-4">
        <div className="testimonial-card p-4 h-100 shadow-sm">
          <div className="d-flex align-items-center mb-3">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Volunteer"
              className="rounded-circle me-3"
              width="50"
              height="50"
            />
            <div>
              <h6 className="mb-0 fw-bold">Rohit Verma</h6>
              <small className="text-muted">Corporate Volunteer</small>
            </div>
          </div>
          <p className="text-muted">
            "It’s amazing how Voluntier_Hub simplifies finding opportunities. I’ve contributed to education projects and it feels rewarding."
          </p>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="col-md-4 mb-4">
        <div className="testimonial-card p-4 h-100 shadow-sm">
          <div className="d-flex align-items-center mb-3">
            <img
              src="https://randomuser.me/api/portraits/women/32.jpg"
              alt="Volunteer"
              className="rounded-circle me-3"
              width="50"
              height="50"
            />
            <div>
              <h6 className="mb-0 fw-bold">Sneha Iyer</h6>
              <small className="text-muted">Travel Volunteer</small>
            </div>
          </div>
          <p className="text-muted">
            "I traveled solo and always felt safe. The hosts were supportive, and I made lifelong friends while giving back to society."
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

 {/* FAQ section */}
  <section className="faq-wrapper py-5 " style={{ background: "#f3f3f3ff" }}>
        <div className="container">
        <div className="row align-items-start" style={{ columnGap: "50px" }}>
            {/* Left Card and image */}
<div className="col-lg-4 d-flex flex-column align-items-center">
      {/* Left side: Image */}
     <div className="faq-part  mb-4">
        <img
          src={faqImage}
          alt="FAQ Illustration"
          className="img-fluid rounded"
        />
      </div>
              <div className="faq-card p-4">
                <div className="faq-avatars mb-3">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User 1" />
                  <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="User 2" />
                  <img src="https://randomuser.me/api/portraits/women/28.jpg" alt="User 3" />
                  <img src="https://randomuser.me/api/portraits/men/52.jpg" alt="User 4" />
                  <img src="https://randomuser.me/api/portraits/women/11.jpg" alt="User 5" />
                </div>
                
                <p className="text-muted">
                  We would be happy to help you with whatever questions you have.
                </p>
                <Link to="/faq">
          <button className="btn btn-primary mt-3">Learn more</button>
        </Link>
              </div>
            </div>

            {/* Right Accordion */}
            <div className="col-lg-7">
              <h2 className="fw-bold mb-4 text-center">Frequently Asked Questions</h2>
              <div className="faq-list">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className={`faq-item py-3 border-bottom ${
                      openIndex === index ? "open" : ""
                    }`}
                    onClick={() => toggleFAQ(index)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0 fw-bold">{faq.question}</h6>
                      <span className="fs-4">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </div>
                    {openIndex === index && (
                      <p className="mt-2 text-muted">{faq.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    

    </div>
  );
}
