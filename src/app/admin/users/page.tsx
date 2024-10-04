"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsDown, Loader, PenBox, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { toast } from "react-toastify";
import { useGetAllUsersByAdmin, useLogin } from "@/hooks/useAuth";

type User = {
  name: string;
  passcode: string;
  role: string;
};

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "passcode",
    header: "Passcode",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => handleEdit(user)}>
            <PenBox/>
          </Button>
          <Button variant="destructive" size="sm" onClick={() => handleDisable(user)}>
            <X/>
          </Button>
        </div>
      );
    },
  },
];

// Function to handle editing a user
const handleEdit = (user: User) => {
  // Add your edit functionality here
  console.log("Edit user:", user);
};

// Function to handle disabling a user
const handleDisable = (user: User) => {
  // Add your disable functionality here
  console.log("Disable user:", user);
};

export default function UsersPage() {
  const { data: userData, isPending: isUserPending } = useGetAllUsersByAdmin();

  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="text-xl font-bold">Users</h1>
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
