"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { verses } from "@/utils/data";


const VerseCarousel: React.FC = () => {
   const controls = useAnimation();

   const marqueeVariants = {
      animate: {
         x: ["0%", "-100%"],
         transition: {
            x: {
               repeat: Infinity,
               repeatType: "loop",
               duration: 20,
               ease: "linear",
            },
         },
      },
   };

   return (
      <div
         className="overflow-hidden whitespace-nowrap  py-4 min-h-[20vh] flex  items-center mt-4"
         onMouseEnter={() => controls.stop()}
         onMouseLeave={() => controls.start("animate")}
      >
         <motion.div
            className="flex gap-8"
            variants={marqueeVariants}
            animate={controls}
         >
            {verses.map(({ id, verse, content }) => (
               <div key={id} className="text-lg font-medium px-4 bg-gradient-to-br from-pink-200 via-[#64A2FF] to-blue-500 p-6 rounded-lg text-white">
                  <h3 className="text-indigo-600 font-semibold">{verse}:</h3> 
                  <p className="text-2xl">{content}</p>
               </div>
            ))}
         </motion.div>
      </div>
   );
};

export default VerseCarousel;
