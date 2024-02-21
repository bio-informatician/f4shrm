import React from 'react';
import { Table, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const renderColumnHeader = (title, tooltip) => (
  <div>
    {title}
    {tooltip && (
      <Tooltip title={tooltip} placement="topRight">
        <InfoCircleOutlined style={{ marginLeft: 4, color: '#1890ff' }} />
      </Tooltip>
    )}
  </div>
);

const TableComponent = ({ columns, data, selectedRowKeys, onSelectChange, onSelectAllRows, loading }) => {
  const updatedColumns = columns.map((column) => {
    let tooltip = '';
    // Define tooltips for specific columns
    switch (column.title) {
      case 'Abbreviation':
        tooltip = 'Abbreviation tooltip text';
        break;
      case 'BaltimoreClass':
        tooltip = 'Baltimore Class tooltip text';
        break;
      // Add more cases for other columns as needed
      default:
        tooltip = ''; // Set default empty tooltip for columns without specific tooltips
    }

    return {
      ...column,
      title: renderColumnHeader(column.title, tooltip),
    };
  });

  return (
    <Table
      rowSelection={{
        selectedRowKeys,
        onChange: onSelectChange,
        onSelectAll: onSelectAllRows,
      }}
      columns={updatedColumns}
      dataSource={data}
      loading={loading}
      // Additional table props and configurations as needed
      // For example, pagination, sorting, etc.
    />
  );
};

export default TableComponent;
