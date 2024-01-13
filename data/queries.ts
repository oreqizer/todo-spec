import 'server-only';
import { Todo, read } from '@/data/db';

export async function queryFilter(filter: string = 'all'): Promise<Todo[]> {
  switch (filter) {
    case 'active':
      return queryActive();
    case 'completed':
      return queryCompleted();
    default:
      return queryAll();
  }
}

export function queryAll(): Promise<Todo[]> {
  return read();
}

export async function queryActive(): Promise<Todo[]> {
  const all = await read();

  return all.filter((todo) => !todo.completed);
}

export async function queryCompleted(): Promise<Todo[]> {
  const all = await read();

  return all.filter((todo) => todo.completed);
}

export async function queryItemsLeft(): Promise<number> {
  const todos = await queryActive();

  return todos.length;
}
