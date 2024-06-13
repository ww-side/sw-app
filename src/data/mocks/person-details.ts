export const mockPersonData = {
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

export const mockFilmsByPersonIdData = {
  count: 6,
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
    {
      id: 6,
      title: 'Revenge of the Sith',
      episode_id: 3,
      opening_crawl:
        'War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....',
      director: 'George Lucas',
      producer: 'Rick McCallum',
      release_date: '2005-05-19',
      characters: [
        10, 12, 13, 20, 21, 33, 35, 1, 2, 3, 4, 5, 6, 7, 46, 11, 51, 52, 53, 54,
        55, 56, 58, 63, 64, 67, 68, 75, 78, 79, 80, 81, 82, 83,
      ],
      planets: [1, 2, 5, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19],
      starships: [48, 59, 61, 63, 64, 65, 66, 68, 2, 32, 74, 75],
      vehicles: [50, 53, 56, 60, 62, 67, 69, 70, 71, 72, 73, 33, 76],
      species: [
        15, 19, 20, 1, 2, 3, 6, 28, 29, 30, 33, 34, 35, 36, 37, 23, 24, 25, 26,
        27,
      ],
      created: '2014-12-20T18:49:38.403000Z',
      edited: '2014-12-20T20:47:52.073000Z',
      url: 'https://sw-api.starnavi.io/films/6/',
    },
    {
      id: 3,
      title: 'Return of the Jedi',
      episode_id: 6,
      opening_crawl:
        'Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...',
      director: 'Richard Marquand',
      producer: 'Howard G. Kazanjian, George Lucas, Rick McCallum',
      release_date: '1983-05-25',
      characters: [
        10, 13, 14, 16, 18, 20, 21, 22, 25, 27, 28, 29, 30, 31, 1, 2, 3, 4, 5,
        45,
      ],
      planets: [1, 5, 7, 8, 9],
      starships: [27, 2, 3, 10, 11, 12, 15, 17, 22, 23, 28, 29],
      vehicles: [26, 8, 16, 18, 19, 24, 25, 30],
      species: [10, 15, 1, 2, 3, 5, 6, 8, 9],
      created: '2014-12-18T10:39:33.255000Z',
      edited: '2014-12-20T09:48:37.462000Z',
      url: 'https://sw-api.starnavi.io/films/3/',
    },
    {
      id: 2,
      title: 'The Empire Strikes Back',
      episode_id: 5,
      opening_crawl:
        'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
      director: 'Irvin Kershner',
      producer: 'Gary Kurtz, Rick McCallum',
      release_date: '1980-05-17',
      characters: [10, 13, 14, 18, 20, 21, 22, 23, 24, 25, 26, 1, 2, 3, 4, 5],
      planets: [4, 5, 6, 27],
      starships: [3, 10, 11, 12, 15, 17, 21, 22, 23],
      vehicles: [8, 14, 16, 18, 19, 20],
      species: [1, 2, 3, 6, 7],
      created: '2014-12-12T11:26:24.656000Z',
      edited: '2014-12-15T13:07:53.386000Z',
      url: 'https://sw-api.starnavi.io/films/2/',
    },
    {
      id: 1,
      title: 'A New Hope',
      episode_id: 4,
      opening_crawl:
        "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      director: 'George Lucas',
      producer: 'Gary Kurtz, Rick McCallum',
      release_date: '1977-05-25',
      characters: [
        10, 12, 13, 14, 15, 16, 18, 19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 81,
      ],
      planets: [1, 2, 3],
      starships: [2, 3, 5, 9, 10, 11, 12, 13],
      vehicles: [4, 6, 7, 8],
      species: [1, 2, 3, 4, 5],
      created: '2014-12-10T14:23:31.880000Z',
      edited: '2014-12-20T19:49:45.256000Z',
      url: 'https://sw-api.starnavi.io/films/1/',
    },
    {
      id: 4,
      title: 'The Phantom Menace',
      episode_id: 1,
      opening_crawl:
        'Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....',
      director: 'George Lucas',
      producer: 'Rick McCallum',
      release_date: '1999-05-19',
      characters: [
        10, 16, 20, 21, 32, 33, 34, 35, 36, 37, 38, 39, 2, 3, 40, 41, 42, 43,
        44, 46, 47, 48, 11, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
      ],
      planets: [1, 8, 9],
      starships: [31, 32, 39, 40, 41],
      vehicles: [34, 35, 36, 42, 33, 37, 38],
      species: [
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 1, 2, 6, 22, 23, 24, 25, 26,
        27,
      ],
      created: '2014-12-19T16:52:55.740000Z',
      edited: '2014-12-20T10:54:07.216000Z',
      url: 'https://sw-api.starnavi.io/films/4/',
    },
  ],
};

