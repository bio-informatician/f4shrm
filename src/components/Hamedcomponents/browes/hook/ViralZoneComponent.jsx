import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViralZoneIframe from './ViralZoneIframe'; // Import your ViralZoneIframe component

const ViralZoneComponent = () => {
  const [viralZoneUrl, setViralZoneUrl] = useState('');

  const fetchDataForIframe = async (key) => {
    try {
      let response = await axios.get(`http://192.168.10.12:7000/api/browse/${key}`);
      let { data } = response;

      if (data && data.length > 0) {
        let url = `https://viralzone.expasy.org/${data[0][key]}`;
        setViralZoneUrl(url);
      }
    } catch (error) {
      console.error('Error occurred:', error);
      // Handle the error, e.g., set an error state
    }
  };

  useEffect(() => {
    const fetchVzoneData = async () => {
      try {
        let response = await axios.get('http://192.168.10.12:7000/vzone/');
        let { data } = response;

        for (let key in data.family) {
          if (data.family[key] !== 0 && data.genus[key]) {
            fetchDataForIframe(key);
            break;
          }
        }
      } catch (error) {
        console.error('Error occurred:', error);
        // Handle the error, e.g., set an error state
      }
    };

    fetchVzoneData();
  }, []);

  return (
    <div>
      {/* Display ViralZoneIframe if viralZoneUrl is not empty */}
      {viralZoneUrl && <ViralZoneIframe url={viralZoneUrl} />}
    </div>
  );
};

export default ViralZoneComponent;
