// import React, { useEffect, useState } from 'react';
// import { Button, Col, Modal, Row } from 'antd';
// import { Checkbox, Divider } from 'antd';
// import { usePageContext } from '../components/Context';
// import { Card } from 'antd';
// import { Link } from 'react-router-dom';
// import { isMobileView } from '../services/ViewMode';
// import {
//   CloudDownloadOutlined,
//   ProfileOutlined,
//   SearchOutlined,
//   SelectOutlined,
//   ShareAltOutlined,
//   UserOutlined,
// } from '@ant-design/icons';

// import { Tooltip } from 'antd';
// import { isMobile, isTablet } from 'react-device-detect';

// import { CSVLink } from 'react-csv';
// import Papa from 'papaparse'; // Ensure you have papaparse installed

// import ReactLogo from '../assets/main-image.jpeg';
// import queryString from 'query-string';

// const { Meta } = Card;
// const CheckboxGroup = Checkbox.Group;

// const FilterColumnModal = ({
//   childToParent,
//   initialColumns,
//   selectedRow,
//   backendSearchTerm,
// }) => {
//   const [checkedList, setCheckedList] = useState(initialColumns.map((item) => item.title));
//   const [indeterminate, setIndeterminate] = useState(true);
//   const [checkAll, setCheckAll] = useState(false);

//   const handleDownloadAll = () => {
//     const dataForDownload = selectedRow.map((item) => {
//       const currentDate = new Date().toISOString().split('T')[0];
//       const metadata = `${backendSearchTerm}_${currentDate}_VJ.ver.Beta`;

//       return {
//         ...item,
//         link: `http://localhost:8001/${item.sample_id}`,
//         Date: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
//         metadata: metadata,
//       };
//     });

//     const currentDate = new Date().toISOString().split('T')[0];
//     const filename = `${currentDate}_VJ.vBeta_all_rows.csv`;

//     // Use Papa.unparse to convert the data to CSV format
//     const csvData = Papa.unparse(dataForDownload);

//     // Create a Blob from the CSV data and save it using file-saver
//     const csvBlob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
//     saveAs(csvBlob, filename);
//   };

//   const onChange = (list) => {
//     setCheckedList(list);
//     setIndeterminate(!!list.length && list.length < initialColumns.length);
//     setCheckAll(list.length === initialColumns.length);
//   };

//   const onCheckAllChange = (e) => {
//     setCheckedList(e.target.checked ? initialColumns.map((item) => item.title) : []);
//     setIndeterminate(false);
//     setCheckAll(e.target.checked);
//   };

//   return (
//     <>
//       <div className="flex flex-row gap-x-3">
//       {selectedRow.length > 0 && (
//   <CSVLink
//     data={selectedRow.map((item) => {
//       // Generate the metadata for the file name
//       const currentDate = new Date().toISOString().split('T')[0];
//       const metadata = `${backendSearchTerm}_${currentDate}_VJ.ver.Beta`;

//       // Modify the data object to include the metadata in the file
//       return {
//         ...item,
//         link: `http://localhost:8001/${item.sample_id}`,
//         Date: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
//         // logo: `=HYPERLINK(http://localhost:8001${ReactLogo})`,
//         metadata: metadata, // Add the metadata field
//       };
//     })}
//     filename={`${new Date().toISOString().split('T')[0]}_VJ.vBeta_metadata.csv`}
//     onClick={(event, fileInfo) => {
//       // Save the file using the generated file name
//       saveAs(fileInfo.blob, fileInfo.filename);
//     }}
//   >
//     <Tooltip title="Download Result(s)">
//       <Button type="primary" className="flex justify-center items-center">
//         <CloudDownloadOutlined />
//       </Button>
//     </Tooltip>
//   </CSVLink>
// )}

//     {/* Download All Rows Button */}
//     <Button
//       type="primary"
//       onClick={handleDownloadAll}
//       className="flex justify-center items-center"
//     >
//       Download All Rows
//     </Button>




//         {isTableView && (
//           <Button
//             type="primary"
//             onClick={showModal}
//             className="flex justify-center items-center"
//           >
//             {isMobile ? <SelectOutlined /> : 'Add / Remove Columns'}
//           </Button>
//         )}
//       </div>
//       <Modal
//         width={isMobile || isTablet ? '100vw' : '60vw'}
//         open={open}
//         title="Choose Columns"
//         onOk={handleOk}
//         onCancel={handleCancel}
//         footer={[
//           <Button
//             key="submit"
//             type="dashed"
//             loading={loading}
//             onClick={() => setOpen(false)}
//           >
//             Cancel
//           </Button>,
//           <Button
//             type="primary"
//             loading={loading}
//             onClick={handleOk}
//           >
//             OK
//           </Button>,
//         ]}
//       >
//         <div className="w-full">
//           <Checkbox
//             indeterminate={indeterminate}
//             onChange={onCheckAllChange}
//             checked={checkAll}
//           >
//             Check all Columns
//           </Checkbox>
//           <Divider />
//           <Row className="w-full">
//             <Col
//               md={24}
//               className="flex flex-row overflow-scroll  whitespace-normal w-full"
//             >
//               <CheckboxGroup
//                 value={checkedList}
//                 onChange={onChange}
//                 className="w-full"
//               >
//                 <Row
//                   gutter={[100, 10]}
//                   className="overflow-auto overflow-x-hidden"
//                 >
//                   {initialColumn.map((item, index) => (
//                     <Col
//                       span={isMobile ? 24 : 8}
//                       key={index}
//                       className="overflow-x-hidden md:overflow-auto md:overflow-x-hidden"
//                     >
//                       <Checkbox
//                         value={item}
//                         key={index}
//                         className="whitespace-nowrap"
//                       >
//                         {item}
//                       </Checkbox>
//                     </Col>
//                   ))}
//                 </Row>
//               </CheckboxGroup>
//             </Col>
//           </Row>
//         </div>
//       </Modal>
//       {/* //----------------------------// */}
//       <Modal
//         open={openUserModal}
//         title="Users Data"
//         onOk={handleOk}
//         onCancel={cancelUserModal}
//         footer={null}
//         width={1000}
//         bodyStyle={{ maxHeight: '500px', overflow: 'scroll' }}
//       >
//         <div className="w-full flex flex-col gap-y-4">
//           {selectedRow.map((item) => (
//             <Card hoverable>
//               <div className="w-full flex items-center justify-start">
//                 <div>
//                   <img
//                     alt="example"
//                     src={item.image}
//                     style={{
//                       width: 240,
//                     }}
//                   />
//                 </div>

//                 <div className="">
//                   <p
//                     className="site-description-item-profile-p"
//                     style={{
//                       marginBottom: 24,
//                     }}
//                   >
//                     User Profile
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default FilterColumnModal;