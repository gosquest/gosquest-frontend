import React from "react";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import PageTitle from "@/components/PageTitle";

type Rating = {
  name: string;
  status: number;
  rating: string; 
};

const columns: ColumnDef<Rating>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "rating",
    header: "Rating",
  },
];

const data: Rating[] = [
  {
    name: "Project Alpha",
    status: 8,
    rating: "60%",
  },
  {
    name: "Project Beta",
    status: 9,
    rating: "19%",
  },
  {
    name: "Project Gamma",
    status: 7,
    rating: "100%",
  },
  {
    name: "Project Delta",
    status: 6,
    rating: "20%",
  },
  {
    name: "Project Epsilon",
    status: 9,
    rating: "10%",
  },
];

const Page = () => {
  return (
    <div>
      <PageTitle title="Project Statistics" />
      <div className="bg-white p-4 mt-6">
        <p className="mb-6">Project summary</p>
        <div className="flex gap-6 flex-col md:flex-row">
            <div className="w-full md:w-[70%]">
        <DataTable columns={columns} data={data}  /></div>
        <div className="w-full md:w-[20%]"> a chart</div>
       
        </div>
      </div>
    </div>
  );
};

export default Page;
