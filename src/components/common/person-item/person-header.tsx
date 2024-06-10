'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Title from '@/components/ui/title';
import { routes } from '@/config/routes';

export default function PersonHeader({
  id,
  name,
}: {
  id: number;
  name: string;
}) {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(routes.personDetails(id.toString()));
  };

  return (
    <div className="flex items-center justify-between">
      <Title as="h4">{name}</Title>
      <Image
        src="/icon-open-btn.svg"
        alt="icon-open-btn"
        width={34}
        height={34}
        className="transition duration-300 ease-in-out cursor-pointer hover:opacity-60"
        onClick={handleRedirect}
      />
    </div>
  );
}
