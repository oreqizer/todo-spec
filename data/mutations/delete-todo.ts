import { z } from 'zod';
import { queryAll } from '@/data/queries';
import { write } from '@/data/db';

const schemaDelete = z.object({
  id: z.coerce.number().int(),
});

export async function deleteTodo(form: FormData): Promise<void> {
  const result = schemaDelete.safeParse(Object.fromEntries(form));
  if (!result.success) {
    throw new Error('Invalid form data');
  }

  const all = await queryAll();

  await write(all.filter((todo) => todo.id !== result.data.id));
}
