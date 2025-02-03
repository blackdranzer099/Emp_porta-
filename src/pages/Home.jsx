import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
const Home = () => {
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

      {/* About Us Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <ContactForm />

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
      
      {/* Adding the Employee Vector */}
      <section id="employee-vector" className="py-16 px-6 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <img
            src="/assets/icons/fun-3d-cartoon-illustration-indian-businessman_183364-114530.avif"
            alt="Employee Vector"
            className="w-1/2 mx-auto"
          />
        </motion.div>
      </section>
    </>
  );
};

export default Home;