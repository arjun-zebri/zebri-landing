import Image from 'next/image';

/**
 * The document each Journeys step sends, as an image: the welcome email,
 * the proposal, the contract, the deposit invoice, the Notice of Intended
 * Marriage and the balance invoice, each photographed from the app at 2x
 * on its 680 by 480 canvas (`public/site/journey-<name>.png`, made by
 * `scripts/capture-product-shots.mjs`). The step list beside them stays
 * live code, so the ticks and the timer still play.
 *
 * @module components/site/journey-scene
 */

/** The canvas the scenes were laid out on, in CSS pixels. */
export const STAGE = { width: 680, height: 480 } as const;

/** Each step's picture, by step index. */
export const STEP_SCENES = ['welcome', 'proposal', 'contract', 'deposit', 'noim', 'balance'] as const;

/** One step's document, filling the canvas width from its top. Decorative: the step says what it is. */
export function JourneyScene({ index }: { index: number }) {
  const name = STEP_SCENES[index];
  if (!name) return null;
  return (
    <Image
      src={`/site/journey-${name}.png`}
      alt=""
      width={STAGE.width * 2}
      height={STAGE.height * 2}
      sizes="680px"
      className="absolute inset-x-0 top-0 h-auto w-full"
    />
  );
}
