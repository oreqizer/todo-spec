'use client';

import * as React from 'react';
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
    <label htmlFor={id} aria-label={label} className="w-full">
      <input {...props} className={inputStyles} id={id} ref={ref} />
    </label>
  );
}

export default React.forwardRef(InputField);
