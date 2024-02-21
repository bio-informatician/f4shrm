



import React, { useState, useRef } from 'react';
import { Tooltip } from 'antd';
import '../../styles/Downloads.css';

const BashCommandDisplay = ({ command }) => {
  const [isCopied, setIsCopied] = useState(false);
  const commandRef = useRef(null);

  const handleCopy = async () => {
    if (commandRef.current) {
      try {
        await navigator.clipboard.writeText(command);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 3000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  return (
    <div className="fileTitle">
      <h5>
        Linux/Mac: Open a terminal and download this file to your computer using the following command:
      <pre ref={commandRef} className="bashCommand">
        {command}
      </pre>
      </h5>


    </div>
  );
};

export default BashCommandDisplay;







