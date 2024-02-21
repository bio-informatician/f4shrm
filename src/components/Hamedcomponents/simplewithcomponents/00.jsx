// SimplePageSearch.jsx
import React from 'react';
import SearchBar from '../Hamedcomponents/SearchBar';
import SuggestedSearches from '../Hamedcomponents/SuggestedSearches';
import Divider from 'antd/lib/divider';
import ChartsHomePage from '../Hamedcomponents/ChartsHomePage';
// ... other imports

const SimplePageSearch = () => {
  // ... all your useEffects and state logic

  return (
    <div className="flex justify w-full simpleSearchBackGround items-center flex-col min-h-screen">
      <div className="sm:w-1/2 flex w-full flex-col gap-y-8 px-4 custom-button py-20 pb-5 ">
        <SearchBar onSearch={onSearch} />
        <SuggestedSearches goToResults={goToResults} mostRecomendSearched={mostRecomendSearched} />
      </div>
      <Divider style={{ backgroundColor: '#2CD3E1' }} dashed={true} />
      <Charts chartData={chartData} /*...other chart data props */ />
      {/* ... other components */}
      <SearchBar/>
      <SuggestedSearches/>
      <ChartsHomePage/>
      
    </div>
  );
};

export default SimplePageSearch;
