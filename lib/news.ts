export type ContentBlock =
  | { type: "html"; html: string }
  | { type: "carousel"; images: string[]; label: string };

export interface NewsPost {
  slug: string;
  title: string;
  eyebrow?: string;
  heroLine?: string;
  metaTitle?: string;
  metaDescription?: string;
  date: string;
  excerpt: string;
  blocks: ContentBlock[];
}

const posts: NewsPost[] = [
  {
    slug: "introducing-zebri",
    title: "Introducing Zebri",
    eyebrow: "Early Access",
    heroLine:
      "Built for professional wedding MCs. The command centre you've been building yourself out of five different tools.",
    metaTitle:
      "Introducing Zebri: the command centre for professional wedding MCs",
    metaDescription:
      "Zebri is now open for early access trials. Couple Management, Timeline Builder, Couple Portal, Payments, Contracts, and Custom Branding. One login instead of five tools stitched together the night before a wedding.",
    date: "2026-04-22",
    excerpt:
      "Six products in one login. Couple Management, Timeline Builder, Couple Portal, Payments, Contracts, and Custom Branding are available in every early access trial.",
    blocks: [
      {
        type: "html",
        html: `
<p>Running a wedding business across half a dozen tabs is not a system. It is a liability the night before a Saturday. An enquiry buried in Gmail. A contract in a separate e-sign tool. Pronunciations in your phone notes. A balance you have to remember to chase.</p>

<p>Today that changes. Zebri is opening early access trials. Six products in one place, built around how a wedding MC actually works.</p>

<h2>Couple Management</h2>

<p>Zebri connects to your inbox. When an enquiry arrives, it reads the message and creates the couple's record automatically. Contact details, wedding date, venue, and the original message are captured without you lifting a finger. Enquiries from your website form work the same way. DMs from Instagram and Facebook are pulled in too. The lead exists in Zebri the moment it lands, no manual entry required.</p>

<p>Every couple moves through a booking flow built for the MC lifecycle, from first enquiry through to delivered. Every couple record holds contact details, wedding date, venue, ceremony type, pronunciation notes, family context, and the full message history. When a booking has been sitting at the same stage too long, Zebri nudges you.</p>

<p>You can see every booking at a glance and know exactly where it stands. Nothing falls through the cracks because you forgot to check an email thread.</p>
        `.trim(),
      },
      {
        type: "carousel",
        label: "Couple Management",
        images: [
          "/introduction/couple-mgmt-0.png",
          "/introduction/couple-mgmt-1.png",
        ],
      },
      {
        type: "html",
        html: `
<h2>Timeline Builder</h2>

<p>You build the run sheet in Zebri once. Cues, processional order, speakers, and timing. When you are ready to share it, everyone gets a live link, not a PDF. The DJ, the photographer, the couple. If you make a change, they are notified and see the updated version immediately. Nobody is working off an old copy and nobody finds out about a change on the day.</p>

<p>The couple can flag changes they want. Those come to you as suggestions, not edits applied directly. You decide what goes live. The run sheet stays yours until you lock it.</p>

<p>What is included:</p>

<ul>
  <li>Run sheet with cues, processional order, speaker list, and timing blocks</li>
  <li>Live shareable link with read-only access for vendors</li>
  <li>Couple change requests routed through your approval before they go live</li>
  <li>Mobile-first view designed for reading on site, not at a desk</li>
  <li>Version history so you can see what changed and when</li>
</ul>

<p>There is one run sheet and everyone reads from it. You stop being the person forwarding PDFs and answering questions about which version is current.</p>
        `.trim(),
      },
      {
        type: "carousel",
        label: "Timeline Builder",
        images: [
          "/introduction/timeline-1.png",
          "/introduction/timeline-2.png",
        ],
      },
      {
        type: "html",
        html: `
<h2>Couple Portal</h2>

<p>You send the couple one link. They log in and fill in their details at their own pace. When a section is incomplete or a payment date is approaching, Zebri sends them a reminder automatically. You do not need to follow up. When they submit something, it lands straight in their record.</p>

<p>Payment happens inside the portal too. Couples pay deposits and balances by card. They see a simple payment screen with no Zebri branding in the way. When it clears, their record updates and you get a notification.</p>

<p>What is included:</p>

<ul>
  <li>Names and pronunciations for both partners, parents, and bridal party, with optional audio recording</li>
  <li>Family notes: blended families, estranged parents, anyone to handle carefully</li>
  <li>Bridal party lineup and processional order</li>
  <li>Card payment for deposits and balances, directly inside the portal</li>
  <li>Automatic reminders when details are incomplete or a payment date is approaching</li>
  <li>A live status view for the couple showing what is submitted, what is outstanding, and what is paid</li>
</ul>

<p>The couple manages their own prep. Zebri handles the follow-up. You stop sending check-in messages in the weeks before the wedding.</p>
        `.trim(),
      },
      {
        type: "carousel",
        label: "Couple Portal",
        images: [
          "/introduction/couple-portal-1.png",
          "/introduction/couple-portal-2.png",
          "/introduction/couple-portal-3.png",
          "/introduction/couple-portal-4.png",
        ],
      },
      {
        type: "html",
        html: `
<h2>Payments</h2>

<p>Sending an invoice is two clicks from the couple's record. You generate it, they receive a link, they pay by card or bank transfer. GST is calculated and itemised on every invoice automatically. When a due date passes without payment, the reminder goes out on its own. You do not write a follow-up email.</p>

<p>The whole payment history lives on the couple's record. No reconciliation in a separate spreadsheet. You open the record and see what has been paid and what is owed.</p>

<p>What is included:</p>

<ul>
  <li>Quote generation from the couple record, converts to an invoice when accepted</li>
  <li>Card payment and bank transfer both supported</li>
  <li>GST calculated and itemised on every document automatically</li>
  <li>Deposit and balance schedules per booking</li>
  <li>Automatic overdue reminders with no action required from you</li>
  <li>Full payment history on every couple record</li>
</ul>

<p>Every invoice is accurate. Every late payment gets chased. You do not open a calculator and you do not write a follow-up.</p>
        `.trim(),
      },
      {
        type: "carousel",
        label: "Payments",
        images: [
          "/introduction/payments-1.png",
          "/introduction/payments-2.png",
        ],
      },
      {
        type: "html",
        html: `
<h2>Contracts</h2>

<p>You keep a contract template in Zebri for each package you offer. When a couple is ready to sign, you send it from their record in one click. They open it on their phone, sign, and it is done. The deposit invoice fires automatically on signature. You do not need to send it separately.</p>

<p>The signed copy is stored on the couple's record and visible inside their portal. If the contract sits unsigned past a deadline, a reminder goes out to the couple automatically.</p>

<p>What is included:</p>

<ul>
  <li>Contract templates per package, customised to your services</li>
  <li>Legally binding e-signature with a full audit trail</li>
  <li>Automatic deposit invoice triggered on signature</li>
  <li>Signed copy on the couple's record and inside their portal</li>
  <li>Automatic reminders if the contract sits unsigned</li>
</ul>

<p>A booking closes the moment the couple signs. No separate invoice, no manual follow-up.</p>
        `.trim(),
      },
      {
        type: "carousel",
        label: "Contracts",
        images: ["/introduction/contract.png"],
      },
      {
        type: "html",
        html: `
<h2>Custom Branding</h2>

<p>The couple found you on Instagram, booked you based on how you present, then logged into a portal with no logo on it and opened a run sheet PDF with a generic header. That gap matters. It signals that you are a vendor running on someone else's software, not a considered professional with a polished operation.</p>

<p>You upload your logo and set your brand colours once in Zebri. They carry through everywhere the couple sees the platform. The portal looks like yours. Every document that goes out has your name on it.</p>

<p>What is included:</p>

<ul>
  <li>Your logo on the couple portal login and every portal screen</li>
  <li>Your brand colours across the couple-facing interface</li>
  <li>Branded run sheet PDFs shared with vendors and the couple</li>
  <li>Branded invoice and contract PDFs sent on your terms</li>
  <li>No Zebri branding visible to your couples</li>
</ul>

<p>The couple booked you, not a piece of software. The experience they have should reflect that.</p>
        `.trim(),
      },
      {
        type: "carousel",
        label: "Custom Branding",
        images: ["/introduction/branding.png"],
      },
      {
        type: "html",
        html: `
<h2>What this Saturday looks like</h2>

<p>The couple signed the contract two weeks ago. The deposit invoice landed in their inbox that same evening, triggered automatically on signature. They paid by card three days later without a reminder from you.</p>

<p>Over the following week, they worked through the portal at their own pace. Names, pronunciations, bridal party order, and family notes, all submitted. Zebri sent them a nudge when the processional details were still blank. You got a notification when everything was confirmed. The balance cleared on Wednesday, also without a message from you.</p>

<p>On Friday you opened the Timeline Builder, adjusted two cues after a call with the venue coordinator, and shared the live link with the DJ and photographer. No email. No PDF. Both confirmed they had the current version. No version to argue about, because there is only one.</p>

<p>Saturday morning. One screen on your phone. Every name confirmed, every pronunciation noted, every cue in order, run sheet locked. You walk into the venue knowing the prep is done. Not because you were organised enough to chase everything manually. Because the system did it.</p>

<h2>Making the switch</h2>

<p>If you are moving from a spreadsheet, another CRM, or a folder of Google Docs, you are not set up alone. When you start a trial, the Zebri team books a session with you. You bring whatever you have, and we help get your existing couples, bookings, and templates into the system before you commit to anything. Most people are running within a week.</p>

<p>There is no data entry sprint, no migration anxiety, and no figuring it out from a help article. You get a person.</p>

<h2>Coming next</h2>

<p>Three features are in development for the second half of 2026.</p>

<div class="not-prose my-8 border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
  <div class="p-5 flex items-start gap-5">
    <div class="w-16 shrink-0 pt-0.5">
      <span class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Q3 2026</span>
    </div>
    <div>
      <p class="text-sm font-semibold text-gray-900 mb-1.5">Video Calls</p>
      <p class="text-sm text-gray-500 leading-relaxed">Consult calls happen inside Zebri. The couple books a time, the call runs natively in the app, and any notes from the conversation land on their record automatically. No Zoom link to generate, no scheduling back-and-forth across three messages.</p>
    </div>
  </div>
  <div class="p-5 flex items-start gap-5">
    <div class="w-16 shrink-0 pt-0.5">
      <span class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Q3 2026</span>
    </div>
    <div>
      <p class="text-sm font-semibold text-gray-900 mb-1.5">Pulse</p>
      <p class="text-sm text-gray-500 leading-relaxed">Pulse scores every enquiry on fit and readiness. You see which couples are most likely to book and where to spend your follow-up time. Not every enquiry deserves the same urgency. Pulse tells you which ones do.</p>
    </div>
  </div>
  <div class="p-5 flex items-start gap-5">
    <div class="w-16 shrink-0 pt-0.5">
      <span class="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Q4 2026</span>
    </div>
    <div>
      <p class="text-sm font-semibold text-gray-900 mb-1.5">Event Mode</p>
      <p class="text-sm text-gray-500 leading-relaxed">A distraction-free, full-screen view of the run sheet built for the day itself. The current cue is highlighted, the view advances in real time, and it works completely offline. Built for venues where the signal drops the moment you need it most.</p>
    </div>
  </div>
</div>
        `.trim(),
      },
    ],
  },
];

export function getAllNewsPosts(): Omit<NewsPost, "blocks">[] {
  return posts
    .map(({ slug, title, eyebrow, heroLine, date, excerpt }) => ({
      slug,
      title,
      eyebrow,
      heroLine,
      date,
      excerpt,
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewsPostBySlug(slug: string): NewsPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatNewsDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
