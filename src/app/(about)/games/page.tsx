"use client";
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from "three";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PlanetProps {
  radius: number;
  color: string;
  name: string;
  speed: number;
  onClick: (planetInfo: { name: string; description: string; link: string }) => void;
}

const Sun = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="gold" />
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.5}
        color="black"
        anchorX="center"
        anchorY="middle"
        outlineColor="white"
        outlineWidth={0.05}
      >
        Gospel Games
      </Text>
    </mesh>
  );
};

const GamePlanets = ({ onPlanetClick }: { onPlanetClick: (planetInfo: { name: string; description: string; link: string }) => void }) => {
  const games = [
    { name: 'Game 1', color: 'red', radius: 2, speed: 0.004, description: 'Description for Game 1', link: 'https://example.com/game1' },
    { name: 'Game 2', color: 'blue', radius: 3, speed: 0.006, description: 'Description for Game 2', link: 'https://example.com/game2' },
    { name: 'Game 3', color: 'green', radius: 4, speed: 0.005, description: 'Description for Game 3', link: 'https://example.com/game3' },
    { name: 'Game 4', color: 'yellow', radius: 5, speed: 0.002, description: 'Description for Game 4', link: 'https://example.com/game4' },
    { name: 'Game 5', color: 'black', radius: 5, speed: 0.003, description: 'Description for Game 5', link: 'https://example.com/game5' },
  ];

  return (
    <>
      {games.map((game, index) => (
        <Planet
          key={index}
          radius={game.radius}
          color={game.color}
          name={game.name}
          speed={game.speed}
          onClick={onPlanetClick}
        />
      ))}
    </>
  );
};

const Planet: React.FC<PlanetProps> = ({ radius, color, name, speed, onClick }) => {
  const ref = useRef<THREE.Mesh>(null);
  const angleRef = useRef(0);

  useFrame(() => {
    angleRef.current += speed;
    if (ref.current) {
      // Calculate new positions based on angle and radius
      const x = radius * Math.cos(angleRef.current);
      const z = radius * Math.sin(angleRef.current);
      
      // Keep planets within bounds of the visible area
      if (Math.abs(x) < 5 && Math.abs(z) < 5) {
        ref.current.position.x = x;
        ref.current.position.z = z;
      }
    }
  });

  const handleClick = () => {
    onClick({ name, description: `This is ${name}.`, link: `https://example.com/${name.toLowerCase().replace(/\s/g, '')}` });
  };

  return (
    <mesh ref={ref} onClick={handleClick}>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial color={color} />
      <Text
        position={[0, 0.4, 0]}  // Move the text above the planet
        fontSize={0.1}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineColor="black"
        outlineWidth={0.02}
      >
        {name}
      </Text>
    </mesh>
  );
};

const Stars = () => {
  const count = 10000;
  const starsRef = useRef<THREE.Mesh[]>([]);

  useFrame(() => {
    starsRef.current.forEach((star) => {
      if (star) {
        // Randomly move each star slightly
        star.position.y += THREE.MathUtils.randFloat(-0.01, 0.01); // Vertical movement
        star.position.x += THREE.MathUtils.randFloat(-0.01, 0.01); // Horizontal movement
        star.position.z += THREE.MathUtils.randFloat(-0.01, 0.01); // Depth movement

        // Optional: Reset star positions if they go out of a certain range to create a looping effect
        if (star.position.y > 50 || star.position.y < -50) {
          star.position.y = THREE.MathUtils.randFloatSpread(100);
        }
        if (star.position.x > 50 || star.position.x < -50) {
          star.position.x = THREE.MathUtils.randFloatSpread(100);
        }
        if (star.position.z > 50 || star.position.z < -50) {
          star.position.z = THREE.MathUtils.randFloatSpread(100);
        }
      }
    });
  });

  const stars = new Array(count).fill(0).map((_, index) => {
    const x = THREE.MathUtils.randFloatSpread(100);
    const y = THREE.MathUtils.randFloatSpread(100);
    const z = THREE.MathUtils.randFloatSpread(100);

    return (
      <mesh key={index} position={[x, y, z]} ref={(el) => starsRef.current[index] = el!}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color={Math.random() < 0.5 ? "white" : "cyan"} />
      </mesh>
    );
  });

  return <>{stars}</>;
};

const GamesPage: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [planetInfo, setPlanetInfo] = useState<{ name: string; description: string; link: string } | null>(null);

  const handlePlanetClick = (info: { name: string; description: string; link: string }) => {
    setPlanetInfo(info);
    setDialogOpen(true);
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Sun />
        <GamePlanets onPlanetClick={handlePlanetClick} />
        <Stars />
        <OrbitControls enableZoom={false} />
      </Canvas>

      {planetInfo && (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{planetInfo.name}</DialogTitle>
              <DialogDescription>
                {planetInfo.description}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <a href={planetInfo.link} target="_blank" rel="noopener noreferrer">
                <button type="button">Go to Link</button>
              </a>
              <button type="button" onClick={() => setDialogOpen(false)}>Close</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default GamesPage;
