"use client";

import React from "react";
import MobileNav from "@/components/MobileNav";
import {  useGetAllWebsites } from "@/hooks/useWebsites";
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
import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import HandleFailed from "@/components/HandleFailed";

const Website = () => {
   const { data, isLoading, isError } = useGetAllWebsites();

   if (isLoading) {
      return <p className="text-center">Fetching websites...</p>;
   }

   if (isError) {
      return <HandleFailed />;
   }

   return (
      <>
         <MobileNav />
         <div className="">
            <h2 className="text-xl font-semibold">Websites</h2>
            <Table>
               <TableCaption>A list of your websites.</TableCaption>
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
                  {data.websites.map((website: any, index: number) => (
                     <TableRow key={website.id}>
                        <TableCell className="font-medium">
                           {index + 1}
                        </TableCell>
                        <TableCell className="font-medium">
                           {website.name}
                        </TableCell>
                        <TableCell>
                           <img
                              src={website.logo}
                              alt={website.name}
                              className="h-24"
                           />
                        </TableCell>
                        <TableCell className="">
                           {website.description}
                        </TableCell>
                        <TableCell className="">
                           <div className="flex items-center justify-center">
                              <Link
                                 href={`/admin/websites/${website.id}`}
                                 className="px-3 py-2.5 hover:bg-white transition-all duration-300"
                              >
                                 <Edit className="w-4 h-4" />
                              </Link>
                              <Button
                                 variant="ghost"
                                 size="sm"
                                 className="hover:!bg-white !rounded"
                              >
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

export default Website;
