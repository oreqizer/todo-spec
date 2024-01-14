import { test, expect } from '@playwright/test';
import { seed } from '@/playwright/seed';

test.describe('toggle all todos', () => {
  test.beforeEach(async ({ page }) => {
    await seed();

    await page.goto('/');
  });

  test('completes all todos if some are incomplete', async ({ page }) => {
    test.skip();
  });

  test('resets all todos if all are complete', async ({ page }) => {
    test.skip();
  });
});
