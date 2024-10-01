/** @format */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import welcome from "../../public/svg/welcome.svg";
import flo from "../../public/svg/flo.svg";
import Link from "next/link";

const page = () => {
   return (
      <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
         <Image
            src={flo}
            alt="flowers"
            fill
            style={{ objectFit: "cover" }}
            className="absolute top-0 left-0"
         />

         <div className="flex flex-col items-center justify-center gap-4 h-full relative z-10">
            <Image
               src={welcome}
               alt="welcome"
               width={500}
               className="ml-10"
            />
            <h1 className="text-center text-main md:w-5/6">
               Welcome to Rwanda Coding Academy Hackathon 😊
            </h1>
            <Button className="mt-6 rounded-full p-6">
               <Link href="/login">Login to continue</Link>
            </Button>
         </div>
      </div>
   );
};

export default page;
