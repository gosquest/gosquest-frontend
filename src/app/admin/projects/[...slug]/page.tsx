"use client"

import React from 'react'
import EditProjectForm from '@/components/add-project/EditProjectForm'
import { useParams } from 'next/navigation'
import { useGetProjectById } from '@/hooks/useProject'
import { Button } from '@/components/ui/button'

const page = () => {
   const params = useParams()
   const { data, isLoading, isError } = useGetProjectById(params.slug[0])
   
   if (isLoading) {
      return <p className="text-center">Fetching project...</p>;
   }

   if (isError) {
      return (
         <main className="flex flex-col justify-center">
            <p className="text-center text-red-500 mb-3">Failed to fetch project</p>
            <Button variant={"secondary"} onClick={() => location.reload()}>
               Reload
            </Button>
         </main>
      );
   }

   return (
      <main>
         <h3 className='text-center'>Edit Project</h3>
         <EditProjectForm projectData={data.project} />
      </main>
   )
}

export default page