import { expect, test } from '@playwright/test';

test.describe('visual', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('screenshot heading', async ({ page }) => {
    await expect(page.getByTestId('heading')).toHaveScreenshot();
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
