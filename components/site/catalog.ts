import {
  BdmIcon,
  CalendarClockIcon,
  CalendarIcon,
  CeremonyScriptIcon,
  EmailIcon,
  EnquiriesIcon,
  FileEditIcon,
  JourneysIcon,
  PaymentsIcon,
  ProposalIcon,
  QuestionnaireIcon,
  RunSheetIcon,
  VideoIcon,
  type ZebriIcon,
} from '@/components/ui-v2/icons';

/**
 * The blocks Zebri launches with, as the site shows them: a copy of the
 * app's catalogue, trimmed to what a visitor reads (the name, the outcome,
 * the specifics, the plan). Grouped by where a client is in the journey,
 * in that order, so the catalogue reads as how the work runs. When the
 * app's catalogue changes, change this with it.
 *
 * @module components/site/catalog
 */

/** The block categories, in journey order. */
export const CATEGORIES = ['Win clients', 'Book and get paid', 'Plan the event', 'Run your business'] as const;
export type Category = (typeof CATEGORIES)[number];

/** What each category is for, under its name in the list. */
export const CATEGORY_LINES: Record<Category, string> = {
  'Win clients': 'From the first message to a yes.',
  'Book and get paid': 'Lock in the date, and the money.',
  'Plan the event': 'Every detail ready before you pick up the mic.',
  'Run your business': 'The calendar, inbox and follow-ups behind it all.',
};

/** The plan a block needs. */
export type Tier = 'pro' | 'max';

/** A block, as the site shows it. */
export interface Block {
  id: string;
  name: string;
  icon: ZebriIcon;
  /** The outcome, in one line. */
  pitch: string;
  /** The specifics, three or four short lines. */
  bullets: string[];
  category: Category;
  tier: Tier;
  /** On the roadmap: shown, but not available yet. */
  soon?: boolean;
}

/** Every block, in category order. */
export const CATALOG: Block[] = [
  { id: 'lead-capture', icon: EnquiriesIcon, category: 'Win clients', tier: 'pro', name: 'Enquiries', pitch: 'Every enquiry in one place, answered while they are keen.', bullets: ['Email and Instagram in one list', 'Website forms and directories come in by email', 'Replies drafted for you', 'Checked against your calendar'] },
  { id: 'scheduler', icon: CalendarClockIcon, category: 'Win clients', tier: 'pro', name: 'Booking links', pitch: 'Couples book a call in the times you are free.', bullets: ['Intro calls, meetings and rehearsals', 'Only the times you are free', 'Invites and reminders sent for you', 'A video link on every call'] },
  { id: 'video', icon: VideoIcon, category: 'Win clients', tier: 'max', name: 'Video calls', pitch: 'Meet in Zebri. The notes write themselves.', bullets: ['Calls in the browser', 'Notes and to-dos written for you', 'Saved on the client', 'Turn a call into a proposal'] },
  { id: 'proposals', icon: ProposalIcon, category: 'Win clients', tier: 'pro', name: 'Proposals', pitch: 'Proposals couples say yes to, on one page.', bullets: ['Designed in your brand', 'Packages couples choose between', 'See when it is opened', 'Accept, sign and pay in one go'] },
  { id: 'contracts', icon: FileEditIcon, category: 'Book and get paid', tier: 'pro', name: 'Contracts', pitch: 'Signed in minutes, not a week of printing.', bullets: ['Your wording, saved as a template', 'Several signers on one contract', 'Reminders until everyone signs', 'Signed copies kept on the client'] },
  { id: 'payments', icon: PaymentsIcon, category: 'Book and get paid', tier: 'pro', name: 'Payments', pitch: 'Deposits and balances paid by card, on time.', bullets: ['Deposits and instalments', 'Card and Apple Pay', 'Reminders before each due date', 'Paid straight to your bank'] },
  { id: 'questionnaires', icon: QuestionnaireIcon, category: 'Plan the event', tier: 'pro', name: 'Questionnaires', pitch: 'Every detail from your client, asked once.', bullets: ['Couples search and pick their own songs', 'All on one page, or one question at a time', 'Fill it in for them on a call', 'Their answers drop into your script'] },
  { id: 'timeline', icon: RunSheetIcon, category: 'Plan the event', tier: 'pro', name: 'Run sheets', pitch: 'The night, minute by minute, for everyone on it.', bullets: ['Warns you before the night runs over', 'Golden hour portraits, timed for you', 'Who runs each moment, and the song for it', 'A clean PDF for the night'] },
  { id: 'scripts', icon: CeremonyScriptIcon, category: 'Plan the event', tier: 'pro', name: 'Ceremony scripts', pitch: 'Write it once, read it beautifully.', bullets: ['Any language, including Chinese and Hindi', 'Names filled in for you', 'Page breaks where you want them', 'Print-ready in one click'] },
  { id: 'bdm', icon: BdmIcon, category: 'Plan the event', tier: 'max', name: 'Lodge with BDM', pitch: 'For Celebrants: every marriage lodged, nothing retyped.', bullets: ['Couples give their details once', 'Your Celebrant details on every lodgement', 'Lodged with NSW BDM in one step', 'Registered and certificate status as it happens'] },
  { id: 'calendar', icon: CalendarIcon, category: 'Run your business', tier: 'pro', name: 'Calendar', pitch: 'Every event, call and due date in one view.', bullets: ['Events, calls and due dates', 'Google Calendar and Outlook, both ways', 'Click anything to open the client', 'No double bookings'] },
  { id: 'email-marketing', icon: EmailIcon, category: 'Run your business', tier: 'max', name: 'Email', pitch: 'Templates and newsletters, in your brand.', bullets: ['Templates in your branding', 'Sent from your own address', 'Newsletters to your couples', 'See who booked after reading'] },
  { id: 'workflows', icon: JourneysIcon, category: 'Run your business', tier: 'pro', name: 'Journeys', pitch: 'Follow-ups that send themselves.', bullets: ['Starts from a booking, payment or date', 'Emails and to-dos on a schedule', 'Pauses when a couple replies', 'Ask first, or send on its own'] },
];

/** A block by id. */
export const blockById = (id: string) => CATALOG.find((b) => b.id === id);
