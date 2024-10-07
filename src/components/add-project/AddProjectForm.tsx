"use client"

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addProjectSchema } from "@/schemas/addProjectSchema";
import ProjectNameForm from "./ProjectNameForm";
import FieldClassificationForm from "./FieldClassificationForm";
import TeamLeaderForm from "./TeamLeaderForm";
import DescriptionAndLinkForm from "./DescriptionAndLinkForm";
import LogoUploadForm from "./LogoUploadForm";
import CoverImageUploadForm from "./CoverImageUploadForm";
import { Button } from "@/components/ui/button";
import { useCreateProject } from "@/hooks/useProject";
import { toast } from "react-toastify";

export default function AddProjectForm() {
  const formMethods = useForm({
    resolver: zodResolver(addProjectSchema),
    mode: "onChange",
  });

  const { reset } = formMethods;
  const createProjectMutation = useCreateProject();

  const onSubmit = async (data: any) => {
    try {
      const response = await createProjectMutation.mutateAsync(data);
      if (response.success) {
        toast.success("Project added successfully!");
        reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("Adding project failed!");
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
        <ProjectNameForm />
        <FieldClassificationForm />
        <TeamLeaderForm />
        <DescriptionAndLinkForm />
        <LogoUploadForm />
        <CoverImageUploadForm />
        <Button type="submit" className="w-full p-6 !bg-main" disabled={createProjectMutation.isPending}>
          {createProjectMutation.isPending ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </FormProvider>
  );
}