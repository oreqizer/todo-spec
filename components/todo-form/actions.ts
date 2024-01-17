'use server';

import { revalidatePath } from 'next/cache';
import { addTodo } from '@/data/mutations/add-todo';

export async function addTodoAction(form: FormData): Promise<void> {
  await addTodo(form);

  revalidatePath('/');
}
