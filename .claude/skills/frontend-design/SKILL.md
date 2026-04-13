---
name: frontend-design
description: Create minimalistic, production-grade frontend interfaces in the Notion style — calm, functional, content-first. Use this skill when building web components, pages, or any UI for this project. Produces precise, restrained interfaces that prioritise clarity over decoration.
license: Complete terms in LICENSE.txt
---

This skill governs all frontend design and implementation for this project. The aesthetic direction is fixed: **minimalistic and functional, inspired by Notion**. The goal is an interface that disappears — where the content and the work are all the user sees.

There is no room for bold artistic divergence, unexpected fonts, or dramatic effects. Restraint is the craft. Every pixel must earn its place.

---

## Design Philosophy

**Content-first.** The interface exists to surface information, not to impress. If a design element does not help the user understand or act, it should not exist.

**Calm over clever.** Predictability is a feature. Users should never be surprised by the UI — only by how much they can get done.

**Restraint as craft.** Adding is easy. Removing takes expertise. The highest-skill move is always subtraction.

**Whitespace is not empty.** Generous spacing creates visual hierarchy, groups related content, and signals quality. It is never wasted.

**The Notion principle.** The best interfaces are invisible. When the tool disappears and only the work remains, the design has succeeded.

---

## Design Thinking Process

Before writing a single line of code, work through these four questions:

1. **Content inventory** — What information exists on this screen? What is the hierarchy? What is primary, secondary, tertiary?
2. **Interaction states** — What states does every element need? Default, hover, focus, active, disabled, loading, empty, error. Design all of them.
3. **Spacing rhythm** — Establish the 4px base unit. Every gap, padding, and margin must be a multiple of 4. Define section rhythm before touching components.
4. **The one-remove test** — Before finalising, ask: what can be removed without losing meaning? If the answer is "nothing," the design is done. If the answer is "something," remove it.

---

## Color System

The palette is fixed. Do not introduce new colors.

| Role | Value | Usage |
|------|-------|-------|
| Page background | `#FFFFFF` | Always pure white — never off-white as the page base |
| Surface | `#FAFAFA` | Cards, sidebars, secondary containers only |
| Border | `#E5E7EB` | 1px borders — use sparingly; one layer of separation maximum |
| Primary text | `#111827` | Headings, labels, critical content |
| Secondary text | `#6B7280` | Supporting copy, timestamps, metadata |
| Muted text | `#9CA3AF` | Placeholders, disabled states, captions |
| Accent — Mint | `#A7F3D0` | Hover highlights, active indicators, toggle-on states only |
| CTA / Wordmark | `#111111` | Primary buttons and logo — the only dominant dark element |

**Mint is an accent, not a fill.** It lives on small interactive signals — a left border on an active nav item, a dot on a live badge, a toggle thumb. It never fills a button, card, or background region.

**Color composition rule.** Never use more than 2 brand colors in a single composition. Black/white dominate; mint accents.

**No gradients. No color overlays.** Flat color only.

**Shadows.** `shadow-sm` is the maximum allowed — and only to lift interactive cards or modals off the page. Never decorative.

---

## Typography

**One typeface: Inter.** No display fonts. No pairings. Inter at different weights and sizes creates all the hierarchy this design needs.

### Weight Discipline

| Weight | Value | Use for |
|--------|-------|---------|
| Regular | 400 | All body copy, table cells, form values |
| Medium | 500 | Navigation labels, form labels, secondary headings |
| Semibold | 600 | Section headings, page titles, CTA text |
| Bold | 700 | **Never used.** Semibold is the ceiling. |

### Type Scale

| Role | Size | Weight | Line Height |
|------|------|--------|-------------|
| Hero headline | 40–48px | 600 | 1.15× |
| Section heading | 24–32px | 600 | 1.2× |
| Subheading | 18–20px | 600 | 1.3× |
| Body / UI default | 14–16px | 400 | 1.5× |
| Label / nav item | 13–14px | 500 | 1.4× |
| Metadata / caption | 12–13px | 400 | 1.4× |
| Micro label (ALL-CAPS) | 11–12px | 500 | 1.4× |

### Typography Rules

- **Line height:** 1.5× for body text, 1.2–1.3× for headings. Never tighter than 1.15×.
- **Letter spacing:** 0 for all body and heading text. `tracking-widest` only on ALL-CAPS micro-labels (e.g. table headers, section tags).
- **Paragraph width:** Cap prose at 65ch. UI text at 75ch. Never allow full-width text blocks spanning 1200px.
- **ALL-CAPS:** Only for short labels (3 words maximum). Never for body copy, headings, or button labels.
- **No decorative text effects:** No text gradients, no strokes, no drop shadows on type.
- **Underlines:** Only for inline hyperlinks within body copy. Never as a decorative element.

