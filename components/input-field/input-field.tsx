'use client';

import * as React from 'react';
import clsx from 'clsx';
import { inputStyles } from '@/lib/primitives/input-todo';

function InputField(
  {
    label,
    ...props
  }: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'id'> & {
    label: string;
  },
  ref: React.ForwardedRef<HTMLInputElement>,
): JSX.Element {
  const id = React.useId();

  return (
    <label htmlFor={id} aria-label={label}>
      <input
        {...props}
        className={clsx(
          inputStyles,
          'pl-14 shadow-[inset_0_-2px_1px_rgba(0,0,0,0.07)] dark:shadow-[inset_0_-2px_1px_rgba(255,255,255,0.1)]',
        )}
        id={id}
        ref={ref}
      />
    </label>
  );
}

export default React.forwardRef(InputField);
