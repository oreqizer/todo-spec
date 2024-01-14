import { expect, test } from '@playwright/test';
import { seed } from '@/playwright/seed';

test.describe('create a todo', () => {
  test.beforeEach(async ({ page }) => {
    await seed();

    await page.goto('/');
  });

  test('adds a todo at the end of the list', async ({ page }) => {
    const field = await page.getByTestId('todo-form').getByLabel('todo text');

    await field.fill('Do stuff');
    await field.press('Enter');

    await expect(page.getByTestId('todo-item')).toHaveCount(6);
    await expect(
      page
        .getByTestId('todo-list')
        .getByTestId('todo-item-form')
        .last()
        .getByLabel('todo text'),
    ).toHaveValue('Do stuff');
  });

  test('cannot create an empty todo', async ({ page }) => {
    const field = await page.getByTestId('todo-form').getByLabel('todo text');

    await field.fill('');
    await field.press('Enter');

    await expect(
      page.getByTestId('todo-list').getByTestId('todo-item'),
    ).toHaveCount(5);
  });

  test('cannot create a short todo', async ({ page }) => {
    const field = await page.getByTestId('todo-form').getByLabel('todo text');

    await field.fill('a');
    await field.press('Enter');

    await expect(
      page.getByTestId('todo-list').getByTestId('todo-item'),
    ).toHaveCount(5);
  });
});
