"use client";

import React, { useEffect } from "react";
import { ArrowLeft, ThumbsDown, ThumbsUp } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useGetWebsiteById } from "@/hooks/useWebsites";
import { useCreateLikeDislike } from "@/hooks/useRatings";
import { useAuthStore } from "@/store/useAuthStore";
import HeaderImg from "../../../../../public/images/websiteHeader.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WebsitePage: React.FC = () => {
   const router = useRouter();
   const params = useParams();

   const slug = params.slug && Array.isArray(params.slug) ? params.slug[0] : "";

   const { data, isLoading, isError } = useGetWebsiteById(slug);
   const { mutate: createLikeDislike } = useCreateLikeDislike();

   const { user } = useAuthStore();

   const handleLike = () => {
      createLikeDislike(
         {
            userId: user ? user.id : "",
            websiteId: data.website.id,
            like: true,
         },
         {
            onSuccess: () => {
               toast.success("You liked the website!");
            },
            onError: () => {
               toast.error("Failed to like the website.");
            },
         }
      );
   };

   const handleDislike = () => {
      createLikeDislike(
         {
            userId: user ? user.id : "",
            websiteId: data.website.id,
            like: false,
         },
         {
            onSuccess: () => {
               toast.success("You disliked the website!");
            },
            onError: () => {
               toast.error("Failed to dislike the website.");
            },
         }
      );
   };

   if (isLoading) {
      return <p className="text-center">Fetching website...</p>;
   }

   if (isError) {
      return (
         <main className="flex flex-col justify-center">
            <p className="text-center text-red-500 mb-3">
               Failed to fetch website
            </p>
            <Button
               variant="secondary"
               onClick={() => location.reload()}
            >
               Reload
            </Button>
         </main>
      );
   }

   if (!data?.website) {
      console.log("No website data available.");
      router.push("/not-found");
      return null;
   }

   return (
      <AnimatePresence>
         <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
         >
            <div
               className="fixed bg-background rounded-full top-4 left-4 z-30 p-2 md:hidden cursor-pointer"
               onClick={() => router.push("/dashboard")}
            >
               <ArrowLeft size={21} />
            </div>

            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="w-full"
            >
               <h3 className="mb-4 text-right md:text-start mt-4 md:mt-0 mr-4 md:mr-0 text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200">
                  {data.website.name}
               </h3>

               <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="mb-3 relative"
               >
                  <Image
                     src={HeaderImg}
                     alt={data.website.name}
                     className="w-full h-[30vh] sm:h-[40vh] object-cover mt-8 md:mt-0 brightness-50"
                  />
                  <div className="absolute flex items-center justify-center h-full w-full top-0 ">
                     <h3 className="text-white">{data.website.name}</h3>
                  </div>
               </motion.div>

               <div className="p-4 md:p-4">
                  <motion.h3
                     initial={{ y: -20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.5, delay: 0.4 }}
                     className="text-main"
                  >
                     Description
                  </motion.h3>
                  <motion.p
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.6, delay: 0.5 }}
                     className="mt-3 text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-400"
                  >
                     {data.website.description}
                  </motion.p>
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ duration: 0.6, delay: 0.7 }}
                     className="mt-4"
                  >
                     <p>
                        For more visit:
                        <Link
                           href={data.website.url}
                           className="text-blue-400 ml-2 hover:text-blue-500 hover:underline"
                           target="_blank"
                        >
                           {data.website.name}
                        </Link>
                     </p>
                  </motion.div>
                  <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.8 }}
                     className="mt-6 flex gap-4"
                  >
                     <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 p-2 px-4 rounded-lg cursor-pointer text-white bg-green-500 hover:bg-green-600"
                        onClick={handleLike}
                     >
                        <ThumbsUp size={20} />
                        Like
                     </motion.div>
                     <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 p-2 px-4 rounded-lg cursor-pointer text-white bg-red-500 hover:bg-red-600"
                        onClick={handleDislike}
                     >
                        <ThumbsDown size={20} />
                        Dislike
                     </motion.div>
                  </motion.div>
               </div>
            </motion.div>
         </motion.div>
      </AnimatePresence>
   );
};

export default WebsitePage;
