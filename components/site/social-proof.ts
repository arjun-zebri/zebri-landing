import type { StackPerson } from '@/components/ui-v2/avatar-stack';

/**
 * The hero's social proof: the founding members' faces in an
 * `AvatarStack`, beside one line of how much they have run between them.
 * No "+N" bubble: a count of the rest read as a waitlist number, not proof.
 *
 * Real founding members, with their own photos (`public/mcs/`), as the
 * previous site showed them. The line says 10,000+ events, the founder's
 * figure for the whole founding group (2026-10-19); public sources alone
 * (John Edney's 1,500+, TJ's 750+) only reach 2,000+.
 *
 * @module components/site/social-proof
 */

/** The founding members, as they are named on their own sites. */
export const PROOF_MEMBERS: readonly StackPerson[] = [
  { name: 'John Edney', src: '/mcs/john.svg' },
  { name: 'Ceremonies by Sarah', src: '/mcs/sarah.svg' },
  { name: 'Married by Marianna', src: '/mcs/marianna.svg' },
  { name: 'TJ Your MC', src: '/mcs/tj.svg' },
];

/** Events the founding members have run between them, as the founder states it. */
export const EVENTS_BEHIND = '10,000+';
