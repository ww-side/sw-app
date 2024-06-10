import { notFound } from 'next/navigation';
import { type Node } from 'reactflow';
import PersonDetails from '@/components/common/person-details';
import { getPerson } from '@/server/actions/get-person.action';
import { getFilmsByPersonId } from '@/server/actions/get-films-by-person-id.action';
import { type FilmType } from '@/types/film';
import { getStarshipsNameById } from '@/server/actions/get-starships-name-by-id.action';

export default async function PersonPage({ params }: any) {
  const person = await getPerson(params.slug);
  const films = await getFilmsByPersonId(person.data.id);
  const allStarships = films.results
    .flatMap((film: FilmType) => film.starships)
    .flat();
  const starships = await getStarshipsNameById(allStarships);

  if (!person && !films && !starships) notFound();

  const personFilms = films.results.map((film: FilmType, index: number) => ({
    id: film.title,
    type: 'film-node',
    data: { id: film.id, label: film.title, starships: film.starships },
    position: { x: 250 + index * 300, y: 185 },
  }));

  const starshipsNodes = starships.data.map((starship, index) => ({
    id: starship.name,
    type: 'starship-node',
    data: { id: starship.id, label: starship.name },
    position: { x: -1000 + index * 250, y: 415 },
  }));

  const filmsEdges = films.results.map((film: FilmType) => ({
    id: `${person.data.name}-${film.title}`,
    source: person.data.name,
    target: film.title,
  }));

  const starshipEdges = films.results.flatMap((film: FilmType) =>
    film.starships.map((starshipId: number) => {
      const starship = starships.data.find(ship => ship.id === starshipId);
      return {
        id: `${film.title}-${starship?.name}`,
        source: film.title,
        target: starship?.name,
      };
    }),
  );

  const initialNodes: Node[] = [
    {
      id: person.data.name,
      type: 'person-node',
      data: { label: person.data.name },
      position: { x: 170 * personFilms.length, y: 25 },
    },
    ...personFilms,
    ...starshipsNodes,
  ];

  const initialEdges = [...filmsEdges, ...starshipEdges];

  return (
    <PersonDetails initialNodes={initialNodes} initialEdges={initialEdges} />
  );
}
