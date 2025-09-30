import React from "react";
import "./Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Voluntier Hub made it so easy for me to find volunteering opportunities in my city. Truly a life-changing platform!",
      name: "Aarav Mehta",
      role: "Student Volunteer",
      image: "https://i.pravatar.cc/100?img=1",
    },
    {
      text: "I love how simple and organized everything is. Within a week, I found two meaningful projects to work on.",
      name: "Diya Sharma",
      role: "NGO Worker",
      image: "https://i.pravatar.cc/100?img=2",
    },
    {
      text: "This platform has helped me connect with causes I truly care about. Highly recommended to anyone with a big heart!",
      name: "Rohan Iyer",
      role: "Volunteer",
      image: "https://i.pravatar.cc/100?img=3",
    },
    {
      text: "As an organizer, I was able to post my event and receive responses from passionate volunteers within hours!",
      name: "Neha Kapoor",
      role: "Event Organizer",
      image: "https://i.pravatar.cc/100?img=4",
    },
    {
      text: "The interface is so easy to navigate. Voluntier Hub helped me discover impactful NGOs nearby.",
      name: "Kunal Deshmukh",
      role: "Community Volunteer",
      image: "https://i.pravatar.cc/100?img=5",
    },
    {
      text: "I appreciate how this platform builds a bridge between volunteers and organizations. It’s seamless and effective.",
      name: "Ananya Reddy",
      role: "NGO Coordinator",
      image: "https://i.pravatar.cc/100?img=6",
    },
    {
      text: "Volunteering has always been my passion, but I didn’t know where to start until I found Voluntier Hub.",
      name: "Ishaan Gupta",
      role: "College Student",
      image: "https://i.pravatar.cc/100?img=7",
    },
    {
      text: "I got to work on a beach clean-up project last weekend. It was fun, organized, and fulfilling!",
      name: "Saanvi Nair",
      role: "Environmental Volunteer",
      image: "https://i.pravatar.cc/100?img=8",
    },
    {
      text: "We posted our blood donation drive, and within a day, 50+ volunteers signed up. Amazing reach!",
      name: "Arjun Bansal",
      role: "NGO Head",
      image: "https://i.pravatar.cc/100?img=9",
    },
    {
      text: "Thanks to Voluntier Hub, I’ve been able to give back to society in ways I never imagined.",
      name: "Meera Joshi",
      role: "Corporate Volunteer",
      image: "https://i.pravatar.cc/100?img=10",
    },
    {
      text: "The rating and feedback system is great. It helped us find genuinely committed volunteers.",
      name: "Aditya Menon",
      role: "Volunteer Coordinator",
      image: "https://i.pravatar.cc/100?img=11",
    },
    {
      text: "I joined a weekend teaching program through this platform. It was the best decision I’ve made this year!",
      name: "Kritika Singh",
      role: "Teaching Volunteer",
      image: "https://i.pravatar.cc/100?img=12",
    },
    {
      text: "What I love is the variety of causes available — from animal rescue to education to environment.",
      name: "Dev Patel",
      role: "Volunteer",
      image: "https://i.pravatar.cc/100?img=13",
    },
    {
      text: "This platform connects passionate people with meaningful work. It’s simple yet powerful.",
      name: "Tanya Bhattacharya",
      role: "NGO Intern",
      image: "https://i.pravatar.cc/100?img=14",
    },
    {
      text: "Our tree plantation drive got a massive response thanks to this portal. Super useful tool!",
      name: "Harsh Verma",
      role: "Event Planner",
      image: "https://i.pravatar.cc/100?img=15",
    },
    {
      text: "Voluntier Hub has become my go-to platform whenever I want to make a difference.",
      name: "Priya Dutta",
      role: "Social Worker",
      image: "https://i.pravatar.cc/100?img=16",
    },
    {
      text: "It’s not just a platform, it’s a community of changemakers. I’ve met inspiring people here.",
      name: "Arnav Kulkarni",
      role: "Volunteer",
      image: "https://i.pravatar.cc/100?img=17",
    },
    {
      text: "Our NGO has grown tremendously since we started listing our activities here. Big thumbs up!",
      name: "Simran Oberoi",
      role: "NGO Director",
      image: "https://i.pravatar.cc/100?img=18",
    },
    {
      text: "I was new to volunteering. This website guided me perfectly and matched me with causes I love.",
      name: "Kabir Mathur",
      role: "Student",
      image: "https://i.pravatar.cc/100?img=19",
    },
    {
      text: "I like how transparent everything is — events, requirements, and real feedback from other users.",
      name: "Ritika Chatterjee",
      role: "Volunteer",
      image: "https://i.pravatar.cc/100?img=20",
    },
    {
      text: "This platform made volunteering so convenient. I can filter events by my schedule and interests.",
      name: "Ayaan Sethi",
      role: "IT Professional",
      image: "https://i.pravatar.cc/100?img=21",
    },
    {
      text: "I’ve started bringing my friends to volunteering events too. It’s become our weekend ritual!",
      name: "Mahi Pillai",
      role: "Student Volunteer",
      image: "https://i.pravatar.cc/100?img=22",
    },
    {
      text: "The UI is smooth, and I love the instant notifications about new opportunities.",
      name: "Rahul Chauhan",
      role: "Volunteer",
      image: "https://i.pravatar.cc/100?img=23",
    },
    {
      text: "As a coordinator, managing volunteer sign-ups has become super easy. This tool is brilliant.",
      name: "Sneha Agarwal",
      role: "Coordinator",
      image: "https://i.pravatar.cc/100?img=24",
    },
    {
      text: "Through this platform, I found a mentorship program that changed my perspective on life.",
      name: "Manav Jain",
      role: "Mentor Volunteer",
      image: "https://i.pravatar.cc/100?img=25",
    },
    {
      text: "The star rating helps highlight genuine events. It builds trust in the community.",
      name: "Ira Bose",
      role: "College Volunteer",
      image: "https://i.pravatar.cc/100?img=26",
    },
    {
      text: "We got volunteers from different states for our fundraiser. That’s the power of Voluntier Hub!",
      name: "Vikram Reddy",
      role: "Fundraiser Lead",
      image: "https://i.pravatar.cc/100?img=27",
    },
    {
      text: "My first volunteering experience was magical. Thank you for making it happen effortlessly.",
      name: "Avni Shetty",
      role: "Student",
      image: "https://i.pravatar.cc/100?img=28",
    },
    {
      text: "This platform gives equal visibility to both small and large NGOs. That’s what I love.",
      name: "Yash Tiwari",
      role: "Volunteer",
      image: "https://i.pravatar.cc/100?img=29",
    },
    {
      text: "Voluntier Hub inspires me every day to contribute more to society. A beautiful initiative!",
      name: "Ishika Malhotra",
      role: "Artist Volunteer",
      image: "https://i.pravatar.cc/100?img=30",
    },
  ];

  return (
    <div className="testimonials-page">
      <section className="section-medium">
        <div className="container">
          <h1 className="section-title">What Our Users Say</h1>
          <p className="section-sub-title">
            Hear from people who have benefited from our platform.
          </p>

          <div className="testimonial-grid">
            {testimonials.map((t, index) => (
              <div key={index} className="testimonial-card">
                <blockquote>
                  <div className="testimonial-content">
                    <p>"{t.text}"</p>
                    <div className="rating">★★★★★</div>
                    <div className="testimonial-author">
                      <div className="testimonial-author-thumbnail">
                        <img src={t.image} alt={`${t.name} - ${t.role}`} />
                      </div>
                      <div className="author-info">
                        <strong>{t.name}</strong>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
