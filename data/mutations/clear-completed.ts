import { queryActive } from '@/data/queries';
import { write } from '@/data/db';

export async function clearCompleted() {
  const active = await queryActive();

  await write(active);
}
