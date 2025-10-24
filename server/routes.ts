import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      console.log("=== NEW CONTACT FORM SUBMISSION ===");
      console.log("Name:", validatedData.name);
      console.log("Phone:", validatedData.phone);
      console.log("Email:", validatedData.email || "Not provided");
      console.log("Service:", validatedData.service);
      console.log("Message:", validatedData.message);
      console.log("Timestamp:", new Date().toISOString());
      console.log("=====================================");
      
      res.json({
        success: true,
        message: "Thank you for contacting us! We'll get back to you within 24 hours.",
        data: {
          name: validatedData.name,
          service: validatedData.service,
        },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Please check your form inputs",
          errors: error.errors.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        });
      }
      
      console.error("Contact form error:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred. Please try calling us directly at 069 805 5580",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
