import React from 'react';
import '../styles/News.css'; // Import your CSS for styling

const News = () => {
  return (
    <div className="news-container">
      <div className="header">
        <h1>Latest News</h1>
        <p className="date">10.02.24</p>
      </div>
      <div className="content">
        <p className="intro">
          The VirJenDB is a service of the NFDI4Microbiota. We aim to build a platform to enable virological analysis of all viruses in a findable, accessible, interoperable, and reproducible way in line with open science principles. With the beta release, we present the infrastructure and initial dataset of virus metadata from more than 8 million viruses from 4 data sources.
        </p>
        <div className="features">
          <h2>Key Features:</h2>
          <ul>
            <li>Summary statistics and semantic search on the homepage</li>
            <li>Refine your search results using the card and table views</li>
            <li>Browse the ICTV taxonomy and link out to relevant ViralZone information pages</li>
            <li>Download virus metadata on the Downloads page</li>
          </ul>
        </div>
        <div className="data-sources">
          <h2>Data Sources:</h2>
          <ul>
            <li>ICTV</li>
            <li>BV-BRC</li>
            <li>NCBI</li>
            <li>ViralZone</li>
          </ul>
        </div>
        <div className="summary">
          <h2>Summary:</h2>
          <ul>
            <li>33 metadata fields</li>
            <li>12,576,545 virus records</li>
            <li>264 virus families, 2,818 genera and 4,820 species represented</li>
          </ul>
        </div>
      </div>
      <p>
      For more information please visit the dedicated <a href="../DataSources">Data Sources</a>  page.
      </p>

      <div className="footer">
        <h4 className='data-sources'>      Note that this is the beta version! </h4>
        <p className="note">
          We welcome your constructive feedback and feature wishes as well as requests to join our github to contribute: <a href="mailto:virjendb@uni-jena.de">virjendb [at] uni-jena.de</a>.
        </p>
      </div>
    </div>
  );
};

export default News;












