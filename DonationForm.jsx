import React, { useState } from "react";
import "./DonationForm.css";

function DonationForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    donationType: "one-time",
    paymentMethod: "upi",
    address: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = {
      key: "rzp_test_YOURKEY",   // Replace with your Razorpay key
      amount: formData.amount * 100,
      currency: "INR",
      name: "VolunTier Hub",
      description: "Donation",

      handler: function (response) {

        const donations =
          JSON.parse(localStorage.getItem("donations")) || [];

        donations.push({
          ...formData,
          paymentId: response.razorpay_payment_id,
          date: new Date().toLocaleDateString()
        });

        localStorage.setItem("donations", JSON.stringify(donations));

        alert("Payment Successful ❤️");
      },

      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },

      theme: {
        color: "#8b5cf6"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="donation-page">

      <div className="donation-card">

        <h1 className="donation-title">Support Our Cause</h1>

        <p className="donation-subtitle">
          Your contribution helps us create more volunteering opportunities.
        </p>

        <form onSubmit={handleSubmit} className="donation-form">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="amount"
            placeholder="Donation Amount (₹)"
            value={formData.amount}
            onChange={handleChange}
            required
          />

          <select
            name="donationType"
            value={formData.donationType}
            onChange={handleChange}
          >
            <option value="one-time">One-Time Donation</option>
            <option value="monthly">Monthly Donation</option>
          </select>

          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="upi">UPI</option>
            <option value="card">Credit / Debit Card</option>
            <option value="netbanking">Net Banking</option>
          </select>

          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message (Optional)"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="donate-btn">
            Donate Now
          </button>

        </form>

      </div>

    </div>
  );
}

export default DonationForm;