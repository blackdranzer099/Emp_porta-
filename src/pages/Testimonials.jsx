import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa"; // Import quote icon

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    message:
      "Being recognized as 'Star of the Month' has motivated me to push my limits further!",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    message:
      "The Wall of Fame is an incredible way to celebrate our team's hard work.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-f89633 mb-8 text-center"
      >
        What Our Employees Say
      </motion.h2>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            {/* Quote Icon */}
            <div className="text-3xl text-f89633 mb-4">
              <FaQuoteLeft />
            </div>

            {/* Testimonial Message */}
            <p className="text-lg italic text-black leading-relaxed">
              {testimonial.message}
            </p>

            {/* Author Details */}
            <div className="mt-4">
              <h4 className="font-bold text-black">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;