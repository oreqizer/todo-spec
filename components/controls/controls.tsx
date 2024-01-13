import * as React from 'react';
import Link from 'next/link';
import { revalidatePath } from 'next/cache';
import clsx from 'clsx';
import { queryActive } from '@/data/queries';
import { write } from '@/data/db';
import classes from './controls.module.css';

export default function Controls({
  itemsLeft,
  show,
}: {
  itemsLeft: number;
  show?: string;
}): JSX.Element {
  async function clearCompleted(): Promise<void> {
    'use server';

    const active = await queryActive();

    await write(active);

    revalidatePath('/');
  }

  return (
    <div
      className={clsx(
        'relative flex justify-between items-center w-full px-4 py-2 text-neutral-500 dark:text-neutral-400 font-light shadow-[inset_0_2px_1px_rgba(0,0,0,0.07)] dark:shadow-[inset_0_2px_1px_rgba(255,255,255,0.1)]',
        classes.footer,
      )}
    >
      <div className="flex-1 relative text-left">
        {itemsLeft === 1 ? '1 item left' : `${itemsLeft} items left`}
      </div>

      <div className="flex-1 relative text-center flex justify-between">
        <Link
          className={clsx(
            'px-2 py-1 border rounded hover:underline',
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
            'px-2 py-1 border rounded hover:underline',
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
            'px-2 py-1 border rounded hover:underline',
            show === 'completed'
              ? 'border-primary dark:border-primary-light'
              : 'border-transparent',
          )}
          href="/?show=completed"
        >
          Completed
        </Link>
      </div>

      <div className="flex-1 relative text-right">
        <form action={clearCompleted}>
          <button
            type="submit"
            className="cursor-pointer font-light hover:underline"
          >
            Clear completed
          </button>
        </form>
      </div>
    </div>
  );
}
