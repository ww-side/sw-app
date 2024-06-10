import type { PersonType } from '@/types/person';

type PersonKeys = keyof PersonType;

export const propertiesParams: PersonKeys[] = [
  'name',
  'height',
  'mass',
  'hair_color',
  'skin_color',
  'eye_color',
  'birth_year',
  'gender',
];
