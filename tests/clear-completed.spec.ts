import { test, expect } from '@playwright/test';

test.describe('clear complete todos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('clears completed todos', async ({ page }) => {
    test.skip();
  });
});
