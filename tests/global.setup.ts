import { test as setup } from '@playwright/test';
import { seed } from '@/playwright/seed';

setup('seed todos', async () => {
  await seed();
});
