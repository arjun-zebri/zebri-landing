import type { Channel } from './message-chips';

/**
 * The proposal the Zebri AI nudge window is about (Lucy and Oscar's, opened
 * three times with no reply), who it can go to, and what Zebri writes in
 * each tone. Copied from the app's demo data and drafts, trimmed to this
 * one proposal. The drafts never mention what the couple read or how often:
 * the MC sees that, the couple should not feel watched. Demo data only.
 *
 * @module components/site/nudge-data
 */

export const TONES = ['Friendly', 'Helpful', 'Last call'] as const;
export type Tone = (typeof TONES)[number];

/** The proposal, as the window's head line shows it. */
export const PROPOSAL = {
  id: 'lucy-oscar',
  couple: 'Lucy & Oscar',
  template: 'Full day MC',
  opens: 3,
  value: 4350,
  day: 'Sat 20 Nov at Stones of the Yarra Valley',
  expires: 'Fri 9 Oct',
};

/** Each partner with their made-up email and mobile, shown in their chip. */
export const RECIPIENTS = [
  { first: 'Lucy', email: 'lucy.l@gmail.com', mobile: '0412 844 390' },
  { first: 'Oscar', email: 'oscar.w@gmail.com', mobile: '0412 886 441' },
];

const join = (names: string[]) => (names.length > 1 ? `${names.slice(0, -1).join(', ')} and ${names.at(-1)}` : (names[0] ?? 'there'));

/** Zebri's draft for the tone, channel and who it goes to, signed by Jess. */
export function draftFor(tone: Tone, via: Channel, to: string[]): string {
  const hi = `Hi ${join(to)},`;
  const body =
    tone === 'Friendly'
      ? `Just checking in on the proposal I sent for your wedding on ${PROPOSAL.day}. If anything's unclear or you'd like it tweaked, I'm happy to jump on a quick call.`
      : tone === 'Helpful'
        ? 'A few things couples usually ask at this point: a 25% deposit holds your date, the rest can be split into payments, and every package can be tailored. If a 10 minute call would help, just reply with a time.'
        : `Your proposal for ${PROPOSAL.day} is open until ${PROPOSAL.expires}. After that I can't promise the date will still be free, so let me know either way.`;
  return via === 'Email'
    ? `${hi}\n\n${body}\n\nYour proposal: zebri.app/p/${PROPOSAL.id}\n\nThanks,\nJess`
    : `${hi} ${body} zebri.app/p · Jess`;
}
