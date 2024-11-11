"use client";
import React, { useRef, useState } from "react";
import { Canvas, extend, ReactThreeFiber, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
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
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { shaderMaterial } from "@react-three/drei";

interface PlanetProps {
   radius: number;
   color: string;
   name: string;
   speed: number;
   description: string;
   link: string;
   onClick: (planetInfo: {
      name: string;
      description: string;
      link: string;
   }) => void;
}

const GradientMaterial = shaderMaterial(
   { color1: new THREE.Color("#1288ff"), color2: new THREE.Color("#ec03fc") },
   `
      varying vec2 vUv;
      void main() {
         vUv = uv;
         gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
   `,
   `
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec2 vUv;
      void main() {
         gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
   `
);

extend({ GradientMaterial });

declare global {
   namespace JSX {
      interface IntrinsicElements {
         gradientMaterial: ReactThreeFiber.Object3DNode<
            typeof GradientMaterial,
            typeof GradientMaterial
         >;
      }
   }
}

const GradientText: React.FC<{ position: [number, number, number] }> = ({
   position,
}) => {
   return (
      <Text
         position={position}
         fontSize={0.5}
         anchorX="center"
         anchorY="middle"
         outlineColor="white"
         outlineWidth={0.05}
      >
         <gradientMaterial />
         Gospel Games
      </Text>
   );
};

const Sun = () => {
   return (
      <mesh>
         <sphereGeometry args={[1, 32, 32]} />
         <meshStandardMaterial color="white" />
         <GradientText position={[0, 1.5, 0]} />
      </mesh>
   );
};

const GamePlanets = ({
   onPlanetClick,
}: {
   onPlanetClick: (planetInfo: {
      name: string;
      description: string;
      link: string;
   }) => void;
}) => {
   const games = [
      {
         name: "Bible Trivia",
         color: "#6086f7",
         radius: 4,
         speed: 0.004,
         description:
            "Bible trivia is a fun way to challenge your knowledge of the Bible and learn new facts about this ancient text",
         link: "https://www.christianity.com/trivia",
      },
      {
         name: "Bible Word Puzzle",
         color: "#f760ef",
         radius: 3,
         speed: 0.006,
         description:
            "It is a word connect game that you will learn Bible words, unlock Bible verses, pass Bible quiz and solve Bible puzzles with friends.",
         link: "https://play.google.com/store/apps/details?id=bible.wordgame.words.connect.crossword.cookies&hl=en_US",
      },
      {
         name: "Bible Charades",
         color: "#060a4f",
         radius: 4,
         speed: 0.005,
         description:
            "In this engaging, laughter-filled game, players take turns acting out Bible-themed prompts",
         link: "https://thegame-room.com/products/christian-charades-for-adults-church",
      },
      {
         name: "Gate Zero",
         color: "#fafafc",
         radius: 5,
         speed: 0.002,
         description:
            "Travel through time to ancient Israel in this compelling story-rich adventure. Explore a rich historical world as you engage with familiar events from the 1st century.",
         link: "https://gatezero.game",
      },
      {
         name: "Jigsaw Puzzle",
         color: "black",
         radius: 5,
         speed: 0.003,
         description:
            "Jigsaw Puzzle Games: Bible App is built by programmers team Min Mana",
         link: "https://play.google.com/store/apps/details?id=com.biblestudios.jigsawpuzzle&hl=en_ZA",
      },
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
               description={game.description}
               link={game.link}
               onClick={() => onPlanetClick(game)}
            />
         ))}
      </>
   );
};

const Planet: React.FC<PlanetProps> = ({
   radius,
   color,
   name,
   speed,
   description,
   link,
   onClick,
}) => {
   const ref = useRef<THREE.Mesh>(null);
   const angleRef = useRef(0);

   useFrame(() => {
      angleRef.current += speed;
      if (ref.current) {
         const x = radius * Math.cos(angleRef.current);
         const z = radius * Math.sin(angleRef.current);

         if (Math.abs(x) < 5 && Math.abs(z) < 5) {
            ref.current.position.x = x;
            ref.current.position.z = z;
         }
      }
   });

   return (
      <mesh
         ref={ref}
         onClick={() => onClick({ name, description, link })}
      >
         <sphereGeometry args={[0.2, 16, 16]} />
         <meshStandardMaterial color={color} />
         <Text
            position={[0, 0.4, 0]}
            fontSize={0.2}
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

const GamesPage: React.FC = () => {
   const [dialogOpen, setDialogOpen] = useState(false);
   const [planetInfo, setPlanetInfo] = useState<{
      name: string;
      description: string;
      link: string;
   } | null>(null);

   const handlePlanetClick = (info: {
      name: string;
      description: string;
      link: string;
   }) => {
      setPlanetInfo(info);
      setDialogOpen(true);
   };

   return (
      <div style={{ height: "100vh", width: "100vw" }}>
         <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Sun />
            <GamePlanets onPlanetClick={handlePlanetClick} />
            <OrbitControls enableZoom={false} />
         </Canvas>

         {planetInfo && (
            <Dialog
               open={dialogOpen}
               onOpenChange={setDialogOpen}
            >
               <DialogContent
                  className="w-[90%] sm:max-w-[425px] bg-white p-[2px]"
                  style={{
                     backgroundImage:
                        "linear-gradient(white, white), linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
                     backgroundOrigin: "border-box",
                     backgroundClip: "content-box, border-box",
                  }}
               >
                  <DialogHeader className="px-6 pt-4">
                     <DialogTitle>
                        <small className="text-main">
                           Find Gospel Games On GosQuest
                        </small>
                     </DialogTitle>
                  </DialogHeader>

                  <div className="p-6 flex flex-col gap-4 ">
                     <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200">
                        {planetInfo.name}
                     </h3>
                     <p>{planetInfo.description}</p>

                     <Button className="bg-gradient-to-br from-pink-200 via-[#64A2FF] to-blue-500 w-fit">
                        <Link
                           href={planetInfo.link}
                           target="_blank"
                        >
                           Play {planetInfo.name}
                        </Link>
                     </Button>
                  </div>
               </DialogContent>
            </Dialog>
         )}
      </div>
   );
};

export default GamesPage;
