"use client";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
   Dialog,
   DialogContent
} from "@/components/ui/dialog";
import Image from "next/image";
import { steps } from "@/components/Schemas";
import StepForm from "@/components/StepForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CreateProjectPage() {
   const [currentStep, setCurrentStep] = useState(0);
   const [formValues, setFormValues] = useState<any>({});
   const [isDialogOpen, setIsDialogOpen] = useState(false);

   const formMethods = useForm({
      defaultValues: formValues,
      mode: "onChange",
   });

   const nextStep = (data: any) => {
      setFormValues((prev: any) => ({ ...prev, ...data }));
      if (currentStep < steps.length - 1) {
         setCurrentStep((prev) => prev + 1);
      } else {
         onSubmit(data);
      }
   };

   const onSubmit = (data: any) => {
      console.log("Form Submitted", { ...formValues, ...data });
      setIsDialogOpen(true);
   };

   return (
      <div className="w-full p-8">
         <h3>Create Project</h3>
         <div className="flex flex-col items-center gap-6 mt-6 bg-white p-6">
            <div className="flex items-center w-full justify-between relative">
               {steps.map((step, index) => (
                  <div
                     key={index}
                     className="relative flex flex-col items-center w-full"
                  >
                     <div className="flex flex-col items-center mb-4">
                        <div
                           className={`${
                              index <= currentStep ? "bg-main" : "bg-gray-300"
                           } w-8 h-8 rounded-full flex items-center justify-center text-white z-10`}
                        >
                           {index < currentStep ? "✓" : index + 1}
                        </div>
                        {index < steps.length - 1 && (
                           <div
                              className="absolute top-4 left-full w-full h-0.5 bg-gray-300"
                              style={{ transform: "translateX(-50%)" }}
                           />
                        )}
                     </div>
                     <h4 className="text-lg font-semibold text-center">
                        {step.title}
                     </h4>
                     <p className="text-sm text-gray-500 text-center">
                        {step.description}
                     </p>
                  </div>
               ))}
            </div>

            <div className="w-full max-w-lg p-6 rounded-lg shadow min-h-[40vh] flex flex-col justify-between">
               <FormProvider {...formMethods}>
                  <StepForm
                     currentStep={currentStep}
                     formValues={formValues}
                     setFormValues={setFormValues}
                     nextStep={formMethods.handleSubmit(nextStep)}
                  />
               </FormProvider>
            </div>

            <Dialog
               open={isDialogOpen}
               onOpenChange={setIsDialogOpen}
            >
               <DialogContent className="bg-white">
                  <div className="flex flex-col items-center gap-4 min-h-[40vh]">
                     <Image
                        src={"/icons/congs.png"}
                        alt="thank you"
                        width={250}
                        height={250}
                     />
                     <p className="text-center md:w-3/4">
                        Congratulations .Your project has been successfully
                        created.
                     </p>
                  </div>
                  <Button className="bg-main p-6">
                     <Link href="/admin">Back to Dashboard</Link>
                  </Button>
               </DialogContent>
            </Dialog>
         </div>
      </div>
   );
}
