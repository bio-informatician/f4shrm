import React from 'react';
import { Checkbox, Tooltip } from 'antd';

const tooltips = ['Column 1 Tooltip', 'Column 2 Tooltip', 'Column 3 Tooltip']; // Define your tooltips

// Destructure the props right in the function parameters
const ColumnCheckboxList = ({ initialColumns, checkedList, onChange }) => {
    return (
      <div className="column-checkbox-grid">
        {initialColumns.map((column, index) => (
          <div className="column-checkbox-item" key={column.title}>
            <Tooltip title={tooltips[index]} placement="topLeft">
              <Checkbox
                value={column.title}
                onChange={onChange}
                checked={checkedList.includes(column.title)}
              >
                {column.title}
              </Checkbox>
            </Tooltip>
          </div>
        ))}
      </div>
    );
  };
  
  export default ColumnCheckboxList;




// import React from 'react';
// import { Checkbox, Tooltip } from 'antd';

// const tooltips = ['Column 1 Tooltip', 'Column 2 Tooltip', 'Column 3 Tooltip'];

// const ColumnCheckboxList = ({ initialColumns, checkedList, onChange }) => {
//   const sortedColumns = [...initialColumns].sort((a, b) => a.title.localeCompare(b.title));

//   return (
//     <div className="column-checkbox-grid">
//       {sortedColumns.map((column, index) => (
//         <div className="column-checkbox-item" key={column.title}>
//           <Tooltip title={tooltips[index]} placement="topLeft">
//             <Checkbox
//               value={column.title}
//               onChange={onChange}
//               checked={checkedList.includes(column.title)}
//             >
//               {column.title}
//             </Checkbox>
//           </Tooltip>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ColumnCheckboxList;













// import React from 'react';
// import { Checkbox, Tooltip } from 'antd';

// const tooltips = ['Column 1 Tooltip', 'Column 2 Tooltip', 'Column 3 Tooltip']; // Define your tooltips

// // Destructure the props right in the function parameters
// const ColumnCheckboxList = ({ initialColumns, checkedList, onChange }) => {
//     const sortedColumns = [...initialColumns].sort((a, b) => a.title.localeCompare(b.title));

//     return (
//       <div className="column-checkbox-grid">
//         {sortedColumns.map((column, index) => (
//           <div className="column-checkbox-item" key={column.title}>
//             <Tooltip title={tooltips[index]} placement="topLeft">
//               <Checkbox
//                 value={column.title}
//                 onChange={onChange}
//                 checked={checkedList.includes(column.title)}
//               >
//                 {column.title}
//               </Checkbox>
//             </Tooltip>
//           </div>
//         ))}
//       </div>
//     );
// };

// export default ColumnCheckboxList;