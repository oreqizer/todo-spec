import { test, expect } from '@playwright/test';
import { seed } from '@/playwright/seed';

test.describe('toggle a todo as complete', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.afterEach(async () => {
    await seed();
  });

  test('completes a todo', async ({ page }) => {
    const item = page
      .getByTestId('todo-list')
      .getByTestId('todo-item')
      .nth(1)
      .getByLabel('toggle todo');

    await item.click();

    await expect(item).toHaveText('👏');
  });

  test('resets a todo', async ({ page }) => {
    const item = page
      .getByTestId('todo-list')
      .getByTestId('todo-item')
      .nth(0)
      .getByLabel('toggle todo');

    await item.click();

    await expect(item).toHaveText('');
  });
});
