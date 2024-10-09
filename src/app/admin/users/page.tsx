"use client";

import React, { useEffect } from "react";
import { Loader, PenBox, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { useGetAllUsersByAdmin } from "@/hooks/useAuth";
import { AddUserDialog } from "@/components/user/AddUserDialog";
import DeleteUserDialog from "@/components/user/DeleteUserDialog";
import { User } from "@/types";
import EditUserDialog from "@/components/user/EditUserDialog";


const columns: ColumnDef<User>[] = [
  {
    accessorKey: "fullName",
    header: "Name",
  },
  {
    accessorKey: "code",
    header: "Passcode",
  },
  {
    accessorKey: "role.name",
    header: "Role",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    header: "Actions",
    cell: ({ row }) => {
      const user: User = row.original;
      return (
        <div className="flex gap-2">
          <EditUserDialog user={user} />
          <DeleteUserDialog user={user} />
        </div>
      );
    },
  },
];


export default function UsersPage() {
  const { data: userData, isPending: isUserPending } = useGetAllUsersByAdmin();

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Users</h1>
        <AddUserDialog />
      </div>
      {isUserPending ? (
        <div className="flex justify-center items-center">
          <Loader className="animate-spin h-5 w-5" />
        </div>
      ) : (
        <DataTable columns={columns} data={userData?.data || []} />
      )}
    </div>
  );
}
