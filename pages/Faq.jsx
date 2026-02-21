import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./FAQ.css";

const faqData = [
  {
    category: "General Queries",
    items: [
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
    ],
  },
  {
    category: "For Volunteers",
    items: [
      {
        question: "How do I register as a volunteer?",
        answer:
          "Sign up with your details, create a profile, and start applying for opportunities.",
      },
      {
        question: "Can I choose opportunities by interests?",
        answer:
          "Yes, filters allow you to search by skills, interests, location, and availability.",
      },
      {
        question: "Can I track my volunteering activities?",
        answer:
          "Yes, your dashboard records your joined projects and contributed hours.",
      },
      {
        question: "Do I need prior experience?",
        answer:
          "Not always, many opportunities only require willingness to help.",
      },
      {
        question: "Is there any cost involved?",
        answer:
          "No, volunteering and signing up are completely free.",
      },
    ],
  },
  {
    category: "For Host Organizations (NGOs & Non-Profits)",
    items: [
      {
        question: "How can my organization join?",
        answer:
          "Register as a host, create a profile, and start posting opportunities.",
      },
      {
        question: "Can I manage multiple opportunities?",
        answer:
          "Yes, the host dashboard allows managing several projects simultaneously.",
      },
      {
        question: "How do I track volunteer applications?",
        answer:
          "Applications can be viewed, accepted, or rejected directly from your dashboard.",
      },
      {
        question: "Can I keep records of past projects?",
        answer:
          "Yes, the system maintains records for future reference and planning.",
      },
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState({});
  const [userQuestion, setUserQuestion] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything about VolunTier Hub 😊" },
  ]);

  const toggleFAQ = (catIndex, itemIndex) => {
    const key = `${catIndex}-${itemIndex}`;
    setOpenIndex((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const findAnswer = (question) => {
    const lowerQ = question.toLowerCase();
    for (let category of faqData) {
      for (let item of category.items) {
        if (item.question.toLowerCase().includes(lowerQ) || lowerQ.includes(item.question.toLowerCase().split(" ")[0])) {
          return item.answer;
        }
      }
    }
    return "Sorry, I couldn't find an answer to that. Please check the FAQs above or try asking differently.";
  };

  const handleSend = () => {
    if (!userQuestion.trim()) return;

    const userMsg = { sender: "user", text: userQuestion };
    const botReply = { sender: "bot", text: findAnswer(userQuestion) };

    setChatMessages((prev) => [...prev, userMsg, botReply]);
    setUserQuestion("");
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title">❓ Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Find answers to common queries about volunteering and hosting with <b>VolunTier Hub</b>.
        </p>

        {faqData.map((category, catIndex) => (
          <div key={catIndex} className="faq-category">
            <h3 className="faq-category-title">{category.category}</h3>
            <div className="faq-list">
              {category.items.map((faq, itemIndex) => {
                const key = `${catIndex}-${itemIndex}`;
                return (
                  <div key={key} className="faq-item">
                    <button
                      className={`faq-question ${openIndex[key] ? "active" : ""}`}
                      onClick={() => toggleFAQ(catIndex, itemIndex)}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-toggle">
                        {openIndex[key] ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>
                    <div className={`faq-answer ${openIndex[key] ? "show" : ""}`}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* चैटबॉट सेक्शन */}
        <div className="chatbot-section">
          <h3 className="chatbot-title">💬 Ask Our Assistant</h3>
          <div className="chatbox">
            <div className="chat-messages">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                placeholder="Ask your question..."
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
              />
              <button onClick={handleSend}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
