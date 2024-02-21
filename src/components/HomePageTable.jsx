// import { Space, Spin, Table, Tag } from 'antd';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//   },
//   {
//     title: 'Count',
//     dataIndex: 'count',
//     key: 'count',
//   },
// ];

// const HomePageTable = ({ rows }) => (
//   <Spin spinning={rows.length ? false : true}>
//     <Table
//       bordered
//       columns={columns}
//       dataSource={rows}
//       pagination={false}
//       scroll={{
//         y: 200,
//         x: 100,
//       }}
//     />
//   </Spin>
// );
// export default HomePageTable;


// import { Space, Spin, Table, Tag } from 'antd';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     ellipsis: true, // Adding ellipsis for long text
//     width: '50%', // Setting a relative width for the column
//   },
//   {
//     title: 'Count',
//     dataIndex: 'count',
//     key: 'count',
//     align: 'center', // Aligning the content in the center
//     render: (count) => <span>{Number(count).toLocaleString()}</span>, // Making numbers more readable
//     width: '50%', // Setting a relative width for the column
//   },
// ];

// const HomePageTable = ({ rows }) => (
//   <Spin spinning={rows.length ? false : true}>
//     <Table
//       bordered
//       columns={columns}
//       dataSource={rows}
//       pagination={false}
//       scroll={{ y: 200, x: 100 }} // Using 'max-content' for maximum width
//     />
//   </Spin>
// );

// export default HomePageTable;



// import React from 'react';
// import { Spin, Table } from 'antd';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     ellipsis: true,
//     width: '50%',
//   },
//   {
//     title: 'Count',
//     dataIndex: 'count',
//     key: 'count',
//     align: 'center',
//     render: (count) => <span>{Number(count).toLocaleString()}</span>,
//     width: '50%',
//   },
// ];

// const HomePageTable = ({ rows }) => (
//   <Spin spinning={rows.length ? false : true}>
//     <Table
//       bordered
//       columns={columns}
//       dataSource={rows}
//       pagination={false}
//       showHeader={false} // Set showHeader to false to hide the table header
//       scroll={{ y: 200, x: 100 }}
//     />
//   </Spin>
// );

// export default HomePageTable;



import React from 'react';
import { Spin } from 'antd';

const HomePageTable = ({ rows }) => (
  <Spin spinning={rows.length ? false : true}>
    <div>
      {rows.map((row, index) => (
        <div key={index}>
          <span>{row.name}: </span>
          <span>{Number(row.count).toLocaleString()}</span>
        </div>
      ))}
    </div>
  </Spin>
);

export default HomePageTable;
