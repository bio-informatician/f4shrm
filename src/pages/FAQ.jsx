// import React, { useState, useRef, useEffect } from 'react';
// import { Collapse, Input,Card } from 'antd';
// import faqs from './faq/faqData';
// import faqAnswers from './faq/faqAnswers';

// const { Panel } = Collapse;
// const { Search } = Input;

// const FAQ = () => {
//     const [searchValue, setSearchValue] = useState('');
  
//     const panelStyle = {
//       background: '#f7f7f7',
//       borderRadius: '8px',
//       marginBottom: '16px',
//       border: '1px solid #ddd',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     };
  
//     const headerStyle = {
//       fontSize: '18px',
//       fontWeight: 'bold',
//       color: '#1890ff',
//     };
  
//     const contentStyle = {
//       fontSize: '16px',
//       lineHeight: '1.6',
//       padding: '16px',
//     };
  
//     const handleSearch = (e) => {
//       setSearchValue(e.target.value.toLowerCase());
//     };
  
//     const highlightSearchValue = (text) => {
//       if (!searchValue.trim()) return text;
//       const regex = new RegExp(searchValue, 'gi');
//       return text.replace(regex, (match) => `<span style="background-color: yellow">${match}</span>`);
//     };
  
//     const filteredFaqs = faqs.filter(
//       (faq) =>
//         faq.question.toLowerCase().includes(searchValue) ||
//         faqAnswers[faq.id].toLowerCase().includes(searchValue)
//     );
  
//     // Ref to Collapse component to scroll to the selected question
//     const collapseRef = useRef();
  
//     useEffect(() => {
//         if (collapseRef.current) {
//           const faqSection = collapseRef.current.querySelector('.ant-collapse-item'); // updated selector
//           if (faqSection) {
//             faqSection.scrollIntoView({ behavior: 'smooth' });
//           }
//         }
//     }, [filteredFaqs]); // added dependency array
    
//     const faqGroups = filteredFaqs.reduce((groups, faq) => {
//       const group = faq.group;
//       if (!groups[group]) {
//         groups[group] = [];
//       }
//       groups[group].push(faq);
//       return groups;
//     }, {});
  
//     return (
//         <div className='w-full flex flex-col'>
//           <div className='w-full flex justify-center items-center'>
//             <h2 style={{ marginBottom: '16px' }}>Frequently Asked Questions</h2>
//           </div>
//           <div className='w-full flex justify-center items-center'>
//             <Search
//               placeholder='Search for a question...'
//               style={{ width: '100%', maxWidth: '800px', marginBottom: '16px' }}
//               onChange={handleSearch}
//               value={searchValue}
//             />
//           </div>
//           <div className='w-full flex justify-center items-center'>
//             {Object.entries(faqGroups).map(([group, faqs]) => (
//               <Card key={group} style={{ width: '100%', maxWidth: '800px', marginBottom: '16px', background: '#f0f0f0' }}> {/* Wrapped in Card with grey background */}
//                 <h3>{group}</h3>
//                 <Collapse
//                   accordion
//                   bordered={false}
//                   expandIconPosition='right'
//                   ref={collapseRef}
//                 >
//                   {faqs.map((faq) => (
//                     <Panel
//                       key={faq.id}
//                       header={<span style={headerStyle} dangerouslySetInnerHTML={{ __html: highlightSearchValue(faq.question) }} />}
//                       style={panelStyle}
//                     >
//                       <p style={contentStyle} dangerouslySetInnerHTML={{ __html: highlightSearchValue(faqAnswers[faq.id]) }} />
//                     </Panel>
//                   ))}
//                 </Collapse>
//               </Card>
//             ))}
//           </div>
//         </div>
//       );
//     };
    
//     export default FAQ;



import React, { useState, useRef, useEffect } from 'react';
import { Collapse, Input, Card, Spin } from 'antd'; // Imported Card and Spin
import faqs from './faq/faqData';
import faqAnswers from './faq/faqAnswers';

const { Panel } = Collapse;
const { Search } = Input;

const FAQ = () => {
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false); // State for loading
  
    const panelStyle = {
      background: '#f7f7f7',
      borderRadius: '8px',
      marginBottom: '16px',
      border: '1px solid #ddd',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };
  
    const headerStyle = {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#1890ff',
    };
  
    const contentStyle = {
      fontSize: '16px',
      lineHeight: '1.6',
      padding: '16px',
    };
  
    const handleSearch = (e) => {
      setSearchValue(e.target.value.toLowerCase());
    };
  
    const highlightSearchValue = (text) => {
      if (!searchValue.trim()) return text;
      const regex = new RegExp(searchValue, 'gi');
      return text.replace(regex, (match) => `<span style="background-color: yellow">${match}</span>`);
    };
  
    const filteredFaqs = faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchValue) ||
        faqAnswers[faq.id].toLowerCase().includes(searchValue)
    );
  
    // Ref to Collapse component to scroll to the selected question
    const collapseRef = useRef();
  
    useEffect(() => {
        if (collapseRef.current) {
          const faqSection = collapseRef.current.querySelector('.ant-collapse-item'); // updated selector
          if (faqSection) {
            faqSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
    }, [filteredFaqs]); // added dependency array
    
    const faqGroups = filteredFaqs.reduce((groups, faq) => {
      const group = faq.group;
      if (!groups[group]) {
        groups[group] = [];
      }
      groups[group].push(faq);
      return groups;
    }, {});
    useEffect(() => {
        setLoading(true); // Set loading to true when fetching data
        // If fetching data asynchronously, update loading state accordingly
        setLoading(false); // Set loading to false after fetching data
      }, []); // Empty dependency array if data is fetched once at the beginning
    
  // Ref for the top container of the component
  const topContainerRef = useRef();

  useEffect(() => {
    // Scroll to the top of the component when filteredFaqs change
    topContainerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [filteredFaqs]);
      return (
        <div className='w-full flex flex-col' ref={topContainerRef}>
        <div className='w-full flex justify-center items-center'>
            <h2 style={{ marginBottom: '16px', paddingTop:'20px',fontWeight:'bold',fontSize:'20px' }}>Frequently Asked Questions</h2>
          </div>
          <div className='w-full flex justify-center items-center'>
    <Search
        placeholder='Search for a question...'
        style={{ width: '100%', maxWidth: '800px', marginBottom: '16px' }}
        onChange={handleSearch}
        value={searchValue}
    />
</div>

          <div className='w-full'>
            {loading ? (
              <Spin tip="Loading..." />
            ) : (
              Object.entries(faqGroups).map(([group, faqs]) => (
                <div className='w-full flex justify-center'>
  <Card key={group} style={{ width: '100%', maxWidth: '800px', marginBottom: '16px', background: '#f0f0f0', padding: '16px' }}>
  <h1 class="block mt-1 text-lg leading-tight font-medium text-blue-700" style={{ fontSize: '24px' }}> {group} </h1>
  <Collapse
    accordion
    bordered={false}
    expandIconPosition='right'
    ref={collapseRef}
  >
    {faqs.map((faq) => (
      <Panel
        key={faq.id}
        header={<span style={headerStyle} dangerouslySetInnerHTML={{ __html: highlightSearchValue(faq.question) }} />}
        style={panelStyle}
      >
        <p style={contentStyle} dangerouslySetInnerHTML={{ __html: highlightSearchValue(faqAnswers[faq.id]) }} />
      </Panel>
    ))}
  </Collapse>
</Card>

                </div>
              ))
            )}
          </div>
        </div>
      );
    };
    
    export default FAQ;