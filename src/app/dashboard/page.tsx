"use client";

import React, { useState, useEffect } from "react";
import MobileNav from "@/components/MobileNav";
import PageTitle from "@/components/PageTitle";
import Card, { CardContent } from "@/components/Card";
import RatingsTable from "@/components/RecentWebsitesTable";
import { RatingsChart } from "@/components/RatingsChart";
import { useGetAllWebsites } from "@/hooks/useWebsites";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/useAuthStore";
import { motion } from "framer-motion";
import { Globe, Heart, Shield, Star } from "lucide-react";
import RecentWebsites from "@/components/RecentWebsitesTable";
import { useLikedWebsites } from "@/hooks/useRatings";
import Link from "next/link";
import { verses } from "@/utils/data";

const Page = () => {
   const { user } = useAuthStore();
   const { data, isLoading, isError } = useGetAllWebsites();

   const { data: likedWebsitesData } = useLikedWebsites(user ? user.id : "");
   const [searchQuery, setSearchQuery] = useState<string>("");
   const [verseOfTheDay, setVerseOfTheDay] = useState({
      verse: "",
      content: "",
   });

   if (isLoading) {
      return <p className="text-center">Fetching websites...</p>;
   }

   if (isError) {
      return (
         <main className="flex flex-col justify-center">
            <p className="text-center text-red-500 mb-3">
               Failed to fetch websites
            </p>
            <Button
               variant={"secondary"}
               onClick={() => location.reload()}
            >
               Reload
            </Button>
         </main>
      );
   }

   // useEffect(() => {
   //    const randomIndex = Math.floor(Math.random() * verses.length);
   //    setVerseOfTheDay(verses[randomIndex]);
   // }, []);

   const generateRandomVerse = () => {
      const randomIndex = Math.floor(Math.random() * verses.length);
      setVerseOfTheDay(verses[randomIndex]);
   };

   const cardData = [
      {
         icon: Globe,
         desc: "Total Websites",

         title: data?.websites?.length || 0,
         color: "#4caf50",
      },
      {
         icon: Star,
         desc: "Total Ratings",
         title: data?.websites?.reduce(
            (acc: any, site: { likes: any[] }) =>
               acc + (site.likes?.length || 0),
            0
         ),
         color: "#ffeb3b",
      },
      {
         icon: Shield,
         desc: "Feedback Given",
         title: data?.websites?.reduce(
            (acc: any, site: { dislikes: any[] }) =>
               acc + (site.dislikes?.length || 0),
            0
         ),
         color: "#ff9800",
      },
      {
         icon: Heart,
         desc: "Total Liked Websites",
         title: likedWebsitesData ? likedWebsitesData.data.length : 0,
         color: "#ff00ff",
      },
   ];

   return (
      <main>
         <MobileNav />
         <div className="p-2 md:p-0">
            <PageTitle title="Overview" />
            <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4 mb-6 mt-6 ">
               {cardData.map((card, index) => (
                  <Card
                     key={index}
                     title={card.title}
                     color={card.color}
                     desc={card.desc}
                     icon={card.icon}
                  />
               ))}
            </section>

            <section className="border-[0.5px] rounded-lg p-4 mt-6 flex gap-6 flex-col md:flex-row">
               <div className="mb-4 border p-4 rounded w-full  md:w-1/2 xl:w-[55%]">
                  <div className="flex justify-between items-center">
                     <small className=" text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200">
                        Recent Websites
                     </small>
                     <Link
                        href="/dashboard/websites"
                        className="bg-gradient-to-br from-pink-200 via-[#64A2FF] to-blue-500 p-2 text-white rounded hover:bg-transparent hover:text-main"
                     >
                        View All{" "}
                     </Link>
                  </div>
                  <div className="mt-4">
                     <RecentWebsites />
                  </div>
               </div>
               <div className=" border p-4 rounded  w-full  md:w-[40%] xl:w-[45%]">
                  <p className="font-semibold  mb-4 text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200">
                     Websites Ratings
                  </p>
                  <div className=" mt-4">
                     <RatingsChart websiteData={data} />
                  </div>
               </div>
            </section>

            <section className="border p-6 rounded-lg mt-6 flex gap-6 flex-col md:flex-row">
               <div className="border p-4 flex flex-col gap-4 w-full md:w-[50%] rounded-lg">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200">
                     {" "}
                     Gospel Youtube channels{" "}
                  </p>
                  <small>Enjoy these amazing gospel Youtube channels</small>
                  <Link
                     href="/dashboard/yt-channels"
                     className="bg-gradient-to-br from-pink-200 via-[#64A2FF] to-blue-500 w-fit px-4 py-2 text-white rounded-lg"
                  >
                     Here
                  </Link>
               </div>
               <div className="border p-4 flex flex-col gap-4 w-full md:w-[50%] rounded-lg">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200">
                     {" "}
                     Verse Generator{" "}
                  </p>
                  <p
                     onClick={generateRandomVerse}
                     className="cursor-pointer hover:text-blue-500"
                  >
                     Generate{" "}
                  </p>
                  <div className="bg-gradient-to-br from-pink-200 via-[#64A2FF] to-blue-500 w-fit px-4 py-2 text-white rounded-lg">
                     <small className="font-semibold text-lg underline">
                        {verseOfTheDay.verse}
                     </small>
                     <p className="italic text-lg">{verseOfTheDay.content}</p>
                  </div>
               </div>
            </section>
         </div>
      </main>
   );
};

export default Page;
