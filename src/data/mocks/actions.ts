export const mockGetPeopleData = {
  count: 2,
  next: 'https://sw-api.starnavi.io/people/?page=2',
  previous: null,
  results: [
    {
      id: 10,
      name: 'Obi-Wan Kenobi',
      height: '182',
      mass: '77',
      hair_color: 'auburn, white',
      skin_color: 'fair',
      eye_color: 'blue-gray',
      birth_year: '57BBY',
      gender: 'male',
      homeworld: 20,
      films: [1, 2, 3, 4, 5, 6],
      species: [1],
      vehicles: [38],
      starships: [48, 59, 64, 65, 74],
      created: '2014-12-10T16:16:29.192000Z',
      edited: '2014-12-20T21:17:50.325000Z',
      url: 'https://sw-api.starnavi.io/people/10/',
    },
    {
      id: 12,
      name: 'Wilhuff Tarkin',
      height: '180',
      mass: 'unknown',
      hair_color: 'auburn, grey',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '64BBY',
      gender: 'male',
      homeworld: 21,
      films: [1, 6],
      species: [1],
      vehicles: [],
      starships: [],
      created: '2014-12-10T16:26:56.138000Z',
      edited: '2014-12-20T21:17:50.330000Z',
      url: 'https://sw-api.starnavi.io/people/12/',
    },
  ],
};

export const mockGetPersonData = {
  id: 10,
  name: 'Obi-Wan Kenobi',
  height: '182',
  mass: '77',
  hair_color: 'auburn, white',
  skin_color: 'fair',
  eye_color: 'blue-gray',
  birth_year: '57BBY',
  gender: 'male',
  homeworld: 20,
  films: [1, 2, 3, 4, 5, 6],
  species: [1],
  vehicles: [38],
  starships: [48, 59, 64, 65, 74],
  created: '2014-12-10T16:16:29.192000Z',
  edited: '2014-12-20T21:17:50.325000Z',
  url: 'https://sw-api.starnavi.io/people/10/',
};

export const mockGetFilmsByPersonIdData = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      id: 5,
      title: 'Attack of the Clones',
      episode_id: 2,
      opening_crawl:
        'There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....',
      director: 'George Lucas',
      producer: 'Rick McCallum',
      release_date: '2002-05-16',
      characters: [
        10, 20, 21, 22, 33, 35, 36, 2, 3, 6, 7, 40, 43, 46, 11, 51, 52, 53, 58,
        59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
        77, 78, 82,
      ],
      planets: [1, 8, 9, 10, 11],
      starships: [43, 47, 48, 49, 52, 58, 21, 32, 39],
      vehicles: [44, 45, 46, 50, 51, 53, 54, 55, 56, 57, 4],
      species: [12, 13, 15, 1, 2, 6, 28, 29, 30, 31, 32, 33, 34, 35],
      created: '2014-12-20T10:57:57.886000Z',
      edited: '2014-12-20T20:18:48.516000Z',
      url: 'https://sw-api.starnavi.io/films/5/',
    },
  ],
};

export const mockGetStarshipsNameByIdData = {
  data: [
    {
      id: 15,
      name: 'Executor',
      model: 'Executor-class star dreadnought',
      manufacturer: 'Kuat Drive Yards, Fondor Shipyards',
      cost_in_credits: '1143350000',
      length: '19000',
      max_atmosphering_speed: 'n/a',
      crew: '279,144',
      passengers: '38000',
      cargo_capacity: '250000000',
      consumables: '6 years',
      hyperdrive_rating: '2.0',
      MGLT: '40',
      starship_class: 'Star dreadnought',
      pilots: [],
      films: [2, 3],
      created: '2014-12-15T12:31:42.547000Z',
      edited: '2014-12-20T21:23:49.893000Z',
      url: 'https://sw-api.starnavi.io/starships/15/',
    },
  ],
};