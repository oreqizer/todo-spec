// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { describe, expect, afterEach, test, vi } from 'vitest';
import {render, cleanup, fireEvent} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import FormText from './form-text';

describe('form text', () => {
  afterEach(() => {
    cleanup();
  });

  test('is read-only when not editing', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    const onChangeEditing = vi.fn();

    const component = render(
      <FormText
        completed={false}
        id={1}
        isEditing={false}
        onChangeEditing={onChangeEditing}
        onDelete={onDelete}
        onEdit={onEdit}
        text="Do stuff"
      />,
    );

    const input = component.getByRole('textbox', { name: 'todo text' });

    expect(input).toHaveAttribute('readonly');
  });

  test('is editable when editing', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    const onChangeEditing = vi.fn();

    const component = render(
      <FormText
        completed={false}
        id={1}
        isEditing
        onChangeEditing={onChangeEditing}
        onDelete={onDelete}
        onEdit={onEdit}
        text="Do stuff"
      />,
    );

    const input = component.getByRole('textbox', { name: 'todo text' });

    expect(input).not.toHaveAttribute('readonly');
  });

  test('starts editing on double-click', async () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    const onChangeEditing = vi.fn();

    const component = render(
      <FormText
        completed={false}
        id={1}
        isEditing
        onChangeEditing={onChangeEditing}
        onDelete={onDelete}
        onEdit={onEdit}
        text="Do stuff"
      />,
    );

    const input = component.getByRole('textbox', { name: 'todo text' });
    await userEvent.dblClick(input);

    expect(onChangeEditing).toHaveBeenCalledWith(true);
  });

  test('deletes an empty todo on submit', async () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    const onChangeEditing = vi.fn();

    const component = render(
      <FormText
        completed={false}
        id={1}
        isEditing
        onChangeEditing={onChangeEditing}
        onDelete={onDelete}
        onEdit={onEdit}
        text="Do stuff"
      />,
    );

    const input = component.getByRole('textbox', { name: 'todo text' });
    await userEvent.clear(input);
    await userEvent.keyboard('{enter}');

    expect(onDelete).toHaveBeenCalledWith();
  });

  test('deletes an empty todo on blur', async () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    const onChangeEditing = vi.fn();

    const component = render(
      <FormText
        completed={false}
        id={1}
        isEditing
        onChangeEditing={onChangeEditing}
        onDelete={onDelete}
        onEdit={onEdit}
        text="Do stuff"
      />,
    );

    const input = component.getByRole('textbox', { name: 'todo text' });
    await userEvent.clear(input);
    fireEvent.blur(input);

    expect(onDelete).toHaveBeenCalledWith();
  });
});
