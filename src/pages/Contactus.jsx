import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contactform.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white font-sans">
      {/* Heading with Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Get in Touch
      </motion.h2>

      {/* Subheading or Description */}
      <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
        We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out using the form below.
      </p>

      {/* Form Container */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 max-w-md mx-auto p-8 bg-opacity-70 rounded-lg shadow-lg backdrop-blur-sm">
        {/* Name Field */}
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-3 rounded bg-gray-800 text-white border ${
              errors.name ? "border-red-500" : "border-gray-600"
            } focus:ring-2 focus:ring-primary-color peer`}
          />
          <label
            htmlFor="name"
            className="absolute left-3 top-3 text-sm text-gray-400 pointer-events-none transition-all peer-focus:text-xs peer-focus:top-1 peer-focus:text-primary-color"
          >
            Your Name
          </label>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 rounded bg-gray-800 text-white border ${
              errors.email ? "border-red-500" : "border-gray-600"
            } focus:ring-2 focus:ring-primary-color peer`}
          />
          <label
            htmlFor="email"
            className="absolute left-3 top-3 text-sm text-gray-400 pointer-events-none transition-all peer-focus:text-xs peer-focus:top-1 peer-focus:text-primary-color"
          >
            Your Email
          </label>
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Message Field */}
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder=" "
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 rounded bg-gray-800 text-white border ${
              errors.message ? "border-red-500" : "border-gray-600"
            } focus:ring-2 focus:ring-primary-color peer`}
          />
          <label
            htmlFor="message"
            className="absolute left-3 top-3 text-sm text-gray-400 pointer-events-none transition-all peer-focus:text-xs peer-focus:top-1 peer-focus:text-primary-color"
          >
            Your Message
          </label>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-primary-color hover:bg-secondary-color text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          } flex items-center justify-center w-full`}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>

        {/* Success Message */}
        {submitSuccess && (
        <p className="success-message flex items-center justify-center text-green-500 text-lg mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Thank you for reaching out! We'll get back to you soon.
        </p>
      )}
      </form>
    </section>
  );
};

export default ContactForm;