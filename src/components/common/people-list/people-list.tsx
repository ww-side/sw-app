'use client';

import { useCallback, useState } from 'react';
import SearchBar from '@/components/ui/search-bar';
import Pagination from '@/components/ui/pagination/';
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
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = useCallback(async (page: number) => {
    const res = await getPeople(page);
    setPeople(res.results);
    setCurrentPage(page);
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
        onSearch={handleSearch}
        placeholder="Search by name, height, mass, hair color, skin color, eye color, birth year and gender..."
        className="my-3 w-[600px]"
      />
      <Pagination
        pageSize={10}
        total={data.count}
        current={currentPage}
        onChange={handlePageChange}
      />
      <section className="flex flex-wrap gap-5 mt-5 pb-5">
        {people.map(person => (
          <PersonItem key={person.id} person={person} />
        ))}
      </section>
    </section>
  );
}
