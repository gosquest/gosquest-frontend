"use client";
import React from "react";
import PageTitle from "@/components/PageTitle";
import RatingsTable from "@/components/RatingsTable";
import { Button } from "@/components/ui/button";
import { useGetAllProjects } from "@/hooks/useWebsites";

const ProjectRating = () => {
   const { data, isLoading, isError } = useGetAllProjects();

   if (isLoading) {
      return <p className="text-center">Fetching projects...</p>;
   }

   const projects = data.projects.map((project: any) => ({
      id: project.id,
      name: project.name,
      team_leader: project.team_leader,
      fields: project.fields,
      rating:
         project.Rating?.length > 0
            ? {
                 relevance: project.Rating[0].relevance,
                 impact_to_society: project.Rating[0].impact_to_society,
                 performance: project.Rating[0].performance,
                 progress: project.Rating[0].progress,
                 feedback: project.Rating[0].feedback,
              }
            : null,
   }));

   if (isError) {
      return (
         <main className="flex flex-col justify-center">
            <p className="text-center text-red-500 mb-3">
               Failed to fetch projects
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
   return (
      <div>
         <PageTitle title="Project Rating" />
         <div className="bg-white p-4 mt-6">
            <p className="mb-6">Project summary</p>
            <RatingsTable projects={projects} />
         </div>
      </div>
   );
};

export default ProjectRating;
