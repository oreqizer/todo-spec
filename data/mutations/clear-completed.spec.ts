import { beforeEach, describe, expect, test } from 'vitest';
import { read } from '@/data/db';
import { seed } from '@/playwright/seed';
import { clearCompleted } from './clear-completed';

describe('clear completed', () => {
  beforeEach(async () => {
    await seed();
  });

  test('clears completed todos', async () => {
    await clearCompleted();

    const todos = await read();

    expect(todos.length).toBe(3);
    expect(todos.every((t) => !t.completed)).toBe(true);
  });
});
