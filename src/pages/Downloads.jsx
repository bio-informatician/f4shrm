import React from 'react';
import { Button, Row, Col, Space } from 'antd'; // Import Space component for spacing
import BashCommandDisplay from '../components/Hamedcomponents/BashCommandDisplay';
import '../styles/Downloads.css'; // Import the CSS file

const Downloads = () => {
  const files = [
    {
      name: 'Archaeal Viruses',
      url: 'http://192.168.10.12:7000/api/downloads/vj.v0.1_archaeal_virus.csv.gz',
      description: 'Compressed file containing all available metadata for archaeal viruses.',
      version: '0.1',
      size: '15 KB',
      date:'15.10.2023',
      // date: new Date().toDateString(),
    },
    {
      name: 'SARS-CoV-2',
      url: 'http://192.168.10.12:7000/api/downloads/vj.v0.1_sars_cov_2.csv.gz',
      description: 'Compressed file containing all available metadata for SARS-CoV-2.',
      version: '0.1',
      size: '43 MB',
      date:'15.10.2023',
    },
    {
      name: 'NonSARS-CoV-2',
      url: 'http://192.168.10.12:7000/api/downloads/vj.v0.1_nansars_cov_2.csv.gz',
      description: 'Compressed file containing all available metadata for Non-SARS-CoV-2.',
      version: '0.1',
      size: '43 MB',
      date:'15.10.2023',
    },
    {
      name: 'Influenza A virus',
      url: 'http://192.168.10.12:7000/api/downloads/vj.v0.1_influenza_A_virus.csv.gz',
      description: 'Compressed file containing all available metadata for Influenza A virus.',
      version: '0.1',
      size: '12 MB',
      date:'15.10.2023',
    },
    {
      name: 'Bacteriophages',
      url: 'http://192.168.10.12:7000/api/downloads/vj.v0.1_bacteriophages.csv.gz',
      description: 'Compressed file containing all available metadata for Bacteriophages.',
      version: '0.1',
      size: '950 KB',
      date:'15.10.2023',
    },
    // Add more files as needed
  ];
  

  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  const handleDownloadAll = () => {
    window.open('http://192.168.10.12:7000/api/downloads/vj.v0.1_allmetadata.csv.gz', '_blank');
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text successfully copied to clipboard');
      })
      .catch((error) => {
        console.error('Unable to copy text to clipboard: ', error);
      });
  };
  const pageStyles = {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyles = {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '30px',
  };

  const paragraphStyles = {
    textAlign: 'justify',
    fontSize: '18px',
    margin: '0 auto 30px',
    maxWidth: '800px',
    lineHeight: '1.6',
    color: '#333',
  };

  const linkStyles = {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginLeft: '5px',
  };

  const bashCommand = 'wget -c http://192.168.10.12:7000/api/downloads/vj.v0.1_allmetadata.csv.gz --no-check-certificate';


 
  return (
    <div className="pageStyles">
      <h1 className="headerStyles">Welcome to the VirJenDB Download Page!</h1>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        {/* <p className="paragraphStyles">
          Explore a treasure trove of essential virus-related metadata, meticulously curated and made easily accessible for virologists and 
          scientists worldwide. Our database contains a comprehensive collection of vital information, including virus names, descriptions,
           versions, release dates, file sizes, and formats. Whether you are researching archaea, coronavirus, influenza, or phage,
            you'll find all the necessary data at your fingertips.
          <br />
          <span className="boldText">Stay at the forefront of virus research with VirJen, your trusted partner in the world of virology.</span>
          <br /> */}
          {/* <span className="fontSize16">
            For more information, visit our <a href="#your-link" className="linkStyles">website</a>.
          </span> */}
        {/* </p> */}
      </Col>
      <Row gutter={[16, 16]}>
      {files.map((file) => (
  <Col xs={24} sm={24} md={12} lg={6} xl={6} key={file.name}>
    <div className="fileCard">
      <h2 className="fileTitle">{file.name}</h2>
      <Space direction="vertical" size="small">
        <Button
          type="primary"
          style={{ width: '100%' }}
          onClick={() => handleDownload(file.url)}
        >
          Download
        </Button>
        <p className="fileInfo">Description: {file.description}</p>
        <p className="fileInfo">Version: {file.version}</p>
        <p className="fileInfo">Release Date: {file.date}</p>
        <p className="fileInfo">Size: {file.size}</p>
        <p className="fileInfo">Format: CSV.gz</p>
      </Space>
    </div>
  </Col>
))}

<Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="downloadAllCard">
            <h2 className="downloadAllTitle">Download All Metadata</h2>
            <Button type="primary" style={{ width: '30%' }} onClick={handleDownloadAll}>
              Download All
            </Button>

<div>
             {/* Include information for Download All Metadata */}
             <Space direction="vertical" size="small">
              <p className="fileInfo">Description: Compressed file containing all available metadata for all viruses.</p>
              <p className="fileInfo">Version: 0.1</p>
              <p className="fileInfo">Release Date: {files[0].date} (Last updated)</p>
              {/* You may customize the Size and Format information based on your actual combined file */}
              <p className="fileInfo">Size: . MB </p>
              <p className="fileInfo">Format: CSV.gz</p>
            </Space>
</div>
<br />
            <BashCommandDisplay command={bashCommand} />
            {/* Add a copy to clipboard button or icon */}
            <Button onClick={() => handleCopyToClipboard(bashCommand)}>
              Copy to Clipboard
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Downloads;























