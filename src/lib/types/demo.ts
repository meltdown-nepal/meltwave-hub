
import { z } from "zod";

export const demoFormSchema = z.object({
  userType: z.enum(["company", "employee", "provider"]),
  companySize: z.string().min(1, "Please select company size"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  companyType: z.string().min(1, "Please select company type"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required").min(10, "Phone number must be at least 10 digits"),
  phoneContact: z.boolean().default(false),
  additionalDetails: z.string().optional(),
});

export type DemoFormData = z.infer<typeof demoFormSchema>;
