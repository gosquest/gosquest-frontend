import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";

export default function DescriptionAndLinkForm() {
  const { control } = useFormContext();

  return (
    <>
      <FormField
        control={control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder="Detailed info about your project"
                className="focus:!ring-0 !ring-offset-0"
                rows={6}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="link"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Project Link</FormLabel>
            <FormControl>
              <Input {...field} value={field.value ?? ""} placeholder="Project URL" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
