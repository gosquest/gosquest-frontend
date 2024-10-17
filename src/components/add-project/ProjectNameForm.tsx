import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export default function WebsiteNameForm() {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Website Name</FormLabel>
          <FormControl>
            <Input {...field} value={field.value ?? ""} placeholder="Enter website name" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
