'use server';

import api from '@/server/axios-instance';

export async function getFilmsByPersonId(id: number) {
  const res = await api.get(`/films/?characters__contains=${id}`);
  return res.data;
}
