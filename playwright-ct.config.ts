import { defineConfig, devices } from '@playwright/experimental-ct-react';
import viteTSConfigPaths from 'vite-tsconfig-paths';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: 'components',
  testMatch: '*.test-ct.tsx',
  /* Maximum time one test can run for. */
  timeout: 10 * 1000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: process.env.CI !== undefined,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    /* Port to use for Playwright component endpoint. */
    ctPort: 3100,

    // Configure Vite plugins
    ctViteConfig: {
      plugins: [viteTSConfigPaths()],
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    // Dark mode
    {
      name: 'Firefox Dark',
      use: { ...devices['Desktop Firefox'], colorScheme: 'dark' },
    },
  ],
});
