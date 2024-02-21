// import React, { useState, useEffect } from 'react';
// import { Drawer } from 'antd';
// import axios from 'axios';

// const OverViewDrawer = ({
//   openOverViewDrawer,
//   closeOverViewDrawer,
//   overViewSmapleID,
// }) => {
//   const [overViewData, setOverViewData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let response = await axios.get(
//           `http://192.168.10.12:7000/api/searchCardOverview/${overViewSmapleID}`
//         );
//         setOverViewData(response.data.data); // Assuming API response is in the format: { data: { ... } }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     if (overViewSmapleID) {
//       fetchData();
//     }
//   }, [overViewSmapleID]);

//   return (
//     <Drawer
//       title="Overview"
//       placement="right"
//       onClose={closeOverViewDrawer}
//       open={openOverViewDrawer}
//       width="medium"
//     >
//       {overViewData ? (
//         <div className="w-full flex flex-col gap-4">
//           {Object.entries(overViewData).map(
//             ([key, value]) =>
//               value !== null &&
//               value !== '' && (
//                 <div className="flex flex-row">
//                   <p key={key} className="font-bold text-md whitespace-pre">
//                     {`${key.charAt(0).toUpperCase() +
//                       key.slice(1).replace(/_/g, ' ')}: `}
//                   </p>
//                   <p
//                     className="font-bold text-md"
//                     style={{ color: '#31304D' }}
//                   >{`${value}`}</p>
//                 </div>
//               )
//           )}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </Drawer>
//   );
// };

// export default OverViewDrawer;



// import React, { useState, useEffect } from 'react';
// import { Drawer, Button } from 'antd';
// import axios from 'axios';
// import '../styles/overViewDrawer.css'; // Import CSS file

// const OverViewDrawer = ({
//   openOverViewDrawer,
//   closeOverViewDrawer,
//   overViewSmapleID,
// }) => {
//   const [overViewData, setOverViewData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let response = await axios.get(
//           `http://192.168.10.12:7000/api/searchCardOverview/${overViewSmapleID}`
//         );
//         setOverViewData(response.data.data); // Assuming API response is in the format: { data: { ... } }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     if (overViewSmapleID) {
//       fetchData();
//     }
//   }, [overViewSmapleID]);

//   // Function to copy text to clipboard
//   const copyToClipboard = () => {
//     const textToCopy = JSON.stringify(overViewData, null, 2);
//     navigator.clipboard.writeText(textToCopy);
//   };

//   // Function to print the overview
//   const printOverview = () => {
//     window.print();
//   };

//   return (
//     <Drawer
//       title="Overview"
//       placement="right"
//       onClose={closeOverViewDrawer}
//       visible={openOverViewDrawer} // changed open to visible
//       width="medium"
//       className="overview-container" // Add container class
//       footer={
//         <div className="drawer-footer"> {/* added class */}
//           <Button onClick={copyToClipboard}>Copy</Button>
//           <Button onClick={printOverview} type="primary" style={{ marginLeft: 8 }}>
//             Print
//           </Button>
//         </div>
//       }
//     >
//       {overViewData ? (
//         <div className="overview-content"> {/* added class */}
//           {Object.entries(overViewData).map(
//             ([key, value]) =>
//               value !== null &&
//               value !== '' && (
//                 <div className="overview-item"> {/* added class */}
//                   <p key={key} className="overview-label">{`${key.charAt(0).toUpperCase() +
//                     key.slice(1).replace(/_/g, ' ')}:`}</p>
//                   <p className="overview-value">{`${value}`}</p>
//                 </div>
//               )
//           )}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </Drawer>
//   );
// };

// export default OverViewDrawer;






// import React, { useState, useEffect } from 'react';
// import { Drawer, Button, Image } from 'antd'; // Import Image from antd
// import axios from 'axios';
// import '../styles/overViewDrawer.css'; // Import CSS file
// import bvbrclogo from '../assets/bvbrc.png'; // Import bvbrclogo image
// import ncbiLogo from '../assets/ncbi.png'; // Import ncbiLogo image
// import pubMedLogo from '../assets/PubMedLogo.png'; // Import pubMedLogo image

// const OverViewDrawer = ({
//   openOverViewDrawer,
//   closeOverViewDrawer,
//   overViewSmapleID,
// }) => {
//   const [overViewData, setOverViewData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let response = await axios.get(
//           `http://192.168.10.12:7000/api/searchCardOverview/${overViewSmapleID}`
//         );
//         setOverViewData(response.data.data); // Assuming API response is in the format: { data: { ... } }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     if (overViewSmapleID) {
//       fetchData();
//     }
//   }, [overViewSmapleID]);

//   // Function to copy text to clipboard
//   const copyToClipboard = () => {
//     const textToCopy = JSON.stringify(overViewData, null, 2);
//     navigator.clipboard.writeText(textToCopy);
//   };

