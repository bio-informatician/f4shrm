import React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

const AmbassadorSection = () => {
  return (
    <div className="section-container">
      <h2>NFDI4Microbiota Ambassadors</h2>
      <Paragraph className="paragraph-container">
        Are you a PhD student or postdoc at one of the NFDI4Microbiota
        institutes? Are you interested in FAIRness and Open Science? Become an
        NFDI4Microbiota Ambassador{" "}
        <a href="https://nfdi4microbiota.de">here</a>!
      </Paragraph>
    </div>
  );
};

export default AmbassadorSection;
