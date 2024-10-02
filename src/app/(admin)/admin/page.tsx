/** @format */
import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";
import proj from "../../../../public/icons/proj.png";
import rates from "../../../../public/icons/rates.png";
import feedbacks from "../../../../public/icons/feedbacks.png";
import RatingsTable from "@/components/RatingsTable";

const cardData: CardProps[] = [
   {
      icon: proj,
      desc: "Total Project in Hackathon",
      title: "15 Projects",
   },
   {
      icon: rates,
      desc: "Overall Projects Rating",
      title: "15 Ratings",
   },
   {
      icon: feedbacks,
      desc: "Overall Project Feedback",
      title: "4 Feedbacks",
   },
   {
      icon: feedbacks,
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
         <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
            <CardContent className="flex justify-between gap-4">
               <section>
                  <p>Project Summary</p>
                  <RatingsTable/>
               </section>
            </CardContent>
            <CardContent>
               <p className="p-4 font-semibold">Overview</p>
               <BarChart />
            </CardContent>
         </section>
         <section>
            <CardContent className="flex justify-between gap-4">
               <h4>Project Workload</h4>
               <div>workload</div>
            </CardContent>
         </section>
      </div>
   );
}
