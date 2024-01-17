import * as React from 'react';
import { clsx } from 'clsx';

export default function Button({
  allDone = false,
  ...props
}: Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  allDone?: boolean;
}): React.JSX.Element {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        'w-8 rotate-90 text-xl',
        allDone
          ? 'text-neutral-700 dark:text-neutral-200'
          : 'text-neutral-500 dark:text-neutral-400',
      )}
    >
      ➔
    </button>
  );
}
