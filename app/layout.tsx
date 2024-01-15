import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'todos',
  description: 'The fastest TODO app there is! 📜',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <body>
        <main className="h-screen bg-neutral-100 py-4 dark:bg-neutral-800">
          <div className="mx-auto min-w-[320px] max-w-[570px] px-2">
            <h1
              className="mb-4 mt-0 w-full text-center text-8xl font-light text-primary dark:text-primary-light"
              data-testid="heading"
            >
              todos
            </h1>

            {children}

            <footer
              className="my-16 text-xs font-light leading-5 text-neutral-600 dark:text-neutral-400"
              data-testid="footer"
            >
              <p className="text-center">Double-click to edit a todo</p>
              <p className="text-center">
                Created by{' '}
                <a
                  className="font-normal hover:underline"
                  href="https://github.com/oreqizer"
                >
                  oreqizer
                </a>
              </p>
              <p className="text-center">
                Inspired by{' '}
                <a
                  className="font-normal hover:underline"
                  href="http://todomvc.com"
                >
                  TodoMVC
                </a>
              </p>
            </footer>
          </div>
        </main>
      </body>
    </html>
  );
}
