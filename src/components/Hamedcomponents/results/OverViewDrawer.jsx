// import { Drawer } from 'antd';
// import axios from 'axios';
// import { useEffect } from 'react';

// const OverViewDrawer = ({
//   openOverViewDrawer,
//   closeOverViewDrawer,
//   overViewSmapleID,
// }) => {
//   const overViewData = async () => {
//     try {
//       let result = await axios.get(
//         `http://192.168.10.12:7000/api/searchCardOverview/${overViewSmapleID}`
//       );
//       console.log('resulttttt =====>', result);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     try {
//       overViewData();
//     } catch (error) {
//       console.log(error);
//     }
//   }, [overViewSmapleID]);

//   return (
//     <Drawer
//       title="OverView"
//       placement="right"
//       onClose={closeOverViewDrawer}
//       open={openOverViewDrawer}
//       size="medium"
      
//     >
//       <div className="w-full  flex flex-col gap-4">
//         <p className="font-bold text-md">SampleID is........ : {overViewSmapleID}</p>
//         <p className="font-bold text-md">Some Data about this above ID ...</p>
//       </div>
//     </Drawer>
//   );
// };

// export default OverViewDrawer;
