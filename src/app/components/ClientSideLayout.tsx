'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import MenuBar from './MenuBar';

interface ClientSideLayoutProps {
  children: React.ReactNode;
}

export function ClientSideLayout({ children }: ClientSideLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <Sidebar currentPath={pathname} />
      <div className="flex-1 ml-64">
        <MenuBar />
        <main className="pt-28">
          {children}
        </main>
      </div>
    </div>
  );
}
