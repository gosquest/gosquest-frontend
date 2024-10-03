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
import { useUpdateProject } from "@/hooks/useProject";
import { toast } from "react-toastify";

interface EditProjectFormProps {
  projectData: any;
}

export default function EditProjectForm({ projectData }: EditProjectFormProps) {
  const formMethods = useForm({
    resolver: zodResolver(addProjectSchema),
    mode: "onChange",
    defaultValues: projectData,
  });

  const { reset } = formMethods;
  const updateProjectMutation = useUpdateProject();

  const onSubmit = async (data: any) => {
    try {

      const response = await updateProjectMutation.mutateAsync({ _id: projectData.id, formData: data });
      if (response.success) {
        toast.success("Project updated successfully!");
        reset();
      }
    } catch (error) {
      console.log(error);
      toast.error("Updating project failed!");
    }
  };

  const onError = (errors: any) => {
    console.error("Validation Failed:", errors);
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit, onError)}
        className="flex flex-col gap-6 p-6 bg-white rounded shadow-md max-w-xl mx-auto"
      >
        <ProjectNameForm />
        <FieldClassificationForm />
        <TeamLeaderForm />
        <DescriptionAndLinkForm />
        <LogoUploadForm />
        <CoverImageUploadForm />
        <Button type="submit" className="w-full p-6" disabled={updateProjectMutation.isPending}>
          {updateProjectMutation.isPending ? "Updating..." : "Update"}
        </Button>
      </form>
    </FormProvider>
  );
}