//   // Function to print the overview
//   const printOverview = () => {
//     window.print();
//   };

//   return (
//     <Drawer
//       title="Overview"
//       placement="right"
//       onClose={closeOverViewDrawer}
//       visible={openOverViewDrawer} // changed open to visible
//       width="medium"
//       className="overview-container" // Add container class
//       footer={
//         <div className="drawer-footer"> {/* added class */}
//           <Button onClick={copyToClipboard}>Copy</Button>
//           <Button onClick={printOverview} type="primary" style={{ marginLeft: 8 }}>
//             Print
//           </Button>
//         </div>
//       }
//     >
//       {overViewData ? (
//         <div className="overview-content"> {/* added class */}
//           {Object.entries(overViewData).map(
//             ([key, value]) =>
//               value !== null &&
//               value !== '' && (
//                 <div className="overview-item"> {/* added class */}
//                   <p key={key} className="overview-label">{`${key.charAt(0).toUpperCase() +
//                     key.slice(1).replace(/_/g, ' ')}:`}</p>
//                   {/* Check if the key is for displaying logo */}
//                   {key === 'bvbrclogo' && value && (
//                     <Image src={bvbrclogo} preview={false} width={100} />
//                   )}
//                   {key === 'ncbiLogo' && value && (
//                     <Image src={ncbiLogo} preview={false} width={100} />
//                   )}
//                   {key === 'pubMedLogo' && value && (
//                     <Image src={pubMedLogo} preview={false} width={100} />
//                   )}
//                   {/* If the key is not for logo, display the value */}
//                   {key !== 'bvbrclogo' && key !== 'ncbiLogo' && key !== 'pubMedLogo' && (
//                     <p className="overview-value">{`${value}`}</p>
//                   )}
//                 </div>
//               )
//           )}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </Drawer>
//   );
// };

// export default OverViewDrawer;



import React, { useState, useEffect } from 'react';
import { Drawer, Button, Image } from 'antd'; // Import Image from antd
import axios from 'axios';
import '../styles/overViewDrawer.css'; // Import CSS file
import bvbrclogo from '../assets/bvbrc.png'; // Import bvbrclogo image
import ncbiLogo from '../assets/ncbi.png'; // Import ncbiLogo image
import pubMedLogo from '../assets/PubMedLogo.png'; // Import pubMedLogo image

const OverViewDrawer = ({
  openOverViewDrawer,
  closeOverViewDrawer,
  overViewSmapleID,
}) => {
  const [overViewData, setOverViewData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          `http://192.168.10.12:7000/api/searchCardOverview/${overViewSmapleID}`
        );
        setOverViewData(response.data.data); // Assuming API response is in the format: { data: { ... } }
      } catch (error) {
        console.log(error);
      }
    };

    if (overViewSmapleID) {
      fetchData();
    }
  }, [overViewSmapleID]);

  // Function to copy text to clipboard
  const copyToClipboard = () => {
    const textToCopy = JSON.stringify(overViewData, null, 2);
    navigator.clipboard.writeText(textToCopy);
  };

  // Function to print the overview
  const printOverview = () => {
    window.print();
  };

  return (
    <Drawer
      title="Overview"
      placement="right"
      onClose={closeOverViewDrawer}
      visible={openOverViewDrawer} // changed open to visible
      width="medium"
      className="overview-container" // Add container class
      footer={
        <div className="drawer-footer"> {/* added class */}
          <Button onClick={copyToClipboard}>Copy</Button>
          <Button onClick={printOverview} type="primary" style={{ marginLeft: 8 }}>
            Print
          </Button>
        </div>
      }
    >
      {overViewData ? (
        <div className="overview-content"> {/* added class */}
          {Object.entries(overViewData).map(
            ([key, value]) =>
              value !== null &&
              value !== '' && (
                <div className="overview-item"> {/* added class */}
                  <p key={key} className="overview-label">{`${key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/_/g, ' ')}:`}</p>
                  {/* Check if the key is for displaying logo */}
                  {key === 'bvbrclogo' && value && (
                    <Image src={bvbrclogo} preview={false} width={100} />
                  )}
                  {key === 'ncbiLogo' && value && (
                    <Image src={ncbiLogo} preview={false} width={100} />
                  )}
                  {key === 'pubMedLogo' && value && (
                    <Image src={pubMedLogo} preview={false} width={100} />
                  )}
                  {/* If the key is not for logo, display the value */}
                  {key !== 'bvbrclogo' && key !== 'ncbiLogo' && key !== 'pubMedLogo' && (
                    <p className="overview-value">{`${value}`}</p>
                  )}
                </div>
              )
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Drawer>
  );
};

export default OverViewDrawer;
