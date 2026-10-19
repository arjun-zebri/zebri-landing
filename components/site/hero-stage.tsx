import Image from 'next/image';

/**
 * The hero's product picture: the real Zebri dashboard, photographed from
 * the app at a laptop's size (1280 x 736, 40:23) at 2x, for a fictional
 * MC (Jess Taylor) rather than the founder. An image, not the app's code:
 * the site stays small and fast, and `scripts/capture-product-shots.mjs`
 * re-takes it when the dashboard changes. Shown whole at its column's
 * width on every screen, so its right edge is the content edge. Loaded
 * first: on a laptop it is the largest thing above the fold.
 *
 * @module components/site/hero-stage
 */

/** The hero picture. */
export function HeroStage() {
  return (
    <div className="aspect-[40/23] overflow-hidden rounded-panel shadow-xl ring-1 ring-zebra-950/10">
      <Image
        src="/site/hero-dashboard.png"
        alt="The Zebri dashboard: a greeting, Ask Zebri, and what is up next for the week's couples."
        width={2560}
        height={1472}
        priority
        sizes="(min-width: 1152px) 1152px, 100vw"
        className="size-full"
      />
    </div>
  );
}