---

## Spacing & Layout

### The 4px Grid

Every spacing value must be a multiple of 4px. Use Tailwind's default spacing scale:

`4 → 8 → 12 → 16 → 20 → 24 → 32 → 40 → 48 → 64 → 80 → 96`

No arbitrary values unless mathematically unavoidable and documented.

### Layout Structure

- **Content max-width:** 1200px, centred
- **Page gutter:** `px-6` (24px) on desktop, `px-4` (16px) on mobile
- **Grid:** 12-column base, `gap-6` (24px) between columns
- **Section vertical rhythm:** 80–96px between major page sections on desktop; 48–64px on mobile

### Component Internal Spacing

| Component size | Internal padding |
|---------------|-----------------|
| Small (badges, chips) | 4–8px |
| Standard (inputs, buttons) | 12–16px horizontal |
| Cards | 16–20px |
| Section / panel | 24–32px |
| Hero block | 40–64px |

### The Breathing Room Rule

If two elements feel visually cramped, double the gap between them. Only add a divider line if doubling the space is structurally impossible. Whitespace should always be tried first.

---

## Component Patterns

### Buttons

| Variant | Class pattern | Use when |
|---------|--------------|----------|
| Primary | `bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700` | One per view maximum — the single most important action |
| Secondary | `border border-gray-200 text-gray-900 bg-white hover:bg-gray-50` | Supporting actions, cancel, back |
| Ghost | `text-gray-600 hover:text-gray-900 hover:bg-gray-100` | Toolbar actions, icon buttons, low-priority actions |
| Destructive | `text-red-600 hover:bg-red-50` | Delete, remove — ghost style, no border |

**All buttons:** Height 36px, `rounded-md`, `font-medium`, `px-4`. No shadows. No gradient fills. No uppercase text. No border-radius above 8px.

**Loading state:** Replace label text with a small spinner. Keep the button width fixed to prevent layout shift. Disable pointer events.

**Icon buttons:** 32×32px, `rounded-md`, ghost style. Always include `aria-label`.

### Inputs & Forms

- **Default:** `h-9 border border-gray-200 rounded-md px-3 text-sm bg-white text-gray-900`
- **Focus:** `focus:border-gray-400 focus:ring-0 focus:outline-none` — no blue glow, no thick ring
- **Error:** `border-red-400` with `text-xs text-red-600` helper text below the field
- **Disabled:** `bg-gray-50 text-gray-400 cursor-not-allowed`
- **Placeholder:** `text-gray-400` — always lighter than secondary text
- **Labels:** `text-sm font-medium text-gray-700` placed above the input, with `gap-1.5` (6px) between label and input
- **Form group vertical gap:** `gap-4` (16px) between fields
- **Select dropdowns:** Match input styling exactly. No custom arrow colours.
- **Never use floating labels.** They obscure the filled state and create cognitive overhead.

### Cards

- **Default (non-interactive):** `bg-white border border-gray-200 rounded-md p-4`
- **Interactive (clickable):** Add `hover:bg-gray-50 transition-colors duration-150 cursor-pointer`
- **Never stack** borders and shadows on the same card. Choose one signal.
- **Card header / footer:** Use `border-b border-gray-100` or `border-t border-gray-100` — not a full `border`

### Tables

Tables follow Notion's horizontal-only border pattern.

- **Header row:** `text-xs font-medium text-gray-400 uppercase tracking-widest border-b border-gray-200`
- **Data rows:** `border-b border-gray-100 hover:bg-gray-50`
- **Row height:** Minimum 40px (`py-2.5`)
- **Cell padding:** `px-4`
- **No vertical borders, no outer table border, no alternating row colors**
- **Status/badge columns:** Right-aligned
- **Numeric columns:** Right-aligned, `font-mono` if precision matters

### Badges & Tags

- Shape: `rounded-full px-2.5 py-0.5 text-xs font-medium`
- Colors are semantic — drawn from status context, never from brand palette:
  - New/Pending: `bg-amber-50 text-amber-700`
  - Active/Confirmed: `bg-blue-50 text-blue-700`
  - Success/Complete: `bg-green-50 text-green-700`
  - Neutral/Archived: `bg-gray-100 text-gray-600`
  - Error/Cancelled: `bg-red-50 text-red-700`
