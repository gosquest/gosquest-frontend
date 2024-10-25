import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export default function WebsiteUrlForm() {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name="url"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Website Url</FormLabel>
          <FormControl>
            <Input {...field} value={field.value ?? ""} placeholder="Enter website url" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
