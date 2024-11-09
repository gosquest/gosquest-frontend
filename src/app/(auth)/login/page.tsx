"use client";
import { Button } from "@/components/ui/button";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState } from "react";
import Link from "next/link";
import { useLoginUser } from "@/hooks/useAuth";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";
import { useSearchParams } from "next/navigation";

const cookies = new Cookies();

const formSchema = z.object({
   email: z.string().email("Invalid email"),
   password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormData = z.infer<typeof formSchema>;

const LoginPage = () => {
   const [isSubmitting, setIsSubmitting] = useState(false);

   const searchParams = useSearchParams();
   const redirectUrl = searchParams.get("redirectUrl");
   const form = useForm<FormData>({
      resolver: zodResolver(formSchema),
      mode: "onChange",
      defaultValues: {
         email: "",
         password: "",
      },
   });

   const loginMutation = useLoginUser();

   const onSubmit = async (data: FormData) => {
      setIsSubmitting(true);
      try {
         const response = await loginMutation.mutateAsync(data);

         if (response?.success) {
            cookies.set("auth-token", response.token, { path: "/" });

            if (redirectUrl) {
               location.replace(redirectUrl);
            } else {
               response.data.role === "USER"
                  ? location.replace("/dashboard")
                  : location.replace("/admin");
            }
         } else {
            toast.error(response?.error?.msg || "Login failed");
         }
      } catch (error) {
         toast.error("Login failed. Please try again.");
      } finally {
         setIsSubmitting(false);
      }
   };
   return (
      <div className="relative w-full md:w-5/6 container flex items-center justify-center flex-col bg-paper py-10 rounded-lg shadow-lg text-black  top-0 z-[5]   bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit(onSubmit)}
               className="space-y-8 w-full md:w-3/4 xl:w-[50%] px-4"
            >
               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                           <Input
                              className="bg-white p-6 outline-none border border-main text-main"
                              placeholder="Email"
                              {...field}
                           />
                        </FormControl>
                        {form.formState.errors.email && (
                           <p className="text-red-500 text-sm">
                              {form.formState.errors.email.message}
                           </p>
                        )}
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Password *</FormLabel>
                        <FormControl>
                           <Input
                              className="bg-white p-6 outline-none border border-main text-main"
                              placeholder="Password"
                              {...field}
                              type="password"
                           />
                        </FormControl>
                        {form.formState.errors.password && (
                           <p className="text-red-500 text-sm">
                              {form.formState.errors.password.message}
                           </p>
                        )}
                     </FormItem>
                  )}
               />

               <Button
                  type="submit"
                  className="w-full bg-gradient-to-br from-pink-200 via-[#64A2FF] to-blue-500"
                  disabled={isSubmitting}
               >
                  {isSubmitting ? "Logging in..." : "Login"}
               </Button>
            </form>
         </Form>
         <div className="mt-6">
            <p>
               Don't have an account?
               <Link
                  className="ml-4 text-main"
                  href="/signup"
               >
                  Signup
               </Link>
            </p>
         </div>
      </div>
   );
};

export default LoginPage;
