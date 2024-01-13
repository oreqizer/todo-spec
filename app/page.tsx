import * as React from 'react';
import { queryFilter, queryItemsLeft } from '@/data/queries';
import TodoForm from '@/components/todo-form';
import ToggleAll from '@/components/toggle-all';
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
      <div className="relative w-full">
        <ToggleAll allDone={itemsLeft === 0} />

        <TodoForm todos={todos} />
      </div>

      <pre>{JSON.stringify(todos, null, 2)}</pre>

      <Controls show={show} itemsLeft={itemsLeft} />
    </section>
  );
}