- **Never use mint for status badges.** Mint signals interaction, not status.

### Navigation & Sidebar

- **Background:** `bg-[#FAFAFA]`, width 240px
- **Nav item (default):** `text-sm text-gray-600 px-3 py-1.5 rounded-md`
- **Nav item (hover):** `hover:bg-gray-100 hover:text-gray-900`
- **Nav item (active):** `bg-gray-100 text-gray-900 font-medium`
- **Section labels:** `text-xs font-medium text-gray-400 uppercase tracking-widest px-3 mb-1 mt-4`
- Icons: Only include when they add genuine scannability. Never decorative.
- Mint: A 2px left border on the active nav item is the only appropriate mint use here.

### Modals & Dialogs

- **Width:** 480px (confirmations/alerts), 640px (forms)
- **Frame:** `bg-white rounded-lg border border-gray-200 shadow-sm`
- **Overlay:** `bg-black/20` — subtle darkening, no blur
- **Header:** `text-lg font-semibold text-gray-900` with `X` close button top-right
- **Body:** `text-sm text-gray-600`, `p-6`
- **Footer:** Right-aligned buttons, `gap-2`. Secondary action first, primary action last (rightmost).
- Pressing `Escape` always closes the modal.

### Empty States

- Vertically and horizontally centred in their container
- **Icon:** 40–48px, `text-gray-300` (not gray-400 — must feel absent, not present)
- **Heading:** `text-sm font-medium text-gray-900`
- **Body:** `text-sm text-gray-500`, max 2 lines
- **CTA:** Secondary button style — empty states are low-priority moments, not prompts to panic

### Loading & Skeleton States

- Use skeleton loaders, not full-page spinners
- Skeleton blocks: `bg-gray-100 rounded animate-pulse`
- `animate-pulse` only on image/card skeletons — not on text line skeletons (too visually noisy)
- Text line skeletons: static `bg-gray-100 rounded` blocks at appropriate widths
- Never block the entire viewport — skeleton what you can, render what arrives

---

## Interaction Design

### Hover States

Three patterns only:

1. **Background shift:** `hover:bg-gray-50` (subtle) or `hover:bg-gray-100` (stronger)
2. **Text colour shift:** `hover:text-gray-900` from a gray-600 base
3. **Border colour shift:** `hover:border-gray-300` from a gray-200 base

**Never on hover:** scale, translate, rotate, opacity changes, box-shadow changes.

**Mint on hover:** Only on elements that signal a specific interaction type — active toggles, the current page indicator, a link that navigates somewhere meaningful. Not on general hover states.

### Focus States

- Always visible: `focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2`
- Never suppress focus rings — they are non-negotiable for accessibility
- Tab order must match visual reading order (top-left → bottom-right)

### Active / Press States

- Buttons: `active:bg-gray-200` (secondary/ghost) or `active:bg-gray-700` (primary)
- Scale: `active:scale-[0.98]` is acceptable on primary CTA buttons only
- Never scale on hover — only on active press

### Transitions

One rule applies to the entire codebase:

```
transition-colors duration-150 ease-in-out
```

- `duration-150` is the standard for all colour/opacity transitions
- `duration-200` maximum for elements entering/exiting (modals, dropdowns)
- **Never use `transition-all`** — it causes unexpected repaints on layout properties
- **Never transition** `width`, `height`, `display`, or `visibility`

---

## Motion & Animation

The governing principle: **animation must reduce cognitive load, not add spectacle.**

### Permitted

- `duration-150` colour/opacity on interactive elements (hover, focus, active)
- `duration-200` fade + `translate-y-1` → `translate-y-0` for modals and dropdown menus entering
- `animate-pulse` on skeleton loaders (image/card blocks only)
- Staggered appearance of list items — maximum 3 items, `delay-[50ms]` increments

### Forbidden

- Scroll-triggered animations of any kind
- Page transition animations
- Continuous animations (rotating loaders, pulsing elements) outside of explicit loading states
- Parallax scrolling effects
- Hover-reveal patterns that hide content behind an interaction
- Any animation with `duration-300` or longer on interactive UI elements

If an animation would be noticed and admired, it is probably wrong for this design.

---

## Visual Hierarchy Without Decoration

Hierarchy must be created using only these five tools:

