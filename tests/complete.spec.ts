import { test, expect } from '@playwright/test';
import { seed } from '@/playwright/seed';

test.describe('toggle a todo as complete', () => {
  test.beforeEach(async ({ page }) => {
    await seed();

    await page.goto('/');
  });

  test('completes a todo', async ({ page }) => {
    const items = page.getByTestId('todo-list').getByTestId('todo-item');

    await items.nth(1).getByLabel('toggle todo').click();

    await expect(items.nth(1).getByLabel('toggle todo')).toHaveText('👏');
  });

  test('resets a todo', async ({ page }) => {
    const items = page.getByTestId('todo-list').getByTestId('todo-item');

    await items.first().getByLabel('toggle todo').click();

    await expect(items.nth(1).getByLabel('toggle todo')).toHaveText('');
  });
});
