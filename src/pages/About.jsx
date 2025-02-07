import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaHandshake, FaLightbulb, FaUserTie, FaUserGraduate, FaCode } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "./About.css";

const About = () => {
  const teamMembers = [
    { name: "Sai kiran", role: "Founder & CEO", icon: <FaUserTie /> },
    { name: "Jane", role: "Head of Product", icon: <FaUserGraduate /> },
    { name: "Luffy", role: "Lead Developer", icon: <FaCode /> },
  ];

  const coreValues = [
    { title: "Excellence", description: "We strive for excellence in everything we do.", icon: <FaTrophy /> },
    { title: "Teamwork", description: "Collaboration is at the heart of our success.", icon: <FaHandshake /> },
    { title: "Innovation", description: "We embrace creativity and innovation to drive growth.", icon: <FaLightbulb /> },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="about-hero" className="section">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us - Honor Hive
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Learn more about our mission, team, and the values that drive us to celebrate excellence every day.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="section">
        <div className="container">
          <div className="mission-content">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              At Honor Hive, our mission is to celebrate excellence and recognize outstanding achievements. We believe in inspiring individuals and teams to reach their full potential by showcasing their hard work and dedication.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <FaTrophy className="icon-lg" />
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="our-team" className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Meet Our Team
          </motion.h2>
          <Swiper
            spaceBetween={30} // Gap between slides
            slidesPerView={1} // Responsive behavior
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="swiper-container"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <motion.div whileHover={{ scale: 1.1 }}>
                  {React.cloneElement(member.icon, { className: "icon-lg" })}
                </motion.div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="core-values" className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Core Values
          </motion.h2>
          <Swiper
            spaceBetween={30} // Gap between slides
            slidesPerView={1} // Responsive behavior
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="swiper-container"
          >
            {coreValues.map((value, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <motion.div whileHover={{ scale: 1.1 }}>
                  {React.cloneElement(value.icon, { className: "icon-lg" })}
                </motion.div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Join Us in Celebrating Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Be part of a community that values recognition, teamwork, and innovation.
          </motion.p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 16px rgba(255, 255, 255, 0.5)",
            }}
            className="cta-button"
          >
            Get Started Today
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default About;