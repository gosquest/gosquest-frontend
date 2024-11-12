"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useGetWebsiteById } from "@/hooks/useWebsites";
import HandleFailed from "@/components/HandleFailed";
import EditWebsiteForm from "@/components/add-website/EditWebsiteForm";

const WebsiteDetails = () => {
   const params = useParams();
   const { data, isLoading, isError } = useGetWebsiteById(params.slug[0]);

   if (isLoading) {
      return <p className="text-center">Fetching website...</p>;
   }

   if (isError) {
      return <HandleFailed />;
   }

   return (
      <main>
         <h3 className="text-center mb-8">Edit Website</h3>
         <EditWebsiteForm websiteData={data.website} />
      </main>
   );
};

export default WebsiteDetails;
