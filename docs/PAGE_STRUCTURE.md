# Zebri Site Structure

The site is a waitlist (founder, 2026-10-19): people join, and the founder
lets MCs and Celebrants in a few at a time while the new Zebri is finished.
Everyone in before the public launch is a founding member. **No waitlist
count and no place-in-line number anywhere**: the market is small, so any
number backfires.

## Pages

| Path | What it is | Code |
|------|-----------|------|
| `/` | The marketing page | `components/site/website-page.tsx` |
| `/blocks` | Every block in the catalogue | `components/site/blocks-page.tsx` |
| `/guides` | Guides (SEO and AEO): the newest as a wide card, the rest as rows | `components/site/guides-page.tsx` |
| `/guides/<slug>` | One guide, with `Article` data: founder byline, the landing page's body text, an "On this page" list from `lg`, then Keep reading | `components/site/guide-article.tsx`, `components/site/guide-contents.tsx`, `lib/guides.ts` |
| `/privacy`, `/terms`, `/data-deletion` | Legal text in the site frame. Data deletion is the "User Data Deletion" URL Meta's app review needs (V2-7) and the Privacy Act's delete-on-request route | `components/site/legal-page.tsx` |

Redirects (`next.config.ts`): `/blog` → `/guides`, `/blog/:slug` →
`/guides/:slug`, `/news` and `/news/:slug` → `/`.

Nav: Features, Guides, Blocks, Pricing; Log in goes to
`https://app.zebri.com.au/login`; the button is Join the waitlist.

## The home page, top to bottom

1. **Hero**: "You run the event. Zebri does the rest." The lead names MCs
   and Celebrants. Join the waitlist and See how it works. The founding
   members' faces (real, `public/mcs/`) with "10,000+ events between them",
   a figure from their own public sites. The dashboard picture. A strip of
   the tools Zebri replaces.
2. **Journeys**: the six steps a booking runs through, ticking in turn,
   beside the document each one sends.
3. **BDM lodgement**: fill it in, Zebri checks it, lodge with BDM.
4. **Blocks**: six outcomes, See all goes to `/blocks`.
5. **Zebri AI**: drafted replies, nudges, calls that update the couple, as
   working windows.
6. **Security**.
7. **Pricing**: Pro $59 a month. Max recommended, $47 struck from $99, "a
   month for your first 12 months" (see STRATEGY.md).
   Enterprise Custom, Talk to us. Each plan's button carries the plan to
   the waitlist form.
8. **Waitlist** (`#early-access`): the email alone, then a success dialog.
9. **FAQ**, then the footer. The footer links Zebri's Instagram (zebri_au),
   Facebook and LinkedIn pages (`site-footer.tsx`).

## The waitlist

`components/site/early-access-form.tsx` takes the email, and that is the
whole sign-up: no dialog, no name or trade. It calls the server action
`app/actions/waitlist.ts`, which emails each sign-up to
arjun@zebri.com.au through Resend (`RESEND_API_KEY`, sent from
app.zebri.com.au), then a success dialog opens (`waitlist-done.tsx`, the
app's dialog anatomy with its `DoneView`) saying the invite comes by
email. Once it is closed, the form's place holds one line saying they are
on the list. There is no database: the inbox is the list. PostHog event:
`waitlist_joined`.

No referral scheme and no place in line (founder, 2026-10-19).
