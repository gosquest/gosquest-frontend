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

const Page = () => {
   const { user } = useAuthStore();
   const { data, isLoading, isError } = user
      ? useGetAllWebsites()
      : { data: null, isLoading: false, isError: false };

      const { data: likedWebsitesData } = useLikedWebsites(user ? user.id : "");
   const [searchQuery, setSearchQuery] = useState<string>("");

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
               <small className="mb-6">Recent Websites</small>
               <RecentWebsites />
            </div>
            <div className=" border p-4 rounded  w-full  md:w-[40%] xl:w-[45%]">
               <p className="font-semibold  mb-4">
                  Websites Ratings
               </p>
               <div className=" mt-4">
                  <RatingsChart websiteData={data}/>
               </div>
            </div>
         </section>
         </div>
      </main>
   );
};

export default Page;
