import { render, fireEvent, waitFor } from '@testing-library/react';
import { getPeople } from '@/server/actions/get-people.action';
import PeopleList from '@/components/common/people-list';
import { mockGetPeopleData } from '@/data/mocks/actions';

jest.mock('@/server/actions/get-people.action');
const mockedGetPeople = getPeople as jest.MockedFunction<typeof getPeople>;

describe('SearchBar test case', () => {
  it('Enter in SearchBar "Obi"', () => {
    mockedGetPeople.mockResolvedValue(mockGetPeopleData);

    const { getByTestId, getByText } = render(
      <PeopleList data={mockGetPeopleData} />,
    );
    const searchBar = getByTestId('home-search-bar');

    fireEvent.change(searchBar, { target: { value: 'Obi' } });

    expect(getByText('Obi-Wan Kenobi')).toBeInTheDocument();
  });
});
