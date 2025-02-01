import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Typewriter from "typewriter-effect";
import { Parallax } from "react-parallax";
const HeroSection = () => {
  const navigate = useNavigate(); // Initialize navigation


  const handleBookDemo = () => {
    navigate("/demo"); // Navigate to the demo form page
  };

  return (
  
    <section className="flex flex-col items-center py-16">
      {/* Title */}
      <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400 mb-6 text-center">
        <Typewriter
          options={{
            strings: ["Welcome to Honor Hive", "Celebrate Achievements", "Inspire Growth"],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <Parallax bgImage="/path/to/background.jpg" strength={500}>
        <section className="flex flex-col items-center py-16">
          {/* Hero content */}
        </section>
      </Parallax>

      {/* Description */}
      <p className="text-lg mb-12 text-center max-w-2xl">
        Celebrate achievements and inspire growth with our platform.
      </p>

      {/* Normal-Sized Button */}
      <button
        onClick={handleBookDemo}
        className="relative inline-flex px-4 py-2 font-bold text-white rounded-full overflow-hidden group shadow-md"
      >
        {/* Gradient Background */}
        <span className="absolute inset-0 w-full h-full transition-all duration-500 ease-out bg-gradient-to-r from-orange-500 to-yellow-400 group-hover:scale-125"></span>
        {/* Glow Effect */}
        <span className="absolute inset-0 w-full h-full opacity-50 blur-sm bg-gradient-to-r from-orange-500 to-yellow-400 group-hover:opacity-75 transition-opacity"></span>
        {/* Text */}
        <span className="relative z-10">Book a Demo</span>
      </button>
    </section>
  );
};

export default HeroSection;