import { test, expect } from '@playwright/test';
import { seed } from '@/playwright/seed';

test.describe('delete a todo', () => {
  test.beforeEach(async ({ page }) => {
    await seed();

    await page.goto('/');
  });

  test('deletes a todo', async ({ page }) => {
    test.skip();
  });
});
