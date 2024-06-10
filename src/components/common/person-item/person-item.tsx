'use client';

import PersonHeader from '@/components/common/person-item/person-header';
import PersonCharacteristics from '@/components/common/person-item/person-characteristics';
import PersonInformation from '@/components/common/person-item/person-information';
import PersonChanges from '@/components/common/person-item/person-changes';
import type {
  PersonCharacteristicsType,
  PersonInformationType,
  PersonType,
} from '@/types/person';

export default function PersonItem({ person }: { person: PersonType }) {
  const personCharacteristics: PersonCharacteristicsType = {
    height: person.height,
    hair_color: person.hair_color,
    mass: person.mass,
    skin_color: person.skin_color,
  };

  const personInformation: PersonInformationType = {
    birth_year: person.birth_year,
    eye_color: person.eye_color,
    gender: person.gender,
  };

  return (
    <section className="bg-[#f6f5f4] text-black rounded-md shadow-sm p-4 w-[350px] flex flex-col">
      <PersonHeader id={person.id} name={person.name} />
      <PersonCharacteristics data={personCharacteristics} />
      <PersonInformation data={personInformation} />
      <PersonChanges created={person.created} edited={person.edited} />
    </section>
  );
}
