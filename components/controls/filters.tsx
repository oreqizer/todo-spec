import * as React from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';

export default function Filters({
  show,
}: {
  show?: string;
}): React.JSX.Element {
  return (
    <div
      className="relative flex flex-1 justify-between text-center"
      data-testid="filters"
    >
      <Link
        className={clsx(
          'rounded border px-2 py-1 hover:underline',
          show === undefined
            ? 'border-primary dark:border-primary-light'
            : 'border-transparent',
        )}
        href="/"
      >
        All
      </Link>
      <Link
        className={clsx(
          'rounded border px-2 py-1 hover:underline',
          show === 'active'
            ? 'border-primary dark:border-primary-light'
            : 'border-transparent',
        )}
        href="/?show=active"
      >
        Active
      </Link>
      <Link
        className={clsx(
          'rounded border px-2 py-1 hover:underline',
          show === 'completed'
            ? 'border-primary dark:border-primary-light'
            : 'border-transparent',
        )}
        href="/?show=completed"
      >
        Completed
      </Link>
    </div>
  );
}