1. **Size** — scale difference alone establishes importance
2. **Weight** — 400 → 500 → 600 covers all hierarchy needs
3. **Colour** — three tiers: `#111827` (primary) → `#6B7280` (secondary) → `#9CA3AF` (muted)
4. **Spacing** — proximity groups; distance separates. More space = more important boundary.
5. **Position** — top-left receives the highest natural attention. Place the most important element there.

### What You Must Never Do

- Add a decorative divider line to separate sections — use space instead
- Use a coloured background block to "anchor" a section — whitespace does this better and costs nothing
- Apply Bold + Color + Large size simultaneously to one element — pick at most 2 contrast signals per element
- Use icons as decoration — every icon must carry a specific, non-redundant meaning

---

## Product Mockups

When building coded product screenshots for the Features section:

- Use the exact Zebri brand palette within the mockup
- **Populate with realistic data** — specific names (Sarah & James Kowalski), real dates (Sat 14 Feb 2026), plausible venues (The Grounds, Alexandria). Empty placeholder mockups destroy credibility.
- **Show density** — tables with rows, sidebars with content, multiple UI elements visible. Not empty chrome.
- **Frame:** `shadow-sm rounded-lg border border-gray-200 overflow-hidden` to lift the mockup from the page
- **Aspect ratio:** 16:10 standard; widescreen (16:9) acceptable for timeline/calendar views
- **Text within mockups:** Minimum 11px for legibility at display size
- **Dark mockup (Event Mode only):** `bg-gray-900` frame, `text-white` primary text, mint-highlighted active row with `bg-[#A7F3D0]/20 border-l-2 border-[#A7F3D0]`
- Mockups are static. No hover effects, no animations inside the frame.

---

## Accessibility

These are non-negotiable. Every implementation must satisfy all of them.

- **Contrast:** AA minimum — 4.5:1 for body text (14px), 3:1 for large text (18px+) and UI components
- **Keyboard access:** Every interactive element reachable and operable via keyboard
- **Focus visibility:** Never suppressed or styled to be invisible
- **Icon buttons:** Always carry `aria-label` describing the action, not the icon
- **Form labels:** Every input has an associated `<label>` element (not just a placeholder)
- **Error messages:** Linked to their input via `aria-describedby`
- **State changes:** Never communicate state through colour alone — always pair with text or icon
- **Alt text:** Every `<img>` has meaningful alt text (filename is not meaningful)

---

## Responsive Design

**Mobile-first.** Design for 375px viewport width first. Scale up from there.

| Breakpoint | Width | Primary change |
|-----------|-------|---------------|
| Base | 375px | Single column, full-width elements |
| `sm` | 640px | 2-column grids unlock |
| `md` | 768px | 3-column grids, sidebar considerations |
| `lg` | 1024px | Full desktop layout, sidebar visible |
| `xl` | 1280px | Max content width reached |

**Touch targets:** Minimum 44×44px for all interactive elements on mobile. Inputs: 44px height minimum on mobile (override the 36px desktop standard).

**Typography on mobile:** Never below 14px. Body text at 16px preferred. Hero headings scale down to 28–32px.

**No horizontal scroll** on any viewport at any breakpoint.

**Sticky navigation:** Avoid unless the page is long and navigation is frequently needed. Static headers are preferred.

**Single column on mobile:** All multi-column desktop grids collapse to 1 column on mobile. No exceptions for "compact" grids — trust the single column.

---

## Do / Don't Quick Reference

### Do

- Use whitespace aggressively — if unsure, add more
- Let size, weight, and colour carry hierarchy before reaching for any other tool
- Design every state: default, hover, focus, active, disabled, loading, empty, error
- Use 1px borders in `#E5E7EB` when visual separation is genuinely needed
- Default to secondary and ghost buttons; reserve primary black for the single most important action on each screen
- Keep components consistent — identical elements should look identical everywhere
- Remove the last thing you added and see if the design still works

### Don't

- Don't introduce new colors outside the defined palette
- Don't use Inter Bold (700) — semibold (600) is the ceiling
- Don't use mint as a fill color, background, or button color
- Don't add gradients anywhere
- Don't add decorative dividers, shapes, or flourishes to separate content — use space
- Don't place shadows heavier than `shadow-sm` anywhere
- Don't stack borders and shadows on the same element
- Don't place more than one primary CTA button on the same screen
- Don't use ALL-CAPS on text longer than 3 words
- Don't add transitions longer than 200ms
- Don't use `transition-all`
- Don't animate anything on scroll
- Don't use more than 2 brand colors in one composition
- Don't build a mockup with empty placeholder data — if the data isn't real, the mockup isn't credible
