import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
 } from "@/components/ui/form";
 import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
 
 export default function StepFour({ form }: { form: any }) {
    return (
       <div className="w-full">
    <FormField
                         control={form.control}
                         name="description"
                         render={({ field }) => (
                            <FormItem>
                               <FormLabel>Description</FormLabel>
                               <FormControl>
                                  <Textarea
                                     {...field}
                                     className="p-6"
                                     placeholder="Detailed info about your project"
                                  />
                               </FormControl>
                               <FormMessage />
                            </FormItem>
                         )}
                      />
                      <FormField
                         control={form.control}
                         name="link"
                         render={({ field }) => (
                            <FormItem>
                               <FormLabel>Link</FormLabel>
                               <FormControl>
                                  <Input
                                     {...field}
                                     className="p-6"
                                  />
                               </FormControl>
                               <FormMessage />
                            </FormItem>
                         )}
                      />
       </div>
    );
 }
 