import { test, expect } from '@playwright/test';
import { seed } from '@/playwright/seed';

test.describe('clear complete todos', () => {
  test.beforeEach(async ({ page }) => {
    await seed();

    await page.goto('/');
  });

  test('clears completed todos', async ({ page }) => {
    test.skip();
  });
});
