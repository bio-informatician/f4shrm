
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VZoneAPI = ({ taxonomy, children }) => {
  const [taxId, setTaxId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.10.12:7000/vzone/');
        const taxonomyData = response.data.find((item) => item[taxonomy] > 0);

        if (taxonomyData) {
          setTaxId(taxonomyData[taxonomy]);
        }
      } catch (error) {
        console.error('Error occurred:', error);
      }
    };

    fetchData();
  }, [taxonomy]);

  return children(taxId);
};

export default VZoneAPI;











// import React from 'react';

// const ViralZoneIframe = ({ url }) => {
//   return (
//     <div style={{ width: '100%', height: '500px' }}>
//       <iframe
//         src={url}
//         title="ViralZone"
//         width="100%"
//         height="100%"
//         frameBorder="0"
//         allowFullScreen
//       />
//     </div>
//   );
// };

// export default ViralZoneIframe;


// import React from 'react';

// const ViralZoneIframe = ({ url }) => {
//   return (
//     <div style={{ width: '100%', height: '500px' }}>
//       <iframe
//         src={url}
//         title="ViralZone"
//         width="100%"
//         height="100%"
//         frameBorder="0"
//         allowFullScreen
//       />
//     </div>
//   );
// };

// export default ViralZoneIframe;







// import React from 'react';
// import Iframe from 'react-iframe';

// const ViralZoneIframe = ({ taxId }) => {
//   return (
//     <Iframe
//       url={`http://192.168.10.12:7000/vzone/${taxId}`}
//       width="100%"
//       height="100%"
//       position="relative"
//     />
//   );
// };

// export default ViralZoneIframe;





// import React from 'react';
// import { Tag, Tooltip, Button } from 'antd';
// import { InfoCircleOutlined, AppstoreOutlined } from '@ant-design/icons';
// import Iframe from 'react-iframe';

// const ViralZoneIframe = ({ name, value, count, onClick, onViewDetails }) => {
//   return (
//     <div className="flex flex-row items-center justify-between tag-box">
//       <Tag
//         color={name === 'Species' ? '#f0f0f0' : '#88d9e6'}
//         className="flex items-center justify-center w-full cursor-pointer tag-class whitespace-pre-wrap"
//         onClick={onClick}
//       >
//         <div className="flex items-center gap-x-2 custom-tooltip">
//           <span className={'flex items-center justify-center py-2 text-base'} style={{ color: 'black' }}>
//             {value}
//           </span>
//           {count > 0 && (
//             <Tooltip
//               title={<Iframe url={`http://192.168.10.12:7000/vzone/${count}`} width="100%" height="100%" position="relative" />}
//               overlayInnerStyle={{
//                 width: '11.7rem',
//                 height: '11.7rem',
//               }}
//             >
//               <InfoCircleOutlined style={{ color: 'black', fontSize: '20px' }} />
//             </Tooltip>
//           )}
//         </div>
//       </Tag>
//       {name !== 'Species' && (
//         <Button
//           style={{
//             minHeight: '2.625rem',
//             minWidth: '2rem',
//           }}
//           type="primary"
//           icon={
//             <div className="flex flex-row justify-center items-center">
//               <Tooltip title="Card view of all sample records belonging to any species under this rank name">
//                 <AppstoreOutlined style={{ fontSize: '24px' }} />
//               </Tooltip>
//             </div>
//           }
//           onClick={onViewDetails}
//         />
//       )}
//     </div>
//   );
// };

// export default ViralZoneIframe;






// import React from 'react';
// import { Tooltip } from 'antd';
// import { InfoCircleOutlined } from '@ant-design/icons';

// const TaxonLink = ({ taxId }) => {
//   const viralzoneUrl = `https://viralzone.expasy.org/${taxId}`;
  
//   return (
//     <Tooltip title="Additional Information in viralzone.expasy.org">
//       <a href={viralzoneUrl} target="_blank" rel="noopener noreferrer">
//         <InfoCircleOutlined style={{ color: 'black', fontSize: '20px' }} />
//       </a>
//     </Tooltip>
//   );
// };

// export default TaxonLink;
