import '@/styles/index.css';
import type { Metadata } from 'next';

import { AppProvider } from '@/app/provider';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'NestJS Boilerplate Admin Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}