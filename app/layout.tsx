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
}) {
  return (
    <html lang="en">
      <body>
        <main className="bg-neutral-100 dark:bg-neutral-800 h-screen py-4">
          <div className="min-w-[320px] max-w-[570px] mx-auto px-2">
            <h1 className="w-full text-center text-8xl font-light text-primary dark:text-primary-light mb-4 mt-0">
              todos
            </h1>

            {children}

            <footer className="text-neutral-600 dark:text-neutral-400 my-16 leading-5 text-xs font-light">
              <p className="text-center">Double-click to edit a todo</p>
              <p className="text-center">
                Created by{' '}
                <a
                  href="https://github.com/oreqizer"
                  className="font-normal hover:underline"
                >
                  oreqizer
                </a>
              </p>
              <p className="text-center">
                Inspired by{' '}
                <a
                  href="http://todomvc.com"
                  className="font-normal hover:underline"
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
