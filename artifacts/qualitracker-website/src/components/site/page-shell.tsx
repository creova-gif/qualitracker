import type { ReactNode } from 'react';
import { SiteNav } from '@/components/site/site-nav';
import { SiteFooter } from '@/components/site/site-footer';

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="qt-site flex min-h-dvh flex-col">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
