# Zebri – Claude Operating System

## 0. Core Principle

Zebri is a high-conviction validation experiment.

We are NOT building a SaaS product.
We are validating demand for a vertical Wedding MC command centre.

The only success metric is qualified email capture.

Everything in this repository must optimise for:

→ Clarity
→ Authority
→ Conversion
→ Speed of execution

Not perfection.

---

# Skills & Execution Protocol (Mandatory)

Before generating any frontend code, the following Claude skills MUST be invoked:

1. frontend-design

   - Define layout hierarchy
   - Define spacing system
   - Define component structure
   - Ensure 21st.dev-inspired aesthetic

2. conversion-copy

   - Refine headline clarity
   - Tighten value proposition
   - Remove fluff
   - Strengthen CTA psychology
   - Handle objections in FAQ

Optional (only if required):

3. performance-optimization

   - Reduce bundle size
   - Ensure fast LCP
   - Optimise image loading

4. brand-voice

   - Ensure tone remains confident, modern, professional
   - Avoid wedding clichés and generic SaaS tone

Execution Rule:
No frontend code may be written until frontend-design and conversion-copy have been applied.

Hooks Rule:
When generating components:

- Use reusable, clean component structure
- Extract large UI blocks into internal components if necessary
- Avoid unnecessary client-side hooks
- Prefer Server Actions for form submission

This ensures design integrity, conversion quality, and engineering discipline.

---

Zebri is a high-conviction validation experiment.

We are NOT building a SaaS product.
We are validating demand for a vertical Wedding MC command centre.

The only success metric is qualified email capture.

Everything in this repository must optimise for:

→ Clarity
→ Authority
→ Conversion
→ Speed of execution

Not perfection.

---

# 1. Project Overview

Zebri is a standalone brand.

Zebri = The All-In-One Wedding MC Command Centre.

This repository contains:

- A single-page landing site
- Built with Next.js (App Router)
- Styled with Tailwind CSS
- Designed with a 21st.dev-inspired component aesthetic
- A working email capture form
- Server action that sends email notification when an MC registers

There is NO:

- Authentication
- Dashboard
- Multi-page routing
- Database
- Feature creep

---

# 2. Primary Objective

Primary Goal:

Capture email signups from professional wedding MCs.

Qualification Signal:

- At least 20 signups in 14 days
- 30%+ must report 25+ weddings per year

The page must feel:

- Premium
- Purpose-built
- Credible
- Focused on professionals (not hobbyists)

---

# 3. Target Audience (ICP)

Professional Wedding MC

Characteristics:

- 25+ weddings per year
- Solo operator
- Active on Instagram
- Uses Google Docs, PDFs, WhatsApp
- Manually builds run sheets
- Reuses speech templates
- Coordinates DJs, planners, venues

Pain Points:

- Chasing couples for details
- Mispronounced names
- Timeline chaos
- Script scattered across documents
- WhatsApp vendor coordination mess
- Admin fatigue before big weekend

Zebri must feel like:
"Finally, something built for me."

---

# 4. Positioning & Messaging Strategy

## Headline Philosophy

The headline must create **immediate recognition + tension + urgency**.

Primary Headline (Hero):
- Create tension: "Stop doing X" or "The [problem] that costs you [consequence]"
- Examples:
  - "Stop juggling 6 tabs the night before a wedding."
  - "The script. The timeline. The couples' details. All fragmented."
  - "Your runsheet is scattered. Your MC notes are scattered. You are scattered."

Subheadline:
- Promise relief: Show how Zebri solves it
- "Zebri keeps it all in one place. One command centre. One source of truth."

## Messaging Pillars

### 1. Urgency
- "Only 20 spots. 8 remaining."
- "First batch closes [specific date]."
- "Next batch: Q3 2024."

### 2. Reward / Incentive
- "Founding members get 40% off forever."
- "You shape the product. Your feedback directly influences what we build."
- "Direct access to the team. Not a ticket system. Real people."

### 3. Authority (Professional)
- "Built by [team credentials if available] for MCs doing 25+ weddings/year."
- Social proof: "Joined by MCs managing 30+ weddings per year."
- No wedding clichés. No fluff.

### 4. Risk Removal
- "No credit card required. Join the beta free."
- "If you don't love it, unsubscribe. No consequences."

## Tone

