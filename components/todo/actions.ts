'use server';

import { revalidatePath } from 'next/cache';
import { queryAll } from '@/data/queries';
import { write } from '@/data/db';

export async function editTodo(form: FormData): Promise<void> {
  const id = Number(form.get('id') as string);
  const text = form.get('text') as string;

  const all = await queryAll();

  await write(
    all.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text };
      }
      return todo;
    }),
  );

  revalidatePath('/');
}

export async function toggleTodo(form: FormData): Promise<void> {
  const id = Number(form.get('id') as string);

  const all = await queryAll();

  await write(
    all.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }),
  );

  revalidatePath('/');
}

export async function deleteTodo(form: FormData): Promise<void> {
  const id = Number(form.get('id') as string);

  const all = await queryAll();

  await write(all.filter((todo) => todo.id !== id));

  revalidatePath('/');
}
