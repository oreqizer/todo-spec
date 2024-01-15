import { expect, test } from '@playwright/test';
import { seed, seedCompleted } from '@/playwright/seed';

test.describe('toggle all todos', () => {
  test.afterEach(async () => {
    await seed();
  });

  test('completes all todos if some are incomplete', async ({ page }) => {
    await seed();
    await page.goto('/');

    await page.getByLabel('toggle all').click();

    await expect(
      page
        .getByTestId('todo-list')
        .getByTestId('todo-item')
        .getByLabel('toggle todo')
        .getByText('👏'),
    ).toHaveCount(5);
  });

  test('resets all todos if all are complete', async ({ page }) => {
    await seedCompleted();
    await page.goto('/');

    await page.getByLabel('toggle all').click();

    await expect(
      page
        .getByTestId('todo-list')
        .getByTestId('todo-item')
        .getByLabel('toggle todo')
        .getByText('👏'),
    ).toHaveCount(0);
  });
});
