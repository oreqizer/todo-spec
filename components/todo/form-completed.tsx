import * as React from 'react';
import { toggleTodoAction } from '@/components/todo/actions';
import Completed from './completed';

export default function FormCompleted({
  id,
  completed,
  isEditing,
}: {
  id: number;
  completed: boolean;
  isEditing: boolean;
}): React.JSX.Element {
  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises -- server action
      action={toggleTodoAction}
    >
      <input hidden name="id" readOnly value={id} />

      <Completed isEditing={isEditing} completed={completed} />
    </form>
  );
}
