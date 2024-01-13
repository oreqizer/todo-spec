import 'server-only';
import { Todo, read } from '@/data/db';

export async function queryFilter(filter: string = 'all'): Promise<Todo[]> {
  switch (filter) {
    case 'active':
      return queryNotCompleted();
    case 'completed':
      return queryCompleted();
    default:
      return queryAll();
  }
}

export function queryAll(): Promise<Todo[]> {
  return read();
}

export async function queryCompleted(): Promise<Todo[]> {
  const all = await read();

  return all.filter((todo) => todo.completed);
}

export async function queryNotCompleted(): Promise<Todo[]> {
  const all = await read();

  return all.filter((todo) => !todo.completed);
}

export async function queryAllDone(): Promise<boolean> {
  const all = await read();

  return all.every((todo) => todo.completed);
}
