import * as React from 'react';
import { clsx } from 'clsx';
import { toggleTodo } from '@/components/todo/actions';

export default function FormCompleted({
  id,
  completed,
  isEditing,
}: {
  id: number;
  completed: boolean;
  isEditing: boolean;
}): React.JSX.Element {
  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises -- server action
      action={toggleTodo}
    >
      <input hidden name="id" readOnly value={id} />

      <button
        aria-label="toggle todo"
        className="left-3 top-0 flex h-full w-8 items-center text-center"
        disabled={isEditing}
        type="submit"
      >
        {!isEditing ? (
          <span
            className={clsx(
              'h-7 w-7 rounded-full border text-emerald-300 transition-colors',
              completed
                ? 'border-emerald-300'
                : 'border-neutral-500 dark:border-neutral-400',
            )}
          >
            {completed ? '👏' : null}
          </span>
        ) : null}
      </button>
    </form>
  );
}
