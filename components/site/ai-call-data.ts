/**
 * The call the Zebri AI band shows: Amelia and Jack's final numbers call,
 * and the changes Zebri heard on it. Copied from the app's demo data (and
 * trimmed to what the picture shows), so the site carries none of the
 * app's code. Demo data only.
 *
 * @module components/site/ai-call-data
 */

/** What the visitor did with a suggested update. */
export type Verdict = 'applied' | 'dismissed';

/** A change to the couple's record Zebri heard on the call, and the words it was heard in. */
export interface CallUpdate {
  id: string;
  /** The detail it changes ("Guests"), or "People" for a new person. */
  label: string;
  /** The value now; empty when it was never set. */
  from: string;
  to: string;
  quote: string;
}

/** The call: its name, how long it ran, and what it changed. */
export const CALL = {
  title: 'Final numbers call',
  couple: 'Amelia & Jack',
  length: '38 min',
  updates: [
    { id: 'p-guests', label: 'Guests', from: 'Missing', to: '138', quote: 'We’re at 138 now. That’s final.' },
    { id: 'p-timeline', label: 'Timeline', from: 'v2 · awaiting sign-off', to: 'v2 · signed off by Jack', quote: 'Photos after the speeches works. Consider it signed off.' },
    { id: 'p-rehearsal', label: 'Rehearsal', from: 'Fri 9 Oct, 5:00 pm', to: 'Fri 9 Oct, 5:30 pm', quote: 'Could we push it to 5:30? I finish work at five.' },
    { id: 'p-tom', label: 'People', from: '', to: 'Tom Moreno · Best man', quote: 'Yep, Tom Moreno, 0433 210 987.' },
  ] satisfies CallUpdate[],
};
