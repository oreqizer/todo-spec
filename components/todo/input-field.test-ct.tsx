import { expect, test } from '@playwright/experimental-ct-react';
import InputField from './input-field';

test.describe('visual', () => {
  test('screenshot', async ({ mount }) => {
    const component = await mount(<InputField value="Do stuff" />);

    await expect(component).toHaveScreenshot();
  });

  test('screenshot done', async ({ mount }) => {
    const component = await mount(<InputField value="Do stuff" showDone />);

    await expect(component).toHaveScreenshot();
  });

  test('screenshot editing', async ({ mount }) => {
    const component = await mount(<InputField value="Do stuff" isEditing />);

    await component.getByLabel('todo text').focus();

    await expect(component).toHaveScreenshot();
  });

  test('screenshot done editing', async ({ mount }) => {
    const component = await mount(
      <InputField value="Do stuff" showDone isEditing />,
    );

    await expect(component).toHaveScreenshot();
  });
});
