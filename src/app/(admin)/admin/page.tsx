/** @format */

import PageTitle from "@/components/PageTitle";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";

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

const userSalesData: SalesProps[] = [
   {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      saleAmount: "+$1,999.00",
   },
   {
      name: "Jackson Lee",
      email: "isabella.nguyen@email.com",
      saleAmount: "+$1,999.00",
   },
   {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      saleAmount: "+$39.00",
   },
   {
      name: "William Kim",
      email: "will@email.com",
      saleAmount: "+$299.00",
   },
   {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      saleAmount: "+$39.00",
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
                  <p>Recent Sales</p>
                  <p className="text-sm text-gray-400">
                     You made 265 sales this month.
                  </p>
               </section>
               {userSalesData.map((d, i) => (
                  <SalesCard
                     key={i}
                     email={d.email}
                     name={d.name}
                     saleAmount={d.saleAmount}
                  />
               ))}
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
