import React from 'react';
import Navbar from './../../components/Hamedcomponents/Navbar';
import Footer from './../../components/Hamedcomponents/Footer';

const ExamplePage = () => {
  return (
    <div>
      <Navbar />
      
      {/* Page content goes here */}
      <div className="container mx-auto py-8">
        <h1>Welcome to Example Page</h1>
        <p>This is the content of the page.</p>
      </div>
      
      <Footer />
    </div>
  );
};

export default ExamplePage;
