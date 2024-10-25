import { url } from "inspector";
import { z } from "zod";

export const addWebsiteSchema = z.object({
   name: z.string().min(1, "Website name is required"),
   description: z.string().min(1, "Website description is required"),
   url: z.string().min(5, "Website url is required"),
   logo: z.string().min(1, "Logo is required"),
   cover_image: z.string().min(1, "Cover image is required"),
});
