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
    <section className="bg-neutral-50 shadow-lg dark:bg-neutral-900">
      <div className="relative flex w-full items-center gap-x-4 px-4 shadow-[inset_0_-2px_1px_rgba(0,0,0,0.07)] dark:shadow-[inset_0_-2px_1px_rgba(255,255,255,0.1)]">
        <ToggleAll allDone={itemsLeft === 0} />

        <TodoForm />
      </div>

      {todos.length > 0 && (
        <ul>
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

      {itemsLeft !== 0 && <Controls itemsLeft={itemsLeft} show={show} />}
    </section>
  );
}
