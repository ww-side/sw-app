'use client';

import Text from '@/components/ui/text';
import type { PersonCharacteristicsType } from '@/types/person';

export default function PersonCharacteristics({
  data,
}: {
  data: PersonCharacteristicsType;
}) {
  return (
    <>
      <Text className="text-center my-4">Characteristic</Text>
      <section className="flex justify-between">
        <div>
          <Text>
            Height: <span className="font-light">{data.height}</span>
          </Text>
          <Text>
            Mass: <span className="font-light">{data.mass}</span>
          </Text>
        </div>
        <div>
          <Text>
            Hair: <span className="font-light">{data.hair_color}</span>
          </Text>
          <Text>
            Skin: <span className="font-light">{data.skin_color}</span>
          </Text>
        </div>
      </section>
    </>
  );
}
