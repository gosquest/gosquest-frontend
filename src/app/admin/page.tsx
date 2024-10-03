/** @format */

import PageTitle from "@/components/PageTitle";
import Card, { CardContent, CardProps } from "@/components/Card";
import RatingsTable from "@/components/RatingsTable";
import { RatingsChart } from "@/components/RatingsChart";
import ProjectsChart from "@/components/ProjectsChart";



const cardData: CardProps[] = [
   {
      icon: "/icons/proj.png",
      desc: "Total Project in Hackathon",
      title: "15 Projects",
   },
   {
      icon: "/icons/rates.png",
      desc: "Overall Projects Rating",
      title: "15 Ratings",
   },
   {
      icon: "/icons/feedbacks.png",
      desc: "Overall Project Feedback",
      title: "4 Feedbacks",
   },
   {
      icon: "/icons/feedbacks.png",
      desc: "Overall Project Feedbacks",
      title: "15 Projects",
   },
];

export default function Home() {
   return (
      <div className="flex flex-col gap-5 w-full">
         <PageTitle title="Overview" />

         <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
            {cardData.map((d, i) => (
               <Card
                  key={i}
                  icon={d.icon}
                  desc={d.desc}
                  title={d.title}
               />
            ))}
         </section>

         <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-3">
            <CardContent className="lg:col-span-2 flex flex-col gap-4">
               <small>Reset Ratings</small>
               <RatingsTable />
            </CardContent>

            <CardContent className="lg:col-span-1 flex flex-col">
               <p className="p-4 font-semibold">Overall Ratings</p>
               <RatingsChart />
            </CardContent>
         </section>

         <section>
            <CardContent className="flex justify-between gap-4">
               <h4>Project Workload</h4>
               <ProjectsChart />
            </CardContent>
         </section>
      </div>
   );
}
