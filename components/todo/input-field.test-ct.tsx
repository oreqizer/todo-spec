import { expect, test } from '@playwright/experimental-ct-react';
import InputField from './input-field';

test.describe('visual', () => {
  test('screenshot', async ({ mount }) => {
    const component = await mount(<InputField value="Do stuff" />);

    await expect(component).toHaveScreenshot();
  });

  test('screenshot done', async ({ mount }) => {
    const component = await mount(<InputField showDone value="Do stuff" />);

    await expect(component).toHaveScreenshot();
  });

  test('screenshot editing', async ({ mount }) => {
    const component = await mount(<InputField isEditing value="Do stuff" />);

    await component.getByLabel('todo text').focus();

    await expect(component).toHaveScreenshot();
  });

  test('screenshot done editing', async ({ mount }) => {
    const component = await mount(
      <InputField isEditing showDone value="Do stuff" />,
    );

    await expect(component).toHaveScreenshot();
  });
});
