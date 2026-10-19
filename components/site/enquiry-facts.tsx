import { Badge } from '@/components/ui-v2/badge';

import { DM } from './enquiry-data';

/**
 * The enquiry window's side column, as the app has it: whether the MC is
 * free on the date, then bare label and value pairs.
 *
 * @module components/site/enquiry-facts
 */

const FACTS: [string, string][] = [
  ['Date', DM.date],
  ['Venue', DM.venue],
  ['Guests', String(DM.guests)],
  ['Source', DM.source],
  ['Received', DM.received],
];

/** The side column. */
export function EnquiryFacts() {
  return (
    <div className="space-y-6">
      <Badge dot tone="grass">
        You&apos;re free that day
      </Badge>
      <dl className="grid grid-cols-[5rem_minmax(0,1fr)] gap-x-3 gap-y-2.5 type-body">
        {FACTS.map(([label, value]) => (
          <div key={label} className="contents">
            <dt className="text-zebra-500">{label}</dt>
            <dd className="text-zebra-950">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
