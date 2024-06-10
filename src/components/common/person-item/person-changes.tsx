'use client';

import dayjs from 'dayjs';
import Text from '@/components/ui/text';

export default function PersonChanges({
  created,
  edited,
}: {
  created: string;
  edited: string;
}) {
  return (
    <section className="mt-auto pt-4 text-xs">
      <Text>Created: {dayjs(created).format('YYYY-MM-DD')}</Text>
      <Text>Edited: {dayjs(edited).format('YYYY-MM-DD HH:mm:ss')}</Text>
    </section>
  );
}
