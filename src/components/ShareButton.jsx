import React from 'react';
import { useLocation } from 'react-router-dom';

const ShareButton = () => {
  const location = useLocation();
  const currentURL = window.location.origin + location.pathname;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Share this URL',
        url: currentURL,
      });
    } else {
      alert('Copy this URL to share: ' + currentURL);
    }
  };

  return (
    <button onClick={handleShare}>Share URL</button>
  );
};

export default ShareButton;
