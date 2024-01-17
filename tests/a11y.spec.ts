import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page is accessible', async ({ page }) => {
    // @ts-expect-error -- AxeBuilder type is not compatible with playwright
    const res = await new AxeBuilder({ page }).analyze();

    expect(res.violations).toEqual([]);
  });
});
