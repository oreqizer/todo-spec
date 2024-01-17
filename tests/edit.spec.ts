import { expect, test } from '@playwright/test';
import { seed } from '@/playwright/seed';

test.describe('edit a todo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test.afterEach(async () => {
    await seed();
  });

  test('todo is read-only by default', async ({ page }) => {
    const field = page
      .getByTestId('todo-list')
      .getByTestId('todo-item-form')
      .nth(1)
      .getByLabel('text');

    await expect(field).not.toBeEditable();
  });

  test('edits a todo on doubleclick', async ({ page }) => {
    const field = page
      .getByTestId('todo-list')
      .getByTestId('todo-item-form')
      .nth(1)
      .getByLabel('text');

    await field.dblclick();
    await field.fill('Do stuff');
    await field.press('Enter');

    await expect(field).not.toBeEditable();

    await page.reload();

    await expect(field).toHaveValue('Do stuff');
  });

  test('cannot save a short todo', async ({ page }) => {
    const field = page
      .getByTestId('todo-list')
      .getByTestId('todo-item-form')
      .nth(1)
      .getByLabel('text');

    await field.dblclick();
    await field.fill('a');
    await field.press('Enter');

    await page.reload();

    await expect(field).toHaveValue('Eat six eggs');
  });

  test('deletes an empty todo', async ({ page }) => {
    const field = page
      .getByTestId('todo-list')
      .getByTestId('todo-item-form')
      .nth(1)
      .getByLabel('text');

    await field.dblclick();
    await field.fill('');
    await field.press('Enter');

    await expect(page.getByTestId('todo-item')).toHaveCount(4);
    await expect(
      page.getByTestId('todo-item').getByText('Eat six eggs'),
    ).toBeHidden();
  });
});
