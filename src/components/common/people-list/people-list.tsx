'use client';

import { useCallback, useState } from 'react';
import SearchBar from '@/components/ui/search-bar';
import Pagination from '@/components/ui/pagination/';
import Loader from '@/components/ui/loader';
import PersonItem from '@/components/common/person-item';
import { propertiesParams } from '@/components/common/people-list/search-params';
import { getPeople } from '@/server/actions/get-people.action';
import type { PersonType } from '@/types/person';

export default function PeopleList({
  data,
}: {
  data: { count: number; results: PersonType[] };
}) {
  const [people, setPeople] = useState<PersonType[]>(data.results);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePageChange = useCallback(async (page: number) => {
    try {
      setIsLoading(true);
      setCurrentPage(page);
      const res = await getPeople(page);
      setPeople(res.results);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSearch = (searchTerm: string) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = lowercasedTerm
      ? people.filter(person => {
          return propertiesParams.some(property =>
            person[property].toString().toLowerCase().includes(lowercasedTerm),
          );
        })
      : data.results;
    setPeople(filtered);
  };

  return (
    <section>
      <SearchBar
        testId="home-search-bar"
        onSearch={handleSearch}
        placeholder="Search by name, height, mass, hair color, skin color, eye color, birth year and gender on this page..."
        className="my-3 w-[650px]"
      />
      <Pagination
        pageSize={10}
        total={data.count}
        current={currentPage}
        onChange={handlePageChange}
      />
      <section className="flex flex-wrap gap-5 mt-5 pb-3">
        {isLoading ? (
          <Loader size={60} />
        ) : (
          people.map(person => <PersonItem key={person.id} person={person} />)
        )}
      </section>
    </section>
  );
}
