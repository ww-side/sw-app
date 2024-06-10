'use client';

import Text from '@/components/ui/text';
import type { PersonInformationType } from '@/types/person';

export default function PersonInformation({
  data,
}: {
  data: PersonInformationType;
}) {
  return (
    <>
      <Text className="text-center my-4">Information</Text>
      <section className="flex justify-between">
        <div>
          <Text>
            Eye: <span className="font-light">{data.eye_color}</span>
          </Text>
          <Text>
            Birth year: <span className="font-light">{data.birth_year}</span>
          </Text>
        </div>
        <Text>
          Gender: <span className="font-light">{data.gender}</span>
        </Text>
      </section>
    </>
  );
}
