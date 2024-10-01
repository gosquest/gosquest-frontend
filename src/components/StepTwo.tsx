import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function StepTwo({ form }: { form: any }) {
  return (
    <div className="w-full">
     <h4 className="self-start">Fields</h4>
   <div className="w-full flex items-end gap-4 justify-center border p-4 rounded-lg">
      <FormField
         control={form.control}
         name="field"
         render={({ field }) => (
            <FormItem>
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
    </div>
  );
}

