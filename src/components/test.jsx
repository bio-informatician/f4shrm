
//   return (
//     <>
//       <div className="flex flex-row gap-x-3">
//         {selectedRow.length > 0 && (
//  <CSVLink
//  data={selectedRow.map((item) => {
//    // Generate the metadata for the file name
//    const currentDate = new Date().toISOString().split('T')[0];
//    const metadata = `${backendSearchTerm}_${currentDate}_VJ.ver.Beta`;
 
//    // Modify the data object to include the metadata in the file
//    return {
//      ...item,
//      link: `http://localhost:8001/${item.sample_id}`,
//      Date: `${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`,
//      // logo: `=HYPERLINK(http://localhost:8001${ReactLogo})`,
//      metadata: metadata, // Add the metadata field
//    };
//  })}
//  filename={`${new Date().toISOString().split('T')[0]}_VJ.vBeta_metadata.csv`}
//  onClick={(event, fileInfo) => {
//    // Save the file using the generated file name
//    saveAs(fileInfo.blob, fileInfo.filename);
//  }}
//  >
//             <Tooltip title="Download Result(s)">
//               <Button type="primary" className="flex justify-center items-center">
//                 <CloudDownloadOutlined />
//               </Button>
//             </Tooltip>
//           </CSVLink>
//         )}
//         {isTableView && (
//           <Button
//             type="primary"
//             onClick={() => setOpen(true)}
//             className="flex justify-center items-center"
//           >
//             {isMobile ? <SelectOutlined /> : 'Add / Remove Columns'}
//           </Button>
//         )}
//       </div>
//       <Modal
//         width={isMobile || isTablet ? '100vw' : '60vw'}
//         visible={open}
//         title="Choose Columns"
//         onOk={() => handleModalVisibility(false)}
//         onCancel={() => setOpen(false)}
//         // ... remaining modal configuration ...
//       >
//         {/* ... Checkbox components ... */}
//       </Modal>
//       <Modal
//         visible={openUserModal}
//         title="Users Data"
//         onCancel={() => setOpenUserModal(false)}
//         // ... remaining user modal configuration ...
//       >
//         {/* ... User Cards ... */}
//       </Modal>
//     </>
//   );
// };

// export default FilterColumnModal;
