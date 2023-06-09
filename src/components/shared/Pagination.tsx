'use client';
import React from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import Button from '@/components/shared/Button';

type PaginationProps = {
  pageNumber: number;
  setPageNumber: (number: number) => void;
  hasNextPage?: boolean;
  className: string;
};

const Pagination = ({
  pageNumber,
  setPageNumber,
  hasNextPage = true,
  className,
}: PaginationProps) => {
  return (
    <div className="flex items-center gap-3">
      {pageNumber !== 1 ? (
        <Button
          onClick={() => setPageNumber(pageNumber - 1)}
          className={className}
          aria-label="previous page"
        >
          <AiOutlineArrowLeft className="h-6 w-6" />
        </Button>
      ) : null}
      {hasNextPage ? (
        <Button
          onClick={() => setPageNumber(pageNumber + 1)}
          className={className}
          aria-label="next page"
        >
          <AiOutlineArrowRight className="h-6 w-6" />
        </Button>
      ) : null}
    </div>
  );
};

export default Pagination;
