import * as React from 'react';
import { beforeMount } from '@playwright/experimental-ct-react/hooks';
import '@/app/globals.css';

// eslint-disable-next-line @typescript-eslint/require-await -- required for beforeMount
beforeMount(async ({ App }) => {
  return (
    <div className="bg-neutral-100 p-4 dark:bg-neutral-800">
      <App />
    </div>
  );
});
