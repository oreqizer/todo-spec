'use server';

import { revalidatePath } from 'next/cache';
import { editTodo } from '@/data/mutations/edit-todo';
import { toggleTodo } from '@/data/mutations/toggle-todo';
import { deleteTodo } from '@/data/mutations/delete-todo';

export async function editTodoAction(form: FormData): Promise<void> {
  await editTodo(form);

  revalidatePath('/');
}

export async function toggleTodoAction(form: FormData): Promise<void> {
  toggleTodo(form);

  revalidatePath('/');
}

export async function deleteTodoAction(form: FormData): Promise<void> {
  await deleteTodo(form);

  revalidatePath('/');
}
