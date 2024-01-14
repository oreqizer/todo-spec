import { test, expect } from '@playwright/test';

test.describe('show todos by completion', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('displays all todos by default', async ({ page }) => {
    await expect(
      page.getByTestId('todo-list').getByTestId('todo-item'),
    ).toHaveCount(5);
  });

  test('shows all todos', async ({ page }) => {
    await page
      .getByTestId('filters')
      .getByRole('link', { name: 'All' })
      .click();

    await expect(
      page.getByTestId('todo-list').getByTestId('todo-item'),
    ).toHaveCount(5);
  });

  test('shows active todos', async ({ page }) => {
    await page
      .getByTestId('filters')
      .getByRole('link', { name: 'Active' })
      .click();

    await expect(
      page.getByTestId('todo-list').getByTestId('todo-item'),
    ).toHaveCount(3);
  });

  test('shows completed todos', async ({ page }) => {
    await page
      .getByTestId('filters')
      .getByRole('link', { name: 'Completed' })
      .click();

    await expect(
      page.getByTestId('todo-list').getByTestId('todo-item'),
    ).toHaveCount(2);
  });
});
