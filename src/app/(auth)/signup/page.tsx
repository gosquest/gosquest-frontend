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
import React from "react";
import Link from "next/link";
import { useRegisterUser } from "@/hooks/useAuth";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";

const formSchema = z.object({
   fullName: z.string().min(1, "Username is required"),
   email: z.string().email("Invalid email"),
   password: z.string().min(8, "Password must be atleast 8 characters"),
});

type FormData = z.infer<typeof formSchema>;
const SignupPage = () => {
   const form = useForm<FormData>({
      resolver: zodResolver(formSchema),
      mode: "onChange",
      defaultValues:{
         fullName:"",
         email:"",
         password:""
      }
   });

   const cookies = new Cookies();
   const registerUserMutation = useRegisterUser();

   const onSubmit = async (data: FormData) => {
      try {
         const res = await registerUserMutation.mutateAsync(data);
         if (res?.success) {
            cookies.set("token", res.token, { path: "/" });
            toast.success("Registration successful! Please login.");
            location.replace("/dashboard");
         } else {
            toast.error(res?.error?.message || "Registration failed");
         }
      } catch (err) {
         toast.error("An unexpected error occurred. Please try again.");
      }
   };
   
   return (
      <div className="w-full md:w-5/6 container flex items-center justify-center flex-col">
         <Form {...form}>
            <form
               onSubmit={form.handleSubmit(onSubmit)}
               className="space-y-8 w-full md:w-3/4 xl:w-[50%]"
            >
               <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Username *</FormLabel>
                        <FormControl>
                           <Input
                              className="bg-white p-6 outline-none border border-main text-main"
                              placeholder="Username"
                              {...field}
                           />
                        </FormControl>
                        {form.formState.errors.fullName && (
                           <p className="text-red-500 text-sm">
                              {form.formState.errors.fullName.message}
                           </p>
                        )}
                     </FormItem>
                  )}
               />
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
                  className="w-full"
               >
                  Create Account
               </Button>
            </form>
         </Form>
         <div className="mt-6">
            <p>
               Already have an account?
               <Link
                  className="ml-4"
                  href="/login"
               >
                  Login
               </Link>
            </p>
         </div>
      </div>
   );
};

export default SignupPage;
