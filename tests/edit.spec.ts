import { test, expect } from '@playwright/test';
import {seed} from "@/playwright/seed";

test.describe('edit a todo', () => {
  test.beforeEach(async ({ page }) => {
    await seed();

    await page.goto('/');
  });

  test('todo is read-only by default', async ({ page }) => {
    test.skip();
  });

  test('edits a todo on doubleclick', async ({ page }) => {
    test.skip();
  });

  test('cannot save a short todo', async ({ page }) => {
    test.skip();
  });

  test('deletes an empty todo', async ({ page }) => {
    test.skip();
  });
});
