'use server';

import { Resend } from 'resend';

/**
 * The waitlist sign-up: the email alone (founder, 2026-10-19: no second
 * step asking for name and trade, and no referral scheme). Each one is
 * emailed to the founder at `OWNER` through Resend, from the app's
 * sending domain, with reply-to set to the sign-up so a reply goes
 * straight to them. There is no database yet: the founder lets people in
 * by hand, a few at a time, so the inbox is the list.
 *
 * @module app/actions/waitlist
 */

/** Where every sign-up is sent. */
const OWNER = 'arjun@zebri.com.au';

const PLANS = new Set(['Pro', 'Max']);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** What the sign-up sends. */
export interface WaitlistEntry {
  email: string;
  /** The plan picked on a pricing card, if any. */
  plan?: string | undefined;
}

export type WaitlistResult = { ok: true } | { ok: false; message: string };

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const clip = (s: string | undefined, n: number) => (s ?? '').trim().slice(0, n);

/** Adds someone to the waitlist. */
export async function joinWaitlist(entry: WaitlistEntry): Promise<WaitlistResult> {
  const email = clip(entry.email, 254).toLowerCase();
  const plan = PLANS.has(clip(entry.plan, 10)) ? clip(entry.plan, 10) : '';

  if (!EMAIL.test(email)) return { ok: false, message: 'Enter a valid email address.' };

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('Waitlist: RESEND_API_KEY is not set');
    return { ok: false, message: 'Something went wrong on our side. Please try again in a minute.' };
  }

  const rows: [string, string][] = [
    ['Email', email],
    ['Plan', plan || '(none picked)'],
    ['Joined', new Date().toISOString()],
  ];

  try {
    // Resend reports API failures in `error` rather than throwing.
    const { error } = await new Resend(key).emails.send({
      from: 'Zebri <arjun@app.zebri.com.au>',
      to: OWNER,
      replyTo: email,
      subject: `Waitlist: ${email}${plan ? ` (${plan})` : ''}`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join('\n'),
      html: `<table style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.6">${rows
        .map(([k, v]) => `<tr><td style="padding:4px 16px 4px 0;font-weight:600">${k}</td><td>${escape(v)}</td></tr>`)
        .join('')}</table>`,
    });
    if (error) {
      console.error('Waitlist email error:', error);
      return { ok: false, message: 'Something went wrong. Please try again.' };
    }
    return { ok: true };
  } catch (err) {
    console.error('Waitlist error:', err);
    return { ok: false, message: 'Something went wrong. Please try again.' };
  }
}
