# Zebri Execution Protocol

## Skills & Execution Protocol (Mandatory)

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

### Execution Rule
No frontend code may be written until frontend-design and conversion-copy have been applied.

### Hooks Rule
When generating components:

- Use reusable, clean component structure
- Extract large UI blocks into internal components if necessary
- Avoid unnecessary client-side hooks
- Prefer Server Actions for form submission

This ensures design integrity, conversion quality, and engineering discipline.

---

## Non-Negotiables

- No feature creep
- No multi-page expansion
- No dashboard build
- No backend beyond email capture
- No generic SaaS templates

This is a focused validation asset.

---

## Execution Mindset

We are testing:

Do professional MCs want this badly enough to give us their email?

If YES → Build MVP.
If NO → Do not rationalise.

Speed wins.
Focus wins.
Clarity wins.
