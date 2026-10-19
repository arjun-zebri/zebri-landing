import { defineConfig, devices } from '@playwright/test';

/**
 * E2E for the marketing site, on desktop and the two phones the app is
 * tested on. Starts the dev server on 3001 unless one is already running.
 */
const PORT = Number(process.env.E2E_PORT ?? 3001);

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  retries: 0,
  reporter: [['list']],
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
  },
  webServer: {
    command: `npx next dev -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: true,
    timeout: 120_000,
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'pixel-5', use: { ...devices['Pixel 5'] } },
    { name: 'iphone-12', use: { ...devices['iPhone 12'], browserName: 'chromium' } },
  ],
});
