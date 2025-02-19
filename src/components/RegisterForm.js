import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./RegisterForm.css";
import emailjs from "@emailjs/browser";

const RegisterForm = () => {
  const location = useLocation();
  const selectedPlanFromState = location.state?.selectedPlan || "free"; // Default to 'free'

  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    plan: selectedPlanFromState,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        formData, // Form data to send
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          alert("Registration successful! Check your email for confirmation.");
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Failed to send email. Please try again later.");
        }
      );

    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      plan: selectedPlanFromState,
    });
  };

  return (
    <div className="register-container">
      {/* Form Title */}
      <h2 className="form-title">Join Us Today</h2>
      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="register-form">
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-label="Full Name"
          />
        </div>
        {/* Email Address */}
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-label="Email Address"
          />
        </div>
        {/* Phone Number (Optional) */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number (Optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            aria-label="Phone Number"
          />
        </div>
        {/* Address (Optional) */}
        <div className="form-group">
          <label htmlFor="address">Address (Optional)</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            aria-label="Address"
          />
        </div>
        {/* Plan Selection */}
        <div className="form-group">
          <label htmlFor="plan">Select Plan</label>
          <select
            id="plan"
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            required
            aria-label="Plan Selection"
          >
            <option value="free">Free</option>
            <option value="basic">Basic</option>
            <option value="pro">Pro</option>
          </select>
        </div>
        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Get Started
        </button>
      </form>
      {/* Login Link */}
      <div className="login-link">
        Already have an account?{" "}
        <a href="https://honorhive-webapp.azurewebsites.net/" target="_blank" rel="noopener noreferrer">
          Login here
        </a>
      </div>
    </div>
  );
};

export default RegisterForm;