'use client';

import * as React from 'react';
import { inputStyles } from '@/lib/primitives';

function InputField(
  {
    label,
    ...props
  }: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'id'> & {
    label: string;
  },
  ref: React.ForwardedRef<HTMLInputElement>,
): React.JSX.Element {
  const id = React.useId();

  return (
    <label aria-label={label} className="w-full" htmlFor={id}>
      <input {...props} className={inputStyles} id={id} ref={ref} />
    </label>
  );
}

export default React.forwardRef(InputField);
