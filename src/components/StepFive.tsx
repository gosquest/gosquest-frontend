"use client"
import {
   FormField,
   FormItem,
   FormLabel,
   FormControl,
   FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import upload from "../../public/icons/upload.png";

export default function StepFour({ form }: { form: any }) {
   const onDrop = useCallback((acceptedFiles: any) => {
      // Handle file drop
   }, []);

   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
   });

   return (
      <div className="w-full">
         <FormField
            control={form.control}
            name="logo"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Logo</FormLabel>
                  <FormControl>
                     <div
                        {...getRootProps()}
                        className=" p-6 rounded-sm border-dashed border-main border-2 text-main flex flex-col items-center gap-2"
                     >
                        <Image
                           src={upload}
                           alt="upload"
                        />

                        <input {...getInputProps()} />
                        {isDragActive ? (
                           <h3>Drag & Drop the files here ...</h3>
                        ) : (
                           <h3>
                              Drag & drop files here, or <span>Browse</span>
                           </h3>
                        )}
                     </div>
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
         <FormField
            control={form.control}
            name="coverImg"
            render={({ field }) => (
               <FormItem>
                  <FormLabel>Cover Image</FormLabel>
                  <FormControl>
                     <div
                        {...getRootProps()}
                        className=" p-6 rounded-sm border-dashed border-main border-2 text-main flex flex-col items-center gap-2"
                     >
                        <Image
                           src={upload}
                           alt="upload"
                        />

                        <input {...getInputProps()} />
                        {isDragActive ? (
                           <h3>Drag & Drop the files here ...</h3>
                        ) : (
                           <h3>
                              Drag & drop files here, or <span>Browse</span>
                           </h3>
                        )}
                     </div>
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
      </div>
   );
}
