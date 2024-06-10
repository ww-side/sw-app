'use client';

import Title from '@/components/ui/title';
import { IoOpenOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
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
      <IoOpenOutline
        size={20}
        color="black"
        className="transition duration-300 ease-in-out cursor-pointer"
        onClick={handleRedirect}
      />
    </div>
  );
}
