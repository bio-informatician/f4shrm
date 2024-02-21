import React from 'react';

const TableViewButton = ({ isTableView, handleViewChange }) => {
  return (
    <button
      className={`view-button ${isTableView ? '' : 'active'}`}
      onClick={() => handleViewChange('table')}
    >
      Table View
    </button>
  );
};

export default TableViewButton;
