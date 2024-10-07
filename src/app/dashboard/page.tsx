"use client";

import { CardContent } from "@/components/Card";
import React, { useState } from "react";
import MobileNav from "@/components/MobileNav";
import { useGetUnRatedProjects } from "@/hooks/useProject";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";

const page = () => {
   const { user } = useAuthStore();
   const { data, isLoading, isError } = useGetUnRatedProjects(user.id);

   // State for search query
   const [searchQuery, setSearchQuery] = useState<string>("");

   if (isLoading) {
      return <p className="text-center">Fetching projects...</p>;
   }

   if (isError) {
      return (
         <main className="flex flex-col justify-center">
            <p className="text-center text-red-500 mb-3">Failed to fetch projects</p>
            <Button variant={"secondary"} onClick={() => location.reload()}>
               Reload
            </Button>
         </main>
      );
   }

   // Filter projects by search query
   const filteredProjects = data?.data.filter((project: any) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase())
   );

   return (
      <main>
         <MobileNav />
         <div className="px-4 md:p-0 text-center">
            <h4>Projects Awaiting Your Rating</h4>
            <Input
               type="text"
               placeholder="Search by project name..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full md:w-1/3 px-3 py-3 bg-white rounded mt-4 outline-none"
            />
         </div>

         {filteredProjects?.length > 0 ? (
            <div className="rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 p-4 md:p-0">
               {filteredProjects.map((project: any) => (
                  <Link href={`/dashboard/projects/${project.id}`} 
                  className="bg-white shadow" key={project.id}>
                     <CardContent
                        key={project.id}
                        className="flex items-center bg-slate-50 justify-center h-32 md:h-40 cursor-pointer"
                     >
                        <img
                           src={project.logo}
                           alt={project.name}
                           className="max-h-28 md:max-h-32"
                        />
                     </CardContent>
                     <p className="p-4 text-lg font-medium">{project.name}</p>
                  </Link>
               ))}
            </div>
         ) : (
            <div className="flex flex-col items-center justify-center h-[40vh]">
               <h2 className="text-2xl font-bold text-gray-700">All caught up! 🎉</h2>
               <p className="text-gray-600 mb-4">You've rated all the projects. Thanks!</p>
            </div>
         )}
      </main>
   );
};

export default page;