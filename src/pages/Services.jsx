import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css";
import { motion } from "framer-motion"; // For animations
import {
  FaAward,
  FaChartLine,
  FaHandshake,
  FaGift,
  FaCalendarAlt,
} from "react-icons/fa";

const servicesList = [
  {
    title: "Employee Awards & Recognition",
    description:
      "Recognize outstanding employees with awards and achievements tracking.",
    extraText: "Track employee achievements and milestones.",
    icon: <FaAward />,
  },
  {
    title: "Performance Tracking",
    description:
      "Monitor employee performance, set goals, and receive continuous feedback.",
    extraText: "Set SMART goals and track progress.",
    icon: <FaChartLine />,
  },
  {
    title: "Peer-to-Peer Recognition",
    description:
      "Encourage a positive culture where employees can appreciate each other.",
    extraText: "Enable peer recognition to boost morale.",
    icon: <FaHandshake />,
  },
  {
    title: "Rewards & Incentives",
    description:
      "Assign points, badges, and rank employees on leaderboards.",
    extraText: "Motivate employees with rewards and incentives.",
    icon: <FaGift />,
  },
  {
    title: "Event & Celebration Management",
    description:
      "Automate birthday & work anniversary reminders and event planning.",
    extraText: "Celebrate special occasions with automated reminders.",
    icon: <FaCalendarAlt />,
  },
];

const Services = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: false, // Disable center mode for better alignment
    variableWidth: false, // Disable variable width for consistent sliding
    arrows: true, // Enable arrows for navigation
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }, // Show 2 cards on medium screens
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }, // Show 1 card on small screens
      },
    ],
  };

  return (
    <section className="services-section">
      {/* Section Title and Subtitle */}
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Services We Offer
      </motion.h2>
      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Explore our range of services designed to enhance employee engagement and productivity.
      </motion.p>
      {/* Slider for Service Cards */}
      <Slider {...sliderSettings} className="services-slider">
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="extra-text">{service.extraText}</div>
            <button
              className="learn-more-btn"
              aria-label={`Learn more about ${service.title}`}
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </Slider>
      {/* Call-to-Action Button */}
      <motion.div
        className="cta-button-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <button
          className="cta-button"
          aria-label="Get started with our services today"
        >
          Get Started Today
        </button>
      </motion.div>
    </section>
  );
};

export default Services;