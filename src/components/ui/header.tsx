'use client';

import Link from 'next/link';
import Title from '@/components/ui/title';
import Text from '@/components/ui/text';

export default function Header() {
  return (
    <header className="fixed top-0 left-5 right-5 z-50 bg-white">
      <section className="flex justify-between items-center bg-black text-white p-6 mt-3 rounded-md">
        <Title as="h4">Welcome to application!👋</Title>
        <Text>
          Test task for{' '}
          <Link
            className="transition duration-300 ease-in-out hover:text-gray-200"
            href="https://www.starnavi.io/"
          >
            Starnavi
          </Link>
        </Text>
      </section>
    </header>
  );
}
