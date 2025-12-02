import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";
import { SendMailClient } from "zeptomail";

const ZEPTOMAIL_URL = "https://api.zeptomail.com/v1.1/email";
const ZEPTOMAIL_TOKEN = process.env.ZEPTOMAIL_API_KEY;

if (!ZEPTOMAIL_TOKEN) {
  console.warn("WARNING: ZEPTOMAIL_API_KEY not set. Email functionality will be disabled.");
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Performance: Add caching headers for static assets only
  app.use((req, res, next) => {
    // Skip caching for API routes - never cache
    if (req.url.startsWith('/api/')) {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
      return next();
    }
    // Cache static assets for 1 year (fingerprinted by Vite)
    if (req.url.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
    // Don't cache HTML or dynamic routes - let browser handle freshness
    // This prevents stale content issues with marketing pages
    next();
  });

  // Serve sitemap.xml and robots.txt with proper headers
  app.get('/sitemap.xml', (req, res) => {
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.sendFile('sitemap.xml', { root: './client/public' });
  });

  app.get('/robots.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'public, max-age=86400');
    res.sendFile('robots.txt', { root: './client/public' });
  });

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

      // Send email notification via ZeptoMail
      if (ZEPTOMAIL_TOKEN) {
        try {
          const client = new SendMailClient({ url: ZEPTOMAIL_URL, token: ZEPTOMAIL_TOKEN });

          const emailHtml = `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #F9CB15; color: #111111; padding: 20px; text-align: center; }
                .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #555; }
                .value { color: #111; }
                .footer { margin-top: 20px; padding: 15px; background-color: #111111; color: white; text-align: center; font-size: 12px; }
                .emergency { background-color: #fee; border-left: 4px solid #c00; padding: 10px; margin: 15px 0; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>New Contact Form Submission</h1>
                  <p>Electrifying Electrical and Plumbing</p>
                </div>
                <div class="content">
                  ${validatedData.service === 'Emergency' ? '<div class="emergency"><strong>URGENT: EMERGENCY SERVICE REQUEST</strong></div>' : ''}
                  
                  <div class="field">
                    <span class="label">Name:</span><br>
                    <span class="value">${validatedData.name}</span>
                  </div>
                  
                  <div class="field">
                    <span class="label">Phone:</span><br>
                    <span class="value">${validatedData.phone}</span>
                  </div>
                  
                  <div class="field">
                    <span class="label">Email:</span><br>
                    <span class="value">${validatedData.email || 'Not provided'}</span>
                  </div>
                  
                  <div class="field">
                    <span class="label">Service Type:</span><br>
                    <span class="value">${validatedData.service}</span>
                  </div>
                  
                  <div class="field">
                    <span class="label">Message:</span><br>
                    <span class="value">${validatedData.message}</span>
                  </div>
                  
                  <div class="field">
                    <span class="label">Submitted:</span><br>
                    <span class="value">${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })}</span>
                  </div>
                </div>
                <div class="footer">
                  <p>This is an automated notification from your website contact form.</p>
                  <p>Electrifying Electrical and Plumbing | 069 805 5580</p>
                </div>
              </div>
            </body>
            </html>
          `;

          await client.sendMail({
            from: {
              address: "noreply@electrifyelectrical.co.za",
              name: "Electrifying Website"
            },
            to: [
              {
                email_address: {
                  address: "raymond@digitalstudiohub.com",
                  name: "Raymond"
                }
              }
            ],
            subject: `${validatedData.service === 'Emergency' ? '[URGENT] EMERGENCY - ' : ''}New Contact: ${validatedData.name} - ${validatedData.service}`,
            htmlbody: emailHtml
          });

          console.log("SUCCESS: Email notification sent successfully via ZeptoMail");
        } catch (emailError) {
          console.error("ERROR: Failed to send email via ZeptoMail:", emailError);
          // Don't fail the request if email fails - still return success to user
        }
      } else {
        console.log("WARNING: Email not sent - ZEPTOMAIL_API_KEY not configured");
      }
      
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
