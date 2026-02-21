import React, { useState, useEffect } from "react";
import "./Testimonials.css";

export default function Testimonials() {
  const initialTestimonials = [
    { text: "Voluntier Hub made it so easy for me to find volunteering opportunities in my city. Truly a life-changing platform!", name: "Aarav Mehta", role: "Student Volunteer", image: "https://i.pinimg.com/1200x/6a/d1/57/6ad157c8278e090a7151341adc8eaaa6.jpg" },
    { text: "I love how simple and organized everything is. Within a week, I found two meaningful projects to work on.", name: "Diya Sharma", role: "NGO Worker", image: "https://i.pinimg.com/1200x/e1/14/15/e1141535cab3d315ed47aee3cb69a525.jpg" },
    { text: "This platform has helped me connect with causes I truly care about. Highly recommended to anyone with a big heart!", name: "Rohan Iyer", role: "Volunteer", image: "https://i.pinimg.com/1200x/ee/ec/6d/eeec6dc087d350a616bdf696dbcc34f2.jpg" },
    { text: "As an organizer, I was able to post my event and receive responses from passionate volunteers within hours!", name: "Neha Kapoor", role: "Event Organizer", image: "https://i.pinimg.com/1200x/fb/ca/43/fbca43cb79a2cb7c91930671924c367e.jpg" },
    { text: "The interface is so easy to navigate. Voluntier Hub helped me discover impactful NGOs nearby.", name: "Kunal Deshmukh", role: "Community Volunteer", image: "https://i.pinimg.com/1200x/01/c4/3b/01c43bbb39cf74d24c9190d4832a080c.jpg" },
    { text: "I appreciate how this platform builds a bridge between volunteers and organizations. It’s seamless and effective.", name: "Ananya Reddy", role: "NGO Coordinator", image: "https://i.pinimg.com/736x/36/af/73/36af73ef3cd451d1e60d45899ee15043.jpg" },
    { text: "Volunteering has always been my passion, but I didn’t know where to start until I found Voluntier Hub.", name: "Ishaan Gupta", role: "College Student", image: "https://i.pinimg.com/736x/9e/e0/12/9ee012294e9e57756412ce5ce81a049e.jpg" },
    { text: "I got to work on a beach clean-up project last weekend. It was fun, organized, and fulfilling!", name: "Saanvi Nair", role: "Environmental Volunteer", image: "https://i.pinimg.com/736x/04/82/a7/0482a7b8d84ecc3faf3c1ab15d719d5f.jpg" },
    { text: "We posted our blood donation drive, and within a day, 50+ volunteers signed up. Amazing reach!", name: "Arjun Bansal", role: "NGO Head", image: "https://i.pinimg.com/736x/66/4b/b2/664bb216052a3ab7bddd758f0c44a207.jpg" },
    { text: "Thanks to Voluntier Hub, I’ve been able to give back to society in ways I never imagined.", name: "Meera Joshi", role: "Corporate Volunteer", image: "https://i.pinimg.com/736x/be/35/7a/be357a3e1faa73e8c9d1d230dbec5ef9.jpg" },
    { text: "The rating and feedback system is great. It helped us find genuinely committed volunteers.", name: "Aditya Menon", role: "Volunteer Coordinator", image: "https://i.pinimg.com/736x/0d/f6/64/0df66484b0ef9553af81f76b18d91a03.jpg" },
    { text: "I joined a weekend teaching program through this platform. It was the best decision I’ve made this year!", name: "Kritika Singh", role: "Teaching Volunteer", image: "https://i.pinimg.com/736x/1b/cf/77/1bcf77ee6db7ba8a6d699b993f55ff09.jpg" },
    { text: "What I love is the variety of causes available — from animal rescue to education to environment.", name: "Dev Patel", role: "Volunteer", image: "https://i.pinimg.com/736x/81/14/2f/81142f97f4f7aed36e6d653a0779599d.jpg" },
    { text: "This platform connects passionate people with meaningful work. It’s simple yet powerful.", name: "Tanya Bhattacharya", role: "NGO Intern", image: "https://i.pinimg.com/736x/77/fd/aa/77fdaac4afd5e8da46936e9490fdad06.jpg" },
    { text: "Our tree plantation drive got a massive response thanks to this portal. Super useful tool!", name: "Harsh Verma", role: "Event Planner", image: "https://i.pinimg.com/736x/38/54/a8/3854a8e825bc816e7d7c2caa2c255460.jpg" },
    { text: "Voluntier Hub has become my go-to platform whenever I want to make a difference.", name: "Priya Dutta", role: "Social Worker", image: "https://i.pinimg.com/736x/12/c1/e7/12c1e723112f66f9c5217eca5a7eb247.jpg" },
    { text: "It’s not just a platform, it’s a community of changemakers. I’ve met inspiring people here.", name: "Arnav Kulkarni", role: "Volunteer", image: "https://i.pinimg.com/736x/26/05/dc/2605dc78c02e034a60bbdbbb8c5235c5.jpg" },
    { text: "Our NGO has grown tremendously since we started listing our activities here. Big thumbs up!", name: "Simran Oberoi", role: "NGO Director", image: "https://i.pinimg.com/1200x/5d/53/e7/5d53e73c5195991ad20b3a95ac9a10a9.jpg" },
    { text: "I was new to volunteering. This website guided me perfectly and matched me with causes I love.", name: "Kabir Mathur", role: "Student", image: "https://i.pinimg.com/736x/3f/f5/1c/3ff51c5a29586ab8a0dfc72d57fea179.jpg" },
    { text: "I like how transparent everything is — events, requirements, and real feedback from other users.", name: "Ritika Chatterjee", role: "Volunteer", image: "https://i.pinimg.com/1200x/9a/c0/53/9ac053fc4dff473cee665b490cddc8e1.jpg" },
    { text: "This platform made volunteering so convenient. I can filter events by my schedule and interests.", name: "Ayaan Sethi", role: "IT Professional", image: "https://i.pinimg.com/736x/3d/1f/3c/3d1f3c3be9ae71b3d2d09c04d610c58c.jpg" },
    { text: "I’ve started bringing my friends to volunteering events too. It’s become our weekend ritual!", name: "Mahi Pillai", role: "Student Volunteer", image: "https://i.pinimg.com/736x/ef/ae/bf/efaebf465f7831128ae7bbc6f6d137f5.jpg" },
    { text: "The UI is smooth, and I love the instant notifications about new opportunities.", name: "Rahul Chauhan", role: "Volunteer", image: "https://i.pinimg.com/736x/b2/6b/4c/b26b4c54cd91057b01711d9816fab3f6.jpg" },
    { text: "As a coordinator, managing volunteer sign-ups has become super easy. This tool is brilliant.", name: "Sneha Agarwal", role: "Coordinator", image: "https://i.pinimg.com/736x/4a/31/a5/4a31a5b40ab53c96c5a2781619d4c378.jpg" },
    { text: "Through this platform, I found a mentorship program that changed my perspective on life.", name: "Manav Jain", role: "Mentor Volunteer", image: "https://i.pinimg.com/1200x/01/c4/3b/01c43bbb39cf74d24c9190d4832a080c.jpg" },
    { text: "The star rating helps highlight genuine events. It builds trust in the community.", name: "Ira Bose", role: "College Volunteer", image: "https://i.pinimg.com/1200x/9a/c0/53/9ac053fc4dff473cee665b490cddc8e1.jpg" },
    { text: "We got volunteers from different states for our fundraiser. That’s the power of Voluntier Hub!", name: "Vikram Reddy", role: "Fundraiser Lead", image: "https://i.pinimg.com/1200x/ee/ec/6d/eeec6dc087d350a616bdf696dbcc34f2.jpg" },
    { text: "My first volunteering experience was magical. Thank you for making it happen effortlessly.", name: "Avni Shetty", role: "Student", image: "https://i.pinimg.com/736x/ef/ae/bf/efaebf465f7831128ae7bbc6f6d137f5.jpg" },
    { text: "This platform gives equal visibility to both small and large NGOs. That’s what I love.", name: "Yash Tiwari", role: "Volunteer", image: "https://i.pinimg.com/1200x/6a/d1/57/6ad157c8278e090a7151341adc8eaaa6.jpg" },
    { text: "Voluntier Hub inspires me every day to contribute more to society. A beautiful initiative!", name: "Ishika Malhotra", role: "Artist Volunteer", image: "https://i.pinimg.com/1200x/e1/14/15/e1141535cab3d315ed47aee3cb69a525.jpg" },
  ];

  const [userTestimonials, setUserTestimonials] = useState(() => {
    const saved = localStorage.getItem("userTestimonials");
    return saved ? JSON.parse(saved) : [];
  });

  const [formData, setFormData] = useState({ name: "", role: "", text: "", image: "" });
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("userTestimonials", JSON.stringify(userTestimonials));
  }, [userTestimonials]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddTestimonial = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.role || !formData.text) return;

    const newTestimonial = {
      name: formData.name,
      role: formData.role,
      text: formData.text,
      image: formData.image || "https://i.pinimg.com/1200x/6a/d1/57/6ad157c8278e090a7151341adc8eaaa6.jpg",
    };

    setUserTestimonials([newTestimonial, ...userTestimonials]);
    setFormData({ name: "", role: "", text: "", image: "" });
  };

  const handleDelete = (index) => {
    const updated = userTestimonials.filter((_, i) => i !== index);
    setUserTestimonials(updated);
    setOpenMenuIndex(null);
  };

  const allTestimonials = [...userTestimonials, ...initialTestimonials];

  return (
    <div className="testimonials-page">
      <section className="section-medium">
        <div className="container">
          <h1 className="section-title">What Our Volunteers & Hosts Say</h1>
          <p className="section-sub-title">Hear from people who have benefited from our platform.</p>

          <form className="testimonial-form" onSubmit={handleAddTestimonial}>
            <div className="testimonial-form-header">
              <h3>Share Your Experience</h3>
              <p>Your feedback helps others discover great opportunities</p>
            </div>

            <div className="testimonial-form-body">
              <div className="form-row">
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
                <input name="role" value={formData.role} onChange={handleChange} placeholder="Your Role" />
              </div>

              <div className="form-row">
                <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
              </div>

              <textarea name="text" value={formData.text} onChange={handleChange} placeholder="Write your testimonial..." />
            </div>

            <div className="testimonial-form-footer">
              <button type="submit">Submit Testimonial</button>
            </div>
          </form>

          <div className="testimonial-grid">
            {allTestimonials.map((t, index) => (
              <div key={index} className="testimonial-card">
                {index < userTestimonials.length && (
                  <div className="card-menu-wrapper">
                    <button
                      className="three-dots-btn"
                      onClick={() =>
                        setOpenMenuIndex(openMenuIndex === index ? null : index)
                      }
                    >
                      ⋮
                    </button>
                    {openMenuIndex === index && (
                      <div className="card-menu">
                        <button
                          className="delete-option"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                )}

                <p>"{t.text}"</p>
                <div className="rating">★★★★★</div>

                <div className="testimonial-author">
                  <img src={t.image} alt={t.name} />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
