
import React, { useState, useEffect } from "react";
import { Typography, Image } from "antd";
import axios from "axios";
import HomePageTable from "../components/HomePageTable";

import "../styles/AboutUsStyles.css";

const { Paragraph, Link, Text } = Typography;

const AboutUs = () => {
  // State to store table data
  const [tableData, setTableData] = useState([]);

  // Fetch table data function
  const fetchTableData = async () => {
    try {
      const response = await axios.get(
        "http://192.168.10.12:7000/api/statsSummary/"
      );

      if (response.status === 200) {
        const data = response.data.map((item, index) => ({
          key: index,
          name:
            item.name === "# Families"
              ? "Family"
              : item.name === "# Genera"
              ? "Genera"
              : item.name === "# Species"
              ? "Species"
              : item.name === "# virus seg."
              ? "Virus seg"
              : item.name,
          count: item.count,
        }));

        setTableData(data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <div className="about-us-container">
      <div className="section-container">
      <h1 className="header">About Us</h1>
        {/* <h2>Mission</h2> */}
        <Paragraph className="paragraph-container">
        The VirJenDB team aims to provide a community-driven platform for researchers to find, access, curate,
         download and analyze sequences and (meta)data from all viruses. 
         <br />
         <br />

         Read the latest news on our <a href="/News">News</a>  page.
        </Paragraph>

      </div>
      <div className="section-container">

      <h1 className="header">Project Plan</h1>
        <Image
          src="src/assets/Fair.jpg"
          alt="Project Plan"
          preview={false}
          style={{
            maxWidth: "100%",
            width: "100%",
            marginTop: "10px",
            display: "block",
            margin: "0 auto",
          }}
        />

      </div>

      <div className="section-container">
      <h1 className="header">Team</h1>
        <Paragraph className="paragraph-container">
          <ul>
           
            <li>
              <Text strong>Dr. Noriko Cassman</Text> (Junior Group Leader, coordinator, content, data curation, outreach)
            </li>
            <li>
              <Text strong>Shahram Saghaei, MSc</Text> (PhD Candidate; backend developer, server architect, data ingestion, outreach)
            </li>
            <li>
              <Text strong>Hamed Ziraksaz, MSc</Text> (student; frontend developer)
            </li>
            <li>
              <Text strong>Sarah Krautwurst, MSc</Text> (PhD Candidate; outreach)
            </li>
            <li>
            <Text strong>Prof. Dr. Manja Marz</Text> (Principal Investigator, coordinator, outreach |{" "}
      <Link href="https://rna.uni-jena.de/" target="_blank" rel="noopener noreferrer">
        https://rna.uni-jena.de/
      </Link>)
            </li>
          </ul>
        </Paragraph>    
         
      </div>




      <div className="section-container">
      <h1 className="header">History</h1>
      <Paragraph className="paragraph-container">
        The NFDI4Microbiota consortium (
        <Link href="https://www.nfdi4microbiota.de" target="_blank" rel="noopener noreferrer">
          https://www.nfdi4microbiota.de
        </Link>
        ) is a DFG-funded (
        <Link href="https://www.dfg.de" target="_blank" rel="noopener noreferrer">
          https://www.dfg.de
        </Link>
        ) project involving 10 institutions or universities from all over Germany, constituting research groups with
         a focus on microbiology, virology, and bioinformatics. 
        The NFDI4Microbiota aims to be the central hub in Germany for supporting the microbiology community with
         FAIR and Open infrastructure, access to data, analysis services, data/metadata standards, and training.
          As a part of the NFDI4Microbiota, the VirJenDB project began in 2021 at the Friedrich Schiller University in Jena, Germany (
        <Link href="https://www.uni-jena.de" target="_blank" rel="noopener noreferrer">
          https://www.uni-jena.de
        </Link>
        ).
      </Paragraph>
      <br />
      <br />
      <Paragraph className="paragraph-container">
      VirJenDB is a service of the{" "}
          <Link href="https://www.nfdi4microbiota.de" target="_blank" rel="noopener noreferrer">
            NFDI4Microbiota,
        </Link>{" "}
        funded by
        {" "}
        <Link href="https://www.dfg.de" target="_blank" rel="noopener noreferrer">
         DFG 
        </Link>{" "}
        grant number NFDI 28/1
      </Paragraph>
       
      </div>
{/* 
      <div className="section-container">
      <h1 className="header">Funding</h1>
      <Paragraph className="paragraph-container">
          <Link href="https://www.nfdi4microbiota.de" target="_blank" rel="noopener noreferrer">
          The NFDI4Microbiota,
        </Link>{" "}
        {" "}
        <Link href="https://www.dfg.de" target="_blank" rel="noopener noreferrer">
         DFG 
        </Link>{" "}
        number NFDI 28/1
      </Paragraph>
       
      </div> */}


    </div>
  );
};

export default AboutUs;

