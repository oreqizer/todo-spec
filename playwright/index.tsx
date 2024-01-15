import * as React from 'react';
import { beforeMount } from '@playwright/experimental-ct-react/hooks';
import '@/app/globals.css';

beforeMount(async ({ App, hooksConfig }) => {
  return (
    <div className="p-4 dark:bg-neutral-800 bg-neutral-100">
      <App />
    </div>
  );
});
