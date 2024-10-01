import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { schemas, steps } from "./Schemas";


export default function StepForm({
  currentStep,
  formValues,
  setFormValues,
  nextStep,
}: {
  currentStep: number;
  formValues: any;
  setFormValues: (data: any) => void;
  nextStep: SubmitHandler<any>;
}) {
  const form = useForm({
    resolver: zodResolver(schemas[currentStep]),
    defaultValues: formValues,
    mode: "onChange",
  });

  return (
    <form onSubmit={form.handleSubmit(nextStep)} className="flex flex-col gap-4 items-center">
      {/* Render the specific step component */}
      {React.createElement(steps[currentStep].component, { form })}
      <Button type="submit" className="mt-[20%] w-[90%] p-6">
        {currentStep < steps.length - 1 ? "Proceed" : "Submit"}
      </Button>
    </form>
  );
}