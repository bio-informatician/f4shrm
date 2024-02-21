
// Import necessary libraries and components
import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const Legals = () => {
  return (

<div className="section-container">

<h1 className="header">Legal documents</h1>



      <Paragraph>
      Your use of the VirJenDB website is subject to the FSU Jena Privacy Policy, Impressum, and Accessibility statements which are linked below.      <br />  Privacy Policy (in German):{' '}
        <a href="https://www.uni-jena.de/datenschutz" target="_blank" rel="noopener noreferrer">
       https://www.uni-jena.de/datenschutz        </a>
        {' '}
        <br /> Impressum (in German): {' '}

        <a href="https://www.uni-jena.de/impressum" target="_blank" rel="noopener noreferrer">
          https://www.uni-jena.de/impressum
        </a>
        <br /> 
        Accessibility (in German): {' '}
        
        <a href="https://www.uni-jena.de/erklaerung-zur-barrierefreiheit" target="_blank" rel="noopener noreferrer">
           https://www.uni-jena.de/erklaerung-zur-barrierefreiheit
        </a>{' '}
        
      </Paragraph>
      <Paragraph>
      Current version v0.1: Note that the content and features of the VirJenDB website in the beta version are subject to continual changes.
        </Paragraph>      
      
      
      
      <br />
      <br />
      <h1 className="header">Terms of use</h1>

      <Paragraph>
      The information presented on the website undergoes careful verification for accuracy and is consistently updated. Nevertheless, we cannot ensure the completeness, correctness, and timeliness of the content. Claims for liability related to any damage resulting from the use of provided information, whether incomplete or incorrect, will be declined. Our website includes links to other pages on the internet, and we want to clarify that we have no control over the content and design of these external pages. Hence, we explicitly disassociate ourselves from
       all linked content on our homepage and assume no responsibility for such content. This disclaimer is applicable to all the links featured on our website.
      </Paragraph>


    </div>
  );
};

export default Legals;