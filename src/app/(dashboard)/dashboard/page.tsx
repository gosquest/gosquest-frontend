import { CardContent } from "@/components/Card";
import Image from "next/image";
import React from "react";
import fishot from "../../../../public/uploads/fishot.png";

const page = () => {
   return (
      <div>
         <h2>Projects</h2>
         <div className=" rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 p-14">
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
   );
};

export default page;
