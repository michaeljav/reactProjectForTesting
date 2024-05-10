import React, { useState } from 'react';
import Pagination from './Pagination';
import { items, paginateItems, Pagination as PaginationType } from './Types';

export const AppPagination: React.FC = () => {
  const itemsPerPage = 5;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedItems = paginateItems(items, currentPage, itemsPerPage);

  const pagination: PaginationType = {
    currentPage,
    itemsPerPage,
    totalItems: items.length,
    totalPages,
  };

  return (
    <div className='app'>
      <h1>Pagination Example</h1>
      <ul>
        {paginatedItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Pagination
        items={items}
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
