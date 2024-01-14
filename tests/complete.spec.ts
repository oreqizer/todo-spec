import { test, expect } from '@playwright/test';
import { seed } from '@/playwright/seed';

test.describe('toggle a todo as complete', () => {
  test.beforeEach(async ({ page }) => {
    await seed();

    await page.goto('/');
  });

  test('completes a todo', async ({ page }) => {
    test.skip();
  });

  test('resets a todo', async ({ page }) => {
    test.skip();
  });
});
