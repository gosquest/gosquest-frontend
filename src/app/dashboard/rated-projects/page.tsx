"use client"

import { CardContent } from "@/components/Card";
import React from "react";
import MobileNav from "@/components/MobileNav";
import { useGetRatedProjects } from "@/hooks/useProject";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
   const { user } = useAuthStore()
   const { data, isLoading, isError } = useGetRatedProjects(user.id)
   const router = useRouter()

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
      <main>
         <MobileNav />
         {data?.data.length > 0 ? (
            <div>
               <h4 className="px-4 md:p-0 text-center">Projects You Have Previously Rated</h4>
               <div className="rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2 p-4 md:p-0">
                  {data.data.map((project: any) => (
                     <Link href={`/dashboard/projects/${project.id}`} className="bg-white shadow-lg">
                        <CardContent
                           key={project.id}
                           className="flex items-center bg-input justify-center h-32 md:h-40 cursor-pointer"
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
            </div>
         ) : (
            <div className="flex flex-col items-center justify-center h-[40vh]">
               <h2 className="text-2xl font-bold text-gray-700">
                  No Projects Rated Yet
               </h2>
               <p className="text-gray-600 mb-4">
                  You haven't rated any projects. Start by reviewing the ones available!
               </p>
            </div>
         )}
      </main>
   );
};

export default page;