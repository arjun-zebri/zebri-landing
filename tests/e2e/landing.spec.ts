import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3001";

test.describe("Zebri Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState("networkidle");
  });

  // ── Hero ──────────────────────────────────────────────
  test("hero renders correct headline and scarcity badge", async ({ page }) => {
    await expect(page.locator("h1")).toContainText(
      "Stop juggling 6 tabs the night before a wedding."
    );
    await expect(page.getByText("Only 20 founding spots").first()).toBeVisible();
  });

  test("hero form has name and email fields", async ({ page }) => {
    await expect(
      page.locator("input[placeholder='Your name']").first()
    ).toBeVisible();
    await expect(page.locator("input[type='email']").first()).toBeVisible();
  });

  test("hero form submit button is present", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /join the waitlist/i }).first()
    ).toBeVisible();
  });

  test("hero form blocks empty email submit", async ({ page }) => {
    // Click submit without filling email (browser native validation fires)
    await page
      .getByRole("button", { name: /join the waitlist/i })
      .first()
      .click();
    await page.waitForTimeout(300);
    await expect(
      page.getByText("You're on the list.").first()
    ).not.toBeVisible();
  });

  // ── Navigation ────────────────────────────────────────
  test("nav renders with correct links", async ({ page }) => {
    const mainNav = page.getByRole("navigation", { name: "Main navigation" });
    await expect(mainNav).toBeVisible();
    await expect(
      mainNav.getByRole("link", { name: "Features" })
    ).toBeVisible();
    await expect(
      mainNav.getByRole("link", { name: "Pricing" })
    ).toBeVisible();
  });

  test("nav features link has correct href", async ({ page }) => {
    const mainNav = page.getByRole("navigation", { name: "Main navigation" });
    const link = mainNav.getByRole("link", { name: "Features" });
    await expect(link).toHaveAttribute("href", "#features");
  });

  // ── Pain Points ───────────────────────────────────────
  test("pain points section has narrative content", async ({ page }) => {
    // Use partial text match to avoid apostrophe encoding differences
    await expect(
      page.getByText("10pm the Thursday before a Saturday wedding").first()
    ).toBeVisible();
    await expect(page.getByText("Zebri ends this").first()).toBeVisible();
  });

  // ── How It Works ──────────────────────────────────────
  test("how it works shows 3 steps", async ({ page }) => {
    const section = page.locator("section").filter({ hasText: "From enquiry to encore" });
    await expect(section.getByText("Add your couples")).toBeVisible();
    await expect(section.getByText("Couples handle the details")).toBeVisible();
    await expect(section.getByText("Walk in ready")).toBeVisible();
  });

  // ── Features ──────────────────────────────────────────
  test("features section renders all 5 features", async ({ page }) => {
    const section = page.locator("#features");
    await expect(section.getByText("Every couple, one place.")).toBeVisible();
    await expect(section.getByText("One timeline. Everyone sees it.")).toBeVisible();
    await expect(section.getByText("They fill it in. You never chase.")).toBeVisible();
    await expect(
      section.getByText("Know exactly who to follow up with.")
    ).toBeVisible();
    await expect(
      section.getByText("Your command view for the night.")
    ).toBeVisible();
  });

  test("features mockups show real data", async ({ page }) => {
    const section = page.locator("#features");
    await expect(section.getByText("Sarah & Tom Chen").first()).toBeVisible();
    await expect(
      section.getByText("The Grounds, Alexandria").first()
    ).toBeVisible();
  });

  // ── Rewards ───────────────────────────────────────────
  test("rewards section renders with founding member content", async ({
    page,
  }) => {
    const section = page.locator("#founding");
    await expect(
      section.getByText("More than software. A founding spot.")
    ).toBeVisible();
    await expect(section.getByText("40% off. Forever.")).toBeVisible();
    await expect(section.getByText("Shape the product.")).toBeVisible();
    await expect(section.getByText("Direct access to the team.")).toBeVisible();
  });

  test("rewards CTA links to signup section", async ({ page }) => {
    const claimBtn = page
      .locator("#founding")
      .getByRole("link", { name: /claim your founding spot/i });
    await expect(claimBtn).toBeVisible();
    const href = await claimBtn.getAttribute("href");
    expect(href).toBe("#signup");
  });

  // ── Pricing ───────────────────────────────────────────
  test("pricing section shows 3 plans", async ({ page }) => {
    const section = page.locator("#pricing");
    await expect(section.getByText("Starter").first()).toBeVisible();
    await expect(section.getByText("Pro").first()).toBeVisible();
    await expect(section.getByText("Simple, honest pricing.")).toBeVisible();
  });

  test("pricing annual toggle changes price", async ({ page }) => {
    const section = page.locator("#pricing");
    await expect(section.getByText("$49").first()).toBeVisible();
    await section
      .getByRole("button", { name: /toggle annual billing/i })
      .click();
    await expect(section.getByText("$39").first()).toBeVisible();
  });

  // ── FAQ ───────────────────────────────────────────────
  test("FAQ founding member question exists and expands", async ({ page }) => {
    const faqBtn = page
      .getByRole("button", { name: /is there a limit on founding/i })
      .first();
    await expect(faqBtn).toBeVisible();
    await faqBtn.click();
    await page.waitForTimeout(350);
    await expect(
      page.getByText("Only 20 founding spots are available").first()
    ).toBeVisible();
  });

  test("FAQ accordion toggles on repeat click", async ({ page }) => {
    const faqBtn = page
      .getByRole("button", { name: /is there a limit on founding/i })
      .first();
    // Open
    await faqBtn.click();
    await page.waitForTimeout(350);
    // Sibling div directly after the button
    const collapseDiv = faqBtn.locator("xpath=following-sibling::div[1]");
    const openClass = await collapseDiv.getAttribute("class");
    expect(openClass).toContain("max-h-48");
    // Close
    await faqBtn.click();
    await page.waitForTimeout(350);
    const closedClass = await collapseDiv.getAttribute("class");
    expect(closedClass).toContain("max-h-0");
  });

  // ── Final CTA ─────────────────────────────────────────
  test("final CTA has scarcity headline and form", async ({ page }) => {
    const section = page.locator("#signup");
    await expect(section.getByText("8 founding spots left.")).toBeVisible();
    await expect(
      section.getByRole("button", { name: /secure my founding spot/i })
    ).toBeVisible();
  });

  // ── Accessibility ─────────────────────────────────────
  test("page has single h1", async ({ page }) => {
    const h1s = await page.locator("h1").all();
    expect(h1s).toHaveLength(1);
  });

  test("main nav has accessible label", async ({ page }) => {
    await expect(
      page.getByRole("navigation", { name: "Main navigation" })
    ).toBeVisible();
  });

  test("no console errors on page load", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    await page.reload();
    await page.waitForLoadState("networkidle");
    expect(errors).toHaveLength(0);
  });

  // ── Mobile ────────────────────────────────────────────
  test("no horizontal scroll on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    const scrollWidth = await page.evaluate(
      () => document.documentElement.scrollWidth
    );
    const clientWidth = await page.evaluate(
      () => document.documentElement.clientWidth
    );
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
  });

  test("mobile nav hamburger opens drawer", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(200);
    const hamburger = page.getByRole("button", { name: /open menu/i });
    await expect(hamburger).toBeVisible();
    await hamburger.click();
    await page.waitForTimeout(200);
    await expect(
      page.getByRole("button", { name: /close menu/i })
    ).toBeVisible();
  });

  test("hero CTA button meets 44px touch target on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.waitForTimeout(200);
    const submitBtn = page
      .getByRole("button", { name: /join the waitlist/i })
      .first();
    const box = await submitBtn.boundingBox();
    expect(box?.height).toBeGreaterThanOrEqual(44);
  });
});
