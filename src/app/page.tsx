import { getPeoples } from '@/server/actions/get-peoples.action';

export default async function Home() {
  const res = await getPeoples(1);
  console.log(res.data);

  return <main>Work</main>;
}
