import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button
        className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="page-info">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
