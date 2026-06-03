import { Inbound } from "inboundemail";

type SendEmailInput = {
  to: string | string[];
  subject: string;
  html: string;
};

const apiKey = process.env.INBOUND_API_KEY || "";

if (!apiKey) {
  console.warn("INBOUND_API_KEY not found - emails will not be sent");
}

const client = apiKey ? new Inbound(apiKey) : null;

const FROM_EMAIL = "Cledwyn from Lekker Network <cledwyn@lekker.network>";

export async function sendEmail({ to, subject, html }: SendEmailInput): Promise<void> {
  if (!client) {
    console.error("Email skipped because INBOUND_API_KEY is not configured");
    return;
  }

  await client.emails.send({
    from: FROM_EMAIL,
    to,
    subject,
    html,
  });
}
