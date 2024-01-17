'use server';

import { revalidatePath } from 'next/cache';
import { toggleAll } from '@/data/mutations/toggle-all';

export async function toggleAllAction(completed: boolean): Promise<void> {
  await toggleAll(completed);

  revalidatePath('/');
}
