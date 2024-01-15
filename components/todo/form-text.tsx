import { clsx } from 'clsx';
import * as React from 'react';
import { deleteTodo, editTodo } from '@/components/todo/actions';
import { inputStyles } from '@/lib/primitives';

export default function FormText({
  id,
  text,
  completed,
  isEditing,
  onChangeEditing,
}: {
  id: number;
  text: string;
  completed: boolean;
  isEditing: boolean;
  onChangeEditing: (editing: boolean) => void;
}): React.JSX.Element {
  const ref = React.useRef<HTMLFormElement>(null);

  const showDone = !isEditing && completed;

  function handleDelete(): void {
    const form = new FormData();
    form.set('id', String(id));

    deleteTodo(form).catch(() => {
      //
    });
  }

  function handleBlur(ev: React.FocusEvent<HTMLInputElement>): void {
    if (ev.currentTarget.value === '') {
      handleDelete();
      return;
    }

    ref.current?.requestSubmit();

    onChangeEditing(false);
  }

  function handleDblClick(ev: React.SyntheticEvent<HTMLInputElement>): void {
    onChangeEditing(true);

    ev.currentTarget.setSelectionRange(0, ev.currentTarget.value.length);
  }

  function handleKeyPress(ev: React.KeyboardEvent<HTMLInputElement>): void {
    if (ev.currentTarget.value === '' && ev.key === 'Enter') {
      handleDelete();
    }
  }

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises -- server action
      action={async (form) => {
        await editTodo(form);

        onChangeEditing(false);
      }}
      data-testid="todo-item-form"
    >
      <input hidden name="id" readOnly value={id} />

      <input hidden type="submit" />

      <label aria-label="todo text">
        <input
          className={clsx(
            inputStyles,
            'cursor-default py-3 transition-colors',
            showDone
              ? 'text-neutral-300 line-through dark:text-neutral-600'
              : 'text-neutral-500 dark:text-neutral-400',
            isEditing &&
              'outline-1 outline-neutral-300 dark:outline-neutral-600',
          )}
          defaultValue={text}
          maxLength={100}
          minLength={2}
          name="text"
          onBlur={handleBlur}
          onDoubleClick={handleDblClick}
          onKeyPress={handleKeyPress}
          readOnly={!isEditing}
          required
          size={40}
          type="text"
        />
      </label>
    </form>
  );
}
