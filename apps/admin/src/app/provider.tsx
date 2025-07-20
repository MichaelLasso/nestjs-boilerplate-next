'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
    </Suspense>
  );
};
