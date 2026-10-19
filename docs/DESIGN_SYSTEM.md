# Zebri Site Design System

The site uses the **Zebri app's v2 design system**, copied from zebri-crm
so the site and the product look like one thing:

- `components/ui-v2/`: the primitives (Button, Input, Dialog, Badge,
  ChipGroup, SwipeRow, …) and `icons/` (Zebri's own glyphs, Lucide's API,
  stroke 1.5). Copied, not edited: when one changes in the CRM, copy it
  again rather than diverging here.
- `app/globals.css`: the v2 tokens and utilities from the CRM's
  `app/globals.css` (the zebra and grass scales, `type-*` roles including
  `type-site-hero/title/lead`, `rounded-panel/button/check/pill`,
  `focus-mark`, the reveal keyframes, the v2 scrollbars).
- `components/site/`: the site's own sections, ported from the CRM's
  preview at `/design-system/v2/website`.

Rules carried over from the CRM: use the primitive, never hand-write a
control; tokens, not raw Tailwind greys or sizes; Lucide-style icons at
stroke 1.5; one control height; works on phones (Pixel 5, iPhone 12).

## Product pictures

The site shows **images of the app, not the app's code**, the way Stripe
and Notion do, so it stays small and fast:

- The hero dashboard, the six Journeys documents and the block pictures
  are 2x captures in `public/site/`. The CRM renders each one alone at
  `/design-system/v2/website/capture`; `npm run capture` (with the CRM's
  dev server on :3000) photographs them. Re-run it when the app's UI
  changes.
- The Zebri AI windows and the BDM steps are live code with made-up data
  (`ai-call-data.ts`, `nudge-data.ts`, `enquiry-data.ts`), copied from the
  app and trimmed, because they are meant to be clicked.
- `catalog.ts` and `plan-pricing.ts` are copies of the app's catalogue and
  prices. Change them when the app's change.
