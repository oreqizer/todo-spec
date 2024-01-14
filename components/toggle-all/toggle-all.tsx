'use client';

import * as React from 'react';
import { clsx } from 'clsx';
import { toggleAll } from '@/components/toggle-all/actions';

export default function ToggleAll({
  allDone,
}: {
  allDone: boolean;
}): JSX.Element {
  return (
    <button
      aria-label="toggle all"
      className={clsx(
        'w-8 rotate-90 text-xl',
        allDone
          ? 'text-neutral-700 dark:text-neutral-200'
          : 'text-neutral-500 dark:text-neutral-400',
      )}
      onClick={() => {
        toggleAll(!allDone).catch(() => {
          //
        });
      }}
      type="button"
    >
      ➔
    </button>
  );
}
