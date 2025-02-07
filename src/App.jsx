import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Pages/variables.css"; // Import global CSS variables
import "./Pages/base.css"; // Import global base styles
import Navbar from "./components/Navbar"; // Import Navbar component
import Footer from "./components/Footer"; // Import Footer component
import ParticleBackground from "./components/ParticleBackground"; // Import ParticleBackground component
import Home from "./Pages/Home"; // Import Home component
import About from "./Pages/About"; // Import About component
import Services from "./Pages/Services"; // Import Services component
import Testimonials from "./Pages/Testimonials"; // Import Testimonials component
import ContactForm from "./Pages/Contactus"; // Import ContactForm component
import DemoFormPage from "./Pages/DemoFormPage"; // Import DemoFormPage component
import RegisterForm from './components/RegisterForm'; // Import RegisterForm component

const App = () => {
  return (
    <Router>
      {/* Background Gradient */}
      <div className="min-h-screen bg-gradient-to-r from-white via-f89633 to-f78f30 text-black font-sans relative">
        {/* Particle Background */}
        <ParticleBackground />
        {/* Content */}
        <div className="relative z-10">
          {/* Navbar */}
          <Navbar />
          {/* Main Content */}
          <main className="pt-24"> {/* Add padding to account for the fixed navbar */}
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<Home />} />
              {/* About Page */}
              <Route path="/about" element={<About />} />
              {/* Services Page */}
              <Route path="/services" element={<Services />} />
              {/* Testimonials Page */}
              <Route path="/testimonials" element={<Testimonials />} />
              {/* Contact Page */}
              <Route path="/contact" element={<ContactForm />} />
              {/* Demo Form Page */}
              <Route path="/demo-form" element={<DemoFormPage />} />
              {/* Register Form Page */}
              <Route path="/register" element={<RegisterForm />} />
            </Routes>
          </main>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;