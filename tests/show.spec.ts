import { test, expect } from '@playwright/test';

test.describe('show todos by completion', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('shows all todos', async ({ page }) => {
    test.skip();
  });

  test('shows active todos', async ({ page }) => {
    test.skip();
  });

  test('shows completed todos', async ({ page }) => {
    test.skip();
  });
});
