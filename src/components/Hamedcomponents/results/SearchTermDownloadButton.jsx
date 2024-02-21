import React, { useState, useRef } from 'react';
import { Button, message } from 'antd';
import { DownloadOutlined, SearchOutlined } from '@ant-design/icons';

const SearchTermDownloadButton = ({ searchedTerm }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const downloadInProgress = useRef(false);

  const handleDownloadClick = () => {
    if (!searchedTerm || downloadInProgress.current) {
      message.error(
        'Please enter a search term before downloading or wait for the current download to finish.'
      );
      return;
    }

    downloadInProgress.current = true;
    setIsDownloading(true);
    message.info('Download starting...'); // Show download starting message

    const encodedSearchTerm = encodeURIComponent(searchedTerm);
    const downloadUrl = `http://192.168.10.12:7000/api/downloadsCSV/${encodedSearchTerm}`;

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', 'searched_term.csv');

    link.addEventListener('click', () => {
      setIsDownloading(true);
    });

    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      setIsDownloading(false);
      downloadInProgress.current = false;
      // message.success('File downloaded successfully.');
      document.body.removeChild(link);
    }, 10000); // Wait for 10 seconds to check if the download is completed
  };

  return (
    <Button
      type="primary"
      // className="mb-2"
      onClick={handleDownloadClick}
      loading={isDownloading}
      disabled={isDownloading || !searchedTerm}
      icon={<DownloadOutlined />}
    >
      {isDownloading ? 'Downloading...' : 'Download All Results'}
    </Button>
  );
};

export default SearchTermDownloadButton;
