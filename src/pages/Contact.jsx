import React from "react";
import { Typography } from "antd";
import "../styles/AboutUsStyles.css";
// import HorizontalChart from "../components/HorizentalChart";

const { Paragraph, Link } = Typography;

const Contact = () => {
  return (
    <div className="about-us-container">
      <h2>Contact</h2>
      <Paragraph className="paragraph-container">
        We are in continuous development and welcome all your critical feedback of our resource! Please send all your VirJenDB-related questions, comments, and concerns to:{" "}
        <Link href="mailto:virjendb@uni-jena.de">virjendb@uni-jena.de</Link>
      </Paragraph>
    </div>
  );
};

export default Contact;
