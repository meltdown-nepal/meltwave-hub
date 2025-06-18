
import { z } from "zod";

export const demoFormSchema = z.object({
  userType: z.enum(["employee", "company", "provider"]),
  companySize: z.enum(["under5", "5to10", "10to25", "25to50", "50to75", "75to100", "100to200", "200to500", "500plus"]),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  companyType: z.string().min(2, "Industry must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneContact: z.boolean().default(false),
  phone: z.string().optional(),
  additionalDetails: z.string().optional(),
});

export type DemoFormData = z.infer<typeof demoFormSchema>;
