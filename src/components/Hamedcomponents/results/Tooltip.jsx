import React from 'react';
import ReactTooltip from 'react-tooltip';

const Tooltip = () => {
  return (
    <div>
      {/* Add elements that need tooltips */}
      <span data-tip="Tooltip content">Hover over me</span>

      {/* Initialize the tooltip */}
      <ReactTooltip />
    </div>
  );
};

export default Tooltip;
