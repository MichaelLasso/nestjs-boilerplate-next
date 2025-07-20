'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

import { authStore } from '@/auth/auth-store';
import BaseLayout from '@/components/layouts/base-layout';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Check authentication on client side
    if (!authStore.getState().isAuthenticated) {
      redirect('/login');
    }
  }, []);

  return <BaseLayout>{children}</BaseLayout>;
}