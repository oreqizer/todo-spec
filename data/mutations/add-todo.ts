import { z } from 'zod';
import { queryAll } from '@/data/queries';
import { write } from '@/data/db';

const schema = z.object({
  text: z.string().min(2).max(100),
});

export async function addTodo(form: FormData): Promise<void> {
  const result = schema.safeParse(Object.fromEntries(form));
  if (!result.success) {
    throw new Error('Invalid form data');
  }

  const id = Math.round(Math.random() * 1_000_000_000); // 😹

  const all = await queryAll();

  await write([...all, { id, text: result.data.text, completed: false }]);
}
