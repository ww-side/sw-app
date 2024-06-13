import {
  createFilmNodes,
  createStarshipNodes,
  createFilmEdges,
  createStarshipEdges,
} from '@/utils/init-reactflow';
import {
  mockInitialNodes,
  mockInitialEdges,
  mockPersonData,
  mockFilmsByPersonIdData,
  mockStarshipsNameByIdData,
} from '@/data/mocks/person-details';
import { render } from '@testing-library/react';
import PersonDetails from '@/components/common/person-details';

describe('PersonDetails test case', () => {
  it('Pass the mock data', () => {
    const filmNodes = createFilmNodes(mockFilmsByPersonIdData.results);
    const starshipNodes = createStarshipNodes(mockStarshipsNameByIdData.data);
    const filmEdges = createFilmEdges(
      mockPersonData.name,
      mockFilmsByPersonIdData.results,
    );
    const starshipEdges = createStarshipEdges(
      mockFilmsByPersonIdData.results,
      mockStarshipsNameByIdData.data,
    );

    const initialNodes = [
      {
        id: mockPersonData.name,
        type: 'person-node',
        data: { label: mockPersonData.name },
        position: { x: 1020, y: 25 },
      },
      ...filmNodes,
      ...starshipNodes,
    ];
    const initialEdges = [...filmEdges, ...starshipEdges];

    expect(initialNodes).toEqual(mockInitialNodes);
    expect(initialEdges).toEqual(mockInitialEdges);

    const { getByText } = render(
      <PersonDetails initialNodes={initialNodes} initialEdges={initialEdges} />,
    );

    expect(getByText('Obi-Wan Kenobi')).toBeInTheDocument();
    expect(getByText('Revenge of the Sith')).toBeInTheDocument();
    expect(getByText('Trade Federation cruiser')).toBeInTheDocument();
  });
});
