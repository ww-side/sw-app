import type { FilmType } from '@/types/film';
import { StarshipType } from '@/types/starship';

export function createFilmNodes(films: FilmType[]) {
  return films.map((film, index) => ({
    id: film.title,
    type: 'film-node',
    data: { id: film.id, label: film.title, starships: film.starships },
    position: { x: 250 + index * 300, y: 185 },
  }));
}

export function createStarshipNodes(starships: StarshipType[]) {
  return starships.map((starship, index) => ({
    id: starship.name,
    type: 'starship-node',
    data: { id: starship.id, label: starship.name },
    position: { x: 10 + index * 250, y: 415 },
  }));
}

export function createFilmEdges(personName: string, films: FilmType[]) {
  return films.map(film => ({
    id: `${personName}-${film.title}`,
    source: personName,
    target: film.title,
  }));
}

export function createStarshipEdges(
  films: FilmType[],
  starships: StarshipType[],
) {
  return films.flatMap(film =>
    film.starships.reduce(
      (edges, starshipId) => {
        const starship = starships.find(ship => ship.id === starshipId);
        if (starship) {
          edges.push({
            id: `${film.title}-${starship.name}`,
            source: film.title,
            target: starship.name,
          });
        }
        return edges;
      },
      [] as { id: string; source: string; target: string }[],
    ),
  );
}
