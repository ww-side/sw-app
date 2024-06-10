import { type ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import cx from 'classnames';
import Header from '@/components/ui/header';
import './globals.css';
import MainLayout from '@/components/layouts/main-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SW API - Starnavi',
  description: 'Test task for Starnavi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>
          <Header />
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
