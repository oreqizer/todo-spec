import * as React from 'react';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';
import { clsx } from 'clsx';
import { queryActive } from '@/data/queries';
import { write } from '@/data/db';
import classes from './controls.module.css';

export default function Controls({
  itemsLeft,
  show,
}: {
  itemsLeft: number;
  show?: string;
}): React.JSX.Element {
  async function clearCompleted(): Promise<void> {
    'use server';

    const active = await queryActive();

    await write(active);

    revalidatePath('/');
  }

  return (
    <div
      className={clsx(
        'relative flex w-full items-center justify-between px-4 py-2 font-light text-neutral-500 shadow-[inset_0_2px_1px_rgba(0,0,0,0.07)] dark:text-neutral-400 dark:shadow-[inset_0_2px_1px_rgba(255,255,255,0.1)]',
        classes.footer,
      )}
      data-testid="controls"
    >
      <div className="relative flex-1 text-left" data-testid="items-left">
        {itemsLeft === 1 ? '1 item left' : `${itemsLeft} items left`}
      </div>

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

      <div className="relative flex-1 text-right">
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises -- server action
          action={clearCompleted}
        >
          <button
            className="cursor-pointer font-light hover:underline"
            type="submit"
          >
            Clear completed
          </button>
        </form>
      </div>
    </div>
  );
}
