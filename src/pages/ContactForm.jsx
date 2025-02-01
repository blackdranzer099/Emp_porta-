import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
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
      <form className="grid grid-cols-1 gap-6 max-w-md mx-auto p-8 bg-black bg-opacity-70 rounded-lg shadow-lg">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Write your message here..."
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-700 text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;