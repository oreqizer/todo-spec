import { expect, test } from '@playwright/experimental-ct-react';
import * as React from 'react';
import FormText from './form-text';

test.describe('visual', () => {
  test('screenshot', async ({ mount }) => {
    const component = await mount(
      <FormText
        completed={false}
        id={1}
        isEditing={false}
        onChangeEditing={() => {
          //
        }}
        onDelete={() => {
          //
        }}
        onEdit={() => Promise.resolve()}
        text="Do stuff"
      />,
    );

    await expect(component).toHaveScreenshot();
  });

  test('screenshot focused', async ({ mount }) => {
    const component = await mount(
      <FormText
        completed={false}
        id={1}
        isEditing={false}
        onChangeEditing={() => {
          //
        }}
        onDelete={() => {
          //
        }}
        onEdit={() => Promise.resolve()}
        text="Do stuff"
      />,
    );

    await component.getByLabel('todo text').dblclick();

    await expect(component).toHaveScreenshot();
  });
});
