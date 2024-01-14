import { clsx } from 'clsx';
import * as React from 'react';
import { editTodo } from '@/components/todo/actions';
import { inputStyles } from '@/lib/primitives/input-todo';

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
}): JSX.Element {
  const ref = React.useRef<HTMLFormElement>(null);

  const showDone = !isEditing && completed;

  function handleBlur(): void {
    ref.current?.requestSubmit();

    onChangeEditing(false);
  }

  function handleDblClick(ev: React.SyntheticEvent<HTMLInputElement>): void {
    onChangeEditing(true);

    ev.currentTarget.setSelectionRange(0, ev.currentTarget.value.length);
  }

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises -- server action
      action={async (form) => {
        await editTodo(form);

        onChangeEditing(false);
      }}
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
          name="text"
          onBlur={handleBlur}
          onDoubleClick={handleDblClick}
          readOnly={!isEditing}
          type="text"
        />
      </label>
    </form>
  );
}
