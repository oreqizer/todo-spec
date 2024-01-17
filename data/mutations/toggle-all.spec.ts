import { beforeEach, describe, expect, test } from 'vitest';
import { read } from '@/data/db';
import { seed } from '@/playwright/seed';
import { toggleAll } from './toggle-all';

describe('toggle all', () => {
  beforeEach(async () => {
    await seed();
  });

  test('completes all todos', async () => {
    await toggleAll(true);

    const todos = await read();

    expect(todos.every((t) => t.completed)).toBe(true);
  });

  test('activates all todos', async () => {
    await toggleAll(false);

    const todos = await read();

    expect(todos.every((t) => !t.completed)).toBe(true);
  });
});
