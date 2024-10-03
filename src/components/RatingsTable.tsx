"use client"

import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { DataTable } from './DataTable';
import clsx from 'clsx'; 

type Rating = {
  name: string;
  projectLeader: string;
  field: string;
  status: string;
  rating: number;
};


const getStatus = (rating: number) => {
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
    default:
      return { textColor: 'text-gray-800', bgColor: 'bg-gray-100' };
  }
};


const getProgressBarColor = (rating: number) => {
  if (rating > 80) return '#4caf50'; 
  if (rating > 60) return '#ffeb3b';
  if (rating > 50) return '#ff9800'; 
  return '#f44336'; 
};

const columns: ColumnDef<Rating>[] = [
  {
    accessorKey: 'name',
    header: 'Project Name',
  },
  {
    accessorKey: 'projectLeader',
    header: 'Project Leader',
  },
  {
    accessorKey: 'field',
    header: 'Field',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const rating = row.original.rating;
      const status = getStatus(rating);
      const { textColor, bgColor } = getStatusStyles(status);
      return (
        <span className={clsx('rounded-full p-4', textColor, bgColor)}>
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: 'rating',
    header: 'Rating',
    cell: ({ row }) => {
      const rating = row.original.rating;
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

const data: Rating[] = [
  {
    name: 'Project Alpha',
    projectLeader: 'John Doe',
    field: 'Artificial Intelligence',
    status: 'Excellent',
    rating: 85,
  },
  {
    name: 'Project Beta',
    projectLeader: 'Jane Smith',
    field: 'Healthcare',
    status: 'Very Good',
    rating: 75,
  },
  {
    name: 'Project Gamma',
    projectLeader: 'Alice Johnson',
    field: 'Education',
    status: 'Good',
    rating: 65,
  },
  {
    name: 'Project Delta',
    projectLeader: 'Bob Lee',
    field: 'Environment',
    status: 'Bad',
    rating: 45,
  },
  {
    name: 'Project Epsilon',
    projectLeader: 'Charlie Brown',
    field: 'Blockchain',
    status: 'Excellent',
    rating: 90,
  },
];

const RatingsTable = () => {
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default RatingsTable;
