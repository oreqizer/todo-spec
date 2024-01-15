import { test, expect } from '@playwright/test';
import { seed } from '@/playwright/seed';

test.describe('clear complete todos', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.afterEach(async () => {
    await seed();
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
