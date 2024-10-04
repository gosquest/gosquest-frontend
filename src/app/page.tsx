/** @format */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import flow from "../../public/svg/flow.svg";
import Link from "next/link";

const page = () => {
   return (
      <div className="bg-main relative min-h-screen overflow-hidden flex items-center justify-center">
         <Image
            src={flow}
            alt="flowers"
            fill
            style={{ objectFit: "cover" }}
            className="absolute top-0 left-0"
         />

         <div className="flex flex-col items-center justify-center gap-4 h-full relative z-10">
            <img
               src={'/svg/logo.svg'}
               alt="welcome"
               className="relative z-10 mx-auto h-[12rem]"
            />
            <h1 className="text-center text-white md:w-5/6 mt-6">
               Welcome to Rwanda Coding Academy Hackathon
            </h1>
            <Button className="mt-6 round p-6">
               <Link href="/auth/login">Login to continue</Link>
            </Button>
         </div>
      </div>
   );
};

export default page;
