'use client';

import * as React from 'react';
import { clsx } from 'clsx';
import type { TodoDTO } from '@/data/db';
import { inputStyles } from '@/lib/primitives/input-todo';
import { editTodo } from '@/components/todo/actions';

export default function Todo({ id, text, completed }: TodoDTO): JSX.Element {
  const ref = React.useRef<HTMLFormElement>(null);
  const [editing, setEditing] = React.useState(false);

  const showDone = !editing && completed;

  function handleBlur() {
    ref.current?.requestSubmit();

    setEditing(false);
  }

  function handleDblClick(ev: React.SyntheticEvent<HTMLInputElement>) {
    setEditing(true);

    ev.currentTarget.setSelectionRange(0, ev.currentTarget.value.length);
  }

  return (
    <li className="relative flex items-center gap-x-4 px-4 font-light group border-b last-of-type:border-0 border-neutral-200 dark:border-neutral-700">
      <div className="w-8">o</div>

      <form
        // eslint-disable-next-line @typescript-eslint/no-misused-promises -- server action
        action={async (form) => {
          await editTodo(form);

          setEditing(false);
        }}
      >
        <input hidden value={id} name="id" readOnly />

        <input hidden type="submit" />

        <label aria-label="todo text">
          <input
            className={clsx(
              inputStyles,
              'py-3 cursor-default transition-colors',
              showDone
                ? 'text-neutral-300 dark:text-neutral-600 line-through'
                : 'text-neutral-500 dark:text-neutral-400',
              editing &&
                'outline-1 outline-neutral-300 dark:outline-neutral-600',
            )}
            readOnly={!editing}
            type="text"
            name="text"
            defaultValue={text}
            onBlur={handleBlur}
            onDoubleClick={handleDblClick}
          />
        </label>
      </form>
    </li>
  );
}
