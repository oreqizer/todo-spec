import { test, expect } from '@playwright/test';
import { seed } from '@/playwright/seed';
import { write } from '@/data/db';

test.describe('clear complete todos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.afterEach(async () => {
    await seed();
  });

  test('is hidden when there are no active todos', async ({ page }) => {
    await write([]);
    await page.reload();

    const button = page
      .getByTestId('controls')
      .getByRole('button', { name: 'Clear completed' });

    await expect(button).toBeHidden();
  });

  test('clears completed todos', async ({ page }) => {
    const button = page
      .getByTestId('controls')
      .getByRole('button', { name: 'Clear completed' });

    await button.click();

    await expect(
      page.getByTestId('todo-list').getByTestId('todo-item'),
    ).toHaveCount(3);
  });
});
