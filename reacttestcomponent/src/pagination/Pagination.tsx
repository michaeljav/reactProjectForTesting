import React from 'react';
import { Item, Pagination as PaginationType, paginateItems } from './Types';

interface Props {
  items: Item[];
  pagination: PaginationType;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ items, pagination, onPageChange }) => {
  const { currentPage, totalPages } = pagination;

  return (
    <div className='pagination'>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>{`${currentPage} / ${totalPages}`}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
