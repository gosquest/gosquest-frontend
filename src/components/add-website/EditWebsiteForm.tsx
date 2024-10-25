"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {  addWebsiteSchema} from "@/schemas/addWebsiteSchema";
import LogoUploadForm from "./LogoUploadForm";
import CoverImageUploadForm from "./CoverImageUploadForm";
import { Button } from "@/components/ui/button";
import { useUpdateWebsite } from "@/hooks/useWebsites";
import { toast } from "react-toastify";
import WebsiteUrlForm from "./WebsiteUrlForm";
import DescriptionForm from "./DescriptionForm";
import WebsiteNameForm from "./WebsiteNameForm";

interface EditWebsiteFormProps {
   websiteData: any;
}

export default function EditWebsiteForm({ websiteData }: EditWebsiteFormProps) {
   const formMethods = useForm({
      resolver: zodResolver(addWebsiteSchema),
      mode: "onChange",
      defaultValues: websiteData,
   });

   const { reset } = formMethods;
   const updateWebsiteMutation = useUpdateWebsite();

   const onSubmit = async (data: any) => {
      try {
         const response = await updateWebsiteMutation.mutateAsync({
            _id: websiteData.id,
            formData: data,
         });
         if (response.success) {
            toast.success("Website updated successfully!");
            reset();
         }
      } catch (error) {
         console.log(error);
         toast.error("Updating website failed!");
      }
   };

   const onError = (errors: any) => {
      console.error("Validation Failed:", errors);
   };

   return (
      <FormProvider {...formMethods}>
         <form
            onSubmit={formMethods.handleSubmit(onSubmit, onError)}
            className="flex flex-col gap-6 p-6 bg-white rounded max-w-xl mx-auto border"
         >
            <WebsiteNameForm />
            <WebsiteUrlForm />
            <DescriptionForm />
            <LogoUploadForm />
            <CoverImageUploadForm />
            <Button
               type="submit"
               className="w-full p-6"
               disabled={updateWebsiteMutation.isPending}
            >
               {updateWebsiteMutation.isPending ? "Updating..." : "Update"}
            </Button>
         </form>
      </FormProvider>
   );
}
