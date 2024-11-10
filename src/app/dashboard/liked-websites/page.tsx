"use client";

import { CardContent } from "@/components/Card";
import React, { useState } from "react";
import MobileNav from "@/components/MobileNav";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/useAuthStore";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useLikedWebsites, useCreateLikeDislike } from "@/hooks/useRatings";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/DataTable";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
    const { user } = useAuthStore();
    const { data, isLoading, isError } = useLikedWebsites(user ? user.id : "");
    const { mutate: dislikeWebsite } = useCreateLikeDislike();
    const [searchQuery, setSearchQuery] = useState<string>("");

    const likedWebsites = data ? data.data : null;

    const websitesArray = Array.isArray(likedWebsites) ? likedWebsites : [];

    const filteredWebsites = websitesArray.filter((website: any) =>
        website.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDislike = (websiteId: string) => {
        if (user) {
            dislikeWebsite({
                userId: user.id,
                websiteId: websiteId,
                like: false,
            }, {
                onSuccess: () => {
                    toast.success("Website disliked successfully!"); 
                },
                onError: () => {
                    toast.error("Failed to dislike website."); 
                }
            });
        }
    };

    const columns: ColumnDef<any>[] = [
        {
            accessorKey: "logo",
            header: "Logo",
            cell: ({ row }) => (
                <CardContent className="flex items-center justify-center h-16 w-16">
                    <img
                        src={row.original.logo}
                        alt={row.original.name}
                        className="max-h-full max-w-full"
                    />
                </CardContent>
            ),
        },
        {
            accessorKey: "name",
            header: "Website Name",
            cell: ({ row }) => <p>{row.original.name}</p>,
        },
        {
            accessorKey: "url",
            header: "URL",
            cell: ({ row }) => (
                <Link
                    href={row.original.url}
                    target="_blank"
                    className="text-blue-500 underline"
                >
                    {row.original.url}
                </Link>
            ),
        },
        {
            header: "Action",
            cell: ({ row }) => (
                <Button
                    variant="destructive"
                    onClick={() => handleDislike(row.original.id)}
                >
                    Dislike
                </Button>
            ),
        },
    ];

    if (isLoading)
        return <p className="text-center">Fetching liked websites...</p>;
    if (isError)
        return (
            <main className="flex flex-col justify-center">
                <p className="text-center text-red-500 mb-3">
                    Failed to fetch liked websites
                </p>
                <Button
                    variant="secondary"
                    onClick={() => location.reload()}
                >
                    Reload
                </Button>
            </main>
        );

    return (
        <main>
            <MobileNav />

            <div className="px-4 md:px-0">
            <div className="px-4 md:p-0 text-center md:flex justify-between items-center mb-6 md:mb-8">
                <h4>Liked Websites</h4>
                <Input
                    type="text"
                    placeholder="Search by website name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full md:w-1/3 px-3 py-5 bg-input mt-4 md:mt-0 rounded outline-none"
                />
            </div>

            {filteredWebsites.length > 0 ? (
                <DataTable
                    columns={columns}
                    data={filteredWebsites}
                />
            ) : (
                <div className="flex flex-col items-center justify-center h-[40vh]">
                    <h2 className="text-2xl font-bold text-gray-700">
                        No liked websites found
                    </h2>
                </div>
            )}
            </div>
        </main>
    );
};

export default Page;
