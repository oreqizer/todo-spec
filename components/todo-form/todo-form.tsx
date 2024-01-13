'use client';

import * as React from 'react';
import { addTodo } from '@/components/todo-form/actions';
import InputField from '@/components/input-field';
import { Todo } from '@/data/db';

export default function TodoForm({ todos }: { todos: Todo[] }): JSX.Element {
  const ref = React.useRef<HTMLInputElement>(null);

  return (
    <form
      action={async (form: FormData) => {
        if (ref.current !== null) {
          ref.current.value = '';
        }

        await addTodo(form);
      }}
    >
      <InputField name="text" label="text" ref={ref} />
    </form>
  );
}
