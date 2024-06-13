'use client';

import { type ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return <div className="mx-6 pt-24 h-screen">{children}</div>;
}
