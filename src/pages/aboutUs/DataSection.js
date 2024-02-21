import React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

const DataSection = () => {
  return (
    <div className="section-container">
      <h2>Current Data Types, Services, and Sources</h2>
      <Paragraph className="paragraph-container">
        Update 24.07.23 Beta version
        {/* ... Data content ... */}
      </Paragraph>
    </div>
  );
};

export default DataSection;
