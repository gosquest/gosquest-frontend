import Image from "next/image";
import { useDropzone } from "react-dropzone";
import upload from "../../../public/icons/upload.png";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { uploadFile } from "@/utils/upload";

export default function CoverImageUploadForm() {
  const { control, setValue, watch } = useFormContext();
  const cover_image = watch("cover_image");
  const [isUploading, setIsUploading] = useState(false);

  const handleDrop = async (acceptedFiles: File[]) => {
    if (isUploading) {
      toast.warning("Please wait until the current upload finishes.");
      return;
    }

    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", 'cover');
    
    setIsUploading(true);
    
    try {
      const response = await uploadFile(formData);
      if (response && response.filename) {
        const fileUrl = `/projects/cover/${response.filename}`;
        setValue("cover_image", fileUrl);
      }
    } catch (error) {
      toast.error("Cover image upload failed.");
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
      name="cover_image"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Cover Image</FormLabel>
          <FormControl>
            <div
              {...getRootProps()}
              className={`p-6 rounded border-dashed border-2 text-main flex flex-col items-center gap-2 ${isUploading ? "opacity-50" : ""}`}
            >
              {cover_image ? (
                // Display uploaded cover image if available
                <img src={cover_image} alt="Uploaded cover image" className="w-full h-40 object-cover" />
              ) : (
                <>
                  <Image src={upload} alt="upload" />
                  <input {...getInputProps()} disabled={isUploading} />
                  {isDragActive ? (
                    <p>Drag & Drop the cover image here ...</p>
                  ) : (
                    <p>Drag & drop cover image here, or <span>Browse</span></p>
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