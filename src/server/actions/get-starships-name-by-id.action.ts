'use server';

import api from '@/server/axios-instance';
import type { StarshipType } from '@/types/starship';

export async function getStarshipsNameById(ids: string[]) {
  const idsString = ids.join(', ');
  const baseUrl = `/starships/?id__in=${idsString}`;

  let allStarships: StarshipType[] = [];
  let nextUrl = baseUrl;

  // I haven't found a solution on how to fetch data without pagination
  while (nextUrl) {
    const response = await api.get(nextUrl);
    const data = response.data;

    allStarships = [...allStarships, ...data.results];
    nextUrl = data.next
      ? data.next.replace('https://sw-api.starnavi.io', '')
      : null;
  }

  return { data: allStarships };
}
