"use client"
import React from "react";
import { useGetProjectById } from "@/hooks/useProject";
import { useParams } from "next/navigation";
import HandleFailed from "@/components/HandleFailed";
import { toast } from "react-toastify";
import { useGetAllUsersByAdmin } from "@/hooks/useAuth";

const Feedback = () => {
   const params = useParams();

   const { data, isLoading, isError } = useGetProjectById(params.slug[0]);
   const { data: users, isPending, isError: userError } = useGetAllUsersByAdmin()

   if (isLoading || isPending) {
      return <p className="text-center">Fetching projects...</p>;
   }

   if (isError || !data.success || !users.success || userError) {
      toast.error(data.message)
      return <HandleFailed />;
   }

   const { project } = data;

   return (
      <div>
         <h2>Feedback</h2>
         <div className="flex flex-col gap-6 bg-white p-6">
            <div className="flex justify-between">
               <div className="flex gap-4">
                  <img
                     src={project.logo}
                     alt={project.name}
                     className="w-16 h-16 object-cover"
                  />
                  <div>
                     <p className="text-main">{project.name}</p>
                     <p>{project.fields.join(", ")}</p>
                  </div>
               </div>
            </div>
            <div className="md:ml-10">
               <p className="md:w-5/6">
                  <span className="font-bold">Description:</span>{" "}
                  {project.description}
               </p>

               <p className="mt-6">
                  Visit Our website on 👉
                  <a
                     href={project.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-main underline ml-4"
                  >
                     {project.link}
                  </a>
               </p>

               <div className="mt-10 flex gap-6 flex-col">
                  <h4>Feedbacks ({project.Rating.length})</h4>

                  {project.Rating.map((rating: any, index: number) => (
                     <div key={rating.id} className="flex gap-4">
                        <div className="bg-gray-100 text-main rounded-full w-6 h-6 flex items-center justify-center text-xs">
                           {index + 1}
                        </div>
                        <div className="px-5 py-2 bg-gray-100 flex flex-col gap-2 w-5/6">
                           <p className="text-main">
                              {
                                 users.data.find((user: any) => user.id === rating.userId).fullName
                              }
                           </p>
                           <p>{rating.feedback || "No feedback provided."}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Feedback;