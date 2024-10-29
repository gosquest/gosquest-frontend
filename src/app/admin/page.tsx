"use client";

import PageTitle from "@/components/PageTitle";
import Card, { CardContent } from "@/components/Card";
import { useGetAllWebsites } from "@/hooks/useWebsites";
import { Button } from "@/components/ui/button";
import { Box, Shield, Star, Users } from "lucide-react";
import { useFetchAllUsers } from "@/hooks/useAuth";
import RecentUsers from "@/components/RecentUsers";
import OverallLikesTable from "@/components/OverallLikesTable";

export default function Home() {
   const { data, isLoading, isError } = useGetAllWebsites();
   const { data: totalUsers, isPending } = useFetchAllUsers();
   
   if (isLoading || isPending) {
      return <p className="text-center">Fetching websites...</p>;
   }

   const websites = data.websites.map((website: any) => ({
      id: website.id,
      title: website.title,
      url: website.url,
      description: website.description,
      category: website.category?.name || "Uncategorized",
      addedBy: website.addedBy?.name || "Unknown",
      likes: website.likes.length,
   }));

   if (isError) {
      return (
         <main className="flex flex-col justify-center">
            <p className="text-center text-red-500 mb-3">
               Failed to fetch websites
            </p>
            <Button
               variant={"secondary"}
               onClick={() => location.reload()}
            >
               Reload
            </Button>
         </main>
      );
   }

   //@ts-ignore
   const userCount = totalUsers?.data?.length || 0;

   const totalWebsites = data?.websites?.length || 0;
   const totalRatings = data?.websites?.reduce(
      (acc: any, website: { likes: string | any[] }) =>
         acc + (website.likes?.length || 0),
      0
   );
   const totalFeedbacks = data?.websites?.reduce(
      (acc: any, website: { dislikes: string | any[] }) =>
         acc + (website.dislikes?.length || 0),
      0
   );

   const cardData = [
      {
         icon: Box,
         desc: "Total Websites Added",
         title: `${totalWebsites} Websites`,
         color: "#979205",
      },
      {
         icon: Star,
         desc: "Overall Website Ratings",
         title: `${totalRatings} Likes`,
         color: "#FEB185",
      },
      {
         icon: Shield,
         desc: "Overall Website Feedback",
         title: `${totalFeedbacks} Dislikes`,
         color: "#8495B2",
      },
      {
         icon: Users,
         desc: "All Users",
         title: `${userCount} Users`,
         color: "#311D4A",
      },
   ];

   return (
      <div className="flex flex-col gap-5 w-full">
         <PageTitle title="Overview" />
         <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4 mb-6">
            {cardData.map((d, i) => (
               <Card
                  key={i}
                  icon={d.icon}
                  desc={d.desc}
                  title={d.title}
                  color={d.color}
               />
            ))}
         </section>

         <section className="flex gap-6 flex-col md:flex-row">
            <div className="mb-2 font-medium border-[0.5px] p-4 rounded-lg space-y-3">
               <small className="">Recent Users</small>
               <RecentUsers />
            </div>
            <div className="border-[0.5px] w-full md:w-[60%] xl:w-[66%] p-4 rounded-lg">
               <small>Overall Ratings</small>
                <OverallLikesTable websites={websites}/>
            </div>
         </section>
      </div>
   );
}
