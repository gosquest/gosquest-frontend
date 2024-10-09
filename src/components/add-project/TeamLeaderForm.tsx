import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

export default function TeamLeaderForm() {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name="team_leader"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Team Leader</FormLabel>
          <FormControl>
            <Input {...field} value={field.value ?? ""} placeholder="Enter team leader's name" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
