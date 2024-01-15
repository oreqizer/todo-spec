import type { Config } from 'tailwindcss';

const config: Config = {
  // darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './playwright/*.{js,ts,jsx,tsx,mdx}', // wrapper for Playwright
  ],
  theme: {
    extend: {
      colors: {
        primary: '#af2f2f',
        'primary-light': '#cf4f4f',
      },
    },
  },
  plugins: [],
};

export default config;
