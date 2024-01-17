import { test, describe, beforeEach, expect } from 'vitest';
import { seed } from '@/playwright/seed';
import { read } from '@/data/db';
import { toggleTodo } from './toggle-todo';

describe('toggle todo', () => {
  beforeEach(async () => {
    await seed();
  });

  test('will reject empty form', async () => {
    const form = new FormData();

    await expect(() => toggleTodo(form)).rejects.toThrowError(
      'Invalid form data',
    );
  });

  test('toggles a todo', async () => {
    const form = new FormData();
    form.set('id', '2');

    await toggleTodo(form);

    const todos = await read();

    expect(todos[1]?.completed).toBe(true);
  });
});
