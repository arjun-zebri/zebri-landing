export interface Post {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  date: string;
  excerpt: string;
  readTime: string;
  content: string;
}

const posts: Post[] = [
  {
    slug: "crm-wrong-for-wedding-celebrants",
    title: "Your CRM has a field for LinkedIn. Not pronunciation.",
    metaTitle: "Why CRMs don't work for wedding celebrants | Zebri",
    metaDescription:
      "Generic CRMs were built for sales pipelines, not ceremonies. Here's the specific design mismatch that costs you time on every booking.",
    date: "2026-05-08",
    excerpt:
      "Most CRMs feel wrong to celebrants because they were designed for a different job. The status stages, field labels, and notification logic were built for moving deals, not locking run sheets. The friction isn't a bug. It's the software doing exactly what it was designed to do. For someone else.",
    readTime: "5 min read",
    content: `
<p>Six weeks from a Saturday wedding, and you need to double-check the bride's surname. Polish. You wrote down the phonetics at the initial consult. You're certain you wrote them down. But they're not in the email thread (41 messages and counting). Not in the timeline doc. Not in your CRM either. There's no field for it.</p>

<p>There is, however, a field for LinkedIn.</p>

<p>The tool isn't broken. It's working exactly as it was designed. That's the problem.</p>

<h2>CRMs were designed for deals, not ceremonies</h2>

<p>Most booking tools celebrants reach for (HoneyBook, Dubsado, or a generic CRM adapted from someone else's recommendation) were built around one idea: move prospects through a pipeline.</p>

<p>Open any of them and the architecture tells the story. Status stages: Lead, Qualified, Proposal, Won, Lost. Contact fields: Company, Job Title, Deal Source, Probability to Close. Notification logic: "It's been 5 days since last contact. Follow up before you lose this lead."</p>

<p>That language is exactly right for a sales rep tracking revenue opportunities. For a celebrant, it's translation work on every booking.</p>

<p>Your stages aren't Lead and Won. They're Enquiry, Consult Booked, Ceremony Confirmed, Portal Complete, Run Sheet Locked, Ceremony Done. Every time you drag a card through a pipeline that doesn't match your workflow, you're manually mapping your job onto someone else's vocabulary. That takes 30 seconds. Per touch. Across 80 weddings, it compounds into something you notice.</p>

<h2>The field schema wasn't built for your couples</h2>

<p>A standard CRM contact record assumes the contact is a professional lead. Name. Email. Phone. Company. Website. LinkedIn.</p>

<p>Your couples aren't professional leads. They're two people you'll stand in front of on the most important day of their lives, and the information you need from them looks nothing like a B2B contact record.</p>

<p>You need first names and surnames for both partners. Phonetic spellings for every name in the ceremony script. The full bridal party list with correct titles. Processional music choices, with timing notes. Family seating details. The DJ's direct mobile. The venue coordinator's name. The florist's arrival window.</p>

<p>None of that fits in "Company" and "Job Title."</p>

<p>So it ends up somewhere else. A Google Doc, usually. Or a note on your phone. Or a second tab in the spreadsheet you told yourself you'd clean up in January. Now there are three sources of truth, none of them connected. Six weeks out, you're hunting across all three for a pronunciation note you definitely wrote down.</p>

<h2>The notification logic fires for the wrong reasons</h2>

<p>CRM alerts are built for deal velocity. The software wants to know when a prospect hasn't been touched. When a proposal hasn't been opened. When a follow-up is overdue.</p>

<p>Those signals matter in a sales context. They're the wrong signals for a celebrant.</p>

<p>What you need is ceremony-countdown logic. The <a href="https://zebri.com.au/">couple portal</a> should be complete two weeks out. The run sheet should be <a href="https://zebri.com.au/">locked 72 hours before ceremony</a>. Vendor contacts confirmed a week before. None of those reminders exist in a sales pipeline model, so you build them separately. A calendar. A recurring sticky note. A checklist in your notes app. The morning before a wedding, you're not checking one dashboard. You're opening four different apps trying to remember which one has the florist's number.</p>

<h2>The friction isn't bad design. It's correct design for the wrong job.</h2>

<p>This is the part worth saying plainly: the awkwardness you feel in these tools is not a sign that the designers did poor work. HoneyBook is built for photographers managing retainer clients with multiple deliverables. Dubsado is built for freelance studios invoicing, proposing, and automating client onboarding. Both are well-designed for the work they were built to do.</p>

<p>You just don't do that work.</p>

<p>And the cost of the mismatch is specific. Three minutes searching for a pronunciation note. Two minutes translating "Ceremony Confirmed" into whatever stage your CRM calls it. Ten minutes building a reminder cadence that should already exist in the tool. Per booking, across a full calendar, it adds up to a day of admin you shouldn't be spending.</p>

<h2>What purpose-fit design looks like</h2>

<p>Zebri is built around the ceremony, not the pipeline.</p>

<p>The couple profile opens on the ceremony date, venue, and a booking status that reflects your actual flow. There's a dedicated tab for collecting first names, surnames, and phonetic pronunciations for everyone in the ceremony script. The <a href="https://zebri.com.au/">Timeline Builder</a> holds the run sheet, shares one version with the couple for approval, and gives the planner and venue the same link. Payments and contracts live in the same place the booking does.</p>

<p>There's no LinkedIn field. There's no "Probability to Close."</p>

<p>There is a field for how to say Kowalczyk.</p>

<p>The reminder logic is built around the ceremony countdown: what needs to be in before two weeks out, what should be locked by Thursday, what to check the morning of. Not deal velocity. Ceremony readiness.</p>

<h2>The next booking you confirm</h2>

<p>You don't need to change your whole setup this week. But the next time you're hunting for a pronunciation note in a Gmail thread, or dragging a booking through a pipeline stage that means nothing in your actual work, notice what's happening. You're translating your job into a tool that wasn't built for you.</p>

<p>If you want to see what a ceremony-first tool looks like, the <a href="https://www.zebri.com.au/#pricing">14-day trial is free</a>. No card. No lock-in. Try it on the next booking you confirm.</p>
    `.trim(),
  },
  {
    slug: "celebrant-crm-vs-planner-software",
    title: "A planner's CRM was built for a different business",
    metaTitle: "Wedding celebrant CRM vs planner software: why it matters",
    metaDescription:
      "Most celebrants use tools built for planners. Here's where the mismatch costs you time per booking, and three criteria for a tool built for the MC.",
    date: "2026-04-21",
    excerpt:
      "Most celebrants reach for CRMs built for wedding planners because that's what gets recommended. But a planner's tool was designed for different tasks, a different client dynamic, and a different day-of reality. Here's where the mismatch costs you.",
    readTime: "6 min read",
    content: `
<p>Most celebrants reach for CRMs built for wedding planners because that's what gets recommended. But a planner's tool was designed for different tasks, a different client dynamic, and a different day-of reality. Here's where the mismatch costs you, and three things to look for in software actually built for the MC.</p>

<h2>The Saturday afternoon rebuild</h2>

<p>It's Saturday at 2pm. Ceremony's at 4. You open Dubsado on your laptop to pull the run sheet and realise, for the third time this month, it doesn't load properly on your phone. So you do what you always do. You open Notes, retype the timeline by hand, paste in the couple's names, double-check the processional order, and save it to your phone.</p>

<p>Forty minutes. Gone.</p>

<p>That's not a bad day. That's the tool. Dubsado is a well-built CRM, but it was designed for wedding planners. Planners don't need their run sheet on a phone because they're not walking down an aisle with it. You are.</p>

<h2>Why the planner software you reach for wasn't for you</h2>

<p>When you're starting out, the admin advice is always the same. "What do you use?" The answers: Dubsado. HoneyBook. Aisle Planner. These tools have real visibility in the wedding industry, and they're genuinely good for the person they were built for.</p>

<p>That person is a planner. And a planner's business is structurally different from yours.</p>

<p>These tools dominate because planners have been in the industry longer, with bigger referral networks and a clearer presence in Google search results. When you search "wedding industry CRM," you're reading reviews written by planners, for planners. The fact that you're a celebrant is treated as a rounding error.</p>

<p>A planner coordinates dozens of vendors and manages a venue on behalf of a couple. They rarely need to hold a microphone. Their CRM is built around vendor management and client approval chains. That's valid work. It's just not your work.</p>

<p>Your admin isn't about coordinating a team. It's about knowing the couple's names and capturing them correctly. It's about a run sheet that holds up when the venue wifi drops. And it's about getting back to an enquiry before it goes cold. Those are different problems, and most planner CRMs weren't designed for them.</p>

<h2>The field that isn't there</h2>

<p>Here's the most obvious gap: pronunciation.</p>

<p>You need to know how to say every name in the ceremony. The couple, the parents, the bridal party, anyone getting a mention. Get it wrong and you don't get a second take.</p>

<p>A planner's CRM has a field for everything. Vendor contact, payment schedule, dietary requirements, floor plan upload. It doesn't have a field for "how do you pronounce your mother's name?" Because a planner doesn't say her name out loud. You do.</p>

<p>So you work around it. A note in the contact. A comment on the job. A sticky note on your desk. Something works until it doesn't, and on the day you're pulling from four different places.</p>

<p>The same gap shows up in processional cues. A planner's CRM tracks vendor arrival times. Your run sheet tracks the exact order of the bridal party, which song plays for which walk, who carries the rings. These aren't edge cases in your job. They're the job.</p>

<h2>The approval flow that doesn't fit</h2>

<p>Planner software typically has a client-approval workflow built around sign-offs. The client reviews a document, approves or requests changes, and the record is timestamped. That works well for a florist's quote or a catering proposal. It doesn't map to a ceremony script that changes three times before Saturday.</p>

<p>Your approval flow is different. You need the couple to review the run sheet, but you also need to iterate it with them, not just collect a sign-off. The timeline changes when the venue moves the start time. The script changes when the family situation changes. You're not issuing contracts for vendor services. You're collaborating on a ceremony that gets one chance to be right.</p>

<p>For you, the run sheet is a living document until 72 hours out. A "client approved v1.2 on 12 April" timestamp doesn't capture that. The approval tools in planner software treat your couple like a client in a project management system. They're two people counting on you to get the most important hour of their life right. That relationship doesn't map neatly onto a checkbox.</p>

<h2>No offline mode, and what that costs on the day</h2>

<p>A planner runs their event from a laptop at the venue. They've got wifi, a power point, a desk. They can refresh a browser tab.</p>

<p>You're standing at the front of a ceremony hall with one weak bar of signal on a good day. Your run sheet needs to be on your phone, working whether the wifi works or not.</p>

<p>Most planner CRMs are cloud-only. The run sheet lives in a browser. If signal drops, so does your visibility into the timeline. So you export to PDF, email it to yourself, download it, screenshot the important sections, and paste those into Notes.</p>

<p>That workaround takes fifteen minutes the night before and another twenty on the day. It's invisible time. It doesn't feel like a problem with the tool because you've always done it this way. But that's thirty-five minutes per wedding spent compensating for software that wasn't built for your situation.</p>

<h2>The invisible tax per booking</h2>

<p>Add it up:</p>

<ul>
<li>40 minutes rebuilding the run sheet into a phone-friendly format</li>
<li>15 minutes copying pronunciation notes from three different places</li>
<li>20 minutes sending a PDF for approval, then updating it manually when they reply with changes</li>
<li>10 minutes hunting for the DJ's number buried in a vendor contact tab</li>
</ul>

<p>That's an hour and forty-five minutes per wedding spent working around the tool. At six weddings a month, that's over ten hours of invisible admin. Not on the ceremony. On the software.</p>

<h2>Three criteria for a tool built for the MC</h2>

<p>When you're evaluating whether a CRM actually fits, check three things.</p>

<p>First, it has a pronunciation field, not a workaround. The field lives in the couple's record, visible in the run sheet, without any copying or pasting.</p>

<p>Second, the run sheet works offline. Not "you can export to PDF." Offline, natively, on your phone, with the current cue visible and the ability to advance through it without a data connection.</p>

<p>Third, the booking stages reflect your business, not a planner's. "Enquiry, quote, contract, ceremony prep, delivered" is a celebrant's flow. Not "discovery call, venue walk-through, vendor coordination, event week."</p>

<p>Those three things tell you whether the software was built for you or adapted for you. Adapted is fine for a while. It stops being fine when you're retyping run sheets on a Saturday afternoon.</p>

<h2>What to do before the next enquiry</h2>

<p>Zebri is built for the MC. It's got a <a href="https://zebri.com.au/">pronunciation field in every couple's record</a>, a run sheet that loads offline in <a href="https://zebri.com.au/">Event Mode</a>, and booking stages that match how a celebrant actually works. There's a <a href="https://www.zebri.com.au/#pricing">14-day free trial, no card required</a>.</p>

<p>But even without it, run the three criteria above against whatever tool you're using now. If it fails two of them, the Saturday afternoon rebuild is going to keep happening.</p>
    `.trim(),
  },
];

export function getAllPosts(): Omit<Post, "content">[] {
  return posts.map(({ slug, title, date, excerpt, readTime }) => ({
    slug,
    title,
    date,
    excerpt,
    readTime,
  }));
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
