import { test, expect } from "@playwright/test";

const BEATMIX_URL = "/beatmix";

/**
 * Everything here avoids a *successful* submit on purpose. A success sends
 * real mail through Resend, so the happy path is verified by hand rather than
 * on every test run. The invalid-email path exercises the same server action
 * and returns before Resend is ever called.
 */
test.describe("Beatmix conference page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BEATMIX_URL);
    await page.waitForLoadState("networkidle");
  });

  // ── Above the fold ────────────────────────────────────
  test("headline ties the demo to the offer", async ({ page }) => {
    await expect(page.locator("h1")).toContainText(
      "Everything you just saw. 20% off for 12 months."
    );
  });

  test("page has a single h1", async ({ page }) => {
    await expect(page.locator("h1")).toHaveCount(1);
  });

  test("stage one asks for the email and nothing else", async ({ page }) => {
    const form = page.locator("#hero-email").locator("xpath=ancestor::form");
    await expect(form.locator("input")).toHaveCount(1);
    await expect(
      form.getByRole("button", { name: /claim my 20%/i })
    ).toBeVisible();
  });

  test("offer bar and hero both state the deadline", async ({ page }) => {
    await expect(page.getByText(/Offer ends/).first()).toBeVisible();
    await expect(page.getByText(/Claim your Beatmix rate before/)).toBeVisible();
  });

  test("scarcity is stated without a fake counter", async ({ page }) => {
    await expect(
      page.getByText(/The first 5 get 50% off instead/).first()
    ).toBeVisible();
    // No "spots remaining" style counter anywhere — we have no store to count with.
    await expect(page.getByText(/spots (left|remaining)/i)).toHaveCount(0);
  });

  // ── Form behaviour ────────────────────────────────────
  test("invalid email shows an inline error and stays on stage one", async ({
    page,
  }) => {
    const input = page.locator("#hero-email");
    await input.fill("nope@nodot");
    // Bypass the browser's native type=email check so the server action runs.
    await input.evaluate((el: HTMLInputElement) => el.setCustomValidity(""));
    await page.getByRole("button", { name: /claim my 20%/i }).first().click();

    await expect(page.locator("[role='alert']").first()).toHaveText(
      /valid email address/i
    );
    // Still stage one: the email field is present, the role chips are not.
    await expect(input).toBeVisible();
    await expect(page.getByRole("radiogroup")).toHaveCount(0);
  });

  test("email input is typed for mobile keyboards", async ({ page }) => {
    const input = page.locator("#hero-email");
    await expect(input).toHaveAttribute("type", "email");
    await expect(input).toHaveAttribute("inputmode", "email");
    await expect(input).toHaveAttribute("autocomplete", "email");
  });

  test("the form appears at the top and the bottom with unique ids", async ({
    page,
  }) => {
    await expect(page.locator("#hero-email")).toHaveCount(1);
    await expect(page.locator("#final-email")).toHaveCount(1);
  });

  // ── Content ───────────────────────────────────────────
  test("speaks to both the new and the established", async ({ page }) => {
    await expect(page.getByText("No system yet?")).toBeVisible();
    await expect(page.getByText("Already have a system?")).toBeVisible();
  });

  test("DJs are addressed honestly, not sold to", async ({ page }) => {
    const faq = page.getByText("I'm a DJ, not an MC. Is this for me?");
    await expect(faq).toBeVisible();
    await faq.click();
    await expect(page.getByText(/Not yet, honestly/)).toBeVisible();
  });

  test("pricing shows the discounted rate against the full rate", async ({
    page,
  }) => {
    await expect(page.getByText("$39.20").first()).toBeVisible(); // Pro, 20% off 49
    await expect(page.getByText("$71.20").first()).toBeVisible(); // Max, 20% off 89
    await expect(page.getByText(/\$24\.50/).first()).toBeVisible(); // Pro, first five
  });

  test("FAQ opens without JavaScript (native details)", async ({ page }) => {
    const first = page.locator("details").first();
    await expect(first).toHaveJSProperty("open", false);
    await first.locator("summary").click();
    await expect(first).toHaveJSProperty("open", true);
  });

  // ── SEO ───────────────────────────────────────────────
  test("page is noindex so the offer never ranks", async ({ page }) => {
    const robots = page.locator('meta[name="robots"]');
    await expect(robots).toHaveAttribute("content", /noindex/);
  });

  // ── Mobile: this page is scanned on a phone, mid-talk ──
  test.describe("at 375px", () => {
    test.use({ viewport: { width: 375, height: 812 } });

    test("no horizontal scroll", async ({ page }) => {
      const overflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth -
          document.documentElement.clientWidth
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });

    test("the CTA is reachable without scrolling", async ({ page }) => {
      const button = page
        .getByRole("button", { name: /claim my 20%/i })
        .first();
      const box = await button.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.y + box!.height).toBeLessThan(812);
    });

    test("email input and CTA meet the 44px touch target", async ({ page }) => {
      const input = await page.locator("#hero-email").boundingBox();
      const button = await page
        .getByRole("button", { name: /claim my 20%/i })
        .first()
        .boundingBox();
      expect(input!.height).toBeGreaterThanOrEqual(44);
      expect(button!.height).toBeGreaterThanOrEqual(44);
    });
  });

  test("no console errors on load", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.reload();
    await page.waitForLoadState("networkidle");
    expect(errors).toEqual([]);
  });
});
