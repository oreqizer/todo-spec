import { test, expect } from '@playwright/test';

test.describe('toggle a todo as complete', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('complete a todo', async ({ page }) => {
    test.skip();
  });

  test('incomplete a todo', async ({ page }) => {
    test.skip();
  });
});
