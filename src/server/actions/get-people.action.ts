'use server';

import api from '@/server/axios-instance';

export async function getPeople(pageNumber: number) {
  const res = await api.get(`/people/?page=${pageNumber}`);
  return res.data;
}
