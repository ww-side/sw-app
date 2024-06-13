import { getPeople } from '@/server/actions/get-people.action';
import {
  mockPaginationPageOneData,
  mockPaginationPageTwoData,
} from '@/data/mocks/pagination';
import { fireEvent, render, waitFor } from '@testing-library/react';
import PeopleList from '@/components/common/people-list';

jest.mock('@/server/actions/get-people.action');
const mockedGetPeople = getPeople as jest.MockedFunction<typeof getPeople>;

describe('Pagination test case', () => {
  it('handles change to the second page', async () => {
    // mockedGetPeople.mockResolvedValueOnce(mockPaginationPageTwoData);
    mockedGetPeople.mockResolvedValueOnce(mockPaginationPageTwoData);

    const { getByText, queryByText, getByTestId } = render(
      <PeopleList data={mockPaginationPageOneData} />,
    );

    expect(getByText('Bossk')).toBeInTheDocument();

    fireEvent.click(getByTestId('pagination-next-btn'));

    await waitFor(() => {
      expect(getByText('Mon Mothma')).toBeInTheDocument();
    });

    expect(getByText('Arvel Crynyd')).toBeInTheDocument();
    expect(queryByText('Lobot')).not.toBeInTheDocument();
  });
});
