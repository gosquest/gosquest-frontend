"use client";


import { useGetAllWebsites } from "@/hooks/useWebsites";
import React, { useState, useEffect } from "react";
import MobileNav from "@/components/MobileNav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Link from "next/link";

const shuffleArray = (array: any[]) => {
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
};

const fadeIn = (
   delay = 0,
   duration = 0.75
) => ({
   initial: { opacity: 0, y: 20 },
   animate: { opacity: 1, y: 0, transition: { delay, duration } },
});

const Page = () => {
   const { data, isLoading, isError } =useGetAllWebsites()
 

   const [searchQuery, setSearchQuery] = useState<string>("");
   const [shuffledWebsites, setShuffledWebsites] = useState<any[]>([]);

   useEffect(() => {
      if (data?.websites) {
         const shuffled = shuffleArray([...data.websites]);
         setShuffledWebsites(shuffled);
      }
   }, [data]);

   if (isLoading) {
      return <p className="text-center">Fetching websites...</p>;
   }

   if (isError) {
      return (
         <main className="flex flex-col justify-center">
            <p className="text-center text-red-500 mb-3">Failed to fetch websites</p>
            <Button variant={"secondary"} onClick={() => location.reload()}>
               Reload
            </Button>
         </main>
      );
   }

   const filteredWebsites = shuffledWebsites.filter((website: any) =>
      website.name.toLowerCase().includes(searchQuery.toLowerCase())
   );

   return (
      <main className="px-6 md:px-2 container">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 md:p-0 text-center md:flex justify-between items-center mb-6 md:mb-8"
         >
            <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200">All Websites</h4>
            <Input
               type="text"
               placeholder="Search by website title..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full md:w-1/3 px-3 py-5 bg-input mt-4 md:mt-0 rounded outline-none"
            />
         </motion.div>

         {filteredWebsites.length > 0 ? (
            <div className="rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 p-4 md:p-0">
               {filteredWebsites.map((website: any, index: number) => (
                  <motion.div
                     key={website.id}
                     variants={fadeIn(index * 0.2, 0.75)}
                     initial="initial"
                     animate="animate"
                  >
                     <Link href={`/dashboard/websites/${website.id}`} passHref>
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
                              <h3 className="text-blue-500 font-bold text-2xl mb-2 text-center">
                                 {website.name}
                              </h3>
                              <Link className="text-blue-400 underline hover:text-blue-300 text-center" href={website.url}>
                        
                                 Visit Website
                              </Link>
                           </div>
                        </Tilt>
                     </Link>
                  </motion.div>
               ))}
            </div>
         ) : (
            <div className="flex flex-col items-center justify-center h-[40vh]">
               <h2 className="text-2xl font-bold text-main">Not found</h2>
            </div>
         )}
         {data?.websites.length <= 0 && (
            <div className="flex flex-col items-center justify-center h-[40vh]">
               <h2 className="text-2xl font-bold text-main">No websites</h2>
            </div>
         )}
      </main>
   );
};

export default Page;
