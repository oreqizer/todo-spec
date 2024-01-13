import { queryAllDone, queryFilter } from '@/data/queries';
import TodoForm from '@/components/todo-form';
import ToggleAll from '@/components/toggle-all';
import * as React from 'react';

export default async function Index({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const [todos, allDone] = await Promise.all([
    queryFilter(searchParams.show as string | undefined),
    queryAllDone(),
  ]);

  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 shadow-lg">
      <div className="relative w-full">
        <ToggleAll allDone={allDone} />

        <TodoForm todos={todos} />
      </div>

      <pre>{JSON.stringify(todos, null, 2)}</pre>

      <div>Controls</div>
    </section>
  );
}
