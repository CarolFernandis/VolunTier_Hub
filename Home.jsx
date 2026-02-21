// Home Page
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Home.css";

//Section 1 - Slides
import slide1homepage from "../assets/slide1homepage.jpeg";
import slide2homepage from "../assets/slide2homepage.jpeg";
import slide3homepage from "../assets/slide3homepage.jpeg";

//Section 2 Image
import whoweare from "../assets/whoweare.jpeg";

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
import faqImage from "../assets/faqImage.jpeg";

// section 6 - videos
import video1 from "../assets/volunteer1.mp4";
import video2 from "../assets/volunteer2.mp4";
import video3 from "../assets/volunteer3.mp4";
import video4 from "../assets/volunteer4.mp4";
import video5 from "../assets/volunteer5.mp4";
import video6 from "../assets/volunteer6.mp4";




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
          "You can apply anytime, but applying earlier ensures better placement and preparations.",
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
         <button className="btn btn-violet">Explore Opportunities</button>
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
          <button className="btn btn-violet1">Learn More</button>
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
          <button className="btn btn-violet2">Get Started</button>
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
<section className="who-we-are-modern py-5">
  <div className="container">
    <div className="row align-items-center g-5">
      
      {/* Left side: Image */}
      <div className="col-md-6 text-center">
        <div className="who-image-wrapper">
          <img
            src={whoweare}
            alt="Who We Are"
            className="img-fluid who-image"
          />
        </div>
      </div>

      {/* Right side: Text */}
      <div className="col-md-6">
        <h6 className="text-uppercase fw-bold text-secondary mb-2">
          About Us
        </h6>
        <h2 className="fw-bold mb-4">
          Who <span>We Are</span>
        </h2>

        <p className="text-muted">
          We are a community-driven platform dedicated to connecting volunteers with NGOs and non-profits. 
          Our mission is to inspire individuals to contribute their skills, time, and passion toward building a better world.
        </p>

        <p className="text-muted">
          Whether you're a student, professional, or retiree, we provide meaningful opportunities to make an impact and grow through volunteering.
        </p>

        <Link to="/about">
          <button className="btn btn-violet3 px-4 py-2 mt-3">
            Learn More About Us
          </button>
        </Link>
      </div>
    </div>
  </div>
</section>


{/* Mission Section 2*/}
<section className="mission-section py-5" style={{ background: "#f6f7fb" }}>
  <div className="container">

    <div className="text-center mb-5">
      <h2 className="fw-bold">What Defines Us</h2>
      <p
        className="text-muted mx-auto"
        style={{ maxWidth: 760 }}
      >
        Connecting passion with purpose — making volunteering simple, meaningful, and impactful.
      </p>
    </div>

    <div className="row g-4">

      <div className="col-lg-3 col-md-6">
        <div className="mission-card2 h-100 text-center p-4">
          <img src={card1homepage} alt="Mission" className="mission-icon mb-3" />
          <h5 className="fw-bold">Our Mission</h5>
          <p className="text-muted">
            We connect volunteers with NGOs and non-profits to create meaningful social impact and stronger communities.
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="mission-card2 h-100 text-center p-4">
          <img src={card2homepage} alt="What we do" className="mission-icon mb-3" />
          <h5 className="fw-bold">What We Do</h5>
          <p className="text-muted">
            We provide a simple platform to discover opportunities, register for projects, and collaborate easily.
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="mission-card2 h-100 text-center p-4">
          <img src={card3homepage} alt="Why it matters" className="mission-icon mb-3" />
          <h5 className="fw-bold">Why It Matters</h5>
          <p className="text-muted">
            We make volunteering more accessible, ensuring every skill and passion reaches the right cause.
          </p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className="mission-card2 h-100 text-center p-4">
          <img src={card4homepage} alt="Vision" className="mission-icon mb-3" />
          <h5 className="fw-bold">Our Vision</h5>
          <p className="text-muted">
            To build a culture of giving where everyone contributes to positive change and civic responsibility.
          </p>
        </div>
      </div>

    </div>

    <div className="text-center mt-5">
      <Link to="/register">
        <button className="btn btn-violet4 px-4 py-2">Join Us</button>
      </Link>
    </div>

  </div>
</section>

