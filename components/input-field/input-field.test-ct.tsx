import { expect, test } from '@playwright/experimental-ct-react';
import InputField from './input-field';

test.describe('visual', () => {
  test('screenshot', async ({ mount }) => {
    const component = await mount(
      <InputField label="label" value="Do stuff" />,
    );

    await expect(component).toHaveScreenshot();
  });

  test('screenshot focused', async ({ mount }) => {
    const component = await mount(
      <InputField label="label" value="Do stuff" />,
    );

    await component.getByLabel('label').focus();

    await expect(component).toHaveScreenshot();
  });

  test('screenshot placeholder', async ({ mount }) => {
    const component = await mount(
      <InputField label="label" placeholder="What to do?" />,
    );

    await expect(component).toHaveScreenshot();
  });
});
