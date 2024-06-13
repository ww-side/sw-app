import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';
import PersonPage from '@/app/[slug]/page';
import { getPeople } from '@/server/actions/get-people.action';
import { getPerson } from '@/server/actions/get-person.action';
import { getFilmsByPersonId } from '@/server/actions/get-films-by-person-id.action';
import { getStarshipsNameById } from '@/server/actions/get-starships-name-by-id.action';
import {
  mockGetFilmsByPersonIdData,
  mockGetPeopleData,
  mockGetPersonData,
  mockGetStarshipsNameByIdData,
} from '@/data/mocks/actions';

jest.mock('@/server/actions/get-people.action');
jest.mock('@/server/actions/get-person.action');
jest.mock('@/server/actions/get-films-by-person-id.action');
jest.mock('@/server/actions/get-starships-name-by-id.action');

const mockedGetPeople = getPeople as jest.MockedFunction<typeof getPeople>;
const mockGetPerson = getPerson as jest.MockedFunction<typeof getPerson>;
const mockGetFilmsByPersonId = getFilmsByPersonId as jest.MockedFunction<
  typeof getFilmsByPersonId
>;
const mockGetStarshipsNameById = getStarshipsNameById as jest.MockedFunction<
  typeof getStarshipsNameById
>;

describe('Pages test case', () => {
  it('Home Page', async () => {
    mockedGetPeople.mockResolvedValueOnce(mockGetPeopleData);

    render(await HomePage());

    const homePage = await screen.findByTestId('home-page');
    expect(homePage).toBeInTheDocument();
    expect(screen.getByText('Characters from Star Wars🌠')).toBeInTheDocument();
    expect(screen.getByText('Obi-Wan Kenobi')).toBeInTheDocument();
  });

  it('Person Page', async () => {
    mockGetPerson.mockResolvedValueOnce(mockGetPersonData);
    mockGetFilmsByPersonId.mockResolvedValueOnce(mockGetFilmsByPersonIdData);
    mockGetStarshipsNameById.mockResolvedValueOnce(
      mockGetStarshipsNameByIdData,
    );

    render(await PersonPage({ params: { slug: '10' } }));

    const personPage = await screen.findByTestId('person-page');
    expect(personPage).toBeInTheDocument();
  });
});
