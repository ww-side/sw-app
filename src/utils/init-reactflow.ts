import type { FilmType } from '@/types/film';

export function createFilmNodes(films: FilmType[]) {
  return films.map((film, index) => ({
    id: film.title,
    type: 'film-node',
    data: { id: film.id, label: film.title, starships: film.starships },
    position: { x: 250 + index * 300, y: 185 },
  }));
}

export function createStarshipNodes(starships: any[]) {
  return starships.map((starship, index) => ({
    id: starship.name,
    type: 'starship-node',
    data: { id: starship.id, label: starship.name },
    position: { x: -1000 + index * 250, y: 415 },
  }));
}

export function createFilmEdges(personName: string, films: FilmType[]) {
  return films.map(film => ({
    id: `${personName}-${film.title}`,
    source: personName,
    target: film.title,
  }));
}

export function createStarshipEdges(films: FilmType[], starships: any[]) {
  return films.flatMap(film =>
    film.starships.map(starshipId => {
      const starship = starships.find(ship => ship.id === starshipId);
      return {
        id: `${film.title}-${starship?.name}`,
        source: film.title,
        target: starship?.name,
      };
    }),
  );
}
