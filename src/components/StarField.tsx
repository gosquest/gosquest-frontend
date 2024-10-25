"use client";
import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const StarField = () => {
  const starsRef = useRef<THREE.Points>(null);

  const generateStarPositions = (count: number) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2000;
    }
    return positions;
  };

  useFrame(() => {
    if (!starsRef.current) return;
    starsRef.current.rotation.y += 0.001; 
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={generateStarPositions(5000)} 
          count={5000}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#021b39" size={0.7} /> {/* Star color set to #021b39 */}
    </points>
  );
};

const StarFieldBackground = () => {
  return (
    <Canvas style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
      <color attach="background" args={["#fff"]} /> {/* Light background color */}
      <StarField />
    </Canvas>
  );
};

export default StarFieldBackground;
