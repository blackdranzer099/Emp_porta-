import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaHandshake, FaLightbulb } from "react-icons/fa"; // Import professional icons

const About = () => {
  // Team Members Data
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "https://via.placeholder.com/150", // Replace with actual images later
    },
    {
      name: "Jane Smith",
      role: "Head of Product",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Emily Johnson",
      role: "Lead Developer",
      image: "https://via.placeholder.com/150",
    },
  ];

  // Core Values Data
  const coreValues = [
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do.",
      icon: <FaTrophy />, // Trophy icon
    },
    {
      title: "Teamwork",
      description: "Collaboration is at the heart of our success.",
      icon: <FaHandshake />, // Handshake icon
    },
    {
      title: "Innovation",
      description: "We embrace creativity and innovation to drive growth.",
      icon: <FaLightbulb />, // Lightbulb icon
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="about-hero" className="relative py-16 px-6 text-center bg-gradient-to-r from-f89633 to-f78f30">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative max-w-2xl mx-auto z-10"
        >
          <h1 className="text-5xl font-extrabold text-white mb-4">About us Honor Hive</h1>
          <p className="text-lg text-white leading-relaxed mb-8">
            Learn more about our mission, team, and the values that drive us to celebrate excellence every day.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="py-16 px-6 text-center bg-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-f89633 mb-8">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-black leading-relaxed">
                At Honor Hive, our mission is to celebrate excellence and recognize outstanding achievements. We believe in inspiring individuals and teams to reach their full potential by showcasing their hard work and dedication.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-black leading-relaxed">
                Our vision is to create a world where recognition and appreciation are at the forefront of workplace culture, driving motivation, engagement, and success.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Team Section */}
      <section id="our-team" className="py-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-f89633 mb-8"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-f89633"
              />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-sm text-black">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section id="core-values" className="py-16 px-6 text-center bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-f89633 mb-8"
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-4 text-f89633">{value.icon}</div> {/* Icon */}
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 px-6 text-center bg-gradient-to-r from-f89633 to-f78f30">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">Join Us in Celebrating Excellence</h2>
          <p className="text-lg text-white leading-relaxed mb-8">
            Be part of a community that values recognition, teamwork, and innovation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white hover:bg-gray-200 text-f89633 py-3 px-6 rounded-lg transition duration-300 ease-in-out"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </section>
    </>
  );
};

export default About;