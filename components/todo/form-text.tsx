import * as React from 'react';
import InputField from './input-field';

export default function FormText({
  id,
  text,
  completed,
  isEditing,
  onEdit,
  onDelete,
  onChangeEditing,
}: {
  id: number;
  text: string;
  completed: boolean;
  isEditing: boolean;
  onEdit: (form: FormData) => Promise<void>;
  onDelete: () => void;
  onChangeEditing: (editing: boolean) => void;
}): React.JSX.Element {
  const ref = React.useRef<HTMLFormElement>(null);

  const showDone = !isEditing && completed;

  function handleBlur(ev: React.FocusEvent<HTMLInputElement>): void {
    if (ev.currentTarget.value === '') {
      onDelete();
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
      onDelete();
    }
  }

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises -- server action
      action={async (form) => {
        await onEdit(form);

        onChangeEditing(false);
      }}
      data-testid="todo-item-form"
      ref={ref}
    >
      <input hidden name="id" readOnly value={id} />

      <input hidden type="submit" />

      <InputField
        defaultValue={text}
        isEditing={isEditing}
        maxLength={100}
        minLength={2}
        name="text"
        onBlur={handleBlur}
        onDoubleClick={handleDblClick}
        onKeyPress={handleKeyPress}
        readOnly={!isEditing}
        required
        showDone={showDone}
        size={40}
        type="text"
      />
    </form>
  );
}
