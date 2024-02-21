import React from "react";
import { Typography, Link } from "antd";

const { Paragraph, Text } = Typography;

const TeamSection = () => {
  return (
    <div className="section-container">
      <h2>Team</h2>
      <Paragraph className="paragraph-container">
        <ul>
          <li>
            <Text strong>Prof. Dr. Manja Marz</Text> (Principal Investigator, coordinator)
          </li>
          <li>
            <Text strong>Dr. Noriko Cassman</Text> (Junior Group Leader, coordinator & curator)
          </li>
          <li>
            <Text strong>Shahram Saghaei, MSc</Text> (PhD Candidate; developer)
          </li>
          <li>
            <Text strong>Hamed Ziraksaz, MSc</Text> (student; developer)
          </li>
        </ul>
      </Paragraph>

      <div className="section-container">
        <h2>Links</h2>
        <Paragraph className="paragraph-container">
          <ul>
            <li>
              Marz group @ FSU: <Link href="https://rna.uni-jena.de">rna.uni-jena.de</Link>
            </li>
            {/* ... Add more links ... */}
          </ul>
        </Paragraph>
      </div>
    </div>
  );
};

export default TeamSection;
