'use client';

import * as React from 'react';
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
}): JSX.Element {
  const [editing, setEditing] = React.useState(false);

  return (
    <li className="group relative flex items-center gap-x-4 border-b border-neutral-200 px-4 font-light last-of-type:border-0 dark:border-neutral-700">
      {!editing && <FormCompleted completed={completed} id={id} />}

      <FormText
        completed={completed}
        id={id}
        isEditing={editing}
        onChangeEditing={setEditing}
        text={text}
      />

      {!editing && <FormDelete id={id} />}
    </li>
  );
}
