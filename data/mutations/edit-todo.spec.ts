import { test, describe, beforeEach, expect } from 'vitest';
import { seed } from '@/playwright/seed';
import { read } from '@/data/db';
import { editTodo } from './edit-todo';

describe('edit todo', () => {
  beforeEach(async () => {
    await seed();
  });

  test('will reject empty form', async () => {
    const form = new FormData();

    await expect(() => editTodo(form)).rejects.toThrowError('Invalid form data');
  });

  test('will reject form without ID', async () => {
    const form = new FormData();
    form.set('text', 'Do stuff');

    await expect(() => editTodo(form)).rejects.toThrowError('Invalid form data');
  });

  test('will reject empty text', async () => {
    const form = new FormData();
    form.set('id', '2');
    form.set('text', '');

    await expect(() => editTodo(form)).rejects.toThrowError('Invalid form data');
  });

  test('will reject short text', async () => {
    const form = new FormData();
    form.set('id', '2');
    form.set('text', 'a');

    await expect(() => editTodo(form)).rejects.toThrowError('Invalid form data');
  });

  test('will reject long text', async () => {
    const form = new FormData();
    form.set('id', '2');
    form.set('text', Array(101).fill('a').join(''));

    await expect(() => editTodo(form)).rejects.toThrowError('Invalid form data');
  });

  test('edits a todo', async () => {
    const form = new FormData();
    form.set('id', '2');
    form.set('text', 'Do stuff');

    await editTodo(form);

    const todos = await read();

    expect(todos.length).toBe(5);
    expect(todos[1]?.text).toBe('Do stuff');
    expect(todos[1]?.completed).toBe(false);
  });
});
