import { BellDot } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const MobileNav = () => {
   return (
      <div className="bg-main -ml-10 -mt-[100px] -mr-10 mb-10 p-10 text-white md:hidden">
         <div className="flex justify-between mb-3">
            <div>
               <h3>Hello👋</h3>
               <small>Mrs.Mukarusine</small>
            </div>
            <div className="bg-main flex items-center justify-center p-2 rounded-full w-8 h-8 sm:w-10 sm:h-10 border border-white">
               <BellDot className="text-white w-5 h-5" />
            </div>
         </div>

         <div className="bg-background rounded-xl p-4 flex justify-between items-center">
            <Button className="bg-main rounded-full px-10">Unrated</Button><Button className="rounded-full px-12 bg-transparent text-main">Rated</Button>
         </div>
      </div>
   );
};

export default MobileNav;
