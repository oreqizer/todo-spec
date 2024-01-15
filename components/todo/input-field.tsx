import * as React from 'react';
import { clsx } from 'clsx';
import { inputStyles } from '@/lib/primitives';

export default function InputField({
  showDone = false,
  isEditing = false,
  ...props
}: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> & {
  showDone?: boolean;
  isEditing?: boolean;
}): React.JSX.Element {
  return (
    <label aria-label="todo text">
      <input
        {...props}
        className={clsx(
          inputStyles,
          'cursor-default py-3 transition-colors',
          showDone
            ? 'text-neutral-300 line-through dark:text-neutral-600'
            : 'text-neutral-500 dark:text-neutral-400',
          isEditing && 'outline-1 outline-neutral-300 dark:outline-neutral-600',
        )}
      />
    </label>
  );
}
