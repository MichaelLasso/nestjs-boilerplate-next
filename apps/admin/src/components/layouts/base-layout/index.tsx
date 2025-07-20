'use client';

import { SidebarInset, SidebarProvider } from '@repo/ui/components/sidebar';
import { usePathname } from 'next/navigation';

import { AppSidebar } from './app-sidebar';
import Header from './header';

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  
  // Map pathnames to titles
  const getTitle = (path: string) => {
    switch (path) {
      case '/': return 'Overview';
      case '/analytics': return 'Analytics';
      case '/genesis': return 'Genesis';
      case '/explorer': return 'Explorer';
      case '/quantum': return 'Quantum';
      case '/general': return 'General';
      case '/team': return 'Team';
      case '/billing': return 'Billing';
      case '/limits': return 'Limits';
      default: return 'Dashboard';
    }
  };

  const title = getTitle(pathname);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header title={title} />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default BaseLayout;
