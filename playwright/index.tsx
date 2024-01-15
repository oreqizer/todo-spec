import * as React from 'react';
import { beforeMount } from '@playwright/experimental-ct-react/hooks';
import '@/app/globals.css';

beforeMount(async ({ App }) => {
  return (
    <div className="p-4">
      <App />
    </div>
  );
});
