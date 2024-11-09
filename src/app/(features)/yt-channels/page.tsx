"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Link from "next/link";
import { channels } from "@/utils/data";

const fadeIn = (
   direction: "up" | "down" = "up",
   type: "spring" | "tween" = "spring",
   delay = 0,
   duration = 0.75
) => ({
   initial: { opacity: 0, y: direction === "up" ? 20 : -20 },
   animate: { opacity: 1, y: 0, transition: { type, delay, duration } },
});

type ChannelCardProps = {
   name: string;
   link: string;
   index: number;
};

const ChannelCard: React.FC<ChannelCardProps> = ({ name, link, index }) => {
   return (
      <motion.div
         variants={fadeIn("up", "spring", index * 0.2, 0.75)}
         className="w-full sm:w-[300px]"
      >
         <Link href={link} target="_blank" passHref>
            <Tilt
               className="rounded-2xl shadow-lg flex justify-center items-center p-[2px]"
               style={{
                  backgroundImage:
                     "linear-gradient(white, white), linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
               }}
               tiltMaxAngleX={15}
               tiltMaxAngleY={15}
               scale={1.05}
               transitionSpeed={450}
            >
               <div className="flex flex-col items-center justify-center bg-tertiary rounded-2xl w-full min-h-[200px] p-5">
                  <h3 className="text-blue-500 font-bold text-2xl mb-2 text-center">{name}</h3>
                  <span className="text-blue-400 underline hover:text-blue-300 text-center">
                     Visit Channel
                  </span>
               </div>
            </Tilt>
         </Link>
      </motion.div>
   );
};

const Channels = () => {
   return (
      <div className="py-10 px-5">
         <motion.div
            initial="hidden"
            animate="visible"
            variants={{
               visible: { opacity: 1, y: 0 },
               hidden: { opacity: 0, y: 20 },
            }}
         >
            <h2 className="text-center text-main font-bold text-4xl mb-10">
               Gospel Channels
            </h2>
         </motion.div>

         <div className="flex flex-wrap justify-center gap-8">
            {channels.map((channel, index) => (
               <ChannelCard
                  key={channel.id}
                  name={channel.name}
                  link={channel.link}
                  index={index}
               />
            ))}
         </div>
      </div>
   );
};

export default Channels;
