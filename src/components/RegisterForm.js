import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./RegisterForm.css";
import { ToastContainer, toast } from "react-toastify"; // Import toastify
import "react-toastify/dist/ReactToastify.css"; // Import default styles

const RegisterForm = () => {
  const location = useLocation();
  const selectedPlanFromState = location.state?.selectedPlan || "free"; // Default to 'free'

  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.phoneNumber) {
      toast.error("Please fill in all required fields."); // Toast error message
      return;
    }

    // Prepare the payload for the API
    const payload = {
      EmployeeId: "default-id", // Use a default value or generate dynamically
      FullName: formData.fullName,
      Email: formData.email,
      PhoneNumber: formData.phoneNumber,
    };

    try {
      // Send data to the API
      const response = await fetch(
        "https://honorhive-api.azurewebsites.net/registration/Admin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Specify JSON content type
          },
          body: JSON.stringify(payload), // Convert payload to JSON
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        toast.error(`Failed to register: ${errorData.message || "Unknown error"}`); // Toast error message
        return;
      }

      toast.success("Registration successful! Check your email for confirmation."); // Toast success message
      // Clear the form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        plan: selectedPlanFromState,
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again later."); // Toast error message
    }
  };

  return (
    <div className="register-container">
      {/* Form Title */}
      <h2 className="form-title">Join Us Today</h2>
      {/* Registration Form */}
      <form onSubmit={handleSubmit} className="register-form">
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
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

        {/* Phone Number */}
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            aria-label="Phone Number"
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
        <a
          href="https://honorhive-webapp.azurewebsites.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login here
        </a>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-center" // Position the toast in the center
        autoClose={5000} // Auto close after 5 seconds
        hideProgressBar={false} // Show progress bar
        newestOnTop={false} // Newest toast on top
        closeOnClick={true} // Close on click
        rtl={false} // Right-to-left support
        pauseOnFocusLoss={true} // Pause when window loses focus
        draggable={true} // Allow dragging
        pauseOnHover={true} // Pause on hover
        closeButton={false} // Remove the close button
      />
    </div>
  );
};

export default RegisterForm;