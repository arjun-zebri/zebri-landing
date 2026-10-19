/**
 * The Instagram DM the Zebri AI reply window answers: Mia and Leo asking
 * about their date, the facts Zebri pulled from it, and the reply it
 * drafted. Copied from the app's demo enquiry and draft, so the site
 * carries none of the app's code. Demo data only.
 *
 * @module components/site/enquiry-data
 */

export const DM = {
  client: 'Mia & Leo',
  contact: '@mia.and.leo',
  date: 'Sat 13 Mar 2027',
  venue: 'Bendooley Estate',
  guests: 120,
  source: 'Instagram',
  received: '1 hour ago',
  message: 'Loved your reel from Bendooley Estate. Are you free for our date?',
  replyLabel: 'Reply on Instagram to @mia.and.leo',
};

/** Zebri's reply, in the MC's voice and signed by Jess. */
export const DRAFT = `Hi Mia and Leo,\n\nThank you so much for reaching out! Good news, I'm free on Saturday 13 March and I'd love to be part of it at ${DM.venue}.\n\nThe easiest next step is a quick call so I can hear about your plans.\n\nJess`;
