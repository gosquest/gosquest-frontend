import { z } from "zod";

export const addProjectSchema = z.object({
    name: z.string().min(1, "Project name is required"),
    fields: z.array(z.string().min(1, "Field cannot be empty")).min(1, "At least one field is required"),
    team_leader: z.string().min(1, "Team leader's full name is required"),
    description: z.string().min(1, "Project description is required"),
    link: z.string().url("Must be a valid URL"),
    logo: z.string().min(1, "Logo is required"),
    cover_image: z.string().min(1, "Cover image is required"),
});