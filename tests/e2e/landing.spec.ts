import { expect, test, type Page } from '@playwright/test';

/**
 * The marketing site, end to end. The waitlist is driven up to its last
 * step but never sent: a send emails the founder through Resend.
 */

const isPhone = (page: Page) => (page.viewportSize()?.width ?? 1280) < 1024;

test.describe('home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('says what Zebri is', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(/You run the event\.\s*Zebri does the rest\./);
    await expect(page).toHaveTitle('Zebri · You run the event. Zebri does the rest.');
    await expect(page.getByText('10,000+ events between them')).toBeVisible();
  });

  test('nav links go to the right places', async ({ page }) => {
    if (isPhone(page)) await page.getByRole('button', { name: 'Open menu' }).click();
    const nav = isPhone(page) ? page : page.getByRole('navigation', { name: 'Main' });
    await expect(nav.getByRole('link', { name: 'Features' }).first()).toHaveAttribute('href', '/#journeys');
    await expect(nav.getByRole('link', { name: 'Guides' }).first()).toHaveAttribute('href', '/guides');
    await expect(nav.getByRole('link', { name: 'Blocks' }).first()).toHaveAttribute('href', '/blocks');
    await expect(nav.getByRole('link', { name: 'Pricing' }).first()).toHaveAttribute('href', '/#pricing');
    await expect(nav.getByRole('link', { name: 'Log in' }).first()).toHaveAttribute('href', 'https://app.zebri.com.au/login');
  });

  test('pricing shows the founding deal on Max', async ({ page }) => {
    const pricing = page.locator('#pricing');
    await pricing.scrollIntoViewIfNeeded();
    await expect(pricing.getByText('$47', { exact: true })).toBeVisible();
    await expect(pricing.getByText('a month for your first 12 months')).toBeVisible();
    await expect(pricing.locator('s', { hasText: '$99' })).toBeVisible();
    await expect(pricing.getByRole('button', { name: 'Talk to us' })).toBeVisible();
  });

  test('picking a plan carries it to the waitlist', async ({ page }) => {
    await page.locator('#pricing').scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: 'Join with Max' }).click();
    await expect(page.getByText('Joining with Max')).toBeVisible();
  });

  test('the waitlist checks the email on the page, before any dialog', async ({ page }) => {
    const form = page.locator('#early-access');
    await form.scrollIntoViewIfNeeded();
    await form.getByRole('button', { name: 'Join the waitlist' }).click();
    await expect(form.getByText('Enter a valid email address.')).toBeVisible();
    // The success dialog opens only after a real send (Resend), so the suite stops short of it.
    await expect(page.getByRole('dialog')).toHaveCount(0);
  });

  test('carries search data for the product and the FAQ', async ({ page }) => {
    const types = await page
      .locator('script[type="application/ld+json"]')
      .evaluateAll((els) => els.map((el) => JSON.parse(el.textContent ?? '{}')['@type']));
    expect(types).toEqual(expect.arrayContaining(['Organization', 'SoftwareApplication', 'FAQPage']));
  });

  test('has no sideways scroll', async ({ page }) => {
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
});

test('blocks lists every block', async ({ page }) => {
  await page.goto('/blocks');
  await expect(page.getByRole('heading', { level: 1, name: 'Every block in Zebri.' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Lodge with BDM' })).toBeVisible();
});

test('guides list the guides, and each opens', async ({ page }) => {
  await page.goto('/guides');
  await page.getByRole('link', { name: 'Your CRM has a field for LinkedIn. Not pronunciation.' }).click();
  await expect(page).toHaveURL(/\/guides\/crm-wrong-for-wedding-celebrants$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Your CRM has a field for LinkedIn. Not pronunciation.');
  const types = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((els) => els.flatMap((el) => [JSON.parse(el.textContent ?? '{}')].flat().map((d) => d['@type'])));
  expect(types).toEqual(expect.arrayContaining(['Article', 'BreadcrumbList']));
});

test('old blog and news links redirect', async ({ page }) => {
  await page.goto('/blog');
  await expect(page).toHaveURL(/\/guides$/);
  await page.goto('/blog/celebrant-crm-vs-planner-software');
  await expect(page).toHaveURL(/\/guides\/celebrant-crm-vs-planner-software$/);
  await page.goto('/news/introducing-zebri');
  await expect(page).toHaveURL(/localhost:\d+\/$/);
});

test('privacy, terms and data deletion render in the site frame', async ({ page }) => {
  for (const [path, title] of [
    ['/privacy', 'Privacy Policy'],
    ['/terms', 'Terms of Service'],
    ['/data-deletion', 'Data Deletion'],
  ] as const) {
    await page.goto(path);
    await expect(page.getByRole('heading', { level: 1, name: title })).toBeVisible();
    await expect(page.getByRole('contentinfo')).toBeVisible();
  }
});

test('sitemap and robots are served', async ({ request }) => {
  const sitemap = await (await request.get('/sitemap.xml')).text();
  expect(sitemap).toContain('https://zebri.com.au/guides/crm-wrong-for-wedding-celebrants');
  const robots = await (await request.get('/robots.txt')).text();
  expect(robots).toContain('Sitemap: https://zebri.com.au/sitemap.xml');
});
