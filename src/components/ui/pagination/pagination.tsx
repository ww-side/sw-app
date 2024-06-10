'use client';

import RcPagination, {
  PaginationProps as RcPaginationProps,
} from 'rc-pagination';
import cx from 'classnames';
import { NavIcon } from '@/components/ui/pagination/nav-icon';
import { paginationClasses } from '@/data/pagination';
import 'rc-pagination/assets/index.css';

export interface PaginationProps extends RcPaginationProps {
  outline?: boolean;
  rounded?: keyof typeof paginationClasses.rounded;
  variant?: keyof typeof paginationClasses.variant;
  color?: keyof typeof paginationClasses.variant.flat.color;
  prevIconClassName?: string;
  nextIconClassName?: string;
  jumpPrevIconClassName?: string;
  jumpNextIconClassName?: string;
}

export default function Pagination({
  outline = false,
  rounded = 'md',
  variant = 'solid',
  color = 'primary',
  prevIcon,
  prevIconClassName,
  nextIconClassName,
  jumpPrevIcon,
  jumpNextIcon,
  jumpPrevIconClassName,
  jumpNextIconClassName,
  className,
  ...props
}: PaginationProps) {
  return (
    <RcPagination
      nextIcon={
        <NavIcon
          navigation="next"
          rounded={rounded}
          outline={outline}
          className={nextIconClassName as string}
        />
      }
      prevIcon={
        <NavIcon
          navigation="prev"
          rounded={rounded}
          outline={outline}
          className={prevIconClassName as string}
        />
      }
      className={cx(
        paginationClasses.base.item,
        paginationClasses.base.jumperDiv,
        paginationClasses.base.jumperInput,
        !outline && paginationClasses.base.outline,
        !outline && paginationClasses.base.icon,
        paginationClasses.rounded[rounded],
        paginationClasses.variant[variant].base,
        paginationClasses.variant[variant].color[color],
        className,
      )}
      {...props}
    />
  );
}

Pagination.displayName = 'Pagination';
