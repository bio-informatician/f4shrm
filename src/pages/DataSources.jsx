

import React from 'react';
import { Typography, Table, Tag } from 'antd';
import LicenseImage from '../assets/license.png'; // Import the image
import GithubImage from '../assets/logo/github.png'; // Import the image
import PublicTreeTable from '../pages/aboutUs/PublicTreeTable';

const { Title, Paragraph } = Typography;



const DataSources = () => {
  // Sample data for the first table (replace this with your actual data)

  return (
    <div className="p-8">
      {/* Section 1: Table with four columns and 37 rows */}
      <h1 className="header">Data Sources</h1>
      <Paragraph>Current version: Beta version released 01.01.24</Paragraph>
       <br />
       <h3>Metadata schema</h3>
       <Paragraph>
        Here we list the metadata fields and their descriptions of the current dataset. NV = NCBI Virus, BV = BV-BRC metadata descriptions.
        </Paragraph>



        <style>
        {`
          .header {
            text-align: left;
            font-size: xx-large;
            color: #333;
          }
        `}
      </style>


      <br />
      <div style={{ width: '90%', overflowX: 'visible' }}>
  <PublicTreeTable />
</div>



<br />
      <h3>Data Sources and Data Types:</h3>

<Paragraph>
      <ul>
        <li>
          ICTV
          <ul>
            <li>
              Metadata: taxonomy from the files VMR38 v2 and MSL 38 v3 available at{' '}
              <a href="https://ictv.global/vmr" target="_blank" rel="noopener noreferrer">
                https://ictv.global/vmr
              </a>{' '}
              and{' '}
              <a href="https://ictv.global/msl" target="_blank" rel="noopener noreferrer">
                https://ictv.global/msl
              </a>
              , respectively.
            </li>
          </ul>
        </li>
        <li>
           <a href="https://www.bv-brc.org">BV-BRC</a>
          <ul>
            <li>Nucleotide sequences and metadata (described above) from BV-BRC release v3.32.13a</li>
          </ul>
        </li>
        <li>
          NCBI
          <ul>
            <li>
              <a href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#">NCBI Virus</a> 
              <ul>
                <li>
                  Nucleotide sequences and metadata (described above) from the NCBI Virus release of 12.11.23
                </li>
              </ul>
            </li>
            <li>
              PubMed
              <ul>
                <li>Metadata: pubmed ID</li>
              </ul>
            </li>
            <li>
              Taxonomy
              <ul>
                <li>Metadata: NCBI taxid</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="https://viralzone.expasy.org"> ViralZone</a>
          <ul>
            <li>Metadata: URL to species description pages</li>
          </ul>
        </li>
      </ul>
    </Paragraph>



    <h3>VirJenDB features:</h3>

    <Paragraph>
      <ul>
        <li> Summary statistics and semantic search on the <a href="/">homepage</a> </li>
        <li> Refine your search results using the card and table views </li>
        <li> Browse the <a href=" https://global.ictv">ICTV</a>  taxonomy and link out to relevant ViralZone information pages </li>
        <li> Download virus metadata on the <a href="/Downloads">Downloads</a>  page </li>

   
      </ul>
    </Paragraph>



    <h1 className="header">Infrastructure</h1>

<Paragraph>
VirJenDB is developed as an OpenStack service on the <a href="https://cloud.denbi.de">de.NBI cloud server</a>. Sequences
 will be stored on the <a href="https://dev.aruna-storage.org/provider">Aruna Object Storage</a>. 

  {' '} 
  Our code will be freely available 
  through our GitHub
    <a href="https://github.com/VirJenDB/reproducibility-module">

    {' '} 
          <img src={GithubImage} alt="Github Image" style={{ display: 'inline' }} />
        </a>
        {' '} 
        
     account at a later release.</Paragraph>



      {/* License Section */}
      <h1 className="header">License</h1>

      <Paragraph>
      VirJenDB content is licensed under
        <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1">
           {' '} 
          CC BY 4.0  </a>
        <a href="https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1">
          {' '} 
          <img src={LicenseImage} alt="License Image" style={{ display: 'inline' }} />
        </a>
        {' '} 
         unless otherwise noted.
      </Paragraph>
      <Paragraph>
      “This license requires that reusers give credit to the creator.
       It allows reusers to distribute, remix, adapt,
       and build upon the material in any medium or format, 
       even for commercial purposes.”
      </Paragraph>
      <Paragraph>
        Description of license from{' '}
        <a href="https://creativecommons.org/share-your-work/cclicenses/">
          https://creativecommons.org/share-your-work/cclicenses/
        </a>
      </Paragraph>
    </div>
  );
};

export default DataSources;