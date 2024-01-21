'use client';

import * as React from 'react';
import { deleteTodoAction, editTodoAction } from '@/components/todo/actions';
import FormText from './form-text';
import FormCompleted from './form-completed';
import FormDelete from './form-delete';

export default function Todo({
  id,
  text,
  completed,
}: {
  id: number;
  text: string;
  completed: boolean;
}): React.JSX.Element {
  const [editing, setEditing] = React.useState(false);

  function handleDelete(): void {
    const form = new FormData();
    form.set('id', String(id));

    deleteTodoAction(form).catch(() => {
      //
    });
  }

  return (
    <li
      className="group relative flex items-center gap-x-4 border-b border-neutral-200 px-4 font-light last-of-type:border-0 dark:border-neutral-700"
      data-testid="todo-item"
    >
      <FormCompleted completed={completed} id={id} isEditing={editing} />

      <FormText
        completed={completed}
        id={id}
        isEditing={editing}
        onChangeEditing={setEditing}
        onDelete={handleDelete}
        onEdit={editTodoAction}
        text={text}
      />

      {!editing && <FormDelete id={id} />}
    </li>
  );
}
