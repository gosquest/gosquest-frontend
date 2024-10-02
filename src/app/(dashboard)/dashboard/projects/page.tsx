import { CardContent } from "@/components/Card";
import Image from "next/image";
import React from "react";
import fishot from "../../../../../public/uploads/fishot.png";
import MobileNav from "@/components/MobileNav";

const Projects = () => {
   return (
      <>
         <MobileNav/>
         <div className="p-8">
            <h2 className="sm:mt-[140px] lg:mt-20">Projects</h2>
            <div className="bg-submain rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 md:p-6">
               <CardContent className="flex items-center justify-center bg-white md:h-40 cursor-pointer">
                  <Image
                     src={fishot}
                     alt="project"
                  />
               </CardContent>
               <CardContent className="flex items-center justify-center bg-white md:h-40 cursor-pointer">
                  <Image
                     src={fishot}
                     alt="project"
                  />
               </CardContent>
               <CardContent className="flex items-center justify-center bg-white md:h-40 cursor-pointer">
                  <Image
                     src={fishot}
                     alt="project"
                  />
               </CardContent>
               <CardContent className="flex items-center justify-center bg-white md:h-40 cursor-pointer">
                  <Image
                     src={fishot}
                     alt="project"
                  />
               </CardContent>
               <CardContent className="flex items-center justify-center bg-white md:h-40 cursor-pointer">
                  <Image
                     src={fishot}
                     alt="project"
                  />
               </CardContent>
               <CardContent className="flex items-center justify-center bg-white md:h-40 cursor-pointer">
                  <Image
                     src={fishot}
                     alt="project"
                  />
               </CardContent>
               <CardContent className="flex items-center justify-center bg-white md:h-40 cursor-pointer">
                  <Image
                     src={fishot}
                     alt="project"
                  />
               </CardContent>
               <CardContent className="flex items-center justify-center bg-white md:h-40 cursor-pointer">
                  <Image
                     src={fishot}
                     alt="project"
                  />
               </CardContent>
               <CardContent className="flex items-center justify-center bg-white md:h-40 cursor-pointer">
                  <Image
                     src={fishot}
                     alt="project"
                  />
               </CardContent>
            </div>
         </div>
      </>
   );
};

export default Projects;
