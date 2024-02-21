import React from 'react';

const Table = ({ data, columns }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.key}>
            {columns.map((column) => (
              <td key={column.key}>{row[column.dataIndex]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
