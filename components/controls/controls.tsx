import * as React from 'react';
import { revalidatePath } from 'next/cache';
import { clsx } from 'clsx';
import { clearCompleted } from '@/data/mutations/clear-completed';
import ItemsLeft from '@/components/controls/items-left';
import Filters from './filters';
import classes from './controls.module.css';

export default function Controls({
  itemsLeft,
  show,
}: {
  itemsLeft: number;
  show?: string;
}): React.JSX.Element {
  async function clearCompletedAction(): Promise<void> {
    'use server';

    await clearCompleted();

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
      <ItemsLeft itemsLeft={itemsLeft} />

      <Filters show={show} />

      <div className="relative flex-1 text-right">
        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises -- server action
          action={clearCompletedAction}
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
