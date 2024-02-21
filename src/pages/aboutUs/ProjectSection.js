import React from "react";
import { Typography } from "antd";

const { Paragraph, Link } = Typography;

const ProjectSection = () => {
  return (
    <div className="section-container">
      <h2>Project</h2>
      <Paragraph className="paragraph-container" style={{ textAlign: "justify" }}>
        The VirJenDB is a DFG-funded project developed at the Friedrich Schiller University in Jena, Germany.
        Development started in 2021 as a part of the NFDI4Microbiota consortium.
        The NFDI4Microbiota consortium comprises 10 institutions or universities from all over Germany,
        constituting research groups with a focus on microbiology, virology, and bioinformatics.
        We aim to be the central hub in Germany for supporting the microbiology community with infrastructure,
        access to data, analysis services, data/metadata standards, and
        <Link href="https://nfdi4microbiota.de/training/training"> training</Link>.
      </Paragraph>
      {/* Add logos for partner institutes */}
      {/* Add links for logos */}
      {/* ... Partners section content ... */}
    </div>
  );
};

export default ProjectSection;
