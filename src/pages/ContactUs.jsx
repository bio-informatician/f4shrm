
// import React from 'react';
// import { Card, Typography, Col, Row } from 'antd';
// import { MailOutlined, CalendarOutlined,LinkOutlined } from '@ant-design/icons';

// import '../styles/ContactStyles.css';

// const { Title, Text } = Typography;

// const ContactUs = () => {
//     const cardData = [
//         // {
//         //     title: 'Prof. Dr. Manja Marz',
//         //     description: '(Principal Investigator, coordinator)',
//         //     image: 'src/assets/contacts/manja.jpeg', // Personal image for Prof. Dr. Manja Marz
//         // },
//         // {
//         //     title: 'Dr. Noriko Cassman',
//         //     description: ' (Junior Group Leader, coordinator; TBD)',
//         //     image: 'src/assets/contacts/nori.jpeg', // Personal image for Title 2
//         // },
//         // {
//         //     title: 'Shahram Saghaei, MSc',
//         //     description: ' (PhD Candidate; developer)',
//         //     image: 'src/assets/contacts/shahram.jpeg', // Personal image for Title 2
//         // },
//         // {
//         //     title: 'Hamed Ziraksaz, MSc',
//         //     description: '(student; developer)',
//         //     image: 'src/assets/contacts/hamed.jpeg', // Personal image for Title 2
//         // },
//         // {
//         //     title: 'Sarah Krautwurst, MSc',
//         //     description: '  (PhD Candidate; outreach)',
//         //     image: 'src/assets/contacts/sarah.jpeg', // Personal image for Title 2
//         // },
//     ];
//  return (
//     <div className="contact-container">
//       <div className="glass-pane">
//         <Row gutter={[16, 32]} justify="center">
//           {cardData.map((card, index) => (
//             <Col key={index} xs={24} md={8}>
//               <Card
//                 hoverable
//                 cover={<img alt={`Card Image ${index + 1}`} src={card.image} className="card-image" />}
//                 style={{ marginBottom: 20, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
//               >
//                 <Title level={4}>{card.title}</Title>
//                 <Text>{card.description}</Text>
//               </Card>
//             </Col>
//           ))}
//           <Col xs={24} md={24}>
//             <Title level={2} style={{ color: '#000000' }}>
//               Contacts
//             </Title>
//             <hr />
//             <div style={{ color: '#000000', marginTop: '5px' }}>
//               <h1>We welcome your feedback! Please direct all questions, comments, and feedback to our email address.</h1>
//             </div>
//             <Text style={{ color: '#000000' }}>
//               <MailOutlined /> Email: virjendb@uni-jena.de
//             </Text>

//             <br />
//             <br />
//             <div style={{ color: '#000000' }}>
//               <h1>Come talk to us at upcoming virus conferences:</h1>
//               <ul>
//                 <li><CalendarOutlined /> <a href="https://evbc.uni-jena.de/events/vibiom2024/">ViBiom 2024</a></li>
//                 <li><CalendarOutlined /> <a href="https://virology-meeting.de/">GfV 2024</a></li>
//                 <li><CalendarOutlined /> <a href="https://gcb2024.de/">GCB 2024</a></li>
//               </ul>
//               <h1> EVBC virus events calendar:</h1>
//               <Text style={{ color: '#000000' }}>
//                 <a href="https://evbc.uni-jena.de/events/" style={{ color: '#000000' }}>
//                   {' '}
//                   <LinkOutlined/>   https://evbc.uni-jena.de/events/



//                 </a>
//               </Text>
//             </div>
//             <br />
//             <br />
//             {/* <Text style={{ color: '#000000' }}>© Jenaparadies.de | Andre Gräf</Text> */}
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;







import React from 'react';
import { Card, Typography, Col, Row } from 'antd';
import { MailOutlined, CalendarOutlined, LinkOutlined } from '@ant-design/icons';

import '../styles/ContactStyles.css';

const { Title, Text } = Typography;

