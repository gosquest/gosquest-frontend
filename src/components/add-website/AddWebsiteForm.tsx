"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addWebsiteSchema } from "@/schemas/addWebsiteSchema";
import LogoUploadForm from "./LogoUploadForm";
import CoverImageUploadForm from "./CoverImageUploadForm";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useCreateWebsite } from "@/hooks/useWebsites";
import WebsiteNameForm from "./WebsiteNameForm";
import WebsiteUrlForm from "./WebsiteUrlForm";
import DescriptionForm from "./DescriptionForm";

export default function AddWebsiteForm() {
   const formMethods = useForm({
      resolver: zodResolver(addWebsiteSchema),
      mode: "onChange",
   });

   const { reset } = formMethods;
   const addWebsiteMutation = useCreateWebsite();

   const onSubmit = async (data: any) => {
      try {
         const response = await addWebsiteMutation.mutateAsync(data);
         if (response.success) {
            toast.success("Website added successfully!");
            reset();
         } else {
            toast.error(response.error.msg);
         }
      } catch (error) {
         console.log(error);
         toast.error("Adding website failed!");
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
               className="w-full p-6 !bg-main"
               disabled={addWebsiteMutation.isPending}
            >
               {addWebsiteMutation.isPending ? "Submitting..." : "Submit"}
            </Button>
         </form>
      </FormProvider>
   );
}
