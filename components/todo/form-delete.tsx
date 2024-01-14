import * as React from 'react';
import { deleteTodo } from '@/components/todo/actions';

export default function FormDelete({ id }: { id: number }): JSX.Element {
  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises -- server action
      action={deleteTodo}
    >
      <input hidden name="id" readOnly value={id} />

      <button
        aria-label="delete todo"
        className="absolute right-5 top-0 flex h-full items-center text-center group-hover:block"
        type="submit"
      >
        <span className="text-primary opacity-50 transition-opacity hover:opacity-100 dark:text-primary-light">
          ╳
        </span>
      </button>
    </form>
  );
}
