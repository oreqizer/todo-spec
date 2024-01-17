import { test, describe, beforeEach, expect } from 'vitest';
import { seed } from '@/playwright/seed';
import { read } from '@/data/db';
import { addTodo } from './add-todo';

describe('add todo', () => {
  beforeEach(async () => {
    await seed();
  });

  test('will reject empty form', async () => {
    const form = new FormData();

    await expect(() => addTodo(form)).rejects.toThrowError('Invalid form data');
  });

  test('will reject empty text', async () => {
    const form = new FormData();
    form.set('text', '');

    await expect(() => addTodo(form)).rejects.toThrowError('Invalid form data');
  });

  test('will reject short text', async () => {
    const form = new FormData();
    form.set('text', 'a');

    await expect(() => addTodo(form)).rejects.toThrowError('Invalid form data');
  });

  test('will reject long text', async () => {
    const form = new FormData();
    form.set('text', Array(101).fill('a').join(''));

    await expect(() => addTodo(form)).rejects.toThrowError('Invalid form data');
  });

  test('adds an active todo', async () => {
    const form = new FormData();
    form.set('text', 'Do stuff');

    await addTodo(form);

    const todos = await read();

    expect(todos.length).toBe(6);
    expect(todos[5]?.text).toBe('Do stuff');
    expect(todos[5]?.completed).toBe(false);
  });
});
