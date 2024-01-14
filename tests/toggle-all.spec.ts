import { test, expect } from '@playwright/test';

test.describe('toggle all todos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('completes all todos if some are incomplete', async ({ page }) => {
    test.skip();
  });

  test('resets all todos if all are complete', async ({ page }) => {
    test.skip();
  });
});
