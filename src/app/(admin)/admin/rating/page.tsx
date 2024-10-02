import React from "react";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import PageTitle from "@/components/PageTitle";

interface Rating {
   projectName: string;
   relevance: string;
   impactToSociety: string;
   performance: string;
   progress: string;
};

const columns: ColumnDef<Rating>[] = [
   {
      accessorKey: "projectName",
      header: "Project"
   },
   {
      accessorKey: "relevance",
      header: "Relevance"
   },
   {
      accessorKey: "impactToSociety",
      header: "Impact to Society"
   },
   {
      accessorKey: "performance",
      header: "Performance"
   },
   {
      accessorKey: "progress",
      header: "Progress"
   }
];

const data: Rating[] = [
   {
      projectName: "Project Alpha",
      relevance: "8",
      impactToSociety: "9",
      performance: "7",
      progress: "6",
   },
   {
      projectName: "Project Beta",
      relevance: "9",
      impactToSociety: "8",
      performance: "9",
      progress: "7",
   },
   {
      projectName: "Project Gamma",
      relevance: "7",
      impactToSociety: "6",
      performance: "8",
      progress: "8",
   },
   {
      projectName: "Project Delta",
      relevance: "6",
      impactToSociety: "7",
      performance: "9",
      progress: "5",
   },
   {
      projectName: "Project Epsilon",
      relevance: "9",
      impactToSociety: "10",
      performance: "8",
      progress: "9"
   },
];

const page = () => {
   return (
      <div>
         <PageTitle title="Project Rating" />
         <div className="bg-white p-4 mt-6">
            <p className="mb-6">Project summary</p>
            <DataTable
               columns={columns}
               data={data.map((item) => ({
                  ...item,
                  relevance: `${item.relevance} / 10`,
                  impactToSociety: `${item.impactToSociety} / 10`,
                  performance: `${item.performance} / 10`,
                  progress: `${item.progress} / 10`,
               }))}
            />
         </div>
      </div>
   );
};

export default page;
