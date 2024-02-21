


// import React, { useEffect, useState } from 'react';
// import { Breadcrumb } from 'antd';
// import { useCookies } from 'react-cookie';

// const CustomBreadcrumb = ({ route, goToSpecialRoute }) => {
//   const [cookies, setCookie] = useCookies(['breadcrumbHistory']);
//   const [breadcrumbHistory, setBreadcrumbHistory] = useState([]);

//   // When the route changes, update the breadcrumb history and store it in cookies
//   useEffect(() => {
//     // Update the breadcrumb history
//     setBreadcrumbHistory(route);

//     // Store the breadcrumb history as a JSON string in cookies
//     setCookie('breadcrumbHistory', JSON.stringify(route), { path: '/' });
//   }, [route, setCookie]);

// // When the component mounts, check if there's breadcrumb history in cookies
// useEffect(() => {
//   const storedBreadcrumbHistory = cookies.breadcrumbHistory;

//   if (storedBreadcrumbHistory) {
//     console.log('Raw breadcrumb history:', storedBreadcrumbHistory); // Log the raw data
//     try {
//       // Attempt to parse the JSON data from cookies
//       const parsedHistory = JSON.parse(storedBreadcrumbHistory);
//       console.log('Parsed breadcrumb history:', parsedHistory);
//       setBreadcrumbHistory(parsedHistory);
//     } catch (error) {
//       // Handle JSON parsing error (e.g., if the data is not valid JSON)
//       console.error('Error parsing breadcrumb history:', error);
//       // You may want to set a default value or handle the error in another way
//     }
//   }
// }, [cookies]);


//   return (
//     <Breadcrumb separator=">">
//       {breadcrumbHistory.map((item, index) => (
//         <Breadcrumb.Item key={index} onClick={() => goToSpecialRoute(item)}>
//           {item.parent} > {item.child}
//         </Breadcrumb.Item>
//       ))}
//     </Breadcrumb>
//   );
// };

// export default CustomBreadcrumb;
