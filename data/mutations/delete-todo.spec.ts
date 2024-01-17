import { test, describe, beforeEach, expect } from 'vitest';
import { seed } from '@/playwright/seed';
import { read } from '@/data/db';
import { deleteTodo } from './delete-todo';

describe('delete todo', () => {
  beforeEach(async () => {
    await seed();
  });

  test('will reject empty form', async () => {
    const form = new FormData();

    await expect(() => deleteTodo(form)).rejects.toThrowError(
      'Invalid form data',
    );
  });

  test('deletes a todo', async () => {
    const form = new FormData();
    form.set('id', '2');

    await deleteTodo(form);

    const todos = await read();

    expect(todos.length).toBe(4);
    expect(todos.find((t) => t.id === 2)).toBeUndefined();
  });
});
