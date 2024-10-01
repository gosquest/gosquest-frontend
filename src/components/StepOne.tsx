import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function StepOne({ form }: { form: any }) {
  return (
    <div className="w-full">
      <FormField control={form.control} name="projectName" render={({ field }) => (
        <FormItem>
          <FormLabel>Project Name</FormLabel>
          <FormControl>
            <Input {...field} className="p-6" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )} />
    </div>
  );
}