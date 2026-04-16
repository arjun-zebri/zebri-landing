export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  content: string;
}

const posts: Post[] = [
  {
    slug: "mc-pre-wedding-checklist",
    title: "The MC's 72-Hour Pre-Wedding Checklist",
    date: "2026-03-10",
    excerpt:
      "Three days out is when small gaps become big problems. Here's exactly what to confirm — and who to call — before you walk in the door.",
    readTime: "5 min read",
    content: `
The week before a wedding, most MCs feel reasonably prepared. The run sheet is drafted. The couple has approved it. You know the venue.

Then the night before arrives and you're chasing the DJ's new phone number, discovering the bride's grandmother's name is spelled differently in three places, and wondering if the venue coordinator who emailed you six weeks ago is the same person who'll actually be there on the day.

Seventy-two hours is enough time to fix almost any problem. Here's the checklist.

## The couple

**Confirm names and pronunciations.** Ask the couple to read your script introduction out loud, or record themselves saying the names you'll be calling out. This catches pronunciation drift that email can't. Groom's grandmother flew in from Seville? Find out now whether it's SEV-ee-ah or seh-VEE-yah.

**Lock the run sheet.** Send the final version and explicitly ask for a reply confirming it's approved. "Looks good" in a text message three weeks ago does not count. You want a confirmed, timestamped final version.

**Confirm song titles.** Every song that plays during your ceremony or reception should have the exact title and artist confirmed. "Something Ed Sheeran" is not a brief. Get the Spotify link if you can.

**Ask about last-minute changes.** Family dynamics shift. Someone who was supposed to give a speech might now be arriving late. A surprise element might have been added. Give them an explicit opening: "Is there anything that's changed or that I should know that isn't in the run sheet?"

**Get an emergency contact.** Not the couple. Their planner, a reliable family member, or the best man — someone reachable on the day who can make small decisions without pulling the couple aside.

## The vendors

**Call the DJ.** Not email. Call. Confirm the run of play, the exact cue for each moment (song title, not just "walking in song"), and how you'll communicate during the event. Agree on a signal for when you need them to fade out early.

**Call or message the photographer.** They need to know your exact running order so they're in position for every key moment. Send them the confirmed run sheet. Ask if they have any timing requests around natural light or specific shots.

**Call the venue coordinator.** Confirm who you're dealing with on the day — it may not be who you've been emailing. Ask about: AV setup and who controls it, microphone setup and backup mics, where you'll be stationed, whether there are any venue-specific announcements you need to make (emergency exits, parking, etc.), and whether the kitchen is aware of your timeline.

**Confirm the caterer's timing.** Entree service, main course, cake cutting — these all affect your program. If the caterer is running on their own clock and you're not aligned, the whole evening stutters.

## Your materials

**Print everything.** Your run sheet, your script, key contact numbers. Phones die. Reception drops out. A printed backup has never failed anyone.

**Prepare an offline copy.** If you use a digital tool, make sure everything is cached and accessible without internet. Venues with stone walls, basements, or rural settings will test your connectivity.

**Charge every device.** Phone, backup phone, tablet if you use one. Bring a portable charger.

**Pack early.** Lay out everything the night before: run sheet print, phone charger, backup charger, business cards, any props or cards you use. Don't leave it to the morning of.

## The brief check the day before

Do one final pass the night before. Read your opening script out loud. Say every name. Time yourself on any section you're uncertain about. If something feels off, it's still fixable at 10pm the night before. It is not fixable at 3:15pm while guests are being seated.

The MCs who never have a bad day on the floor aren't luckier than the rest. They're just more systematic in the days before.
    `.trim(),
  },
  {
    slug: "handling-running-late-ceremony",
    title: "How to Handle a Running-Late Ceremony Without Losing the Room",
    date: "2026-02-24",
    excerpt:
      "The bridal car is stuck in traffic. Guests have been seated for 20 minutes. Here's how to hold the room without making anyone anxious.",
    readTime: "4 min read",
    content: `
It happens at roughly one in four weddings: the ceremony is meant to start at 3pm and at 3:07 you're still waiting. Guests are seated, the string quartet has looped through their repertoire once already, and everyone is watching you.

What you do in the next ten minutes determines whether the delay becomes a story people laugh about or a tension that colours the whole afternoon.

## Read the room first

Before you say anything, take a moment to read the energy. Are guests relaxed and chatting? Or are they starting to turn around, check phones, and whisper to each other? The former just needs holding. The latter needs managing.

A relaxed room can wait five more minutes with no intervention from you. An anxious room needs a human voice — yours — to tell them everything is fine.

## What to say (and how to say it)

The most important thing you can communicate is calm confidence. You are not anxious. You are not apologising. You are simply providing context.

A line that works well: *"Good afternoon everyone — we're going to give it just a few more minutes before we get started. We appreciate your patience, and I promise it'll be worth the wait."*

What that line does:
- It acknowledges the delay without making it seem serious
- It signals that you're in control and things are moving
- It creates a slight anticipatory build ("worth the wait")

What to avoid:
- Apologising repeatedly — it signals that something has gone wrong
- Mentioning the specific reason unless it's benign ("the bridal party is just finishing up some photos")
- Giving a specific time ("we'll start in five minutes") unless you're certain — if that deadline slips you've created a second delay

## Use the time

If you have ten minutes, use them. This is an opportunity to do something small that warms the room:

- Welcome guests from out of town and ask them to introduce themselves to the people around them
- Share a brief, warm story about the couple that isn't in your main script
- Invite guests to find their ceremony program if they haven't yet

This transforms dead time into connecting time. Guests stop watching the door and start talking to each other.

## Communicating with vendors quietly

While you're holding the room, someone needs to be getting real information. That should be the planner, the coordinator, or your emergency contact — not you.

Agree before the day on how this works. A simple text system works fine: "5 minutes out", "2 minutes out", "starting now". If you're working without a planner, have a brief with the venue coordinator in the morning: "If we're running late, can you keep me updated so I can manage the room?"

## When you need to cut, not compress

Sometimes the run sheet needs to flex, not just shift. If you're 20 minutes behind by the time the ceremony starts, something has to give. Have a quiet conversation with the couple in the days before about what's flexible: Can the cocktail hour overlap with photos? Can one speech move? Can the entrée service begin earlier?

The couple should decide this in advance, not in a stressful corridor conversation five minutes before dinner.

## The bridging line

The moment the bridal party arrives is your transition. You need to move from holding mode to starting mode cleanly. A good bridging line:

*"Alright — I think we're ready. If everyone could please stand and face the entrance..."*

Clean, direct, and it gives everyone something to do. The delay is already forgotten. The wedding has begun.

The MCs who handle delays best aren't the ones who never face them. They're the ones who've thought through the scenario before it happens.
    `.trim(),
  },
  {
    slug: "why-spreadsheets-cost-bookings",
    title: "Why Spreadsheets Are Costing You Bookings",
    date: "2026-02-10",
    excerpt:
      "Every minute you spend on admin is a minute you're not following up with a lead. Here's what the hidden cost actually looks like — and how to fix it.",
    readTime: "4 min read",
    content: `
Most wedding MCs don't think of themselves as running a business. They think of themselves as performers, hosts, storytellers — which is true. But between the weddings, they're also an enquiry manager, an invoice chaser, a run sheet builder, and an inbox processor.

That admin load isn't just annoying. It's costing you bookings.

## The response time problem

Couples enquiring about an MC shortlist multiple people. Research consistently shows that the first person to respond meaningfully — not just "got your enquiry, will be in touch" — has a significant advantage in converting the booking.

When your enquiry information is spread across email, a notes app, a spreadsheet, and three WhatsApp threads, the time between receiving an enquiry and responding meaningfully stretches out. You have to re-read the email, find the right spreadsheet tab, work out what stage they're at, and construct a thoughtful reply.

That process, scattered across tools, adds friction to every single interaction. And friction is bookings lost.

## The credibility tax

Beyond response speed, the way you manage the relationship before the wedding signals to couples what working with you will feel like.

If you're sending a run sheet as a PDF attachment that gets emailed back with tracked changes, the couple is already experiencing your admin system. If you send them a shared live link where changes are reflected in real time, you've communicated something about the quality of your operation.

Run sheets, invoices, portals — these are all touchpoints. Each one is either reinforcing your professionalism or quietly undermining it.

## What the hidden cost looks like

Let's run a rough scenario. Suppose you're handling 30 weddings a year. For each wedding, you spend:

- 45 minutes chasing couple details that should have been collected upfront
- 30 minutes rebuilding or reformatting the run sheet after late changes
- 20 minutes hunting for vendor contacts across emails and messages
- 15 minutes creating or updating an invoice that could have been templated

That's roughly 110 minutes of pure admin per wedding. Across 30 weddings, that's 55 hours a year — more than a full working week — spent on tasks that don't require your skills and don't serve your clients.

That time could be follow-up calls to warm leads. It could be refining scripts. It could be sleep the night before a wedding.

## What a proper system changes

When enquiries land in a pipeline instead of an inbox, you see every lead at a glance and know exactly what's outstanding for each one. When couples submit their details through a portal instead of email, you stop being the person who has to chase them. When your run sheet lives at a shareable link instead of in an attachment, version confusion disappears.

None of this requires complicated software. It just requires the right one — a tool built for how wedding MCs actually work, not a generic CRM retrofitted for the purpose.

The MCs who are growing their booking rates aren't necessarily the most talented people in the room. They're often just the most responsive and the most organised. And responsiveness and organisation are, more than anything, a function of what system you're running.
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
