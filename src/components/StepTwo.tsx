import React, { useState } from "react";
import {
   FormField,
   FormItem,
   FormLabel,
   FormControl,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function StepTwo({ form }: { form: any }) {
   const [fields, setFields] = useState<string[]>([]);
   const [fieldValue, setFieldValue] = useState("");

   const addField = () => {
      if (fieldValue.trim() !== "") {
         setFields([...fields, fieldValue.trim()]);
         setFieldValue("");
      }
   };

   const removeField = (index: number) => {
      const newFields = fields.filter((_, i) => i !== index);
      setFields(newFields);
   };

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
                           value={fieldValue}
                           onChange={(e) => setFieldValue(e.target.value)}
                           className="p-6 w-full"
                           placeholder="Enter a field (e.g., Transport, Agriculture)"
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <Button
               onClick={addField}
               className="bg-main p-6"
            >
               +
            </Button>
         </div>

         <div className="mt-4 space-y-2">
            {fields.length > 0 &&
               fields.map((field, index) => (
                  <div
                     key={index}
                     className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
                  >
                     <span>{field}</span>
                     <Button
                        variant="destructive"
                        className="p-2 rounded-full"
                        onClick={() => removeField(index)}
                     >
                        <Trash2 className="w-5 h-5" />
                     </Button>
                  </div>
               ))}
         </div>
      </div>
   );
}