- Confident, not arrogant
- Direct, not cute
- Modern, not trendy
- Professional, not "corporate"
- Recognition (you understand my pain)
- Relief (here's the solution)

Avoid:

- Generic SaaS jargon ("leverage," "synergy," "paradigm")
- "Revolutionary" or "game-changing"
- Fluffy marketing copy
- Wedding industry clichés ("magical," "special day," etc.)
- Overthinking—just say what it does

---

# 5. Page Structure (Single Page Only)

## Section 1 – Hero

**Objective**: Immediate clarity + urgency + visible proof.

- Bold headline (create fear/tension)
- Subheading (specific MC pain)
- Inline email CTA (email only, no form above fold)
- Visual: **Dashboard/holistic view** of the product (NOT one feature)
  - Show multiple features in context (e.g., timeline, couple details sidebar, script tabs visible)
  - This proves "all-in-one"
- Social proof: "Join X MCs already in beta"
- Small badge: "20 spots closing [date]"

---

## Section 2 – The Problem (Reimagined)

**Do NOT just list pain points.**

Instead: **Before/After scenario** or **Day-in-life narrative**

Show an MC's frustration journey → how Zebri solves it.

Use specific dialogue or narrative, not bullet points.

---

## Section 3 – Features (With Visible Product Snapshots)

**Critical**: Each feature has a REAL, VISIBLE product screenshot below it.

NOT clickable. NOT hidden. ALWAYS VISIBLE.

Features (with brief 1-line description):

1. **Timeline Builder** — Drag-drop timeline synced with couples
   - Screenshot: Real timeline UI with items, timestamps, drag handles
2. **Couple Portal** — They fill once, you access always
   - Screenshot: Form with pronunciation guide, bridal party, cultural notes
3. **Script Organiser** — Reusable templates by section
   - Screenshot: Collapsible sections (Opening, Transitions, Closing)
4. **Night Mode** — Dark mode built for performance
   - Screenshot: Large text, current item highlighted, offline ready
5. **Client Management** — Everything you track in a spreadsheet, purpose-built for MCs
   - Screenshot: Table/list view with couple, date, venue, status, payment columns

Each screenshot should be a coded mockup that looks like real software.

---

## Section 4 – The Reward (NEW)

**This is critical for conversion.**

"Founding Members Get:"
- Lifetime 40% discount (hardest number)
- Priority feature requests (influence the product)
- Direct access to the team
- [OPTIONAL] Exclusive [something else]

This section removes hesitation: "Why should I join the beta?"

---

## Section 5 – FAQ (Required)

Include 6–8 FAQs addressing:

- Is this only for professional MCs?
- Is this a CRM?
- When is it launching?
- How much will it cost?
- Can I give feedback?
- Is this available outside Australia?
- What happens after I sign up?

Tone must remove friction and create trust.
Note: The CRM FAQ should reflect that Zebri includes client management features but is purpose-built for MCs (not a generic CRM).

---

## Section 6 – Final CTA

Reinforce urgency:

- Headline: Creates scarcity/FOMO
- Subtext: Clear value (the reward)
- Form: Full signup (name, email, weddings/year optional)
- Primary CTA button color: `bg-gray-900` (black)
- Visual emphasis on the reward (not just "join beta")

---

## REMOVED SECTIONS

- "See It In Action" (redundant—features section has visible snapshots)

---

# 6. Design System Direction

Inspired by Notion: minimal, light, professional, no-nonsense.

Color System:

- Background: #FFFFFF (pure white)
- Text: #1F2937 (dark gray, not pure black)
- Muted: #9CA3AF (medium gray for secondary text)
- Borders: #E5E7EB (very light gray)
- Accent: #3B82F6 (soft blue for CTAs and highlights)
- Card bg: #F9FAFB (off-white for subtle section cards)

Characteristics:

- Notion-like minimalism (not heavy design)
- Generous whitespace
- Soft borders (1px, light gray)
- NO rounded corners—use 4px-6px max (Notion style)
- Light neutral backgrounds
- High-contrast typography
- Subtle hover transitions only

Typography:

- Display: Inter (bold, 600-700 weight for headlines)
- Body: Inter (400-500 weight, 16px base)
- Large spacing between sections (80px+ on desktop)

Do NOT:

- Use dark backgrounds or near-black
- Overuse color
- Use heavy gradients
- Use stock photography
- Use cheesy wedding imagery
- Animate excessively

This is professional SaaS, not a wedding site.

---

# 7. Technical Requirements

Framework: Next.js (App Router)
Language: TypeScript
Styling: Tailwind CSS

Single page only: app/page.tsx

Form must:

- Capture name
- Email
- Weddings per year (text field, optional)

On submit:

- Use a Server Action
- Send email to site owner
- Use Resend OR Nodemailer
- No database required

Environment variables must be used for API keys.

---

# 8. SEO Requirements

- Title tag: Zebri – The Wedding MC Command Centre
- Meta description targeting: wedding MC software, wedding MC CRM, wedding MC timeline tool
- OpenGraph tags
- Structured semantic HTML
- Fast load time

This is paid traffic + direct DM traffic.
SEO still matters for credibility.

---

# 9. Conversion Psychology Rules

- CTA visible above fold
- Scarcity language used ethically ("8 spots remaining" NOT "limited time")
- Clear who it is NOT for (not hobbyists)
- Remove risk ("No credit card required")
- Professional positioning
- **Reward prominence**: Make the incentive (40% off forever, direct access) prominent and repeated
- **Urgency**: "Closes [specific date]" should appear 2-3 times on page
- **Social proof**: Show that other MCs (doing 30+ weddings/year) are already in beta

This must feel exclusive and purpose-built.

---

## Footer

- Clean, professional layout
- Logo/wordmark on left
- Links: Instagram (with icon), Email (with icon)
- Use proper SVG or icon font (not emoji)
- Legal: "© 2026 Zebri. Built for professional wedding MCs."
- Email: arjun@zebri.com.au
- NO social media badges or unnecessary elements

---

# 10. Non-Negotiables

- No feature creep
- No multi-page expansion
- No dashboard build
- No backend beyond email capture
- No generic SaaS templates

This is a focused validation asset.

---

# 11. Execution Mindset

We are testing:

Do professional MCs want this badly enough to give us their email?

If YES → Build MVP.
If NO → Do not rationalise.

Speed wins.
Focus wins.
Clarity wins.

End of Claude Operating System for Zebri.
