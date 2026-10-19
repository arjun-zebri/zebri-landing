
import { HeroActions } from './hero-actions';
import { HeroStage } from './hero-stage';
import { SiteReplaces } from './site-replaces';

/**
 * The opening screen: the words, and the real dashboard beside them from
 * `lg` (under them on smaller screens). See `hero-stage.tsx`.
 *
 * The headline splits the job (founder, 2026-10-19): the MC or
 * Celebrant runs the event, the part they are good at, and Zebri does
 * the rest. Not a category (founder brief, 2026-10-17: "we don't want to
 * be just another CRM"), and never "back office": nobody in the trade
 * calls their admin that, and "Less admin. More weddings." read as any
 * SaaS slogan. "Event", not "wedding": MCs run receptions, Celebrants
 * ceremonies. There is no
 * kicker over it (founder brief: the audience belongs in the
 * subheading, not "sprinkled in at the top"); the lead names who it is
 * for, then what the admin is, in the order a booking meets it. No
 * state and no "AI", so it reads true for every visitor. Only what
 * Zebri does (2026-10-19 review): it drafts replies (the MC says yes),
 * and the paperwork is made ready to lodge, since the MC lodges with a
 * tap; "all while you sleep" overclaimed both, and the AI band already
 * says "before you wake".
 *
 * Laid out like the live zebri.com.au hero (founder, 2026-10-17: "this
 * looks a little cleaner in terms of the sizing and layout"), to its
 * measurements: a 27rem words column on the 1152 content width, a 48px
 * headline over a 16px lead, a 64px gap, and the product filling the
 * rest, centred against the words, on plain white (the backdrop's sky
 * was taken off, founder 2026-10-19).
 * Under the lead: two buttons, the founding members and three promises
 * (`HeroActions`). The hero ends on the tools Zebri
 * replaces (`SiteReplaces`): the price argument belongs on the first
 * screen, not in a band below it (founder brief).
 *
 * @module components/site/site-hero
 */

// Literal classes so Tailwind emits them: one stagger step per block.
const RISE = 'motion-safe:animate-reveal-up';
const DELAYS = ['', '[animation-delay:80ms]', '[animation-delay:160ms]'];
const rise = (i: number) => `${RISE} ${DELAYS[i] ?? ''}`;

/** The opening screen. */
export function SiteHero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden px-5 sm:px-8"
    >
      {/* Plain white, no sky behind it (founder, 2026-10-19: "that hero container should be white background"). */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 pb-24 pt-36 sm:pt-52 lg:grid-cols-[27rem_1fr] lg:pb-40">
        <div className="max-w-xl">
          <h1
            id="hero-title"
            className={`text-balance type-site-hero text-zebra-950 ${rise(0)}`}
          >
            {/* A sentence a line, so a narrow column breaks inside one and never across the two. */}
            <span className="block">You run the event.</span>{' '}
            <span className="block">Zebri does the rest.</span>
          </h1>
          <p className={`mt-5 text-pretty type-lead text-zebra-500 ${rise(1)}`}>
            For wedding MCs and Celebrants. Zebri drafts your replies, sends proposals and
            contracts, chases deposits and gets the marriage paperwork ready to lodge, so your
            evenings are yours again.
          </p>
          <div className={`mt-8 ${rise(2)}`}>
            <HeroActions />
          </div>
        </div>
        <div className={`min-w-0 ${rise(2)}`}>
          <HeroStage />
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-hairline pb-16 pt-10 sm:pb-20">
        <SiteReplaces />
      </div>
    </section>
  );
}
