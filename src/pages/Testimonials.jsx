import React from "react";
import { motion } from "framer-motion";
import './Testimonials.css'; // Import the custom CSS file

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    message:
      "Being recognized as 'Star of the Month' has motivated me to push my limits further!",
    image: "https://randomuser.me/api/portraits/men/1.jpg", // Placeholder image
    rating: 5, // Out of 5 stars
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    message:
      "The Wall of Fame is an incredible way to celebrate our team's hard work.",
    image: "https://randomuser.me/api/portraits/women/1.jpg", // Placeholder image
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="testimonials-title"
      >
        What Our Employees Say
      </motion.h2>
      {/* Testimonial Cards */}
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="testimonial-card"
          >
            {/* Quote Icon */}
            <div className="quote-icon">“</div>
            {/* Testimonial Message */}
            <p className="testimonial-message">{testimonial.message}</p>
            {/* Author Details */}
            <div className="author-details">
              {/* Avatar */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="author-avatar"
              />
              <div>
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-role">{testimonial.role}</p>
                {/* Star Rating */}
                <div className="star-rating">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`${i < testimonial.rating ? "filled" : ""}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;