import Title from '@/components/ui/title';
import PeopleList from '@/components/common/people-list/people-list';
import { getPeople } from '@/server/actions/get-people.action';

export default async function Home() {
  const res = await getPeople(1);

  return (
    <main>
      <Title as="h3">Characters from Star Wars🌠</Title>
      <PeopleList data={res ? res : null} />
    </main>
  );
}
