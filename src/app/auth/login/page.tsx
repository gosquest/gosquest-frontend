"use client";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { FullNameField, CodeField } from "@/components/auth/LoginFields";
import { useUserLoginForm } from "@/hooks/useUserLoginForm";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Cookies } from "react-cookie";

const FormSchema = z.object({
   fullName: z.string({
      required_error: "Please select a name.",
   }),
   code: z.string().min(4, "Passcode must be at least 4 characters"),
});

const cookies = new Cookies();

const UserLoginPage = () => {
   const { form, isSubmitting, onSubmit } = useUserLoginForm(FormSchema, cookies, "User");

   return (
      <div className="relative z-10 w-full px-4 mt-4">
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex flex-col gap-4 items-center max-w-[400px] mx-auto">
               <FullNameField form={form} isSubmitting={isSubmitting} role={'User'} />
               <CodeField form={form} isSubmitting={isSubmitting} />
               <Button type="submit" className="w-full max-w-[400px] p-6 text-lg bg-white text-main hover:text-main/90 hover:bg-input font-normal" disabled={isSubmitting}>
                  {isSubmitting ? <Loader className="animate-spin h-5 w-5 mr-2" /> : "Login"}
               </Button>
            </form>
         </Form>
      </div>
   );
};

export default UserLoginPage;