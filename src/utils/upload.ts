export const uploadFile = async (formData: FormData) => {
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong with the file upload.");
      }
  
      console.log("File uploaded successfully:", data);
      return data;
    } catch (error) {
      console.error("File upload failed:", error);
    }
  };
  