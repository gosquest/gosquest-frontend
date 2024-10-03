"use client"

import React from "react";
import MobileNav from "@/components/MobileNav";
import { useGetAllProjects } from "@/hooks/useProject";
import { Button } from "@/components/ui/button";
import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { Edit, Trash2 } from "lucide-react"; // Importing icons
import Link from "next/link";

const page = () => {
   const { data, isLoading, isError } = useGetAllProjects();

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

   return (
      <>
         <MobileNav />
         <div className="">
            <h2 className="text-xl font-semibold">Projects</h2>
            <Table>
               <TableCaption>A list of your projects.</TableCaption>
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-[30px]">No</TableHead>
                     <TableHead className="w-[100px]">Name</TableHead>
                     <TableHead className="w-[140px]">Logo</TableHead>
                     <TableHead>Description</TableHead>
                     <TableHead className="text-center">Actions</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {data.projects.map((project: any, index: number) => (
                     <TableRow key={project.id}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell className="font-medium">{project.name}</TableCell>
                        <TableCell>
                           <img
                              src={project.logo}
                              alt={project.name}
                              className="h-24"
                           />
                        </TableCell>
                        <TableCell className="">{project.description}</TableCell>
                        <TableCell className="">
                           <div className="flex items-center justify-center">
                              <Link href={`/admin/projects/${project.id}`} className="px-3 py-2.5 hover:bg-white transition-all duration-300">
                                 <Edit className="w-4 h-4" />
                              </Link>
                              <Button variant="ghost" size="sm" className="hover:!bg-white !rounded">
                                 <Trash2 className="w-4 h-4 text-red-500" />
                              </Button>
                           </div>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </div>
      </>
   );
};

export default page;