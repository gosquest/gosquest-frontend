"use client";

import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { DataTable } from './DataTable';
import clsx from 'clsx';

// Define types based on your schema
type Website = {
    id: string;
    name: string;
    url: string;
    likes: LikeDislike[];
};

type LikeDislike = {
    id: string;
    userId: string;
    websiteId: string;
    like: boolean;
};

const getStatus = (rating: number | null) => {
    if (rating === null) return 'No Rating';
    if (rating > 80) return 'Excellent';
    if (rating > 60) return 'Very Good';
    if (rating > 50) return 'Good';
    return 'Bad';
};

const getStatusStyles = (status: string) => {
    switch (status) {
        case 'Excellent':
            return { textColor: 'text-green-800', bgColor: 'bg-green-100' };
        case 'Very Good':
            return { textColor: 'text-yellow-800', bgColor: 'bg-yellow-100' };
        case 'Good':
            return { textColor: 'text-orange-800', bgColor: 'bg-orange-100' };
        case 'Bad':
            return { textColor: 'text-red-800', bgColor: 'bg-red-100' };
        case 'No Rating':
            return { textColor: 'text-gray-800', bgColor: 'bg-gray-100' };
        default:
            return { textColor: 'text-gray-800', bgColor: 'bg-gray-100' };
    }
};

// Calculate the rating based on the number of likes
const getAverageRating = (likes: LikeDislike[]) => {
    if (!likes || likes.length === 0) return null;
    const totalLikes = likes.filter((like) => like.like).length;
    return Math.round((totalLikes / likes.length) * 100);
};

const getProgressBarColor = (rating: number) => {
    if (rating > 80) return '#4caf50';
    if (rating > 60) return '#ffeb3b';
    if (rating > 50) return '#ff9800';
    return '#f44336';
};

const columns: ColumnDef<Website>[] = [
    {
        accessorKey: 'name',
        header: 'Project Name',
    },
    {
        accessorKey: 'url',
        header: 'URL',
        cell: ({ row }) => (
            <a href={row.original.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                {row.original.url}
            </a>
        ),
    },
    {
        accessorKey: 'rating',
        header: 'Average Rating',
        cell: ({ row }) => {
            const rating = getAverageRating(row.original.likes);
            if (rating === null) {
                return <span>No Rating</span>;
            }
            const color = getProgressBarColor(rating);
            return (
                <div style={{ width: 50, height: 50, margin: '0 auto' }}>
                    <CircularProgressbar
                        value={rating}
                        text={`${rating}%`}
                        styles={buildStyles({
                            textColor: '#000',
                            pathColor: color,
                            trailColor: '#d6d6d6',
                        })}
                    />
                </div>
            );
        },
    },
    {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => {
            const rating = getAverageRating(row.original.likes);
            const status = getStatus(rating);
            const { textColor, bgColor } = getStatusStyles(status);
            return (
                <span className={clsx('rounded text-xs p-2 whitespace-nowrap', textColor, bgColor)}>
                    {status}
                </span>
            );
        },
    },
];

type OverallLikesTableProps = {
    websites: Website[];
};

const OverallLikesTable: React.FC<OverallLikesTableProps> = ({ websites }) => {
    const sortedWebsites = [...websites].sort((a, b) => {
        const ratingA = getAverageRating(a.likes);
        const ratingB = getAverageRating(b.likes);

        if (ratingA === null) return 1;
        if (ratingB === null) return -1;

        return ratingB - ratingA;
    });

    return (
        <div className='py-4'>
            <DataTable columns={columns} data={sortedWebsites} />
        </div>
    );
};

export default OverallLikesTable;
