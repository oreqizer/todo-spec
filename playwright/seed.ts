import { write } from '@/data/db';

export async function seed() {
  await write([
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
  ]);
}
