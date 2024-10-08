import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useLogin } from "@/hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { storeData } from "@/utils/storage";

export const useUserLoginForm = (FormSchema: any, cookies: any, role: string, redirectUrl: string | null) => {
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

            // If redirectUrl is present, redirect to that URL
            if (redirectUrl) {
               location.replace(redirectUrl);
            } else {
               // Fallback to default redirects based on role
               role === 'User' ? location.replace('/dashboard') : location.replace('/admin');
            }
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