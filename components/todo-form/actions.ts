'use server';

import { revalidatePath } from 'next/cache';
import { queryAll } from '@/data/queries';
import { write } from '@/data/db';

export async function addTodo(form: FormData): Promise<void> {
  const text = form.get('text') as string;
  const id = Math.round(Math.random() * 1_000_000_000); // 😹

  const all = await queryAll();

  await write([...all, { id, text, completed: false }]);

  revalidatePath('/');
}
