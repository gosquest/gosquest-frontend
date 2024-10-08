"use client";

import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { DataTable } from './DataTable';
import clsx from 'clsx';

type Project = {
  id: string;
  name: string;
  team_leader: string;
  fields: string[];
  rating: {
    relevance: number;
    impact_to_society: number;
    performance: number;
    progress: number;
    feedback: string | null;
  } | null;
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

const getAverageRating = (rating: Project['rating']) => {
  if (!rating) return null;
  const { relevance, impact_to_society, performance, progress } = rating;
  const total = relevance + impact_to_society + performance + progress;
  return Math.round((total / 4) * 20);
};

const getProgressBarColor = (rating: number) => {
  if (rating > 80) return '#4caf50';
  if (rating > 60) return '#ffeb3b';
  if (rating > 50) return '#ff9800';
  return '#f44336';
};

const columns: ColumnDef<Project>[] = [
  {
    accessorKey: 'name',
    header: 'Project Name',
  },
  {
    accessorKey: 'team_leader',
    header: 'Team Leader',
  },
  {
    accessorKey: 'fields',
    header: 'Fields',
    cell: ({ row }) => row.original.fields.join(', '),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const rating = getAverageRating(row.original.rating);
      const status = getStatus(rating);
      const { textColor, bgColor } = getStatusStyles(status);
      return (
        <span className={clsx('rounded text-xs p-2 whitespace-nowrap', textColor, bgColor)}>
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: 'rating',
    header: 'Average Rating',
    cell: ({ row }) => {
      const rating = getAverageRating(row.original.rating);
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
];

type RatingsTableProps = {
  projects: Project[];
};

const RatingsTable: React.FC<RatingsTableProps> = ({ projects }) => {
  
  const sortedProjects = projects.sort((a, b) => {
    const ratingA = getAverageRating(a.rating);
    const ratingB = getAverageRating(b.rating);


    if (ratingA === null) return 1; 
    if (ratingB === null) return -1;
    
    return ratingB - ratingA;
  });
  return (
    <div className=''>
      <DataTable columns={columns} data={sortedProjects} />
    </div>
  );
};

export default RatingsTable;