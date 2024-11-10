"use client"
import { Button } from "@/components/ui/button";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";
import {
   Facebook,
   Instagram,
   Linkedin,
   LocateIcon,
   Mail,
   Phone,
} from "lucide-react";

const formSchema = z.object({
   firstName: z.string().min(2, "First name must be at least 2 characters"),
   lastName: z.string().min(2, "Last name must be at least 2 characters"),
   email: z.string().email("Invalid email address"),
   phone: z.string().optional(),
   message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactPage = () => {
   const form = useForm<FormData>({
      resolver: zodResolver(formSchema),
      mode: "onChange",
   });

   const onSubmit = async (data: FormData) => {
      console.log(data);
   };

   return (
      <div className="flex items-center flex-col gap-4 justify-center container">
         <div className="w-full overflow-hidden">
            {/* Animated Heading 1 */}
            <motion.div
               initial={{ x: "100%" }}
               animate={{ x: "-100%" }}
               transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
               className="whitespace-nowrap"
            >
               <h1 className="text-6xl md:text-8xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200 w-fit">
                  Welcome to GosQuest - Bringing People Closer to the Gospel
               </h1>
            </motion.div>

            {/* Animated Heading 2 */}
            <motion.div
               initial={{ x: "100%" }}
               animate={{ x: "-100%" }}
               transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
               className="whitespace-nowrap mt-4"
            >
               <h1 className="text-4xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200 w-fit">
                  Join our community of faith and explore endless possibilities with GosQuest
               </h1>
            </motion.div>

            {/* Animated Heading 3 */}
            <motion.div
               initial={{ x: "100%" }}
               animate={{ x: "-100%" }}
               transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
               className="whitespace-nowrap mt-4"
            >
               <h1 className="text-4xl md:text-6xl font-bold text-center text-accent  bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200 w-fit">
                  Discover more about our mission, values, and the path to spiritual growth
               </h1>
            </motion.div>
         </div>

         <h4 className="mt-6 text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200">Contact Us</h4>
         <p>Any question or remarks? Just write us a message!</p>
         
         <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full mt-6">
            <div className="bg-main p-4 flex flex-col gap-8 rounded-lg text-white w-5/6 md:w-[40%] min-h-[40vh] justify-between bg-gradient-to-br from-pink-200 via-[#64A2FF] to-blue-500 py-[56px]">
               <div>
                  <h5 className="text-transparent bg-clip-text bg-gradient-to-r from-main via-blue-400 to-pink-200">Contact Information</h5>
                  <p>Say something to GosQuest</p>
               </div>
               <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                     <Phone />
                     <span>+250780037145</span>
                  </div>
                  <div className="flex gap-3">
                     <Mail />
                     <span>gosquest@gmail.com</span>
                  </div>
                  <div className="flex gap-3">
                     <LocateIcon />
                     <span>Kigali, Rwanda</span>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="p-3 flex items-center justify-center rounded-full w-10 h-10 border">
                     <Facebook />
                  </div>
                  <div className="p-3 flex items-center justify-center rounded-full w-10 h-10 border">
                     <Instagram />
                  </div>
                  <div className="p-3 flex items-center justify-center rounded-full w-10 h-10 border">
                     <Linkedin />
                  </div>
               </div>
            </div>

            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8 w-full md:w-[55%]"
               >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                 <Input
                                    className="bg-white p-6 outline-none border border-main"
                                    placeholder="First name"
                                    {...field}
                                 />
                              </FormControl>
                              {form.formState.errors.firstName && (
                                 <p className="text-red-500 text-sm">
                                    {form.formState.errors.firstName.message}
                                 </p>
                              )}
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                 <Input
                                    className="bg-white p-6 outline-none border border-main"
                                    placeholder="Last name"
                                    {...field}
                                 />
                              </FormControl>
                              {form.formState.errors.lastName && (
                                 <p className="text-red-500 text-sm">
                                    {form.formState.errors.lastName.message}
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
                                    className="bg-white p-6 outline-none border border-main"
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
                        name="phone"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>Phone</FormLabel>
                              <FormControl>
                                 <Input
                                    className="bg-white p-6 outline-none border border-main"
                                    placeholder="Phone"
                                    {...field}
                                 />
                              </FormControl>
                              {form.formState.errors.phone && (
                                 <p className="text-red-500 text-sm">
                                    {form.formState.errors.phone.message}
                                 </p>
                              )}
                           </FormItem>
                        )}
                     />
                  </div>

                  <FormField
                     control={form.control}
                     name="message"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Message *</FormLabel>
                           <FormControl>
                              <Textarea
                                 className="bg-white p-6 outline-none border border-main"
                                 placeholder="Your message"
                                 {...field}
                              />
                           </FormControl>
                           {form.formState.errors.message && (
                              <p className="text-red-500 text-sm">
                                 {form.formState.errors.message.message}
                              </p>
                           )}
                        </FormItem>
                     )}
                  />

                  <Button type="submit" className="w-full bg-gradient-to-br from-pink-200 via-[#64A2FF] to-blue-500 ">
                     Submit
                  </Button>
               </form>
            </Form>
         </div>
      </div>
   );
};

export default ContactPage;
