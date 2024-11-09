import React from "react";
import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className=" px-4 md:px-0 flex items-center min-h-screen justify-center gap-6 flex-col  text-main">
         <h2 className="text-center max-w-[540px] text-xl font-medium sm:text-2xl relative z-10 md:w-3/4 lg:w-[50%]">
            <Link href="/">
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-main">
                  Welcome to GosQuest
               </span>
            </Link>
         </h2>
         {children}
      </div>
   );
};

export default AuthLayout;
