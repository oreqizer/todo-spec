import { expect, test } from '@playwright/test';
import { write } from '@/data/db';
import { seed } from '@/playwright/seed';

test.describe('visual', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot();
  });
});

test.describe('visual empty', () => {
  test.beforeEach(async ({ page }) => {
    await write([]);

    await page.goto('/');
  });

  test.afterEach(async () => {
    await seed();
  });

  test('screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot();
  });
});