const ContactUs = () => {
  const cardData = [
    // ... (existing card data)
  ];

  return (
    <div className="contact-container">
      <div className="glass-pane">
        <Row gutter={[16, 32]} justify="center">
          {cardData.map((card, index) => (
            <Col key={index} xs={24} md={8}>
              <Card
                hoverable
                cover={<img alt={`Card Image ${index + 1}`} src={card.image} className="card-image" />}
                style={{ marginBottom: 20, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              >
                <Title level={4}>{card.title}</Title>
                <Text>{card.description}</Text>
              </Card>
            </Col>
          ))}
          <Col xs={24} md={24}>
            <Title level={2} style={{ color: '#000000', fontSize: '24px' }}>
              Contact
            </Title>
            <hr />
            <div style={{ color: '#000000', marginTop: '10px', fontSize: '18px' }}>
              <h1>Your feedback helps us to improve!</h1>
              <p>
                What bioinformatics tools do you need in your research?<br />
                What features/tools/data would you like to see integrated in VirJenDB?<br />
                Would you like to contribute to metadata curation or virus analysis workflows? Get in touch!
              </p>
              <p>
                We welcome your constructive feedback and feature wishes: <a href="mailto:virjendb@uni-jena.de">virjendb@uni-jena.de</a>
              </p>
            </div>
            <br />
            <br />
            <Title level={2} style={{ color: '#000000', fontSize: '24px' }}>
              Events
            </Title>
            <div style={{ color: '#000000', fontSize: '18px' }}>
              <h1>Come talk to us at upcoming virus and bioinformatics conferences:</h1>
              <ul>
                <li><CalendarOutlined /> <a href="https://evbc.uni-jena.de/events/vibiom2024/">MGCB 2024</a>{" "}in Jena, Germany</li>
                <li><CalendarOutlined /> <a href="https://virology-meeting.de/">GfV 2024</a>{" "}in Vienna, Austria</li>
                <li><CalendarOutlined /> <a href="https://evbc.uni-jena.de/events/vibiom2024/">ViBiom 2024</a>{" "}in Leuven, Belgium</li>
                <li><CalendarOutlined /> <a href="https://gcb2024.de/">GCB 2024</a>{" "}in Bielefeld, Germany</li>
              </ul>
            </div>
            <div style={{ color: '#000000', fontSize: '18px' }}>
              <h1>For related events please refer to the following:</h1>
              <ul>
                <li><LinkOutlined /> <a href="https://evbc.uni-jena.de/events/">European Virus Bioinformatics Center events calendar</a></li>
                <li><LinkOutlined /> <a href="https://nfdi4microbiota.de/latest/events.html">NFDI4Microbiota events and training calendar</a></li>
              </ul>
            </div>
            <br />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactUs;












//   return (
//     <div className="contact-container">
//       <div className="glass-pane">
//         <Row gutter={[16, 32]} justify="center">
//           {cardData.map((card, index) => (
//             <Col key={index} xs={24} md={8}>
//               <Card
//                 hoverable
//                 cover={<img alt={`Card Image ${index + 1}`} src={card.image} className="card-image" />}
//                 style={{ marginBottom: 20, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
//               >
//                 <Title level={4}>{card.title}</Title>
//                 <Text>{card.description}</Text>
//               </Card>
//             </Col>
//           ))}
//           <Col xs={24} md={24}>
//             <Title level={2} style={{ color: '#000000' }}>
//               Contact
//             </Title>
//             <hr />
//             <div style={{ color: '#000000', marginTop: '5px' }}>
//               <h1>Your feedback helps us to improve!</h1>
//               <p>
//                 What bioinformatics tools do you need in your research?<br />
//                 What features/tools/data would you like to see integrated in VirJenDB?<br />
//                 Would you like to contribute to metadata curation or virus analysis workflows? Get in touch!
//               </p>
//               <p>
//                 We welcome your constructive feedback and feature wishes: <a href="mailto:virjendb@uni-jena.de">virjendb@uni-jena.de</a>
//               </p>
//             </div>
//             <br />
//             <br />
//             <Title level={2} style={{ color: '#000000' }}>
//               Events
//             </Title>
//             <div style={{ color: '#000000' }}>
//               <h1>Come talk to us at upcoming virus and bioinformatics conferences:</h1>
//               <ul>
//                 <li><CalendarOutlined /> <a href="https://evbc.uni-jena.de/events/vibiom2024/">MGCB</a>{" "}in Jena, Germany</li>
//                 <li><CalendarOutlined /> <a href="https://virology-meeting.de/">GfV 2024</a>{" "}in Vienna, Austria</li>
//                 <li><CalendarOutlined /> <a href="https://evbc.uni-jena.de/events/vibiom2024/">ViBiom 2024</a>{" "}in Leuven, Belgium</li>
//                 <li><CalendarOutlined /> <a href="https://gcb2024.de/">GCB 2024</a>{" "}in Bielefeld, Germany</li>
//               </ul>
//             </div>
//             <div style={{ color: '#000000' }}>
//               <h1>For related events please refer to the following:</h1>
//               <ul>
//                 <li><LinkOutlined /> <a href="https://evbc.uni-jena.de/events/">European Virus Bioinformatics Center events calendar</a></li>
//                 <li><LinkOutlined /> <a href="https://nfdi4microbiota.de/latest/events.html">NFDI4Microbiota events and training calendar</a></li>
//               </ul>
//             </div>
//             <br />
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
