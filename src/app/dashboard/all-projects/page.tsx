"use client"

import { CardContent } from "@/components/Card";
import React from "react";
import MobileNav from "@/components/MobileNav";
import { useGetAllProjects } from "@/hooks/useProject";
import { Button } from "@/components/ui/button";

const page = () => {
   const { data, isLoading, isError } = useGetAllProjects()

   if (isLoading) {
      return <p className="text-center">Fetching projects...</p>
   }

   if (isError) {
      return (
         <main className="flex flex-col justify-center">
            <p className="text-center text-red-500 mb-3">Failed to fetch projects</p>
            <Button variant={'secondary'} onClick={() => location.reload()}>
               Reload
            </Button>
         </main>
      )
   }

   return (
      <>
         <MobileNav />
         <div>
            <h2>Projects</h2>
            <div className="rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 p-6">
               {
                  data.projects.map((project: any) => {
                     return (
                        <CardContent
                           className="flex items-center bg-input justify-center md:h-40 cursor-pointer"
                        >
                           <img
                              src={project.logo}
                              alt={project.name}
                              className="max-h-40"
                           />
                        </CardContent>
                     )
                  })
               }
            </div>
         </div>
      </>
   );
};

export default page;