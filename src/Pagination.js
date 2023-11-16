// src/Pagination.js
import React, { useState } from 'react';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <span key={i} onClick={() => handlePageChange(i)} className={i === currentPage ? 'active' : ''}>
          {i}
        </span>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <span>Страницы: </span>
      {renderPageNumbers()}
    </div>
  );
};

export default Pagination;
