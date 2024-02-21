// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TotalCountApp = () => {
//   const [totalCount, setTotalCount] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://192.168.10.12:7000/card/${value ? value : state.value}');
//         const { totalcount } = response.data.data[0];

//         setTotalCount(totalcount);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Total Count: {totalCount}</h1>
//     </div>
//   );
// };

// export default TotalCountApp;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TotalCountApp = () => {
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.10.12:7000/api/searchAdvCard/');
        const { totalcount } = response.data;

        setTotalCount(totalcount);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Total Count: {totalCount}</h1>
    </div>
  );
};

export default TotalCountApp;
