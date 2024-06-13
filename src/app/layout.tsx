import { type ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/ui/header';
import MainLayout from '@/components/layouts/main-layout';
import './globals.css';

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
          <Toaster position="top-center" reverseOrder={false} />
        </MainLayout>
      </body>
    </html>
  );
}
