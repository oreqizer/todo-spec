import { defineConfig } from 'vitest/config';
import viteTSConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [viteTSConfigPaths(), react()],
  test: {
    globals: true,
    fileParallelism: false, // Need to reset DB before each test
    exclude: ['node_modules', 'tests'],
  },
});
