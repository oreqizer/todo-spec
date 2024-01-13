'use server';

import { revalidatePath } from 'next/cache';
import { queryAll } from '@/data/queries';
import { write } from '@/data/db';

export async function toggleAll(completed: boolean): Promise<void> {
  const all = await queryAll();

  await write(all.map((todo) => ({ ...todo, completed })));

  revalidatePath('/');
}
