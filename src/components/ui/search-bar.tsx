import { ChangeEvent, useState } from 'react';
import cx from 'classnames';

export default function SearchBar({
  onSearch,
  className,
  placeholder = 'Search...',
}: {
  className?: string;
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      value={searchTerm}
      placeholder={placeholder}
      onChange={handleSearchChange}
      className={cx(
        'px-3 py-2 border border-gray-300 rounded-md w-full text-sm',
        className,
      )}
    />
  );
}
