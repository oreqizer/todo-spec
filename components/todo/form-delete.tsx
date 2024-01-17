import * as React from 'react';
import { deleteTodoAction } from '@/components/todo/actions';

export default function FormDelete({ id }: { id: number }): React.JSX.Element {
  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises -- server action
      action={deleteTodoAction}
    >
      <input hidden name="id" readOnly value={id} />

      <button
        aria-label="delete todo"
        className="absolute right-5 top-0 flex h-full items-center text-center group-hover:block"
        type="submit"
      >
        <span className="text-red-600 transition-colors hover:text-red-500 hover:opacity-100 dark:text-red-500 hover:dark:text-red-400">
          ╳
        </span>
      </button>
    </form>
  );
}
