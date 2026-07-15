"use server";

import { Resend } from "resend";
import {
  CALENDLY_URL,
  DISCOUNT_PERCENT,
  FOUNDING_DISCOUNT_PERCENT,
  FOUNDING_SPOTS,
  formatDeadline,
} from "@/lib/beatmix";

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
    await resend.emails.send({
      from: "Zebri <arjun@zebri.com.au>",
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

interface DemoRequestData {
  name: string;
  email: string;
}

export async function submitDemoRequest(
  data: DemoRequestData
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
    await resend.emails.send({
      from: "Zebri <info@app.zebri.com.au>",
      to: ownerEmail,
      replyTo: data.email,
      subject: `Demo request: ${data.name || data.email}`,
      text: `
New Zebri Demo Request
======================

Name: ${data.name || "(not provided)"}
Email: ${data.email}

Timestamp: ${new Date().toISOString()}
      `.trim(),
      html: `
        <html>
          <body style="font-family: system-ui, -apple-system, sans-serif; color: #18181b; line-height: 1.6;">
            <h2 style="color: #18181b; margin-bottom: 20px;">New Zebri Demo Request</h2>
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
            </table>
            <p style="color: #71717a; font-size: 12px; margin-top: 20px;">Timestamp: ${new Date().toISOString()}</p>
          </body>
        </html>
      `,
    });

    return {
      success: true,
      message: "We\u2019ll be in touch within 24 hours to schedule your demo.",
    };
  } catch (error) {
    console.error("Demo request error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

/* ------------------------------------------------------------------ */
/* Beatmix conference (/beatmix)                                       */
/*                                                                     */
/* Two-stage capture. Stage one sends the email the moment we have it, */
/* so we keep the address even when someone abandons stage two mid-    */
/* talk. Stage two arrives as a separate email, reconciled by address. */
/* There is no database by design \u2014 see the plan for why.              */
/* ------------------------------------------------------------------ */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FROM_ADDRESS = "Zebri <arjun@zebri.com.au>";

function validateEmail(email: string | undefined): SubmitResult | null {
  if (!email?.trim()) {
    return { success: false, message: "Email is required" };
  }
  if (!EMAIL_REGEX.test(email)) {
    return { success: false, message: "Please enter a valid email address" };
  }
  return null;
}

/**
 * Confirmation to the person signing up. They just handed over an address in a
 * crowded room expecting a discount code \u2014 silence reads as a broken form.
 *
 * Best-effort: a failure here must not fail the signup, because the owner
 * notification is what actually captures the address.
 */
async function sendBeatmixConfirmation(email: string): Promise<void> {
  const deadline = formatDeadline();

  const bookingLine = CALENDLY_URL
    ? `Book your setup session here: ${CALENDLY_URL}`
    : `We\u2019ll email you a link to book your setup session.`;

  const bookingHtml = CALENDLY_URL
    ? `<p style="margin: 24px 0;">
         <a href="${CALENDLY_URL}" style="background: #111111; color: #ffffff; text-decoration: none; padding: 12px 20px; border-radius: 6px; display: inline-block; font-weight: 600;">Book your setup session</a>
       </p>`
    : `<p style="margin: 24px 0; color: #6b7280;">We\u2019ll email you a link to book your setup session.</p>`;

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      replyTo: "arjun@zebri.com.au",
      subject: "Your Beatmix rate is locked in",
      text: `
Your Beatmix rate is locked in
==============================

You're in. Here's what happens next.

- Your discount code lands in this inbox within 24 hours.
- It gives you ${DISCOUNT_PERCENT}% off for 12 months on Pro or Max.
- The first ${FOUNDING_SPOTS} people to sign up get ${FOUNDING_DISCOUNT_PERCENT}% off instead. We'll tell you either way.
- One person, drawn at random, gets 12 months free. Announced by email after ${deadline}.

${bookingLine}

Reply to this email if you need anything.

Arjun
Zebri
      `.trim(),
      html: `
        <html>
          <body style="font-family: system-ui, -apple-system, sans-serif; color: #111827; line-height: 1.6; max-width: 560px;">
            <h2 style="font-weight: 600; margin-bottom: 8px;">Your Beatmix rate is locked in</h2>
            <p style="color: #6b7280; margin-top: 0;">You\u2019re in. Here\u2019s what happens next.</p>
            <ul style="color: #111827; padding-left: 20px;">
              <li style="margin-bottom: 8px;">Your discount code lands in this inbox within 24 hours.</li>
              <li style="margin-bottom: 8px;">It gives you <strong>${DISCOUNT_PERCENT}% off for 12 months</strong> on Pro or Max.</li>
              <li style="margin-bottom: 8px;">The first ${FOUNDING_SPOTS} people to sign up get <strong>${FOUNDING_DISCOUNT_PERCENT}% off</strong> instead. We\u2019ll tell you either way.</li>
              <li style="margin-bottom: 8px;">One person, drawn at random, gets <strong>12 months free</strong>. Announced by email after ${deadline}.</li>
            </ul>
            ${bookingHtml}
            <p style="color: #6b7280; font-size: 13px;">Reply to this email if you need anything.</p>
            <p style="color: #6b7280; font-size: 13px;">Arjun \u00b7 Zebri</p>
          </body>
        </html>
      `,
    });
  } catch (error) {
    console.error("Beatmix confirmation email error:", error);
  }
}

interface BeatmixEmailData {
  email: string;
}

export async function submitBeatmixEmail(
  data: BeatmixEmailData
): Promise<SubmitResult> {
  const invalid = validateEmail(data.email);
  if (invalid) return invalid;

  const ownerEmail = process.env.OWNER_EMAIL;
  if (!ownerEmail) {
    return { success: false, message: "Server configuration error" };
  }

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: ownerEmail,
      replyTo: data.email,
      subject: `[BEATMIX] New signup: ${data.email}`,
      text: `
Beatmix Signup
==============

Email: ${data.email}

Timestamp: ${new Date().toISOString()}

Order of arrival decides the first ${FOUNDING_SPOTS} (${FOUNDING_DISCOUNT_PERCENT}% off).
      `.trim(),
      html: `
        <html>
          <body style="font-family: system-ui, -apple-system, sans-serif; color: #111827; line-height: 1.6;">
            <h2 style="margin-bottom: 20px;">Beatmix Signup</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 180px;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
              </tr>
            </table>
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">Timestamp: ${new Date().toISOString()}</p>
            <p style="color: #6b7280; font-size: 12px;">Order of arrival decides the first ${FOUNDING_SPOTS} (${FOUNDING_DISCOUNT_PERCENT}% off).</p>
          </body>
        </html>
      `,
    });
  } catch (error) {
    console.error("Beatmix signup error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }

  await sendBeatmixConfirmation(data.email);

  return {
    success: true,
    message: "You\u2019re in. Your discount code lands in your inbox shortly.",
  };
}

interface BeatmixDetailsData {
  email: string;
  name?: string;
  role?: string;
  currentSystem?: string;
}

export async function submitBeatmixDetails(
  data: BeatmixDetailsData
): Promise<SubmitResult> {
  const invalid = validateEmail(data.email);
  if (invalid) return invalid;

  const ownerEmail = process.env.OWNER_EMAIL;
  if (!ownerEmail) {
    return { success: false, message: "Server configuration error" };
  }

  const notProvided = "(not provided)";

  try {
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: ownerEmail,
      replyTo: data.email,
      subject: `[BEATMIX] Details \u2014 ${data.name || data.email}`,
      text: `
Beatmix Details
===============

Name: ${data.name || notProvided}
Email: ${data.email}
Role: ${data.role || notProvided}
Currently using: ${data.currentSystem || notProvided}

Timestamp: ${new Date().toISOString()}
      `.trim(),
      html: `
        <html>
          <body style="font-family: system-ui, -apple-system, sans-serif; color: #111827; line-height: 1.6;">
            <h2 style="margin-bottom: 20px;">Beatmix Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 180px;">Name:</td>
                <td style="padding: 8px 0;">${data.name || notProvided}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Role:</td>
                <td style="padding: 8px 0;">${data.role || notProvided}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Currently using:</td>
                <td style="padding: 8px 0;">${data.currentSystem || notProvided}</td>
              </tr>
            </table>
            <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">Timestamp: ${new Date().toISOString()}</p>
          </body>
        </html>
      `,
    });

    return { success: true, message: "Thanks. That helps." };
  } catch (error) {
    console.error("Beatmix details error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
