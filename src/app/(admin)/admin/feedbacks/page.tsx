import { CardContent } from "@/components/Card";
import Image from "next/image";
import React from "react";
import fishot from "../../../../../public/uploads/fishot.png";
import MobileNav from "@/components/MobileNav";

const Feedbacks = () => {
   return (
      <>
         <MobileNav />
         <div>
            <h3>Feedbacks</h3>
            <div className="bg-submain rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 p-6">
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

export default Feedbacks;
