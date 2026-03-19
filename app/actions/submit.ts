"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SignupFormData {
  name: string;
  email: string;
  weddingsPerYear?: string;
}

interface SubmitResult {
  success: boolean;
  message: string;
}

export async function submitSignup(
  data: SignupFormData
): Promise<SubmitResult> {
  if (!data.email?.trim()) {
    return { success: false, message: "Email is required" };
  }

  const ownerEmail = process.env.OWNER_EMAIL;
  if (!ownerEmail) {
    return { success: false, message: "Server configuration error" };
  }

  try {
    const emailContent = `
New Zebri Beta Signup
=====================

Name: ${data.name || "(not provided)"}
Email: ${data.email}
Weddings per Year: ${data.weddingsPerYear || "(not provided)"}

Timestamp: ${new Date().toISOString()}
    `.trim();

    await resend.emails.send({
      from: "Zebri <arjun@zebri.com.au>",
      to: ownerEmail,
      replyTo: data.email,
      subject: `New Beta Signup: ${data.name || data.email}`,
      text: emailContent,
      html: `
        <html>
          <body style="font-family: system-ui, -apple-system, sans-serif; color: #18181b; line-height: 1.6;">
            <h2 style="color: #18181b; margin-bottom: 20px;">New Zebri Beta Signup</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 150px;">Name:</td>
                <td style="padding: 8px 0;">${
                  data.name || "(not provided)"
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}">${
        data.email
      }</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Weddings/Year:</td>
                <td style="padding: 8px 0;">${
                  data.weddingsPerYear || "(not provided)"
                }</td>
              </tr>
            </table>
            <p style="color: #71717a; font-size: 12px; margin-top: 20px;">Timestamp: ${new Date().toISOString()}</p>
          </body>
        </html>
      `,
    });

    return {
      success: true,
      message: "You\u2019re in! We\u2019ll email you when beta access opens.",
    };
  } catch (error) {
    console.error("Signup error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
