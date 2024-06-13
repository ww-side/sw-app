'use client';

import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { IoOpenOutline } from 'react-icons/io5';
import Title from '@/components/ui/title';
import Text from '@/components/ui/text';
import Loader from '@/components/ui/loader';
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
    toast(
      <span className="flex items-center gap-3">
        <Loader />
        <Text>You chose {name}</Text>
      </span>,
      { duration: 1000 },
    );
  };

  return (
    <div className="flex items-center justify-between">
      <Title as="h4">{name}</Title>
      <IoOpenOutline
        data-testid="person-redirect-btn"
        size={34}
        onClick={handleRedirect}
        color="black"
        className="cursor-pointer"
      />
    </div>
  );
}
