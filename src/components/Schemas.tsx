import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import { z } from "zod";

// Define your schemas
export const stepOneSchema = z.object({
   projectName: z.string().min(1, "Project name is required"),
});

// Updated schema for Step Two
export const stepTwoSchema = z.object({
   fields: z
      .array(z.string().min(1, "Field classification is required"))
      .nonempty("At least one field is required"),
});

export const stepThreeSchema = z.object({
   teamLeader: z.string().min(1, "Team leader's full name is required"),
});

export const stepFourSchema = z.object({
   description: z.string().min(1, "Project description is required"),
   link: z.string().url("Must be a valid URL"),
});

export const stepFiveSchema = z.object({
   logo: z.instanceof(File).optional().nullable(),
   coverImg: z.instanceof(File).optional().nullable(),
});

export const schemas = [
   stepOneSchema,
   stepTwoSchema,
   stepThreeSchema,
   stepFourSchema,
   stepFiveSchema,
];

// Define steps with titles, descriptions, and component references
export const steps = [
   {
      title: "Project",
      description: "Enter the project name",
      component: StepOne,
   },
   {
      title: "Field",
      description: "Enter field classification",
      component: StepTwo,
   },
   {
      title: "Team Leader",
      description: "Enter team leader's name",
      component: StepThree,
   },
   {
      title: "Description",
      description: "Enter project description and link",
      component: StepFour,
   },
   {
      title: "Other Requirements",
      description: "Add extra details or media",
      component: StepFive,
   },
];
