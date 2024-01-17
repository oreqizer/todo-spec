import { defineConfig } from 'vitest/config';
import viteTSConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // @ts-expect-error -- peer dependency vite conflict
  plugins: [viteTSConfigPaths()],
  test: {
    fileParallelism: false, // Need to reset DB before each test
    exclude: ['node_modules', 'tests'],
  },
});
