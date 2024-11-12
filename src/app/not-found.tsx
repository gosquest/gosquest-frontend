import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import notfound from "../../public/svg/notfound.svg"

const NotFound = () => {
   return (
      <div className="bg-main w-full min-h-screen flex items-center justify-center text-white ">
         <div className="flex gap-10 md:gap-6 flex-col md:flex-row items-center justify-center container">
            <div className="w-full md:w-[40%] text-center md:md:text-left">
               <h1 className="mb-6">It looks like this page is not found</h1>
               <Button className="bg-white text-main hover:bg-transparent hover:text-white border border-white p-6 text-lg">
                  <Link href="/">Back to home</Link>
               </Button>
            </div>
            <Image src={notfound} 
            alt="notfound" className="w-[400px] xl:w-[500px]"/>
         </div>
      </div>
   );
};

export default NotFound;
