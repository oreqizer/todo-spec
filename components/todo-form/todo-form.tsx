'use client';

import * as React from 'react';
import { addTodo } from '@/components/todo-form/actions';
import InputField from '@/components/input-field';

export default function TodoForm(): React.JSX.Element {
  const ref = React.useRef<HTMLInputElement>(null);

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises -- server action
      action={async (form: FormData) => {
        if (ref.current !== null) {
          ref.current.value = '';
        }

        await addTodo(form);
      }}
      data-testid="todo-form"
    >
      <InputField
        label="todo text"
        maxLength={100}
        minLength={2}
        name="text"
        placeholder="What needs to be done?"
        ref={ref}
        required
        size={40}
        type="text"
      />
    </form>
  );
}
