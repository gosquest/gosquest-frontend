"use client";
import { CardContent } from "@/components/Card";
import React from "react";
import MobileNav from "@/components/MobileNav";
import { useGetAllProjects } from "@/hooks/useProject";

import HandleFailed from "@/components/HandleFailed";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Feedbacks = () => {
   const { data, isLoading, isError } = useGetAllProjects();

   const router = useRouter()

   if (isLoading) {
      return <p className="text-center">Fetching projects...</p>;
   }

   if (isError) {
      return (
         <HandleFailed />
      );
   }

   // Calculate total number of feedbacks
   const totalFeedbacks = data?.projects?.reduce((total: any, project: any) => {
      return total + project.Rating.length;
   }, 0);

   return (
      <>
         <MobileNav />
         <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {data?.projects?.map((project: any) => (
                  <Link href={`/admin/feedbacks/${project.id}`} key={project.id} className="bg-white rounded-lg shadow-md">
                     <CardContent className="relative flex items-center justify-center h-40 bg-gray-100 rounded-t-lg cursor-pointer">
                        <img
                           src={project.logo}
                           alt={`${project.name} logo`}
                           className="max-h-20"
                        />
                        {project.Rating.length > 0 &&
                           <div className="absolute top-4 right-4 bg-main rounded-full text-white w-6 h-6 text-xs flex items-center justify-center">
                              {project.Rating.length}
                           </div>}
                     </CardContent>
                     <div className="p-4">
                        <h2 className="text-lg font-semibold">{project.name}</h2>
                     </div>
                  </Link>
               ))}
            </div>
         </div>
      </>
   );
};

export default Feedbacks;