import React from 'react';
import { Tooltip, Checkbox } from 'antd';

const TooltipColumn = ({ columnTitle, tooltipText, children }) => (
  <div>
    {tooltipText ? (
      <Tooltip title={tooltipText}>
        <Checkbox value={columnTitle} className="whitespace-nowrap">
          {children}
        </Checkbox>
      </Tooltip>
    ) : (
      <Checkbox value={columnTitle} className="whitespace-nowrap">
        {children}
      </Checkbox>
    )}
  </div>
);

export default TooltipColumn;






// // TooltipColumn.jsx

// import React from 'react';
// import { Tooltip, Checkbox } from 'antd';


// const TooltipColumn = ({ columnTitle, tooltipText, children }) => (
//   <Tooltip title={tooltipText}>
//     <Checkbox value={columnTitle} className="whitespace-nowrap">
//       {children}
//     </Checkbox>
//   </Tooltip>
// );

// export default TooltipColumn;
