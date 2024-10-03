import React, { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Trash2 } from "lucide-react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { z } from "zod";
import upload from "../../public/icons/upload.png";


const createProjectSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  fields: z.array(z.string().min(1, "Field cannot be empty")).min(1, "At least one field is required"),
  teamLeader: z.string().min(1, "Team leader's full name is required"),
  description: z.string().min(1, "Project description is required"),
  link: z.string().url("Must be a valid URL"),
  logo: z
    .any()
    .refine((file) => file instanceof File, "Must be a valid file")
    .optional()
    .nullable(),
  coverImg: z
    .any()
    .refine((file) => file instanceof File, "Must be a valid file")
    .optional()
    .nullable(),
});

export default function CreateProjectForm() {
  const formMethods = useForm({
    resolver: zodResolver(createProjectSchema),
    mode: "onChange",
  });

  const [fields, setFields] = useState<string[]>([]);
  const [fieldValue, setFieldValue] = useState("");

  const addField = () => {
    if (fieldValue.trim() !== "") {
      const updatedFields = [...fields, fieldValue.trim()];
      setFields(updatedFields);
      formMethods.setValue("fields", updatedFields); 
      setFieldValue("");
    }
  };

  const removeField = (index: number) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
    formMethods.setValue("fields", updatedFields); 
  };

  const onDrop = (acceptedFiles: any) => {
    // Handle file drop logic
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("Form Submitted", data);
  };

  const onError = (errors: any) => {
    console.error("Validation Failed:", errors);
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit, onError)}
        className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto"
      >
        {/* Project Name */}
        <FormField
          control={formMethods.control}
          name="projectName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter project name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Field Classification */}
        <div className="w-full">
          <h4 className="self-start">Fields</h4>
          <div className="w-full flex items-end gap-4 border p-4 rounded-lg">
            <FormControl>
              <Input
                value={fieldValue}
                onChange={(e) => setFieldValue(e.target.value)}
                placeholder="Enter a field (e.g., Transport, Agriculture)"
              />
            </FormControl>
            <Button type="button" onClick={addField}>
              +
            </Button>
          </div>
          <div className="mt-4 space-y-2">
            {fields.length > 0 &&
              fields.map((field, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
                >
                  <span>{field}</span>
                  <Button
                    variant="destructive"
                    className="p-2 rounded-full"
                    onClick={() => removeField(index)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
              ))}
          </div>
        </div>

        {/* Team Leader */}
        <FormField
          control={formMethods.control}
          name="teamLeader"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Leader</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter team leader's name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Project Description and Link */}
        <FormField
          control={formMethods.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Detailed info about your project"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formMethods.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Link</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Project URL" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Logo and Cover Image */}
        <FormField
          control={formMethods.control}
          name="logo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Logo</FormLabel>
              <FormControl>
                <div
                  {...getRootProps()}
                  className="p-6 rounded-sm border-dashed border-2 text-main flex flex-col items-center gap-2"
                >
                  <Image src={upload} alt="upload" />
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
          control={formMethods.control}
          name="coverImg"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cover Image</FormLabel>
              <FormControl>
                <div
                  {...getRootProps()}
                  className="p-6 rounded-sm border-dashed border-2 text-main flex flex-col items-center gap-2"
                >
                  <Image src={upload} alt="upload" />
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

        {/* Submit Button */}
        <Button type="submit" className="w-full p-6">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
}
