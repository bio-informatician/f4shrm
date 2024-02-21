import React from 'react';
import { Button, Space, Tooltip } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const MostSearchedSection = ({
  mostSearchedItems,
  onSearchItemClick,
  onDownloadItemClick,
}) => {
  // Tooltips for each button
  const tooltips = ['Tooltip 1', 'Tooltip 2', 'Tooltip 3', 'Tooltip 4'];

// Function to generate download URLs based on the item key
const generateDownloadUrl = (item) => {
  const baseUrl = 'http://192.168.10.12:7000/api/downloads/';
  switch (item.key) {
    case 'archaea': 
      return `${baseUrl}archaea.csv`;
    case 'coronavirus':
      return `${baseUrl}coronavirus.csv`;
    case 'influenza':
      return `${baseUrl}influenza.csv`;
    case 'phage':
      return `${baseUrl}phage.csv`;
    case 'SARS-CoV-2':
      return `${baseUrl}SARS-CoV-2.csv`; // Add this case
    default:
      return '';
  }
};


  const handleDownloadClick = async (e, item) => {
    e.preventDefault();
    const downloadUrl = generateDownloadUrl(item);

    if (downloadUrl) {
      try {
        // Use the Fetch API to initiate the download
        const response = await fetch(downloadUrl);
        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `${item.key}.csv`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          console.error('Download request failed');
        }
      } catch (error) {
        console.error('An error occurred during download:', error);
      }
    } else {
      console.error('Invalid download URL');
    }
  };

  return (
    <div className="w-full flex gap-x-5 justify-center items-center recomeSearch">
      {mostSearchedItems.map((item, index) => (
        <div key={item.key} style={{ display: 'flex', flexDirection: 'column' }}>
          <Button
            onClick={() => onSearchItemClick(item)}
            style={{
              backgroundColor: '#1677FF',
              borderColor: '#1677FF',
              color: 'white',
            }}
          >
            {item.key}
          </Button>
          {/* <Tooltip title={tooltips[index]}>
             <Button
              icon={<DownloadOutlined />}
              onClick={(e) => handleDownloadClick(e, item)}
            /> 
          </Tooltip> */}
        </div>
      ))}
    </div>
  );
};

export default MostSearchedSection;







