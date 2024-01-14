'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { queryAll } from '@/data/queries';
import { write } from '@/data/db';

const schemaEdit = z.object({
  id: z.coerce.number().int(),
  text: z.string().min(2).max(100),
});

export async function editTodo(form: FormData): Promise<void> {
  const result = schemaEdit.safeParse(Object.fromEntries(form));
  if (!result.success) {
    throw new Error('Invalid form data');
  }

  const all = await queryAll();

  await write(
    all.map((todo) => {
      if (todo.id === result.data.id) {
        return { ...todo, text: result.data.text };
      }
      return todo;
    }),
  );

  revalidatePath('/');
}

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

  revalidatePath('/');
}

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

  revalidatePath('/');
}
