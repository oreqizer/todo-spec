import 'server-only';
import { TodoDTO, read } from '@/data/db';

export async function queryFilter(filter: string = 'all'): Promise<TodoDTO[]> {
  switch (filter) {
    case 'active':
      return queryActive();
    case 'completed':
      return queryCompleted();
    default:
      return queryAll();
  }
}

export function queryAll(): Promise<TodoDTO[]> {
  return read();
}

export async function queryActive(): Promise<TodoDTO[]> {
  const all = await read();

  return all.filter((todo) => !todo.completed);
}

export async function queryCompleted(): Promise<TodoDTO[]> {
  const all = await read();

  return all.filter((todo) => todo.completed);
}

export async function queryItemsLeft(): Promise<number> {
  const todos = await queryActive();

  return todos.length;
}
