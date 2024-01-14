import 'server-only';
import fs from 'node:fs/promises';

export interface TodoDTO {
  id: number;
  text: string;
  completed: boolean;
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function read(): Promise<TodoDTO[]> {
  await wait(20);

  return JSON.parse(String(await fs.readFile('db.json'))) as TodoDTO[];
}

export async function write(todos: TodoDTO[]): Promise<void> {
  await wait(50);

  return fs.writeFile('db.json', JSON.stringify(todos, null, 2));
}
