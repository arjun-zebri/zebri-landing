/**
 * Single source of truth for the Beatmix conference offer.
 *
 * Two values below need confirming before this page goes live. Nothing else
 * in the codebase hardcodes them; change them here only.
 */

export const CONFERENCE_NAME = "Beatmix";

/** TODO(arjun): confirm the final day of Beatmix. */
export const CONFERENCE_END_DATE = new Date("2026-08-16T00:00:00+10:00");

/** TODO(arjun): paste the setup-session booking link. Empty string falls back to "we'll email you". */
export const CALENDLY_URL = "";

const OFFER_WINDOW_DAYS = 7;

export const OFFER_DEADLINE = new Date(
  CONFERENCE_END_DATE.getTime() + OFFER_WINDOW_DAYS * 24 * 60 * 60 * 1000
);

export const FOUNDING_SPOTS = 5;
export const DISCOUNT_PERCENT = 20;
export const FOUNDING_DISCOUNT_PERCENT = 50;

export const ROLES = ["Wedding MC", "Celebrant", "DJ"] as const;
export type Role = (typeof ROLES)[number];

export const CURRENT_SYSTEMS = [
  "Nothing yet",
  "Docs & spreadsheets",
  "Dubsado, HoneyBook or similar",
  "Something else",
] as const;
export type CurrentSystem = (typeof CURRENT_SYSTEMS)[number];

/**
 * Fixed timezone and locale so the server and client render the same string.
 * Without this the deadline hydrates differently for anyone outside Sydney.
 */
const deadlineFormatter = new Intl.DateTimeFormat("en-AU", {
  weekday: "long",
  day: "numeric",
  month: "long",
  timeZone: "Australia/Sydney",
});

/** e.g. "Sunday 23 August" */
export function formatDeadline(): string {
  return deadlineFormatter.format(OFFER_DEADLINE);
}

/** Monthly price after the Beatmix discount, e.g. 49 -> "39.20" */
export function discountedPrice(
  monthly: number,
  percent: number = DISCOUNT_PERCENT
): string {
  return (monthly * (1 - percent / 100)).toFixed(2);
}