{/* How It Works Section */}
<section className="how-it-works-modern py-5">
  <div className="container">
    <div className="text-center mb-5">
      <h6 className="fw-bold text-uppercase text-secondary">How it works</h6>
      <h2 className="fw-bold">
        Start your volunteering journey in{" "}
        <span>3 easy steps</span>
      </h2>
      <p className="text-muted mt-2">
        Simple, fast, and meaningful — get started in minutes.
      </p>
    </div>

    <div className="row g-4">
      {/* Step 1 */}
      <div className="col-md-4">
        <div className="how-card text-center h-100">
          <div className="step-circle">1</div>
          <h5 className="fw-bold mt-3">Create Your Profile</h5>
          <p className="text-muted">
            Share your skills, interests, and passions so we can match you with the right causes.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="col-md-4">
        <div className="how-card text-center h-100">
          <div className="step-circle">2</div>
          <h5 className="fw-bold mt-3">Find Opportunities</h5>
          <p className="text-muted">
            Browse and discover volunteer opportunities that fit your skills and location.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="col-md-4">
        <div className="how-card text-center h-100">
          <div className="step-circle">3</div>
          <h5 className="fw-bold mt-3">Start Volunteering</h5>
          <p className="text-muted">
            Join, contribute your time, and start making a real impact in your community.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Popular Hosts Section */}
<section className="popular-hosts-modern py-5">
  <div className="container">
    
    {/* Section Heading */}
    <div className="text-center mb-5">
      <h6 className="text-uppercase fw-bold text-secondary">Our Partners</h6>
      <h2 className="fw-bold">
        Connect with <span>Popular Hosts</span>
      </h2>
      <p className="text-muted mt-2">
        Explore some of the most trusted NGOs and non-profits actively engaging volunteers.
      </p>
    </div>

    <div className="row g-4">
      {/* Host Card 1 */}
      <div className="col-md-3">
        <div className="host-card-modern h-100">
          <div className="host-img-wrapper">
            <img src={hosthomepage} alt="Helping Hands NGO" />
          </div>
          <div className="host-card-body text-center">
            <h5>Helping Hands NGO</h5>
            <p>Focused on education and child welfare.</p>
          </div>
        </div>
      </div>

      {/* Host Card 2 */}
      <div className="col-md-3">
        <div className="host-card-modern h-100">
          <div className="host-img-wrapper">
            <img src={hosthomepage2} alt="Green Earth Foundation" />
          </div>
          <div className="host-card-body text-center">
            <h5>Green Earth Foundation</h5>
            <p>Promoting environmental awareness.</p>
          </div>
        </div>
      </div>

      {/* Host Card 3 */}
      <div className="col-md-3">
        <div className="host-card-modern h-100">
          <div className="host-img-wrapper">
            <img src={hosthomepage3} alt="Health First Org" />
          </div>
          <div className="host-card-body text-center">
            <h5>Health First Org</h5>
            <p>Providing healthcare to underprivileged communities.</p>
          </div>
        </div>
      </div>

      {/* Host Card 4 */}
      <div className="col-md-3">
        <div className="host-card-modern h-100">
          <div className="host-img-wrapper">
            <img src={hosthomepage4} alt="Food For All" />
          </div>
          <div className="host-card-body text-center">
            <h5>Food For All</h5>
            <p>Working towards hunger eradication.</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

