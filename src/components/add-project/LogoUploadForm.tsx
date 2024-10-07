import Image from "next/image";
import { useDropzone } from "react-dropzone";
import upload from "../../../public/icons/upload.png";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "@/utils/upload";

export default function LogoUploadForm() {
  const { control, setValue, watch } = useFormContext();
  const logo = watch("logo");
  const [isUploading, setIsUploading] = useState(false);

  const handleDrop = async (acceptedFiles: File[]) => {
    if (isUploading) {
      toast.warning("Please wait until the current upload finishes.");
      return;
    }

    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", 'logo');
    
    setIsUploading(true);
    
    try {
      const response = await uploadFile(formData); 
      if (response && response.filename) {
        const fileUrl = `/projects/logo/${response.filename}`;
        setValue("logo", fileUrl);
      }
    } catch (error) {
      toast.error("Logo upload failed.");
    } finally {
      setIsUploading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: { 'image/*': [] },
    disabled: isUploading,
  });

  return (
    <FormField
      control={control}
      name="logo"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Project Logo</FormLabel>
          <FormControl>
            <div
              {...getRootProps()}
              className={`p-6 rounded border-dashed border-2 text-main flex flex-col items-center gap-2 ${isUploading ? "opacity-50" : ""}`}
            >
              {logo ? (
                // Display uploaded logo if available
                <img src={logo} alt="Uploaded logo" className="h-40 object-cover" />
              ) : (
                <>
                  <Image src={upload} alt="upload" />
                  <input {...getInputProps()} disabled={isUploading} />
                  {isDragActive ? (
                    <p>Drag & Drop the logo here ...</p>
                  ) : (
                    <p>Drag & drop logo here, or <span>Browse</span></p>
                  )}
                </>
              )}
              {isUploading && <p>Uploading...</p>}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
