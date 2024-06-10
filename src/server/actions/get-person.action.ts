'use server';

import api from '@/server/axios-instance';

export async function getPerson(id: number) {
  return await api.get(`/people/${id}`);
}
