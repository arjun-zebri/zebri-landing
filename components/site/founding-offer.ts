import { AccountManagerIcon, CallIcon, MaxPlanIcon, VoteIcon } from '@/components/ui-v2/icons';
import type { ZebriIcon } from '@/components/ui-v2/icons/icon-base';

import { offerOf } from './plan-pricing';

/**
 * The waitlist and what a founding member gets (founder, 2026-10-19:
 * get people onto a waitlist and let them in a few at a time, as Kinso
 * does, building the hype while the old Zebri is moved onto this one).
 *
 * Everyone let in before the public launch is a founding member. There
 * is no cap: the queue decides when someone gets in, never whether they
 * are founding, so a visitor who joins late is still offered the deal.
 *
 * The perks were five (20% off, Max features free, a call, an account
 * manager, a vote). "20% off" and "Max free" together made the Max card
 * a worse deal than Pro for the same features (2026-10-19 review), so
 * the two are one perk here: Max at the founding price. It was headed
 * "Max for the price of Pro", but the founding price ($47) is under
 * Pro's ($59), so the headline and the number disagreed (2026-10-19
 * legal audit); the perk now says the number. It is read from the plan
 * sheet, so the perk, the cards and the FAQ never disagree.
 *
 * @module components/site/founding-offer
 */

export interface Perk {
  icon: ZebriIcon;
  title: string;
  detail: string;
}

/** What a founding member pays for Max, a month, for their first 12 months. */
export const FOUNDING_PRICE = offerOf('max').monthly;

export const PERKS: readonly Perk[] = [
  {
    icon: MaxPlanIcon,
    title: `Max for $${FOUNDING_PRICE} a month`,
    detail: `Every Max feature, for less than Pro, for your first 12 months. Then $${offerOf('max').was}.`,
  },
  { icon: CallIcon, title: 'Onboarding call', detail: 'Free, one-on-one, to set Zebri up with you.' },
  { icon: AccountManagerIcon, title: 'Account manager', detail: 'A dedicated person who knows your business.' },
  { icon: VoteIcon, title: 'A vote', detail: 'On what gets built next.' },
];