export const mockStarshipsNameByIdData = {
  data: [
    {
      id: 48,
      name: 'Jedi starfighter',
      model: 'Delta-7 Aethersprite-class interceptor',
      manufacturer: 'Kuat Systems Engineering',
      cost_in_credits: '180000',
      length: '8',
      max_atmosphering_speed: '1150',
      crew: '1',
      passengers: '0',
      cargo_capacity: '60',
      consumables: '7 days',
      hyperdrive_rating: '1.0',
      MGLT: 'unknown',
      starship_class: 'Starfighter',
      pilots: [10, 58],
      films: [5, 6],
      created: '2014-12-20T17:35:23.906000Z',
      edited: '2014-12-20T21:23:49.930000Z',
      url: 'https://sw-api.starnavi.io/starships/48/',
    },
    {
      id: 59,
      name: 'Trade Federation cruiser',
      model: 'Providence-class carrier/destroyer',
      manufacturer: 'Rendili StarDrive, Free Dac Volunteers Engineering corps.',
      cost_in_credits: '125000000',
      length: '1088',
      max_atmosphering_speed: '1050',
      crew: '600',
      passengers: '48247',
      cargo_capacity: '50000000',
      consumables: '4 years',
      hyperdrive_rating: '1.5',
      MGLT: 'unknown',
      starship_class: 'capital ship',
      pilots: [10, 11],
      films: [6],
      created: '2014-12-20T19:40:21.902000Z',
      edited: '2014-12-20T21:23:49.941000Z',
      url: 'https://sw-api.starnavi.io/starships/59/',
    },
    {
      id: 64,
      name: 'Naboo star skiff',
      model: 'J-type star skiff',
      manufacturer:
        'Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated',
      cost_in_credits: 'unknown',
      length: '29.2',
      max_atmosphering_speed: '1050',
      crew: '3',
      passengers: '3',
      cargo_capacity: 'unknown',
      consumables: 'unknown',
      hyperdrive_rating: '0.5',
      MGLT: 'unknown',
      starship_class: 'yacht',
      pilots: [10, 35],
      films: [6],
      created: '2014-12-20T19:55:15.396000Z',
      edited: '2014-12-20T21:23:49.948000Z',
      url: 'https://sw-api.starnavi.io/starships/64/',
    },
    {
      id: 65,
      name: 'Jedi Interceptor',
      model: 'Eta-2 Actis-class light interceptor',
      manufacturer: 'Kuat Systems Engineering',
      cost_in_credits: '320000',
      length: '5.47',
      max_atmosphering_speed: '1500',
      crew: '1',
      passengers: '0',
      cargo_capacity: '60',
      consumables: '2 days',
      hyperdrive_rating: '1.0',
      MGLT: 'unknown',
      starship_class: 'starfighter',
      pilots: [10, 11],
      films: [6],
      created: '2014-12-20T19:56:57.468000Z',
      edited: '2014-12-20T21:23:49.951000Z',
      url: 'https://sw-api.starnavi.io/starships/65/',
    },
    {
      id: 74,
      name: 'Belbullab-22 starfighter',
      model: 'Belbullab-22 starfighter',
      manufacturer: 'Feethan Ottraw Scalable Assemblies',
      cost_in_credits: '168000',
      length: '6.71',
      max_atmosphering_speed: '1100',
      crew: '1',
      passengers: '0',
      cargo_capacity: '140',
      consumables: '7 days',
      hyperdrive_rating: '6',
      MGLT: 'unknown',
      starship_class: 'starfighter',
      pilots: [10, 79],
      films: [6],
      created: '2014-12-20T20:38:05.031000Z',
      edited: '2014-12-20T21:23:49.959000Z',
      url: 'https://sw-api.starnavi.io/starships/74/',
    },
  ],
};

