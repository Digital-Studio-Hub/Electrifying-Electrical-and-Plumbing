import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  service: z.enum(["Electrical", "Plumbing", "Emergency", "Quote"]),
  message: z.string().min(10, "Please provide more details about your request"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
