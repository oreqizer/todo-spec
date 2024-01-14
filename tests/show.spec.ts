import { test, expect } from '@playwright/test';

test.describe('show todos by completion', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('show all todos', async ({ page }) => {
    test.skip();
  });

  test('show active todos', async ({ page }) => {
    test.skip();
  });

  test('show completed todos', async ({ page }) => {
    test.skip();
  });
});
