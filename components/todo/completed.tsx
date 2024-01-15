import * as React from 'react';
import { clsx } from 'clsx';

export default function Completed({
  completed = false,
  isEditing = false,
}: {
  completed?: boolean;
  isEditing?: boolean;
}): React.JSX.Element {
  return (
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
  );
}
