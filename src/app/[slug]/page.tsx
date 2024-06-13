import { notFound } from 'next/navigation';
import { type Node } from 'reactflow';
import PersonDetails from '@/components/common/person-details';
import { getPerson } from '@/server/actions/get-person.action';
import { getFilmsByPersonId } from '@/server/actions/get-films-by-person-id.action';
import { getStarshipsNameById } from '@/server/actions/get-starships-name-by-id.action';
import {
  createFilmEdges,
  createFilmNodes,
  createStarshipEdges,
  createStarshipNodes,
} from '@/utils/init-reactflow';
import { type FilmType } from '@/types/film';

export default async function PersonPage({ params }: any) {
  const person = await getPerson(params.slug);
  const films = await getFilmsByPersonId(person.id);
  const allStarships = films.results
    .flatMap((film: FilmType) => film.starships)
    .filter((starshipId: string) => person.starships.includes(starshipId));
  const starships = await getStarshipsNameById(allStarships);

  if (!person && !films && !starships) notFound();

  const personFilmsNodes = createFilmNodes(films.results);
  const starshipsNodes = createStarshipNodes(starships.data);
  const filmsEdges = createFilmEdges(person.name, films.results);
  const starshipEdges = createStarshipEdges(films.results, starships.data);

  const initialNodes: Node[] = [
    {
      id: person.name,
      type: 'person-node',
      data: { label: person.name },
      position: { x: 170 * personFilmsNodes.length, y: 25 },
    },
    ...personFilmsNodes,
    ...starshipsNodes,
  ];

  const initialEdges = [...filmsEdges, ...starshipEdges];

  return (
    <div data-testid="person-page" className="h-[88vh]">
      <PersonDetails initialNodes={initialNodes} initialEdges={initialEdges} />
    </div>
  );
}
