import { z } from 'zod';
import { queryAll } from '@/data/queries';
import { write } from '@/data/db';

const schemaToggle = z.object({
  id: z.coerce.number().int(),
});

export async function toggleTodo(form: FormData): Promise<void> {
  const result = schemaToggle.safeParse(Object.fromEntries(form));
  if (!result.success) {
    throw new Error('Invalid form data');
  }

  const all = await queryAll();

  await write(
    all.map((todo) => {
      if (todo.id === result.data.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }),
  );
}
