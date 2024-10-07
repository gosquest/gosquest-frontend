"use client"

import React from 'react'
import EditProjectForm from '@/components/add-project/EditProjectForm'
import { useParams } from 'next/navigation'
import { useGetProjectById } from '@/hooks/useProject'
import { Button } from '@/components/ui/button'
import HandleFailed from '@/components/HandleFailed'

const page = () => {
   const params = useParams()
   const { data, isLoading, isError } = useGetProjectById(params.slug[0])
   
   if (isLoading) {
      return <p className="text-center">Fetching project...</p>;
   }

   if (isError) {
      return (
         <HandleFailed />
      );
   }

   return (
      <main>
         <h3 className='text-center mb-8'>Edit Project</h3>
         <EditProjectForm projectData={data.project} />
      </main>
   )
}

export default page