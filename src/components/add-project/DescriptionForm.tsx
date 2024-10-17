import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";

export default function DescriptionForm() {
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
                placeholder="Detailed info about website"
                className="focus:!ring-0 !ring-offset-0"
                rows={6}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
    </>
  );
}
