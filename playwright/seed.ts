import { write } from '@/data/db';

const todos = [
  {
    id: 1,
    text: 'Make coffee ☕️',
    completed: true,
  },
  {
    id: 2,
    text: 'Eat six eggs',
    completed: false,
  },
  {
    id: 3,
    text: 'Light the fireplace',
    completed: true,
  },
  {
    id: 4,
    text: 'Go lift for two hours',
    completed: false,
  },
  {
    id: 5,
    text: 'Play Crash Team Racing',
    completed: false,
  },
];

export async function seed(): Promise<void> {
  await write(todos);
}

export async function seedCompleted(): Promise<void> {
  await write(todos.map((todo) => ({ ...todo, completed: true })));
}
