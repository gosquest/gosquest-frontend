import React from "react";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import RatingsTable from "@/components/RatingsTable";



const page = () => {
   return (
      <div>
         <PageTitle title="Project Rating" />
         <div className="bg-white p-4 mt-6">
            <p className="mb-6">Project summary</p>
           <RatingsTable/>
         </div>
      </div>
   );
};

export default page;
