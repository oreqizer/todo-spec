import { test, expect } from '@playwright/test';

test.describe('create a todo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('create a todo', async ({ page }) => {
    test.skip();
  });

  test('cannot create an empty todo', async ({ page }) => {
    test.skip();
  });
});
