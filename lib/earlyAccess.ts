/**
 * Single source of truth for the early-access / founding-member capture.
 *
 * The product is still being built, so we don't push people into a self-serve
 * trial. Instead we capture founding members here and onboard them a few at a
 * time — couples loaded in together on a call.
 */

/**
 * Your Calendly (or any booking) link. Leave empty and the modal hides the
 * "book a call" option and falls back to the form alone. Paste the link here
 * and the booking button appears everywhere the modal is used.
 *
 */
export const EARLY_ACCESS_CALENDLY_URL = "https://calendly.com/arjun-zebri/30min";

/** Founding-member discount applied on top of list pricing for the first 12 months. */
export const FOUNDING_DISCOUNT_PERCENT = 20;

export interface FoundingPerk {
  title: string;
  detail: string;
}

/**
 * The full founding-member offer. Shared by the FoundingOffer section and the
 * early-access modal so the two never drift out of sync.
 */
export const FOUNDING_PERKS: FoundingPerk[] = [
  {
    title: "20% off for 12 months",
    detail: "Every founding signup, every plan.",
  },
  {
    title: "Max features free for 12 months",
    detail:
      "Every Pro signup gets the full Max tier: automations, SMS, Pulse, integrations.",
  },
  {
    title: "Free onboarding call",
    detail: "We get on a call and load all your couples in together.",
  },
  {
    title: "A dedicated account manager",
    detail: "A real person you can message. Not a ticket queue.",
  },
  {
    title: "Vote on what gets built next",
    detail: "Founding members set the roadmap. Your workflow shapes the product.",
  },
];

/** The founding-member prize draw, shown alongside the perks in both places. */
export const FOUNDING_DRAW_HEADLINE =
  "One founding member gets 12 months completely free.";
export const FOUNDING_DRAW_DETAIL =
  "Every signup before launch goes into the draw.";
