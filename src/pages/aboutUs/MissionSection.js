import React from "react";
import { Typography, Image } from "antd";

const { Paragraph } = Typography;

const MissionSection = () => {
  return (
    <div className="section-container">
      <h2>Mission</h2>
      <Paragraph className="paragraph-container">
        VirJenDB aims to provide entry-level, user-friendly access to
        publicly accessible virus sequences and related metadata. By adhering
        to the FAIR principles and Open Science guidelines, we strive to
        encourage the reuse of valuable sequencing data to help answer
        virus-related research questions.
      </Paragraph>
      <Image
        src="src/assets/Fair.jpg"
        alt="Project Plan"
        preview={false}
        style={{ maxWidth: "100%", width: "100%", marginTop: "10px", display: "block", margin: "0 auto" }}
      />
    </div>
  );
};

export default MissionSection;