{/* Testimonials / Impact Stories Section */}
<section className="testimonials-simple py-5">
  <div className="container">
    <h2 className="text-center mb-3 fw-bold">What Volunteers Say</h2>
    <p className="text-center mb-5 text-muted">
      Hear inspiring stories from our volunteers who have created impact through Volunteer Yatra.
    </p>

    <div className="row">
      {/* Testimonial 1 */}
      <div className="col-md-4 mb-4">
        <div className="testimonial-card-simple h-100">
          <div className="d-flex align-items-center mb-3">
            <img
              src="https://i.pinimg.com/736x/d2/ec/16/d2ec168d6401dd5924157bf978f6b642.jpg"
              alt="Volunteer"
              className="testimonial-avatar-simple me-3"
            />
            <div>
              <h6 className="mb-0 fw-bold">Aditi Sharma</h6>
              <small className="text-muted">Student Volunteer</small>
            </div>
          </div>
          <p>
            "Volunteering gave me purpose and helped me grow as a person. I loved connecting with NGOs and learning from real experiences."
          </p>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="col-md-4 mb-4">
        <div className="testimonial-card-simple h-100">
          <div className="d-flex align-items-center mb-3">
            <img
              src="https://i.pinimg.com/736x/ea/cb/1a/eacb1af18e6a8651d0c23ea7b0a0e706.jpg"
              alt="Volunteer"
              className="testimonial-avatar-simple me-3"
            />
            <div>
              <h6 className="mb-0 fw-bold">Rohit Verma</h6>
              <small className="text-muted">Corporate Volunteer</small>
            </div>
          </div>
          <p>
            "It’s amazing how VolunTier Hub simplifies finding opportunities. I’ve contributed to education projects and it feels rewarding."
          </p>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="col-md-4 mb-4">
        <div className="testimonial-card-simple h-100">
          <div className="d-flex align-items-center mb-3">
            <img
              src="https://i.pinimg.com/736x/75/21/80/7521800d33c7a457da34cda2436f8e1f.jpg"
              alt="Volunteer"
              className="testimonial-avatar-simple me-3"
            />
            <div>
              <h6 className="mb-0 fw-bold">Sneha Iyer</h6>
              <small className="text-muted">Travel Volunteer</small>
            </div>
          </div>
          <p>
            "I traveled solo and always felt safe. The hosts were supportive, and I made lifelong friends while giving back to society."
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* FAQ section */}
<section className="faq-section py-5" style={{background: "linear-gradient(180deg, #f8fafc, #eef2ff)"}}>
  <div className="container">
    <div className="row align-items-center">

      {/* Left Side - Small FAQ Card */}
      <div className="col-lg-4 col-md-5 mb-4 mb-md-0 d-flex justify-content-center">
        <div className="faq-violet-card">
          <div className="faq-avatars mb-3 d-flex">
            <img src="https://i.pinimg.com/1200x/2c/e0/c8/2ce0c8e9423351561f91c33645141120.jpg" alt="User 1" />
            <img src="https://i.pinimg.com/736x/0e/bd/b9/0ebdb9f8cb628dc5224bd2f84a2ff9e2.jpg" alt="User 2" />
            <img src="https://i.pinimg.com/736x/84/8f/3b/848f3b92a3e2a6040faccad5888f851e.jpg" alt="User 3" />
            <img src="https://i.pinimg.com/1200x/fb/bf/41/fbbf4106da9e154bda767abd4a8fa434.jpg" alt="User 4" />
            <img src="https://i.pinimg.com/1200x/ed/ec/cd/edeccdffb41d9efbed7e80c4c87343fe.jpg" alt="User 5" />
          </div>

          <p className="text-muted small mb-3">
            We’d be happy to help you with whatever questions you have.
          </p>

          <div className="faq-part mb-3">
            <img
              src={faqImage}
              alt="FAQ Illustration"
              className="img-fluid rounded"
            />
          </div>

          <Link to="/faq">
            <button className="btn btn-violet w-100">Learn more</button>
          </Link>
        </div>
      </div>

      {/* Right Side - FAQ Accordion */}
      <div className="col-lg-8 col-md-7">
        <h2 className="fw-bold mb-4">Frequently Asked Questions</h2>

        <div className="accordion" id="faqAccordion">
          {faqData.map((faq, index) => (
            <div className="accordion-item mb-2" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${openIndex === index ? "" : "collapsed"}`}
                  type="button"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                </button>
              </h2>

              <div
                className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
              >
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


{/* Volunteer in Action - Horizontal Reels Style */}
<section className="volunteer-videos-section py-5 no-bottom-gap" style={{background: "linear-gradient(180deg, #f8fafc, #eef2ff)"}} >
  <div className="container">
    <div className="text-center mb-4">
      <h2 className="fw-bold">Volunteering in Action</h2>
      <p className="text-muted">
        See how volunteers are creating real impact on the ground.
      </p>
    </div>

    <div className="video-reels-row">

      <div className="reel-video-card">
        <video src={video1} controls />
        <div className="reel-video-caption">Food distribution drive</div>
      </div>

      <div className="reel-video-card">
        <video src={video2} controls />
        <div className="reel-video-caption">Teaching children in rural areas</div>
      </div>

      <div className="reel-video-card">
        <video src={video3} controls />
        <div className="reel-video-caption">Tree plantation campaign</div>
      </div>

      <div className="reel-video-card">
        <video src={video4} controls />
        <div className="reel-video-caption">Ocean cleaning drive</div>
      </div>

      <div className="reel-video-card">
        <video src={video5} controls />
        <div className="reel-video-caption">Health Checkup Camp</div>
      </div>

      <div className="reel-video-card">
        <video src={video6} controls />
        <div className="reel-video-caption">Orphanage Visit</div>
      </div>

    </div>
  </div>
</section>



    </div>
  );
}
