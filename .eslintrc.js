const path = require('node:path');

const project = path.join(process.cwd(), 'tsconfig.json');

module.exports = {
  extends: [
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: {
    project,
  },
  settings: {
    'import/resolver': { typescript: { project } },
  },
  globals: {
    JSX: true,
  },
  rules: {},
  overrides: [
    {
      // TypeScript
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': 'off', // naming is hard
        '@typescript-eslint/non-nullable-type-assertion-style': 'off', // using as is more explicit
        '@typescript-eslint/strict-boolean-expressions': 'error', // explicit is good
        // Imports
        'import/no-default-export': 'off', // React components
      },
    },
    {
      // Playwright
      files: ['tests/**/*.spec.ts', 'tests/**/*.spec.tsx', '**/*.test.tsx'],
      extends: [require.resolve('@vercel/style-guide/eslint/playwright-test')],
    },
  ],
};
