import Image from 'next/image';

import { CheckIcon } from '@/components/ui-v2/icons';

import { BlockMark } from './block-mark';
import { blockById } from './catalog';

/**
 * A block's picture on the site: a 2x capture of the block's product
 * image from the app (`public/site/block-<id>.png`, made by
 * `scripts/capture-product-shots.mjs`), or, for a block with no image yet,
 * its mark and first three specifics on the quiet canvas. Decorative: the
 * card's own heading and copy say what it shows.
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
]);

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
        className="aspect-video w-full rounded-panel"
      />
    );
  return (
    <div aria-hidden="true" className="flex aspect-video flex-col justify-center gap-3 rounded-panel bg-zebra-50 px-6">
      <BlockMark block={block} />
      <ul className="space-y-1.5">
        {block.bullets.slice(0, 3).map((b) => (
          <li key={b} className="flex items-center gap-2 type-body text-zebra-600">
            <CheckIcon aria-hidden="true" className="size-3.5 shrink-0 text-grass-700" />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
