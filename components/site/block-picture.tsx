import Image from 'next/image';

import { blockById } from './catalog';

/**
 * A block's picture on the site: a 2x capture of the block's product
 * image from the app (`public/site/block-<id>.png`, made by
 * `scripts/capture-product-shots.mjs`). Decorative: the card's own
 * heading and copy say what it shows.
 *
 * Email has no product image in the app yet. It used to fall back to
 * its icon and first three bullets on a grey panel, which repeated the
 * bullets printed right under it (founder, 2026-10-19). Until the app
 * gains its image, it shows the branded thank-you email the Journeys
 * band sends (`journey-welcome.png`, a real capture). When it does, add
 * the id to `PICTURED`, re-run the capture script, and drop the stand-in.
 *
 * @module components/site/block-picture
 */

/** The blocks with a captured picture. Add an id when the app gains its image and the script is re-run. */
const PICTURED = new Set([
  'lead-capture',
  'scheduler',
  'video',
  'proposals',
  'contracts',
  'payments',
  'questionnaires',
  'timeline',
  'scripts',
  'bdm',
  'calendar',
  'workflows',
]);

/** Blocks shown with another capture until their own exists. */
const STAND_INS: Record<string, string> = { 'email-marketing': '/site/journey-welcome.png' };

const BOX = 'aspect-video w-full rounded-panel';

/** The picture for a block, by catalogue id. */
export function BlockPicture({ id }: { id: string }) {
  const block = blockById(id);
  if (!block) return null;
  if (PICTURED.has(block.id))
    return (
      <Image
        src={`/site/block-${block.id}.png`}
        alt=""
        width={1440}
        height={810}
        sizes="(min-width: 1024px) 352px, (min-width: 768px) 50vw, 100vw"
        className={BOX}
      />
    );
  const standIn = STAND_INS[block.id];
  if (standIn)
    return (
      <Image
        src={standIn}
        alt=""
        width={1360}
        height={960}
        sizes="(min-width: 1024px) 352px, (min-width: 768px) 50vw, 100vw"
        // The email's head and greeting are what matter; the signature can fall off the foot.
        className={`${BOX} object-cover object-top`}
      />
    );
  return <div aria-hidden="true" className={`${BOX} bg-zebra-50`} />;
}

