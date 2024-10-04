import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useLogin } from "@/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { storeData } from "@/utils/storage";

export const useUserLoginForm = (FormSchema: any, cookies: any) => {
   const form = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues: { fullName: "", code: "" },
   });

   const [isSubmitting, setIsSubmitting] = useState(false);
   const loginMutation = useLogin();

   const onSubmit = async (data: any) => {
      setIsSubmitting(true);
      try {
         const response = await loginMutation.mutateAsync(data);
         if (response?.success) {
            storeData("userId", response.data.userId);
            cookies.set("token", response.token, { path: "/" });
            window.location.replace("/dashboard");
         } else {
            toast.error(response.error.msg);
         }
      } catch {
         toast.error("Login failed. Please try again.");
      } finally {
         setIsSubmitting(false);
      }
   };

   return { form, isSubmitting, onSubmit };
};