import { test, expect } from '@playwright/test';

test.describe('edit a todo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('edit a todo', async ({ page }) => {
    test.skip();
  });

  test('delete an empty todo', async ({ page }) => {
    test.skip();
  });
});
