import { expect, test } from '@playwright/experimental-ct-react';
import Button from './button';

test.describe('visual', () => {
  test('screenshot', async ({ mount }) => {
    const component = await mount(<Button />);

    await expect(component).toHaveScreenshot();
  });

  test('screenshot all done', async ({ mount }) => {
    const component = await mount(<Button allDone />);

    await expect(component).toHaveScreenshot();
  });
});
