"use client"
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { SwordModel } from "./SwordModel";
import * as THREE from "three"


const RotatingSword: React.FC = () => {
  const swordRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (swordRef.current) {
      swordRef.current.rotation.y = t;
      swordRef.current.position.x = Math.sin(t) * 3; 
      swordRef.current.position.z = Math.cos(t) * 3;
    }
  });

  return <SwordModel ref={swordRef} />;
};

export default RotatingSword;
