'use client';

import cx from 'classnames';
import { iconClasses } from '@/data/pagination';

export function NavIcon({
  rounded,
  outline,
  className,
  navigation,
}: {
  rounded: keyof typeof iconClasses.rounded;
  outline: boolean;
  className: string;
  navigation: 'prev' | 'next';
}) {
  return (
    <div
      className={cx(
        iconClasses.base,
        outline ? iconClasses.outline : iconClasses.center,
        iconClasses.rounded[rounded],
        className,
      )}
      data-testid={navigation === 'next' && 'pagination-next-btn'}
    >
      {navigation === 'prev' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="m-auto h-4 w-4 rtl:-rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="m-auto h-4 w-4 rtl:rotate-180"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      )}
    </div>
  );
}
