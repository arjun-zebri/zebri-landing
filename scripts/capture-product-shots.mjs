/**
 * Photographs the site's product pictures from the CRM at 2x, into
 * `public/site/`. The site shows images of Zebri, not the app's code, so
 * when the app's UI changes, start the CRM (`npm run dev` in zebri-crm)
 * and run `npm run capture` here.
 *
 * Each picture is a `[data-capture]` box on the CRM's dev-only sheet at
 * /design-system/v2/website/capture, saved as `<its name>.png`.
 *
 * Usage: node scripts/capture-product-shots.mjs [crm origin]
 */
import { mkdir, rm } from 'node:fs/promises';
import { chromium } from 'playwright';

const ORIGIN = process.argv[2] ?? 'http://localhost:3000';
const OUT = new URL('../public/site/', import.meta.url);
// Long enough for the dashboard's lazy chunk, the brand fonts and the entrance animations.
const SETTLE_MS = 4000;

await mkdir(OUT, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2, reducedMotion: 'reduce' });
await page.goto(`${ORIGIN}/design-system/v2/website/capture`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(SETTLE_MS);
// Dev overlays (Next's indicator, devtools tabs) are fixed to the viewport and land on
// whichever picture is under them, so everything fixed outside a picture is hidden.
await page.addStyleTag({ content: 'nextjs-portal { display: none !important; }' });
await page.evaluate(() => {
  for (const el of document.querySelectorAll('body *')) {
    if (el.closest('[data-capture]')) continue;
    const { position } = getComputedStyle(el);
    if (position === 'fixed' || position === 'sticky') el.style.setProperty('visibility', 'hidden', 'important');
  }
});

const boxes = page.locator('[data-capture]');
const names = await boxes.evaluateAll((els) => els.map((el) => el.getAttribute('data-capture')));
for (const name of names) {
  const box = page.locator(`[data-capture="${name}"]`);
  await box.scrollIntoViewIfNeeded();
  await box.screenshot({ path: new URL(`${name}.png`, OUT).pathname, animations: 'disabled' });
  console.log(`saved public/site/${name}.png`);
}
await browser.close();

// next/image keeps each resized copy for hours without checking the source file, so a
// retina screen kept getting the old pictures (Next's badge and all) after a recapture.
for (const dir of ['../.next/dev/cache/images/', '../.next/cache/images/']) {
  await rm(new URL(dir, import.meta.url), { recursive: true, force: true });
}
