import * as React from 'react';
import {
  queryFilter,
  queryItemsCompleted,
  queryItemsLeft,
} from '@/data/queries';
import TodoForm from '@/components/todo-form';
import ToggleAll from '@/components/toggle-all';
import Todo from '@/components/todo';
import Controls from '@/components/controls';

export default async function Index({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}): Promise<React.JSX.Element> {
  const show = searchParams.show as string | undefined;
  const [todos, itemsLeft, itemsCompleted] = await Promise.all([
    queryFilter(show),
    queryItemsLeft(),
    queryItemsCompleted(),
  ]);

  return (
    <section
      className="bg-neutral-50 shadow-lg dark:bg-neutral-900"
      data-testid="content"
    >
      <div
        className="relative flex w-full items-center gap-x-4 px-4 shadow-[inset_0_-2px_1px_rgba(0,0,0,0.07)] dark:shadow-[inset_0_-2px_1px_rgba(255,255,255,0.1)]"
        data-testid="input"
      >
        <ToggleAll allDone={itemsLeft === 0} />

        <TodoForm />
      </div>

      {todos.length > 0 && (
        <ul data-testid="todo-list">
          {todos.map((todo) => (
            <Todo
              completed={todo.completed}
              id={todo.id}
              key={todo.id}
              text={todo.text}
            />
          ))}
        </ul>
      )}

      {itemsLeft !== 0 && (
        <Controls
          itemsCompleted={itemsCompleted}
          itemsLeft={itemsLeft}
          show={show}
        />
      )}
    </section>
  );
}
