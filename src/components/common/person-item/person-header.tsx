'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { TailSpin } from 'react-loader-spinner';
import Title from '@/components/ui/title';
import Text from '@/components/ui/text';
import { routes } from '@/config/routes';
import { IoOpenOutline } from 'react-icons/io5';

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
        <TailSpin
          visible={true}
          height="20"
          width="20"
          color="#000000"
          ariaLabel="tail-spin-loading"
          radius="10"
          strokeWidth="2"
        />
        <Text>You chose {name}</Text>
      </span>,
      { duration: 1000 },
    );
  };

  return (
    <div className="flex items-center justify-between">
      <Title as="h4">{name}</Title>
      {/*<Image*/}
      {/*  data-testid="person-redirect-btn"*/}
      {/*  src="/icon-open-btn.svg"*/}
      {/*  alt="icon-open-btn"*/}
      {/*  width={34}*/}
      {/*  height={34}*/}
      {/*  className="transition duration-300 ease-in-out cursor-pointer hover:opacity-60"*/}
      {/*  onClick={handleRedirect}*/}
      {/*/>*/}
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
