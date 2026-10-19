import { CalendarSyncIcon, ClientsIcon, DocumentsIcon, EmailIcon, JourneysIcon, MessageTextIcon, PaymentsIcon, SparklesIcon, type ZebriIcon } from '@/components/ui-v2/icons';

import type { Tier } from './catalog';

/**
 * The plans, as the app's plan sheet prices them: a copy of the app's
 * offers for the site's pricing band. When the app's prices change, change
 * this with them. Monthly, in Australian dollars, GST included.
 *
 * @module components/site/plan-pricing
 */

/** One line of what a plan includes. */
export interface Feature {
  icon: ZebriIcon;
  text: string;
}

/** A paid plan. */
export interface Offer {
  tier: Tier;
  name: string;
  /** Who it is for, under the name. */
  for: string;
  /** The usual monthly price. */
  was: number;
  /** What it costs a month for the first 12 months; equal to `was` when there is no offer. */
  monthly: number;
  features: Feature[];
}

export const OFFERS: Offer[] = [
  {
    tier: 'pro',
    name: 'Pro',
    for: 'For MCs running their own show',
    was: 59,
    monthly: 59,
    features: [
      { icon: ClientsIcon, text: 'Unlimited clients' },
      { icon: DocumentsIcon, text: 'Proposals, contracts and invoices' },
      { icon: PaymentsIcon, text: 'Card payments and automatic reminders' },
      { icon: JourneysIcon, text: 'Journeys that follow up for you' },
    ],
  },
  {
    tier: 'max',
    name: 'Max',
    for: 'For busy MCs and small teams',
    was: 99,
    monthly: 47,
    features: [
      { icon: SparklesIcon, text: 'Everything in Pro, plus Talk to Zebri' },
      { icon: MessageTextIcon, text: 'SMS and video calls' },
      { icon: EmailIcon, text: 'Email marketing' },
      { icon: CalendarSyncIcon, text: 'Integrations: Instagram, BDM and calendars' },
    ],
  },
];

/** Enterprise: priced to the team, so it has no number. */
export const ENTERPRISE = { name: 'Enterprise', pitch: 'Agencies and larger teams' } as const;

/** The free trial, in days, once someone is let in. */
export const TRIAL_DAYS = 7;

/** A plan by tier. */
export const offerOf = (tier: Tier) => OFFERS.find((o) => o.tier === tier) ?? OFFERS[0]!;
