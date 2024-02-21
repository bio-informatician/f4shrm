import React from 'react';

const CardViewButton = ({ isTableView, handleViewChange }) => {
  const handleClick = () => {
    handleViewChange('card');
  };

  return (
    <button
      className={`view-button ${isTableView ? '' : 'active'}`}
      onClick={handleClick}
    >
      Card View
    </button>
  );
};

export default CardViewButton;
