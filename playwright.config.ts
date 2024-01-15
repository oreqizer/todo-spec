import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: process.env.CI !== undefined,
  /* Retry on CI only */
  retries: process.env.CI !== undefined ? 2 : 0,
  /* Opt out of parallel tests because there's only one database. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    video: 'retain-on-failure',

    launchOptions: {
      // Avoid issues with tests running before the page is interactive
      // 👉 https://github.com/vercel/next.js/issues/52850
      slowMo: 100,
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Setup',
      testMatch: /global\.setup\.ts$/,
      teardown: 'Teardown',
    },
    {
      name: 'Teardown',
      testMatch: /global\.teardown\.ts$/,
    },
    {
      name: 'Chrome',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['Setup'],
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
      dependencies: ['Setup'],
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
