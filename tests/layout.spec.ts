import { expect, test } from '@playwright/test';
import { write } from '@/data/db';
import { seed } from '@/playwright/seed';

test.describe('visual', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot();
  });

  test('screenshot heading', async ({ page }) => {
    await expect(page.getByTestId('heading')).toHaveScreenshot();
  });

  test('screenshot content', async ({ page }) => {
    await expect(page.getByTestId('content')).toHaveScreenshot();
  });

  test('screenshot input', async ({ page }) => {
    await expect(page.getByTestId('input')).toHaveScreenshot();
  });

  test('screenshot todo list', async ({ page }) => {
    await expect(page.getByTestId('todo-list')).toHaveScreenshot();
  });

  test('screenshot controls', async ({ page }) => {
    await expect(page.getByTestId('controls')).toHaveScreenshot();
  });

  test('screenshot footer', async ({ page }) => {
    await expect(page.getByTestId('footer')).toHaveScreenshot();
  });
});

test.describe('visual empty', () => {
  test.beforeEach(async ({ page }) => {
    await write([]);

    await page.goto('/');
  });

  test.afterEach(async () => {
    await seed();
  });

  test('screenshot', async ({ page }) => {
    await expect(page.getByTestId('content')).toHaveScreenshot();
  });
});
