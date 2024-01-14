import { test, expect } from '@playwright/test';

test.describe('delete a todo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('delete a todo', async ({ page }) => {
    test.skip();
  });
});
