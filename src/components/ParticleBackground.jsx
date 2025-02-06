import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const Particles = () => {
  const ref = useRef();
  const particleCount = 5000;

  // Generate random positions for particles
  const particles = new Float32Array(particleCount * 3).map(() => (Math.random() - 0.5) * 10);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 4; // Slowly rotate particles
      ref.current.rotation.y -= delta / 8;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3}>
      
      <PointMaterial
        transparent
        color= "#ff6000"// Customize based on your logo
        size={0.02}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

const ParticleBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      style={{
        position: "fixed", // Fix the canvas to the screen
        top: 0,
        left: 0,
        width: "100vw", // Full viewport width
        height: "100vh", // Full viewport height
        zIndex: -1, // Place it behind all other content
      }}
    >
      <Particles />
    </Canvas>
  );
};

export default ParticleBackground;