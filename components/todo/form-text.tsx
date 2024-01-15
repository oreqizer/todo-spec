import * as React from 'react';
import { deleteTodo, editTodo } from '@/components/todo/actions';
import InputField from './input-field';

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

      <InputField
        showDone={showDone}
        isEditing={isEditing}
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
    </form>
  );
}
