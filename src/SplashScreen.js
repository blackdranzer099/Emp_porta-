import React, { useEffect, useRef } from "react";

const SplashScreen = ({ onAnimationEnd }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let opacity = 0;
    let radius = 10;
    let growing = true;
    let animationFrame;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background fade-in effect
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.font = "bold 60px Arial";
      ctx.textAlign = "center";
      ctx.fillText("Welcome!", canvas.width / 2, canvas.height / 2);

      // Pulsating circle animation
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2 + 80, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fill();
      ctx.closePath();

      if (growing) {
        radius += 1;
        if (radius > 50) growing = false;
      } else {
        radius -= 1;
        if (radius < 10) growing = true;
      }

      // Fade in effect
      if (opacity < 1) {
        opacity += 0.01;
      }

      // Stop animation after 5 seconds
      if (opacity >= 1) {
        setTimeout(() => {
          if (onAnimationEnd) onAnimationEnd(); // Callback to remove splash
        }, 2000);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [onAnimationEnd]);

  return (
    <canvas ref={canvasRef} style={{ background: "black", position: "absolute", top: 0, left: 0 }} />
  );
};

export default SplashScreen;
