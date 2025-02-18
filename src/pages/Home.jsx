import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Handshake } from "lucide-react"; // Importing icons
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./base.css"; // Import global styles
import "./section.css"; // Import section-specific styles

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Story Data with Icons
  const storyScenes = [
    {
      title: "Recognizing Excellence",
      description:
        "We celebrate the hard work and dedication of our employees by recognizing their outstanding achievements.",
      icon: <Award size={50} className="text-primary mx-auto" aria-label="Award Icon" />,
    },
    {
      title: "Celebrating Milestones",
      description:
        "Every achievement, big or small, is worth celebrating. Together, we grow stronger.",
      icon: <Users size={50} className="text-primary mx-auto" aria-label="Users Icon" />,
    },
    {
      title: "Fostering Collaboration",
      description:
        "Collaboration drives success. We empower teams to work together and achieve greatness.",
      icon: <Handshake size={50} className="text-primary mx-auto" aria-label="Handshake Icon" />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 z-0"></div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="text-5xl font-extrabold mb-4">Welcome to Honor Hive ✨</h1>
            <p className="text-lg leading-relaxed mb-8">
              Celebrate excellence, recognize achievements, and foster a culture of appreciation. Join us in building a workplace where everyone feels valued.
            </p>
            <motion.button
              onClick={() => navigate("/pricing")} // Navigate to /pricing on click
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 16px rgba(255, 255, 255, 0.5)",
                backgroundColor: "#ffffff", // Background turns white on hover
                color: "var(--primary-color)", // Keep primary color for hover text
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-white text-white py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-md"
              aria-label="Get Started Button"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </section>
      {/* Story Section */}
      <section id="story" className="py-16 px-6 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-center text-gray-800 mb-8"
        >
          Our Mission: Celebrating Every Achievement
        </motion.h2>
        <div className="story-grid">
          {storyScenes.map((scene, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="story-item"
            >
              {/* Icon */}
              {scene.icon}
              {/* Title */}
              <h3>{scene.title}</h3>
              {/* Description */}
              <p>{scene.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;