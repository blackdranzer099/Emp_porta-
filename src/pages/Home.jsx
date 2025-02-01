import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  // Services Data with Emoji Icons
  const services = [
    {
      title: "Employee Recognition",
      description:
        "Celebrate outstanding employees with monthly awards and peer-to-peer recognition.",
      icon: "🏆", // Trophy icon
    },
    {
      title: "Achievement Tracking",
      description:
        "Track and analyze employee achievements with customizable dashboards and reports.",
      icon: "📊", // Bar chart icon
    },
    {
      title: "Gamification",
      description:
        "Engage employees with points, badges, and rewards for their hard work and contributions.",
      icon: "🎮", // Game controller icon
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      quote: "Honor Hive has transformed how we recognize achievements in our company!",
      author: "Jane Doe, HR Manager",
    },
    {
      quote: "The gamification features keep our team motivated and engaged.",
      author: "John Smith, Team Lead",
    },
  ];

  // Features Data with Emoji Icons
  const features = [
    {
      title: "Easy Integration",
      description: "Seamlessly integrates with your existing tools like Slack and HR systems.",
      icon: "🔗", // Link icon
    },
    {
      title: "Customizable Awards",
      description: "Create personalized awards and certificates for your team.",
      icon: "🎨", // Palette icon
    },
    {
      title: "Real-Time Analytics",
      description: "Track employee achievements and engagement with live dashboards.",
      icon: "📈", // Chart increasing icon
    },
  ];

  // Partners Data
  const partners = ["CompanyA", "CompanyB", "CompanyC", "CompanyD"];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="py-16 px-6 text-center bg-gradient-to-r from-f89633 to-f78f30">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-5xl font-extrabold text-white mb-4">Welcome to Honor Hive</h1>
          <p className="text-lg text-white leading-relaxed mb-8">
            Celebrating excellence and recognizing outstanding achievements. Join us in inspiring individuals and teams to reach their full potential.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white hover:bg-gray-200 text-f89633 py-3 px-6 rounded-lg transition duration-300 ease-in-out"
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 text-center bg-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold text-f89633 mb-6">About Us</h2>
          <p className="text-lg text-black leading-relaxed">
            At Honor Hive, we believe in celebrating excellence and recognizing outstanding achievements. Our mission is to inspire individuals and teams to reach their full potential by showcasing their hard work and dedication.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-f89633 mb-8"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-4">{service.icon}</div> {/* Icon */}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6 text-center bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-f89633 mb-8"
        >
          What Our Users Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
              <p className="text-sm font-bold">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-f89633 mb-8"
        >
          Why Choose Honor Hive?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-4">{feature.icon}</div> {/* Icon */}
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 px-6 text-center bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-f89633 mb-8"
        >
          Trusted By Leading Companies
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="text-2xl font-bold text-black"
            >
              {partner}
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
          <h2 className="text-4xl font-extrabold text-white mb-4">Ready to Celebrate Excellence?</h2>
          <p className="text-lg text-white leading-relaxed mb-8">
            Join thousands of companies using Honor Hive to recognize and inspire their teams.
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

export default Home;