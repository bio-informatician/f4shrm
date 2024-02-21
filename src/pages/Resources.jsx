

import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import '../styles/Resources.css'; // Import your styles here

const { Search } = Input;

const Resources = () => {
  const [links, setLinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('src/assets/links/links.json') // Replace with the actual path to your JSON file
      .then(response => response.json())
      .then(data => {
        setLinks(data);
      })
      .catch(error => {
        console.error('Error reading and parsing the JSON file:', error);
      });
  }, []);

  const handleSearch = (value) => {
    setSearchTerm(value.toLowerCase());
  };

  const highlightSearchTerm = (text) => {
    if (!searchTerm.trim()) return text;
    const regex = new RegExp(searchTerm, 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
  };


  const paragraphStyle = {
    maxWidth: 'auto',
    margin: '0 auto',
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#333',
  };

  const linkStyle = {
    color: '#007BFF',
    fontWeight: 'bold',
    textDecoration: 'none',
  };



  return (
    <div className="useful-links-container">
    <div style={paragraphStyle}>
      <p>
        On this page, you will find links to resources for virus researchers, including database catalogs, knowledge databases, repositories, metadata standards, genomic and proteomic sequence databases, other -omics databases, and virus-specific databases. This list is based on our recent review of virus databases found here: <a href="https://www.doi.org/10.3390/v15091834" target="_blank" rel="noopener noreferrer" style={linkStyle}>https://www.doi.org/10.3390/v15091834</a>. For more information on microbiological and research data management topics, please visit the NFDI4Microbiota Knowledge Base: <a href="https://knowledgebase.nfdi4microbiota.de" target="_blank" rel="noopener noreferrer" style={linkStyle}>https://knowledgebase.nfdi4microbiota.de</a>
      </p>

      </div>
  <h2 className="search-topic" style={{ fontWeight: 'normal' }}>Search within related links</h2>
          <Search
            placeholder="Search for a term in databases..."
            onChange={(e) => handleSearch(e.target.value)}
            value={searchTerm}
            style={{ width: '100%', marginBottom: '16px' }} // Apply width directly to Search component
          />
      <div className="search-bar">
        <div className="custom-search"> {/* Wrap the Search component in a custom div */}

        </div>
      </div>
      {links.map((category, index) => (
        <div key={index} className={`link-category ${category.category}`}>
          <h2>{category.category.replace(/_/g, ' ')}</h2>
          <div className="link-card-container">
            {category.links
              .filter(link => link.description.toLowerCase().includes(searchTerm))
              .map((link, linkIndex) => (
                <div key={linkIndex} className="link-card">

                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                  <img src={link.logo} alt="Logo" className="logo" />
                    <span dangerouslySetInnerHTML={{ __html: highlightSearchTerm(link.description) }} />
                  </a>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resources;


