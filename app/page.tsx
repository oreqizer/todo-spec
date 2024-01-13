import * as React from 'react';
import { queryFilter, queryItemsLeft } from '@/data/queries';
import TodoForm from '@/components/todo-form';
import ToggleAll from '@/components/toggle-all';
import Todo from '@/components/todo';
import Controls from '@/components/controls';

export default async function Index({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}): Promise<JSX.Element> {
  const show = searchParams.show as string | undefined;
  const [todos, itemsLeft] = await Promise.all([
    queryFilter(show),
    queryItemsLeft(),
  ]);

  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 shadow-lg">
      <div className="relative flex items-center gap-x-4 px-4 w-full shadow-[inset_0_-2px_1px_rgba(0,0,0,0.07)] dark:shadow-[inset_0_-2px_1px_rgba(255,255,255,0.1)]">
        <ToggleAll allDone={itemsLeft === 0} />

        <TodoForm />
      </div>

      {todos.length > 0 && (
        <ul>
          {todos.map((todo) => (
            <Todo
              text={todo.text}
              id={todo.id}
              completed={todo.completed}
              key={todo.id}
            />
          ))}
        </ul>
      )}

      {itemsLeft !== 0 && <Controls itemsLeft={itemsLeft} />}
    </section>
  );
}
