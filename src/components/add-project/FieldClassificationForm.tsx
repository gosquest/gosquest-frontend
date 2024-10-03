import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { useFormContext } from "react-hook-form";

export default function FieldClassificationForm() {
  const { setValue, getValues } = useFormContext();
  const [fields, setFields] = useState<string[]>([]);
  const [fieldValue, setFieldValue] = useState("");
  const data  = getValues()

  useEffect(()=>{
    if(data.fields){
      setFields(data.fields)
    }
  },[])

  const addField = () => {
    if (fieldValue.trim() !== "") {
      const updatedFields = [...fields, fieldValue.trim()];
      setFields(updatedFields);
      setValue("fields", updatedFields);
      setFieldValue("");
    }
  };

  const removeField = (index: number) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
    setValue("fields", updatedFields);
  };

  return (
    <div className="w-full">
      <h6 className="self-start">Fields</h6>
      <div className="w-full flex items-end gap-4 border p-4 rounded">
        <Input
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
          placeholder="Enter a field (e.g., Transport, Agriculture)"
        />
        <Button type="button" onClick={addField}>
          +
        </Button>
      </div>
      <div className="mt-4 space-y-2">
        {fields.length > 0 &&
          fields.map((field, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 px-4 py-1 rounded"
            >
              <span>{field}</span>
              <Button
                variant="ghost"
                className="text-red-500 hover:text-red-900"
                onClick={() => removeField(index)}
                type="button"
              >
                <Trash2 className="w-5 h-5" />
              </Button>
            </div>
          ))}
      </div>
    </div>
  );
}
