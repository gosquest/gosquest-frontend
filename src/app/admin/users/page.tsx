"use client";

import React, { useEffect } from "react";
import { Loader, PenBox, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { useGetAllUsersByAdmin } from "@/hooks/useAuth";

type User = {
  name: string;
  passcode: string;
  role: string;
};

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
    accessorKey: "roleId",
    header: "Role",
  },
  {
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => handleEdit(user)}>
            <PenBox />
          </Button>
          <Button variant="destructive" size="sm" onClick={() => handleDisable(user)}>
            <X />
          </Button>
        </div>
      );
    },
  },
];

// Function to handle editing a user
const handleEdit = (user: User) => {
  console.log("Edit user:", user);
};

// Function to handle disabling a user
const handleDisable = (user: User) => {
  console.log("Disable user:", user);
};

export default function UsersPage() {
  const { data: userData, isPending: isUserPending } = useGetAllUsersByAdmin();

  useEffect(() => {
    console.log("Is Data Pending:", isUserPending);
    console.log("User Data:", userData);
  }, [userData, isUserPending]);

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">Users</h1>
      <Button className="bg-main">Add User</Button>
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
