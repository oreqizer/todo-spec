import { expect, test } from '@playwright/test';
import { seed } from '@/playwright/seed';

test.describe('create a todo', () => {
  test.beforeEach(async ({ page }) => {
    await seed();

    await page.goto('/');
  });

  test('adds a todo at the end of the list', async ({ page }) => {
    test.skip();
  });

  test('cannot create an empty todo', async ({ page }) => {
    test.skip();
  });

  test('cannot create a short todo', async ({ page }) => {
    test.skip();
  });
});
