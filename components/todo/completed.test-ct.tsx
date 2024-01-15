import { expect, test } from '@playwright/experimental-ct-react';
import Completed from './completed';

test.describe('visual', () => {
  test('screenshot', async ({ mount }) => {
    const component = await mount(<Completed />);

    await expect(component).toHaveScreenshot();
  });

  test('screenshot completed', async ({ mount }) => {
    const component = await mount(<Completed completed />);

    await expect(component).toHaveScreenshot();
  });

  test('screenshot editing', async ({ mount }) => {
    const component = await mount(<Completed isEditing />);

    await expect(component).toHaveScreenshot();
  });
});
