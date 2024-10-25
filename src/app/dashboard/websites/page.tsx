"use client";

import { CardContent } from "@/components/Card";
import React, { useState, useEffect } from "react";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/useAuthStore";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useGetAllWebsites } from "@/hooks/useWebsites";

const shuffleArray = (array: any[]) => {
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
};

const WebsitesPage = () => {
   const { user } = useAuthStore();
   const { data, isLoading, isError } = user
      ? useGetAllWebsites()
      : { data: null, isLoading: false, isError: false };
      
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

   const filteredWebsites = shuffledWebsites.filter((website: any) =>
      website.name.toLowerCase().includes(searchQuery.toLowerCase())
   );

   return (
      <main>
         <MobileNav />
         <div className="px-4 md:p-0 text-center md:flex justify-between items-center mb-6 md:mb-8">
            <h4>All Websites</h4>
            <Input
               type="text"
               placeholder="Search by website title..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full md:w-1/3 px-3 py-5 bg-input mt-4 md:mt-0 rounded outline-none"
            />
         </div>

         {filteredWebsites.length > 0 ? (
            <div className="rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 p-4 md:p-0">
               {filteredWebsites.map((website: any) => (
                  <Link
                     href={`/dashboard/websites/${website.id}`}
                     className="bg-white shadow"
                     key={website.id}
                  >
                     <CardContent
                        key={website.id}
                        className="flex items-center bg-slate-50 justify-center h-32 md:h-40 cursor-pointer"
                     >
                        <img
                           src={website.logo}
                           alt={website.name}
                           className="max-h-28 md:max-h-32 max-w-[90%]"
                        />
                     </CardContent>
                     <p className="p-4 text-lg font-medium text-center">{website.name}</p>
                  </Link>
               ))}
            </div>
         ) : (
            <div className="flex flex-col items-center justify-center h-[40vh]">
               <h2 className="text-2xl font-bold text-gray-700">Not found</h2>
            </div>
         )}
         {data?.websites.length <= 0 && (
            <div className="flex flex-col items-center justify-center h-[40vh]">
               <h2 className="text-2xl font-bold text-gray-700">No websites</h2>
            </div>
         )}
      </main>
   );
};

export default WebsitesPage;
