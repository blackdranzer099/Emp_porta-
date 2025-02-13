import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaHandshake, FaLightbulb, FaBalanceScale } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Import required modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import pagination styles
import "./About.css"; // Custom CSS

const About = () => {
  const coreValues = [
    { title: "Excellence", description: "We strive for excellence in everything we do.", icon: <FaTrophy /> },
    { title: "Teamwork", description: "Collaboration is at the heart of our success.", icon: <FaHandshake /> },
    { title: "Innovation", description: "We embrace creativity and innovation to drive growth.", icon: <FaLightbulb /> },
    { title: "Integrity", description: "We uphold the highest standards of honesty and ethics.", icon: <FaBalanceScale /> }
  ];

  const teamMembers = [
    { name: "Neetu", role: "Marketing Manager", image: "/images/neethu.jpg" },
    { name: "Shivaji", role: "Backend Developer", image: "/images/Shivaji.jpg" },
    { name: "Mounika", role: "Backend Developer", image: "/images/Mounika.jpg" },
    { name: "Rajkumar", role: "Full-Stack Developer", image: "/images/Saikiran.jpg" },
    { name: "Sai Kiran", role: "Data Engineer", image: "/images/Saikiran.jpg" },
    { name: "Jyothi", role: "UI/UX Designer", image: "/images/Jyothi.jpg" },
    { name: "Anvesh", role: "Integration Specialist", image: "/images/Anvesh.jpg" },
    { name: "Mithil", role: "Software Engineer", image: "/images/Mithil.jpg" },
    { name: "Charan", role: "Software Engineer", image: "/images/Charan.jpg" },
    { name: "Srilekha", role: "Integration Specialist", image: "/images/srilekha.jpg" },
    { name: "Rashmi", role: "Software Engineer", image: "/images/Rashmi.jpg" },
    { name: "Priyanka", role: "Project Manager", image: "/images/Priyanka.jpg" },
    { name: "Shubham", role: "Frontend Developer", image: "/images/shubham.jpg" },
    { name: "Nandini", role: "QA Engineer", image: "/images/Nandini.jpg" },
    { name: "Usopp", role: "QA Engineer", image: "/images/Saikiran.jpg" },
    { name: "Jimbei", role: "Support Engineer", image: "/images/Saikiran.jpg" },
  ];

  return (
    <div className="about-page">
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
            modules={[Autoplay, Pagination]} // Enable required modules
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
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
            modules={[Autoplay, Pagination]} // Enable required modules
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="swiper-container"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-image"
                    onError={(e) => {
                      e.target.src = "/assets/icons/default-avatar.png"; // Fallback image
                    }}
                  />
                </motion.div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
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
    </div>
  );
};

export default About;