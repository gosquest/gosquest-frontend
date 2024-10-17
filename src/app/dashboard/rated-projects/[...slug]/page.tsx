"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useGetProjectById } from "@/hooks/useWebsites";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { isValidUUID } from "@/utils/constants";
import InvalidRequest from "@/components/IsValidUUID";

const RatedProject: React.FC = () => {
   const router = useRouter();
   const params = useParams();

   const projectId = params.slug[0];

   const { data, isLoading, isError } = useGetProjectById(projectId);

   if (!isValidUUID(projectId)) {
      return <InvalidRequest />;
   }

   if (isLoading) {
      return <p className="text-center">Fetching project...</p>;
   }

   if (isError || !data || !data.project) {
      return (
         <main className="flex flex-col justify-center min-h-screen items-center gap-4">
            <p className="text-center text-red-500 mb-3">Project not found</p>
            <Button
               variant="secondary"
               onClick={() => router.push("/dashboard")}
               className="w-fit"
            >
               Go back to Dashboard
            </Button>
         </main>
      );
   }

   return (
      <>
         <div
            className="fixed bg-background rounded-full top-4 left-4 z-30 p-2 md:hidden cursor-pointer"
            onClick={() => router.push("/dashboard")}
         >
            <ArrowLeft size={21} />
         </div>
         <div className="w-full">
            <h3 className="mb-4 text-right md:text-start mt-4 md:mt-0 mr-4 md:mr-0">
               {data.project.name}
            </h3>
            <div className="mb-3 relative">
               <img
                  src={data.project.cover_image}
                  alt={data.project.cover_image}
                  className="w-full h-[30vh] sm:h-[40vh] object-cover"
               />
               <div className="absolute flex items-center justify-center h-full w-full top-0">
                  <img
                     src={data.project.logo}
                     alt={data.project.logo}
                     className="object-cover max-h-[10rem]"
                  />
               </div>
            </div>
            <div className="p-4">
               <h3 className="text-main">Description</h3>
               <p className="mt-3">{data.project.description}</p>
               <div className="mt-4">
                  <p>
                     For more visit:{" "}
                     <Link
                        href={data.project.link}
                        className="text-main ml-2 hover:text-blue-500 hover:underline"
                        target="_blank"
                     >
                        {data.project.name}
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </>
   );
};

export default RatedProject;
