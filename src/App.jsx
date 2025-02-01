import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Adjust path if necessary
import Footer from "./components/Footer"; // Adjust path if necessary
import ParticleBackground from "./components/ParticleBackground"; // Adjust path if necessary
import Home from "./pages/Home"; // New Home page component
import About from "./pages/About"; // Adjust path if necessary
import Services from "./pages/Services"; // Adjust path if necessary
import Testimonials from "./pages/Testimonials"; // Adjust path if necessary
import ContactForm from "./pages/ContactForm"; // Adjust path if necessary
import DemoFormPage from "./pages/DemoFormPage"; // Adjust path if necessary

const App = () => {
  return (
    <Router>
      {/* Background Gradient */}
      <div className="min-h-screen bg-gradient-to-r from-white via-f89633 to-f78f30 text-black font-sans relative">
        {/* Particle Background */}
        <ParticleBackground />

        {/* Content */}
        <div className="relative z-10"> {/* Ensure content is above the background */}
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="pt-24"> {/* Add padding to account for the fixed navbar */}
            <Routes>
              {/* Home Page */}
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <About />
                    <Services />
                    <Testimonials />
                    <ContactForm />
                    <Footer />
                  </>
                }
              />

              {/* About Page */}
              <Route
                path="/about"
                element={
                  <>
                    <About />
                    <Footer />
                  </>
                }
              />

              {/* Services Page */}
              <Route
                path="/services"
                element={
                  <>
                    <Services />
                    <Footer />
                  </>
                }
              />

              {/* Testimonials Page */}
              <Route
                path="/testimonials"
                element={
                  <>
                    <Testimonials />
                    <Footer />
                  </>
                }
              />

              {/* Contact Page */}
              <Route
                path="/contact"
                element={
                  <>
                    <ContactForm />
                    <Footer />
                  </>
                }
              />

              {/* Demo Form Page */}
              <Route
                path="/demo"
                element={
                  <>
                    <DemoFormPage />
                    <Footer />
                  </>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;