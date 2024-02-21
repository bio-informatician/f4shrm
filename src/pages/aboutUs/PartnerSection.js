import React from "react";
import { Typography, Image, Link } from "antd";

const { Paragraph } = Typography;

const PartnerSection = () => {
  return (
    <div className="section-container">
      <h2>Partners</h2>
      <div className="partnerslinks">
        {/* Add partner sections here */}
        {/* Example: */}
        <div className="notifications">
          <Image
            src="src/assets/partners/Bielefeld.png"
            alt="Logo Bielefeld"
            style={{ width: "100px" }} // Set the width to the desired value, for example, 100px
          />
          <Link href="https://www.uni-bielefeld.de/" target="_blank">
            <p>Bielefeld University</p>
          </Link>
          <Paragraph>Prof. Dr. Alexander Sczyrba & Prof. Dr. Jens Stoye</Paragraph>
        </div>
        {/* ... Add more partner sections ... */}
      </div>

      <div className="section-container">
        <h2>Links</h2>
        <Paragraph className="paragraph-container">
          <ul>
            <li>
              FSU Jena: <Link href="https://www.uni-jena.de">uni-jena.de</Link>
            </li>
            <li>
              NFDI4Microbiota: <Link href="https://nfdi4microbiota.de">nfdi4microbiota.de</Link>
            </li>
            <li>
              Deutsche Forschungsgemeinschaft (DFG), German public science funding body:{" "}
              <Link href="https://www.dfg.de">dfg.de</Link>
            </li>
            {/* ... Add more links ... */}
          </ul>
        </Paragraph>
      </div>
      {/* ... Ambassador section content ... */}
    </div>
  );
};

export default PartnerSection;
