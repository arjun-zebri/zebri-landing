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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { success: false, message: "Please enter a valid email address" };
  }

  const ownerEmail = process.env.OWNER_EMAIL;
  if (!ownerEmail) {
    return { success: false, message: "Server configuration error" };
  }

  try {
    // The Resend SDK reports API failures via the `error` field instead of
    // throwing, so it must be checked explicitly.
    const { error } = await resend.emails.send({
      from: "Zebri <arjun@app.zebri.com.au>",
      to: ownerEmail,
      replyTo: data.email,
      subject: `New waitlist signup: ${data.name || data.email}`,
      text: `
New Zebri Waitlist Signup
=========================

Name: ${data.name || "(not provided)"}
Email: ${data.email}
Weddings/year: ${data.weddingsPerYear || "(not provided)"}

Timestamp: ${new Date().toISOString()}
      `.trim(),
      html: `
        <html>
          <body style="font-family: system-ui, -apple-system, sans-serif; color: #18181b; line-height: 1.6;">
            <h2 style="color: #18181b; margin-bottom: 20px;">New Zebri Waitlist Signup</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 180px;">Name:</td>
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
                <td style="padding: 8px 0; font-weight: 600;">Weddings/year:</td>
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

    if (error) {
      console.error("Signup email error:", error);
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }

    return {
      success: true,
      message:
        "You\u2019re on the list. We\u2019ll be in touch with your founding member details soon.",
    };
  } catch (error) {
    console.error("Signup error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

interface EarlyAccessData {
  name: string;
  email: string;
  currentCrm?: string;
  source?: string;
}

export async function submitEarlyAccess(
  data: EarlyAccessData
): Promise<SubmitResult> {
  if (!data.email?.trim()) {
    return { success: false, message: "Email is required" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { success: false, message: "Please enter a valid email address" };
  }

  const ownerEmail = process.env.OWNER_EMAIL;
  if (!ownerEmail) {
    return { success: false, message: "Server configuration error" };
  }

  const notProvided = "(not provided)";

  try {
    const { error } = await resend.emails.send({
      from: "Zebri <arjun@app.zebri.com.au>",
      to: ownerEmail,
      replyTo: data.email,
      subject: `Early access request: ${data.name || data.email}`,
      text: `
New Zebri Early Access Request
==============================

Name: ${data.name || notProvided}
Email: ${data.email}
Currently uses: ${data.currentCrm || notProvided}
Came from: ${data.source || notProvided}

Timestamp: ${new Date().toISOString()}
      `.trim(),
      html: `
        <html>
          <body style="font-family: system-ui, -apple-system, sans-serif; color: #18181b; line-height: 1.6;">
            <h2 style="color: #18181b; margin-bottom: 20px;">New Zebri Early Access Request</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 180px;">Name:</td>
                <td style="padding: 8px 0;">${data.name || notProvided}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}">${
        data.email
      }</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Currently uses:</td>
                <td style="padding: 8px 0;">${data.currentCrm || notProvided}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Came from:</td>
                <td style="padding: 8px 0;">${data.source || notProvided}</td>
              </tr>
            </table>
            <p style="color: #71717a; font-size: 12px; margin-top: 20px;">Timestamp: ${new Date().toISOString()}</p>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Early access email error:", error);
      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }

    return {
      success: true,
      message:
        "You’re on the founding list. We’ll be in touch to get you set up.",
    };
  } catch (error) {
    console.error("Early access error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
