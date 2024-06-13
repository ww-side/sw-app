'use server';

import api from '@/server/axios-instance';

export async function getPerson(id: number) {
  const res = await api.get(`/people/${id}`);
  return res.data;
}
