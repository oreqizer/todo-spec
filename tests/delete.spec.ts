import { test, expect } from '@playwright/test';
import { seed } from '@/playwright/seed';

test.describe('delete a todo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.afterEach(async () => {
    await seed();
  });

  test('deletes a todo', async ({ page }) => {
    const items = page.getByTestId('todo-list').getByTestId('todo-item');

    await items.nth(1).getByLabel('delete todo').click();

    await expect(items).toHaveCount(4);
    await expect(items.nth(1).getByLabel('todo text')).toHaveValue(
      'Light the fireplace',
    );
  });
});
