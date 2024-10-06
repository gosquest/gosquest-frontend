import { FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

export const CodeField = ({ form, isSubmitting }: any) => (
    <FormField
        control={form.control}
        name="code"
        render={({ field }) => (
            <FormItem className="flex flex-col w-full">
                <FormLabel>Enter your passcode</FormLabel>
                <Input {...field} type="text" placeholder="Enter full name" className="h-[50px] bg-white text-main !font-normal !text-sm" disabled={isSubmitting} />
                <FormMessage />
            </FormItem>
        )}
    />
);
