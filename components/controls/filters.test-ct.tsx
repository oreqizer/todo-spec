import { expect, test } from '@playwright/experimental-ct-react';
import Filters from './filters';

test.describe('visual', () => {
  test('screenshot', async ({ mount }) => {
    const component = await mount(<Filters />);

    await expect(component).toHaveScreenshot();
  });

  test('screenshot active', async ({ mount }) => {
    const component = await mount(<Filters show="active" />);

    await expect(component).toHaveScreenshot();
  });

  test('screenshot completed', async ({ mount }) => {
    const component = await mount(<Filters show="completed" />);

    await expect(component).toHaveScreenshot();
  });
});
