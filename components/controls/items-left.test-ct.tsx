import { expect, test } from '@playwright/experimental-ct-react';
import ItemsLeft from './items-left';

test.describe('visual', () => {
  test('screenshot one', async ({ mount }) => {
    const component = await mount(<ItemsLeft itemsLeft={1} />);

    await expect(component).toHaveScreenshot();
  });

  test('screenshot more', async ({ mount }) => {
    const component = await mount(<ItemsLeft itemsLeft={3} />);

    await expect(component).toHaveScreenshot();
  });
});
