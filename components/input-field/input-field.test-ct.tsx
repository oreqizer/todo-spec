import { expect, test } from '@playwright/experimental-ct-react';
import InputField from './input-field';

test.describe('visual', () => {
  test('screenshot', async ({ mount }) => {
    const component = await mount(
      <InputField value="Do stuff" label="label" />,
    );

    await expect(component).toHaveScreenshot();
  });

  test('screenshot focused', async ({ mount }) => {
    const component = await mount(
      <InputField value="Do stuff" label="label" />,
    );

    await component.getByLabel('label').focus();

    await expect(component).toHaveScreenshot();
  });

  test('screenshot placeholder', async ({ mount }) => {
    const component = await mount(
      <InputField placeholder="What to do?" label="label" />,
    );

    await expect(component).toHaveScreenshot();
  });
});
