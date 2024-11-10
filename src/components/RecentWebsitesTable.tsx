"use client";

import React, { useMemo } from "react";
import { DataTable } from "@/components/DataTable";
import { Loader } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Website } from "@/types";
import { useGetAllWebsites } from "@/hooks/useWebsites";

const columns: ColumnDef<Website>[] = [
  {
    accessorKey: "name",
    header: "Website Name",
  },
  {
    accessorKey: "url",
    header: "Website Url",
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <p>{row.original.description?.slice(0, 10)}...</p>
    ),
  },
];

export default function RecentWebsites() {
  const { data: websiteData, isPending } = useGetAllWebsites();

  const recentWebsites = useMemo(() => {
    return websiteData?.websites
      ?.sort((a: { createdAt: string | number | Date; }, b: { createdAt: string | number | Date; }) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5) || [];
  }, [websiteData]);

  return (
    <div className="flex flex-col gap-3 w-full">
      {isPending ? (
        <div className="flex justify-center items-center">
          <Loader className="animate-spin h-5 w-5" />
        </div>
      ) : (
        <DataTable columns={columns} data={recentWebsites} />
      )}
    </div>
  );
}
