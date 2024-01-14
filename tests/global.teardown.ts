import { test as teardown } from '@playwright/test';
import { write } from '@/data/db';

teardown('teardown', async () => {
  await write([]);
});