export const mockInitialEdges = [
  {
    id: 'Obi-Wan Kenobi-Attack of the Clones',
    source: 'Obi-Wan Kenobi',
    target: 'Attack of the Clones',
  },
  {
    id: 'Obi-Wan Kenobi-Revenge of the Sith',
    source: 'Obi-Wan Kenobi',
    target: 'Revenge of the Sith',
  },
  {
    id: 'Obi-Wan Kenobi-Return of the Jedi',
    source: 'Obi-Wan Kenobi',
    target: 'Return of the Jedi',
  },
  {
    id: 'Obi-Wan Kenobi-The Empire Strikes Back',
    source: 'Obi-Wan Kenobi',
    target: 'The Empire Strikes Back',
  },
  {
    id: 'Obi-Wan Kenobi-A New Hope',
    source: 'Obi-Wan Kenobi',
    target: 'A New Hope',
  },
  {
    id: 'Obi-Wan Kenobi-The Phantom Menace',
    source: 'Obi-Wan Kenobi',
    target: 'The Phantom Menace',
  },
  {
    id: 'Attack of the Clones-Jedi starfighter',
    source: 'Attack of the Clones',
    target: 'Jedi starfighter',
  },
  {
    id: 'Revenge of the Sith-Jedi starfighter',
    source: 'Revenge of the Sith',
    target: 'Jedi starfighter',
  },
  {
    id: 'Revenge of the Sith-Trade Federation cruiser',
    source: 'Revenge of the Sith',
    target: 'Trade Federation cruiser',
  },
  {
    id: 'Revenge of the Sith-Naboo star skiff',
    source: 'Revenge of the Sith',
    target: 'Naboo star skiff',
  },
  {
    id: 'Revenge of the Sith-Jedi Interceptor',
    source: 'Revenge of the Sith',
    target: 'Jedi Interceptor',
  },
  {
    id: 'Revenge of the Sith-Belbullab-22 starfighter',
    source: 'Revenge of the Sith',
    target: 'Belbullab-22 starfighter',
  },
];

export const mockInitialNodes = [
  {
    id: 'Obi-Wan Kenobi',
    type: 'person-node',
    data: { label: 'Obi-Wan Kenobi' },
    position: { x: 1020, y: 25 },
  },
  {
    id: 'Attack of the Clones',
    type: 'film-node',
    data: {
      id: 5,
      label: 'Attack of the Clones',
      starships: [43, 47, 48, 49, 52, 58, 21, 32, 39],
    },
    position: { x: 250, y: 185 },
  },
  {
    id: 'Revenge of the Sith',
    type: 'film-node',
    data: {
      id: 6,
      label: 'Revenge of the Sith',
      starships: [48, 59, 61, 63, 64, 65, 66, 68, 2, 32, 74, 75],
    },
    position: { x: 550, y: 185 },
  },
  {
    id: 'Return of the Jedi',
    type: 'film-node',
    data: {
      id: 3,
      label: 'Return of the Jedi',
      starships: [27, 2, 3, 10, 11, 12, 15, 17, 22, 23, 28, 29],
    },
    position: { x: 850, y: 185 },
  },
  {
    id: 'The Empire Strikes Back',
    type: 'film-node',
    data: {
      id: 2,
      label: 'The Empire Strikes Back',
      starships: [3, 10, 11, 12, 15, 17, 21, 22, 23],
    },
    position: { x: 1150, y: 185 },
  },
  {
    id: 'A New Hope',
    type: 'film-node',
    data: {
      id: 1,
      label: 'A New Hope',
      starships: [2, 3, 5, 9, 10, 11, 12, 13],
    },
    position: { x: 1450, y: 185 },
  },
  {
    id: 'The Phantom Menace',
    type: 'film-node',
    data: {
      id: 4,
      label: 'The Phantom Menace',
      starships: [31, 32, 39, 40, 41],
    },
    position: { x: 1750, y: 185 },
  },
  {
    id: 'Jedi starfighter',
    type: 'starship-node',
    data: { id: 48, label: 'Jedi starfighter' },
    position: { x: 10, y: 415 },
  },
  {
    id: 'Trade Federation cruiser',
    type: 'starship-node',
    data: { id: 59, label: 'Trade Federation cruiser' },
    position: { x: 260, y: 415 },
  },
  {
    id: 'Naboo star skiff',
    type: 'starship-node',
    data: { id: 64, label: 'Naboo star skiff' },
    position: { x: 510, y: 415 },
  },
  {
    id: 'Jedi Interceptor',
    type: 'starship-node',
    data: { id: 65, label: 'Jedi Interceptor' },
    position: { x: 760, y: 415 },
  },
  {
    id: 'Belbullab-22 starfighter',
    type: 'starship-node',
    data: { id: 74, label: 'Belbullab-22 starfighter' },
    position: { x: 1010, y: 415 },
  },
];
